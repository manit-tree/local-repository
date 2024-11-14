import './style.css';

export class MobileMenu {
    constructor(options = {}) {
        const default_options = {
            width: '420'
        }   

        this.options = Object.assign(default_options, options);
        this.rootElement = document.createElement('div');
        this.rootElement.setAttribute('data-role', 'mobile-menu');
        document.body.style.setProperty('--mobile-menu-width', this.options.width + 'px');
        document.body.prepend(this.rootElement);

        this.backdrop = document.createElement('div');
        this.backdrop.setAttribute('data-role', 'backdrop');
        document.body.prepend(this.backdrop);
    }

    show() {
        document.documentElement.classList.add('mobile-menu-before-show');
        
        setTimeout(() => {
            document.documentElement.classList.add('show-mobile-menu');
        }, 0)
    }

    hide() {
        document.documentElement.classList.remove('show-mobile-menu');        
        document.documentElement.classList.remove('mobile-menu-before-show');
    }

    toggle() {
        if (document.documentElement.classList.contains('show-mobile-menu')) {
            this.hide();
        } else {
            this.show();
        }
    }
}