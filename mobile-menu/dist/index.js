(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("[data-role=backdrop]{opacity:0;background-color:#000000d9;width:100%;height:100%;transition:opacity .3s ease-in-out;display:none;position:fixed;top:0;bottom:0;left:0;right:0}[data-role=mobile-menu]{height:100%;width:var(--mobile-menu-width);background-color:var(--bg-color);transform:translate(calc(0px - var(--mobile-menu-width)));transition:transform .3s;display:none;position:fixed;top:0;left:0;box-shadow:0 0 3px #00000080}#app{transition:transform .3s}.mobile-menu-before-show [data-role=backdrop],.mobile-menu-before-show [data-role=mobile-menu]{display:block}.show-mobile-menu [data-role=backdrop]{opacity:1;display:block}.show-mobile-menu [data-role=mobile-menu]{display:block;transform:translate(0)}.show-mobile-menu #app{transform:translate(var(--mobile-menu-width));z-index:-1}.show-mobile-menu body{overflow-y:hidden}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
class s {
  constructor(e = {}) {
    const t = {
      width: "420"
    };
    this.options = Object.assign(t, e), this.rootElement = document.createElement("div"), this.rootElement.setAttribute("data-role", "mobile-menu"), document.body.style.setProperty("--mobile-menu-width", this.options.width + "px"), document.body.prepend(this.rootElement), this.backdrop = document.createElement("div"), this.backdrop.setAttribute("data-role", "backdrop"), document.body.prepend(this.backdrop);
  }
  show() {
    document.documentElement.classList.add("mobile-menu-before-show"), setTimeout(() => {
      document.documentElement.classList.add("show-mobile-menu");
    }, 0);
  }
  hide() {
    document.documentElement.classList.remove("show-mobile-menu"), document.documentElement.classList.remove("mobile-menu-before-show");
  }
  toggle() {
    document.documentElement.classList.contains("show-mobile-menu") ? this.hide() : this.show();
  }
}
export {
  s as MobileMenu
};
//# sourceMappingURL=index.js.map
