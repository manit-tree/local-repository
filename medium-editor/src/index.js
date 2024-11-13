import './style.css';

export class MediumEditor {
    constructor(el, action_bar) {
        this.rootElement = el;
        this.rootElement.classList.add('medium-editor');
        this.action_bar = action_bar;

        this.rootElement.addEventListener('mouseup', evt => {
            if (this.rootElement.getAttribute('contenteditable') == 'true') {
                let sel = document.getSelection();

                if (sel.type === 'Range') {
                    if (sel.rangeCount > 0) {
                        this.action_bar.rootElement.classList.add('active');

                        setTimeout(() => {
                            this.action_bar.getBoundingRect();

                            let range = sel.getRangeAt(0);
                            let bounding_rect = range.getBoundingClientRect();
                            let left = ((bounding_rect.x + (bounding_rect.width - this.action_bar.width) / 2));
                            let top = bounding_rect.y - this.action_bar.height - this.action_bar.gap + window.scrollY;

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
}