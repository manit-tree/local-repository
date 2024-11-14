(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("body.dialog-is-open{overflow:hidden}:-webkit-any(.chrome,.edge) body.dialog-is-open{margin-left:-9px}:-moz-any(.chrome,.edge) body.dialog-is-open{margin-left:-9px}:is(.chrome,.edge) body.dialog-is-open{margin-left:-9px}dialog[role=modal]{opacity:0;background:#000000d9;border:0;justify-content:center;align-items:flex-start;width:100%;height:100%;display:none;position:fixed;top:0;bottom:0;left:0;right:0;overflow:auto}dialog[role=modal].align-items-center{align-items:center}dialog[role=modal][open]{opacity:1;display:flex}dialog[role=modal] .popup{padding:var(--padding);box-sizing:border-box;color:var(--text-color);background-color:var(--bg-color);border-radius:var(--border-radius,10px);width:min(var(--width),90vw);opacity:0;margin:2em 0;font-size:max(14px,min(2cqw,16px));position:relative;box-shadow:10px 10px 26px -12px #000000bf}dialog[role=modal] .popup main .dialog>*{margin-top:1.75em}dialog[role=modal] .popup main .dialog>:first-child{margin-top:0}dialog[role=modal] .popup footer{font-size:14px}dialog[role=modal] .popup .ux-icon-close svg{aspect-ratio:1;pointer-events:none;width:16px;fill:var(--icon-color);transition:all .3s}dialog[role=modal] .popup .ux-icon-close:hover svg{transform:rotate(90deg)}dialog[role=modal] .ux-icon-close{aspect-ratio:1;width:18px;position:absolute;top:12px;right:10px}@keyframes dialog_fade_in{0%{opacity:0}to{opacity:1}}@keyframes dialog_fade_out{0%{opacity:1}to{opacity:0}}@media screen and (max-width:720px){:scope.align-items-center{align-items:flex-start}dialog[role=modal] .popup{width:min(var(--width),94%);margin:1em 0}dialog[role=modal] .popup.small{width:min(var(--width),94%)}}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var c = Object.defineProperty;
var u = (i, t, e) => t in i ? c(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => u(i, typeof t != "symbol" ? t + "" : t, e);
const m = {
  close: '<a draggable="false" href="#" class="ux-icon-close" data-cmd="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></a>'
}, a = {
  el: (i) => {
    let t = document.createElement("div");
    return t.innerHTML = i.trim(), t.firstChild;
  },
  pushState: (i = null, t) => {
    history.replaceState(i, null, ""), history.pushState(null, null, t);
  },
  run_script: (i) => {
    Array.from(i.querySelectorAll("script")).forEach((t) => {
      const e = document.createElement("script");
      Array.from(t.attributes).forEach((n) => {
        e.setAttribute(n.name, n.value);
      });
      const s = document.createTextNode(t.innerHTML);
      e.appendChild(s), t.parentNode.replaceChild(e, t);
    });
  },
  get_html: (i) => new Promise((t, e) => {
    fetch(i).then((s) => s.text()).then((s) => t(s)).catch((s) => e(s));
  }),
  default: (i, t) => i == null || i === "" ? t : i
}, l = [];
let d = 0, f = (i) => {
  if (i.state && i.state.type === "modal") {
    i.preventDefault(), i.stopImmediatePropagation();
    let t = l.pop();
    t && (t.options.always_on_top && (d = d - 1, d == 0 && document.body.classList.remove("hide-mobile-menu")), t.do_close());
  }
}, g = (i) => {
  i.key === "Escape" && l.length > 0 && (i.stopImmediatePropagation(), i.preventDefault(), history.back());
};
document.addEventListener("keydown", g);
window.addEventListener("popstate", f);
class r {
  constructor(t = {}) {
    o(this, "_click_handler", (t) => {
      t.target.matches("dialog") ? this.options.close_when_click_outside === !0 && (t.preventDefault(), t.stopPropagation(), setTimeout(() => {
        this.set_cmd("close"), this.set_value(""), this.close();
      }, 0)) : t.target.matches("[data-cmd]") && (this.cmd = t.target.dataset.cmd, ["edit", "edit-item", "settings", "new-page", "copy-text", "remove-page", "buy-now", "inquiry", "personal-message", "inform-payment"].includes(this.cmd) || (t.preventDefault(), t.stopPropagation(), t.target.dataset.value && (this.value = t.target.dataset.value), this.close()));
    });
    o(this, "_fadeIn", (t = 600, e = null) => {
      let s = [
        { opacity: 0 },
        { opacity: 1 }
      ], n = {
        duration: t,
        iterations: 1,
        fill: "both"
      }, h = this.popups.animate(s, n);
      typeof e == "function" && h.addEventListener("finish", (p) => {
        e();
      });
    });
    o(this, "_fadeOut", (t = 600, e = null) => {
      let s = [
        { opacity: 1 },
        { opacity: 0 }
      ], n = {
        duration: t,
        iterations: 1,
        fill: "both"
      }, h = this.popup.animate(s, n);
      typeof e == "function" && h.addEventListener("finish", (p) => {
        e();
      });
    });
    o(this, "_popIn", (t = 300, e = null) => {
      let s = [
        {
          transform: "scale(0.8)",
          opacity: 0
        },
        {
          transform: "scale(1.0)",
          opacity: 1
        }
      ], n = {
        duration: t,
        iterations: 1,
        fill: "both"
      }, h = this.popup.animate(s, n);
      typeof e == "function" && h.addEventListener("finish", (p) => {
        e();
      });
    });
    o(this, "_popOut", (t = 400, e = null) => {
      let s = [
        {
          transform: "scale(1.0)",
          opacity: 1
        },
        {
          transform: "scale(0.8)",
          opacity: 0
        }
      ], n = {
        duration: t,
        iterations: 1,
        fill: "both"
      }, h = this.popup.animate(s, n);
      typeof e == "function" && h.addEventListener("finish", (p) => {
        e();
      });
    });
    o(this, "html", (t) => {
      let e = this.popup.querySelector("main");
      e.innerHTML = t, a.run_script(e);
    });
    o(this, "append", (t) => {
      let e = this.popup.querySelector("main");
      e.innerHTML = e.innerHTML + t, a.run_script(e);
    });
    o(this, "load", (t) => {
      a.get_html(t).then((e) => {
        this.html(e);
      });
    });
    o(this, "set_cmd", (t) => {
      this.cmd = t;
    });
    o(this, "set_value", (t) => {
      this.value = t;
    });
    o(this, "resize", () => {
      this.popup.getBoundingClientRect().height <= window.innerHeight * 0.9 ? this.dialog.classList.add("align-items-center") : this.dialog.classList.remove("align-items-center");
    });
    o(this, "open", () => new Promise((t, e) => {
      this.dialog.setAttribute("open", "true"), this.on("close", (s, n) => {
        t({
          cmd: s,
          value: n
        });
      }), setTimeout(() => {
        this.resize(), this["_" + this.options.animation + "In"](this.options.transition_duration, () => {
          if (this.options.id === "page-dialog") {
            if (this.options.slug != "")
              a.pushState({ type: "modal", id: this.options.id }, this.options.slug + (this.options.hash ? "#" + this.options.hash : ""));
            else {
              let s = a.default(this.popup.querySelector(".wx-page").getAttribute("data-content-type"), "page");
              a.pushState({ type: "modal", id: this.options.id }, s + "/" + this.options.page_id + (this.options.hash ? "#" + this.options.hash : ""));
            }
            if (l.push(this), this.options.hash) {
              let s = this.popup.querySelector('a[name="' + this.options.hash + '"]');
              s && s.scrollIntoView();
            }
            this.handlers.open && this.handlers.open();
          } else
            a.pushState({ type: "modal", id: this.options.id }, "#" + this.options.id), l.push(this), this.handlers.open && this.handlers.open();
        }), this.options.always_on_top && (d = d + 1, document.body.classList.add("hide-mobile-menu")), document.body.classList.add("dialog-is-open");
      }, this.options.delay_before_show);
    }));
    o(this, "close", () => {
      setTimeout(() => {
        history.back();
      }, 0);
    });
    o(this, "do_close", () => {
      this["_" + this.options.animation + "Out"](this.options.transition_duration, () => {
        this.dialog.close(), this.destroy(), l.length === 0 && document.body.classList.remove("dialog-is-open"), this.handlers.close && this.handlers.close(a.default(this.cmd, "close"), a.default(this.value, ""));
      });
    });
    o(this, "on", (t, e) => {
      this.handlers[t] = e;
    });
    o(this, "destroy", () => {
      this.dialog.removeEventListener("click", this._click_handler), this.dialog.remove();
    });
    const e = {
      width: 720,
      close_when_click_outside: !0,
      id: "dialog",
      padding: "3em",
      transition_duration: 300,
      delay_before_show: 0,
      always_on_top: !1,
      animation: "pop"
      // fade, pop
    };
    this.handlers = {}, this.cmd = "", this.value = "", this.options = Object.assign(e, t), this.dialog = document.createElement("dialog"), this.dialog.setAttribute("role", "modal"), this.dialog.setAttribute("data-id", this.options.id), this.popup = a.el('<div class="popup" style="--width:' + this.options.width + "px;--padding:" + this.options.padding + '"><main></main>' + m.close + "</div>"), this.options.width < 640 && this.popup.classList.add("small"), this.dialog.appendChild(this.popup), this.dialog.get_instance = () => this, document.body.appendChild(this.dialog), this.dialog.addEventListener("click", this._click_handler);
  }
}
o(r, "get_modals", () => l), o(r, "get_active_dialog", () => l.length > 0 ? l[l.length - 1] : null), o(r, "get_json", (t) => new Promise((e, s) => {
  fetch(t).then((n) => n.json()).then((n) => e(n)).catch((n) => s(n));
}));
export {
  r as ModalDialog
};
//# sourceMappingURL=index.js.map
