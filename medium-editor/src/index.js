import './style.css';

let timer = null;

export class MediumEditor {
    constructor(options) {
        let default_options = {
            gap: 8,
            timeout: 5000,
            commands: [
                {
                    "cmd":"bold",
                    "icon":""
                },
                {
                    "cmd":"italic",
                    "icon":""
                },
                {
                    "cmd":"|"
                },
                {
                    "cmd":"remove-style",
                    "icon":""
                },
                {
                    "cmd":"link",
                    "icon":""
                },
                {
                    "cmd":"unlink",
                    "icon":""
                }
            ]            
        }

        let _options = Object.assign(default_options, options);
        
        this.gap = _options.gap;
        this.timeout = _options.timeout;
        this.commands = _options.commands;
        this.rootElement = document.createElement('div');
        this.rootElement.setAttribute('data-role', 'medium-editor');

        let sb = new Array();

        _options.commands.forEach(item => {
            if (item.cmd == '|') {
                sb.push('<span class="seperator"></span>');
            } else {
                sb.push('<span data-cmd="' + item.cmd + '" style="' + (item.scale?('--scale:' + item.scale + ';'):'') + (item.top?('--top:' + item.top + ';'):'') + '">' + item.icon +'</span>');
            }
        })

        this.rootElement.innerHTML = sb.join('');
        this.getBoundingRect();

        this.rootElement.addEventListener('mouseenter', () => {
            clearTimeout(timer);
        })

        this.rootElement.addEventListener('mouseleave', () => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                this.hide();
            }, this.timeout)
        })

        this.rootElement.addEventListener('click', evt => {
            clearTimeout(timer);
            let target = evt.target;

            if (target.matches('span[data-cmd]')) {
                let cmd = target.getAttribute('data-cmd');

                let filtered_commands = this.commands.filter(item => {
                    return item.cmd == cmd;
                })

                if (filtered_commands.length > 0) {
                    cmd = filtered_commands[0];

                    if (typeof cmd.action == 'function') {
                        cmd.action();
                    }
                }

                this.hide();
            }
        })

        document.body.append(this.rootElement);
    }

    getBoundingRect() {
        let bounding_rect = this.rootElement.getBoundingClientRect();
    
        this.width = bounding_rect.width;
        this.height = bounding_rect.height;
    }

    mount = (el, commands = null) => {
        el.classList.add('medium-editor');
                
        el.addEventListener('mouseup', evt => {
            if (el.getAttribute('contenteditable') == 'true') {
                let sel = document.getSelection();

                if (sel.type === 'Range') {
                    if (sel.rangeCount > 0) {
                        this.rootElement.classList.add('active');

                        setTimeout(() => {
                            this.getBoundingRect();

                            let range = sel.getRangeAt(0);
                            let bounding_rect = range.getBoundingClientRect();
                            let left = ((bounding_rect.x + (bounding_rect.width - this.width) / 2));
                            let top = bounding_rect.y - this.height - this.gap;

                            if (left < this.gap) {left = this.gap};
                            if ((left + this.width) > window.innerWidth) {left = window.innerWidth - this.width - this.gap};
                            if (top < this.gap) {top = this.gap};
                            if (top > window.innerHeight - this.gap) {top = window.innerHeight - this.height - this.gap};

                            this.rootElement.querySelectorAll('span[data-cmd]').removeClass('hidden');

                            if (commands && Array.isArray(commands)) {
                                this.rootElement.querySelectorAll('span[data-cmd]').forEach(span => {
                                    let cmd = span.getAttribute('data-cmd');

                                    if (!commands.includes(cmd)) {
                                        span.classList.add('hidden');
                                    }
                                })
                            }

                            this.show(this.rootElement, left, top);
                        }, 10)
                    } else {
                        this.hide();
                    }
                } else {
                    this.hide();
                }
            }
        })

        el.addEventListener('blur', (evt) => {
            let target = evt.explicitOriginalTarget;
            let is_medium_editor = false;

            if (target && target instanceof HTMLElement) {
                if (target.closest('[data-role="medium-editor"]')) {
                    is_medium_editor = true;
                }
            }

            if (!is_medium_editor) {
                if (this.editor === el) {
                    this.hide();
                }
            }
        })
    }

    show(el, x, y) {
        clearTimeout(timer);
        this.editor = el;
        this.rootElement.setAttribute('class', '');
        this.rootElement.style.left = x + 'px';
        this.rootElement.style.top = y + 'px';
        this.rootElement.classList.add('active');
        this.rootElement.classList.add('fade-in');

        timer = setTimeout(() => {
            clearTimeout(timer);
            this.hide();    
        }, this.timeout)
    }

    hide() {
        clearTimeout(timer);
        this.rootElement.classList.remove('active');
    }
}
