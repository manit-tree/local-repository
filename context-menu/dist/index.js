(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".context-menu{left:var(--left,0);top:var(--top,0);opacity:0;background-color:#0000;border:0;border-radius:6px;font-size:14px;display:none;position:fixed}.context-menu.ux-show{animation-name:context-menu-fade-in;animation-duration:.3s;animation-fill-mode:both;display:block!important}.context-menu.ux-show[open]{opacity:1}.context-menu.popup-left ul li ul{display:none;position:absolute;top:0;left:auto;right:calc(100% - 3px)}.context-menu ul{background-color:var(--bg-color);outline:1px solid var(--outline-color);border-radius:8px;padding:0;list-style:none}.context-menu ul li{width:-moz-fit-content;width:fit-content;min-width:var(--menu-width);align-items:center;font-size:12px;display:flex;position:relative}.context-menu ul li[data-role=seperator]{border-bottom:1px solid var(--divider-color);height:1px;margin:.25em 0}.context-menu ul li[data-role=seperator]:first-child{display:none}.context-menu ul li[data-role=seperator]:last-child{display:none}.context-menu ul li.disabled{opacity:.35}.context-menu ul li.hidden{display:none}.context-menu ul li span{transform-origin:50%;flex-basis:32px;place-content:center;display:grid}.context-menu ul li span svg{width:16px;color:var(--text-color);transform:scaleX(var(--scale))}.context-menu ul li a{color:var(--text-color);flex:1;padding:0 1.65em 0 0;line-height:28px;text-decoration:none;position:relative}.context-menu ul li a:hover{color:var(--text-color)}.context-menu ul li a:focus-visible{outline:0}@keyframes context-menu-fade-in{0%{opacity:0}to{opacity:1}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
let p = "1.1", o = null;
function c(u, e) {
  return u == null || u === 0 ? e : u;
}
function _(u) {
  return new Promise((e, n) => {
    fetch(u).then((s) => s.json()).then((s) => e(s)).catch((s) => n(s));
  });
}
document.addEventListener("keydown", (u) => {
  u.key == "Escape" && o && o.hide();
});
class w {
  constructor(e) {
    this.version = p, this.handlers = /* @__PURE__ */ new Map(), this.menu = document.createElement("dialog"), this.menu.classList.add("context-menu"), this.menu.innerHTML = "<ul></li>", this.menu_created = !1, this.menu.width = 0, this.menu.height = 0, this.gap = 10, ((s) => {
      function l(i) {
        let t = document.createElement("li"), d = document.createElement("span"), a = document.createElement("a"), r = c(i.icon, ""), h = c(i.text, "");
        return i.id && t.setAttribute("data-id", i.id), i.text && t.setAttribute("data-text", i.text), i.action && t.setAttribute("data-action", i.action), i.group && t.setAttribute("data-group", i.group), i.data && t.setAttribute("data-data", i.data), i.scale && t.style.setProperty("--scale", i.scale), a.setAttribute("href", "#"), h !== "" && (h == "-" ? t.setAttribute("data-role", "seperator") : (a.innerText = h, t.append(a), r !== "" && (d.innerHTML = r), t.prepend(d))), t;
      }
      return new Promise((i, t) => {
        if (this.menu_created)
          i(!0);
        else {
          this.menu_created = !0;
          let d = this.menu.querySelector("ul");
          try {
            let a = s, r = (/* @__PURE__ */ new Date()).getTime();
            a.includes("?") ? a = a + "&ts=" + r : a = a + "?ts=" + r, _(a).then((h) => {
              let m = c(h.width, "180");
              d.style.setProperty("--menu-width", m + "px"), h.items.forEach((f) => {
                d.append(l(f));
              }), document.body.append(this.menu), i(!0);
            });
          } catch (a) {
            t(a);
          }
        }
      });
    })(e), this.menu.addEventListener("contextmenu", (s) => {
      s.preventDefault(), s.stopPropagation();
    }), this.menu.addEventListener("click", (s) => {
      let l = !0, i = s.target.closest("li");
      if (!i) return;
      let t = c(i.dataset.action, "");
      if (t !== "" && i.matches(":not(.disabled)")) {
        let d = this.handlers.get(t);
        if (typeof d == "function") {
          let a = {
            action: t,
            data: JSON.parse(c(i.dataset.data, "{}")),
            el: i,
            context_menu: this
          };
          d.bind(this.context)(a) === !1 && (l = !1);
        }
      }
      l && (this.hide(), s.preventDefault());
    }), document.addEventListener("mousedown", (s) => {
      s.target.closest(".context-menu") || this.hide();
    });
  }
  mount(e) {
    e.addEventListener("contextmenu", (n) => {
      let s = this.handlers.get("before-show"), l = !0;
      if (s && (l = s.bind(e)()), n.preventDefault(), l) {
        this.update();
        let { x: i, y: t } = n;
        i < this.gap && (i = gap), i + this.menu.width + this.gap > window.innerWidth && (i = window.innerWidth - this.menu.width - this.gap), t < this.gap && (t = gap), t + this.menu.height + this.gap > window.innerHeight && (t = window.innerHeight - this.menu.height - this.gap), this.show(i, t, e);
      }
    });
  }
  show(e, n, s) {
    let l = !0;
    o && o.hide(), this.reset_all_menu_items(), this.context = s;
    let i = this.handlers["before-show"];
    if (typeof i == "function") {
      let t = {
        context_menu: this
      };
      i.bind(this.context)(t) === !1 && (l = !1);
    }
    if (l) {
      let t = 14, d, a, r;
      this.menu.classList.add("ux-show"), this.menu.classList.remove("popup-left"), r = this.menu.querySelector("& > ul"), d = parseInt(r.dataset.width), a = parseInt(r.dataset.height), e + d > window.innerWidth - t ? e = window.innerWidth - t - d : e < t && (e = t), n + a > document.documentElement.scrollTop + window.innerHeight - t ? n = document.documentElement.scrollTop + window.innerHeight - t - a : n < t && (n = t), e + d * 2 > window.innerWidth && this.menu.classList.add("popup-left"), this.menu.style.setProperty("left", e + "px"), this.menu.style.setProperty("top", n + "px"), this.menu.show(), o = this;
    }
  }
  hide() {
    this.menu.classList.remove("ux-show"), this.menu.close(), o = null;
  }
  reset_all_menu_items() {
    this.menu.querySelectorAll(".hidden").forEach((e) => {
      e.classList.remove("ux-hidden");
    }), this.menu.querySelectorAll(".disabled").forEach((e) => {
      e.classList.remove("ux-disabled");
    });
  }
  show_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((n) => {
      n.classList.remove("ux-hidden");
    });
  }
  hide_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((n) => {
      n.classList.add("ux-hidden");
    });
  }
  hide_menu_item_by_cmd(e) {
    this.menu.querySelectorAll('li[data-cmd="' + e + '"]').forEach((n) => {
      n.classList.add("ux-hidden");
    });
  }
  hide_menu_item_by_group(e) {
    this.menu.querySelectorAll('li[data-group*="' + e + '"]').forEach((n) => {
      n.classList.add("ux-hidden");
    });
  }
  get_menu_item(e) {
    return this.menu.querySelector('li[data-id="' + e + '"]');
  }
  disable_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((n) => {
      n.classList.add("ux-disabled");
    });
  }
  enable_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((n) => {
      n.classList.remove("ux-disabled");
    });
  }
  set_icon(e, n = "") {
    let s = this.get_menu_item(e), l = s.querySelector("span");
    n == "" ? l.innerHTML = "" : (l && l.remove(), l = document.createElement("span"), l.innerHTML = n, s.prepend(l));
  }
  update() {
    new Array();
    let e;
    this.menu.style.visibility = "hidden", this.menu.style.display = "block", e = this.menu.getBoundingClientRect(), this.menu.width = e.width, this.menu.height = e.height, this.menu.style.display = "none", this.menu.style.visibility = "visible";
  }
  on(e, n) {
    this.handlers.set(e, n);
  }
}
export {
  w as ContextMenu
};
//# sourceMappingURL=index.js.map
