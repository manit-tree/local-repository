(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".medium-editor{position:relative}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
class c {
  constructor(r, s) {
    this.rootElement = r, this.rootElement.classList.add("medium-editor"), this.action_bar = s, this.rootElement.addEventListener("mouseup", (o) => {
      if (this.rootElement.getAttribute("contenteditable") == "true") {
        let t = document.getSelection();
        t.type === "Range" ? t.rangeCount > 0 ? (this.action_bar.rootElement.classList.add("active"), setTimeout(() => {
          this.action_bar.getBoundingRect();
          let n = t.getRangeAt(0).getBoundingClientRect(), i = n.x + (n.width - this.action_bar.width) / 2, e = n.y - this.action_bar.height - this.action_bar.gap + window.scrollY;
          i < this.action_bar.gap && (i = this.action_bar.gap), i + this.action_bar.width > window.innerWidth && (i = window.innerWidth - this.action_bar.width - this.action_bar.gap), e < this.action_bar.gap && (e = this.action_bar.gap), e > window.innerHeight - this.action_bar.gap && (e = window.innerHeight - this.action_bar.height - this.action_bar.gap), this.action_bar.show(this.rootElement, i, e);
        }, 10)) : this.action_bar.hide() : this.action_bar.hide();
      }
    }), this.rootElement.addEventListener("blur", (o) => {
      let t = o.explicitOriginalTarget, a = !1;
      t && t instanceof HTMLElement && t.closest('[data-role="action-bar"]') && (a = !0), a || this.action_bar.editor === this.rootElement && this.action_bar.hide();
    });
  }
}
export {
  c as MediumEditor
};
//# sourceMappingURL=index.js.map
