import './style.css';

let timer = null;

export class ActionBar {
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
        this.rootElement.setAttribute('data-role', 'action-bar');

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
