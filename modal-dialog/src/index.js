import './style.css';

const icons = {
    close: '<a draggable="false" href="#" class="ux-icon-close" data-cmd="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></a>'
}

const $ = {
    el: (html) => {
        let div = document.createElement('div');        
        div.innerHTML = html.trim();
        return div.firstChild;      
    },

    pushState: (state = null, url) => {
        history.replaceState(state, null, '');
        history.pushState(null, null, url);
    },

    run_script: (el) => {
        Array.from(el.querySelectorAll("script"))
            .forEach(oldScriptEl => {
                const newScriptEl = document.createElement("script");
                Array.from(oldScriptEl.attributes).forEach( attr => {
                newScriptEl.setAttribute(attr.name, attr.value) 
            })
          
            const scriptText = document.createTextNode(oldScriptEl.innerHTML);
            newScriptEl.appendChild(scriptText);  
            oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
        })
    },

    get_html: (url) => new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.text())
            .then(html => resolve(html))
            .catch(err => reject(err));
    }),

    default: (x, y) => {
        if ((x === undefined) || (x === null) || (x === '')) {
            return y;
        }

        return x;
    }    
}

const modals = [];
let dialogs_with_always_on_top = 0;

let _popstate_handler = (evt) => {
    if (evt.state && (evt.state.type === 'modal')) {
        evt.preventDefault();
        evt.stopImmediatePropagation();

        let dlg = modals.pop();

        if (dlg) {
            if (dlg.options.always_on_top) {
                dialogs_with_always_on_top = dialogs_with_always_on_top - 1;

                if (dialogs_with_always_on_top == 0) {
                    document.body.classList.remove('hide-mobile-menu');
                }
            }

            dlg.do_close();
        }
    }
}

let _keydown_handler = (evt) => {
    if (evt.key === 'Escape') {
        if (modals.length > 0) {
            evt.stopImmediatePropagation();        
            evt.preventDefault();
            history.back(); 
        }
    }
}

document.addEventListener('keydown', _keydown_handler);   
window.addEventListener('popstate', _popstate_handler);

export class ModalDialog {
    constructor(options = {}) {
        const _default = {
            width: 720,
            close_when_click_outside: true,
            id: 'dialog',
            padding: '3em',
            transition_duration: 300,
            delay_before_show: 0,
            always_on_top: false,
            animation: 'pop' // fade, pop
        }

        this.handlers = {};
        this.cmd = '';
        this.value = '';
        this.options = Object.assign(_default, options);
        this.dialog = document.createElement('dialog');
        this.dialog.setAttribute('role', 'modal');
        this.dialog.setAttribute('data-id', this.options.id);
        this.popup = $.el('<div class="popup" style="--width:' + this.options.width + 'px;--padding:' + this.options.padding + '"><main></main>' + icons.close + '</div>');
        
        if (this.options.width < 640) {
            this.popup.classList.add('small');
        }

        this.dialog.appendChild(this.popup);
        this.dialog.get_instance = () => this;
        
        document.body.appendChild(this.dialog);
        this.dialog.addEventListener('click', this._click_handler);
    }

    static get_modals = () => {
        return modals;
    }

    static get_active_dialog = () => {
        if (modals.length > 0) {
            return modals[modals.length -1];
        }

        return null;
    }

