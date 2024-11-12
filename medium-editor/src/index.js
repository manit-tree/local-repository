import './style.css';

let timer = null;

class ActionBar {
    constructor(options) {
        let default_options = {
            gap: 8,
            timeout: 5000,
            commands: ['bold','italic','|','link','remove-style']            
        }

        let _options = Object.assign(default_options, options);
        
        this.onClick = null;
        this.gap = _options.gap;
        this.timeout = _options.timeout;
        this.rootElement = document.createElement('div');
        this.rootElement.setAttribute('data-role', 'action-bar');

        let sb = new Array();

        _options.commands.forEach(cmd => {
            if (cmd == '|') {
                sb.push('<span class="seperator"></span>');
            } else {
                sb.push('<span data-cmd="' + cmd + '"></span>');
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
                let cb = this.onClick;

                if (cb) {
                    cb(cmd);
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

    set_commands(cmds) {
        cmds.forEach(cmd => {
            if (cmd == '|') {
                sb.push('<span class="seperator"></span>');
            } else {
                sb.push('<span data-cmd="' + cmd + '"></span>');
            }
        })

        this.rootElement.innerHTML = sb.join('');        
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


let action_bar_intance = null;

export function get_action_bar() {
    if (!action_bar_intance) {
        action_bar_intance = new ActionBar();
    }

    return action_bar_intance;
}

export class MediumEditor {
    constructor(el, action_bar) {
        this.rootElement = el;
        this.rootElement.classList.add('medium-editor');
        this.action_bar = action_bar;
        this.editable = false;

        this.rootElement.addEventListener('mouseup', evt => {
            if (!this.editable) return;

            let sel = document.getSelection();

            if (sel.type === 'Range') {
                if (sel.rangeCount > 0) {
                    this.action_bar.rootElement.classList.add('active');

                    setTimeout(() => {
                        this.action_bar.getBoundingRect();

                        let range = sel.getRangeAt(0);
                        let bounding_rect = range.getBoundingClientRect();
                        let left = ((bounding_rect.x + (bounding_rect.width - this.action_bar.width) / 2));
                        let top = bounding_rect.y - this.action_bar.height - this.action_bar.gap;

                        if (left < this.action_bar.gap) {left = this.action_bar.gap};
                        if ((left + this.action_bar.width) > window.innerWidth) {left = window.innerWidth - this.action_bar.width - this.action_bar.gap};
                        if (top < this.action_bar.gap) {top = this.action_bar.gap};
                        if (top > window.innerHeight - this.action_bar.gap) {top = window.innerHeight - this.action_bar.height - this.action_bar.gap};

                        this.action_bar.show(this.rootElement, left, top);
                    }, 10)
                } else {
                    this.action_bar.hide();
                }
            } else {
                this.action_bar.hide();
            }
        })

        this.rootElement.addEventListener('blur', (evt) => {
            let target = evt.explicitOriginalTarget;
            let is_action_bar = false;

            if (target && target instanceof HTMLElement) {
                if (target.closest('[data-role="action-bar"]')) {
                    is_action_bar = true;
                }
            }

            if (!is_action_bar) {
                if (this.action_bar.editor === this.rootElement) {
                    this.action_bar.hide();
                }
            }
        })
    }    

    set_editable(value) {
        this.editable = value;
        
        if (this.editable) {
            this.rootElement.setAttribute('contenteditable', 'true');
        } else {
            this.rootElement.setAttribute('contenteditable', 'false');            
        }
    }
}