    static get_json = (url) => new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));
    })

    _click_handler = (evt) => {
        if (evt.target.matches('dialog')) {
            if (this.options.close_when_click_outside === true) {
                evt.preventDefault();
                evt.stopPropagation();

                setTimeout(()=> {
                    this.set_cmd('close');
                    this.set_value('');
                    this.close();                    
                }, 0)
            }
        } else if (evt.target.matches('[data-cmd]')) {
            this.cmd = evt.target.dataset['cmd'];

            if (!['edit','edit-item','settings','new-page','copy-text','remove-page','buy-now','inquiry','personal-message','inform-payment'].includes(this.cmd)) {
                evt.preventDefault();
                evt.stopPropagation();

                if (evt.target.dataset['value']) {
                    this.value = evt.target.dataset['value'];
                }

                this.close();
            }
        }
    }

    _fadeIn = (duration = 600, cb = null) => {
        let keyframes = [
            {"opacity": 0},
            {"opacity": 1}
        ]

        let settings = {
            duration: duration,
            iterations: 1,
            fill: 'both'
        }

        let animation = this.popups.animate(keyframes, settings);  

        if (typeof cb === 'function') {
            animation.addEventListener('finish', evt => {
                cb();
            })
        }
    }

    _fadeOut = (duration = 600, cb = null) => {
        let keyframes = [
            {"opacity": 1},
            {"opacity": 0}
        ]

        let settings = {
            duration: duration,
            iterations: 1,
            fill: 'both'
        }

        let animation = this.popup.animate(keyframes, settings);  

        if (typeof cb === 'function') {
            animation.addEventListener('finish', evt => {
                cb();
            })
        }
    }

    _popIn = (duration = 300, cb = null) => {
        let keyframes = [
            {
                transform: "scale(0.8)",
                opacity: 0
            },
            {
                transform: "scale(1.0)",
                opacity: 1
            }
        ]

        let settings = {
            duration: duration,
            iterations: 1,
            fill: 'both'
        }

        let animation = this.popup.animate(keyframes, settings);  

        if (typeof cb === 'function') {
            animation.addEventListener('finish', evt => {
                cb();
            })
        }
    }

    _popOut = (duration = 400, cb = null) => {
        let keyframes = [
            {
                transform: "scale(1.0)",
                opacity: 1
            },

            {
                transform: "scale(0.8)",
                opacity: 0
            }
        ]

        let settings = {
            duration: duration,
            iterations: 1,
            fill: 'both'
        }

        let animation = this.popup.animate(keyframes, settings);  

        if (typeof cb === 'function') {
            animation.addEventListener('finish', evt => {
                cb();
            })
        }
    }

    html = (html) => {
        let main = this.popup.querySelector('main');

        main.innerHTML = html; 
        $.run_script(main);
    }

    append = (html) => {
        let main = this.popup.querySelector('main');

        main.innerHTML = main.innerHTML + html; 
        $.run_script(main);
    }

    load = (url) => {
        $.get_html(url).then(html => {
            this.html(html);
        })
    }

    set_cmd = cmd => {
        this.cmd = cmd;
    }

    set_value =value => {
        this.value = value;
    }

    resize = () => {
        if (this.popup.getBoundingClientRect().height <= (window.innerHeight * 0.9)) {
            this.dialog.classList.add('align-items-center');
        } else {
            this.dialog.classList.remove('align-items-center');            
        }        
    }

    open = () => new Promise((resolve, reject) => {
        this.dialog.setAttribute('open', 'true');

        this.on('close', (cmd, value) => {
            resolve({
                cmd: cmd,
                value: value
            })    
        })  

        setTimeout(() => {
            this.resize();

            this['_' + this.options.animation + 'In'](this.options.transition_duration, () => {               
                if (this.options.id === 'page-dialog') {
                    if (this.options.slug != '') {
                        $.pushState({type:'modal',id:this.options.id}, this.options.slug + (this.options.hash?('#' + this.options.hash):''));                    
                    } else {
                        let content_type = $.default(this.popup.querySelector('.wx-page').getAttribute('data-content-type'), 'page');
                        $.pushState({type:'modal',id:this.options.id}, content_type + '/' + this.options.page_id + (this.options.hash?('#' + this.options.hash):''));                    
                    }

                    modals.push(this);     

                    if (this.options.hash) {
                        let anchor = this.popup.querySelector('a[name="' + this.options.hash + '"]');

                        if (anchor) {
                            anchor.scrollIntoView();
                        }
                    }

                    if (this.handlers.open) {
                        this.handlers.open();     
                    }       
                } else {  
                    $.pushState({type:'modal',id:this.options.id}, '#' + this.options.id);

                    modals.push(this);     

                    if (this.handlers.open) {
                        this.handlers.open();     
                    }       
                }
            })

            if (this.options.always_on_top) {
                dialogs_with_always_on_top = dialogs_with_always_on_top + 1;
                document.body.classList.add('hide-mobile-menu');
            }

            document.body.classList.add('dialog-is-open');
        }, this.options.delay_before_show)
    }) 

    close = () => {
        setTimeout(() => {
            history.back();
        }, 0)
    }

    do_close = () => {
        this['_' + this.options.animation + 'Out'](this.options.transition_duration, () => {
            this.dialog.close();
            this.destroy();    
            
            if (modals.length === 0) {
                document.body.classList.remove('dialog-is-open');          
            }

            if (this.handlers.close) {
                this.handlers.close($.default(this.cmd, 'close'), $.default(this.value, ''));                
            }
        })
    }

    on = (cmd, cb) => {
        this.handlers[cmd] = cb;
    }

    destroy = () => {
        this.dialog.removeEventListener('click', this._click_handler);
        this.dialog.remove();
    }
}
