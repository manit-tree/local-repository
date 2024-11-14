(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".context-menu{left:var(--left,0);top:var(--top,0);opacity:0;background-color:#0000;border:0;border-radius:6px;font-size:14px;display:none;position:fixed}.context-menu.ux-show{animation-name:context-menu-fade-in;animation-duration:.3s;animation-fill-mode:both;display:block!important}.context-menu.ux-show[open]{opacity:1}.context-menu.popup-left ul li ul{display:none;position:absolute;top:0;left:auto;right:calc(100% - 3px)}.context-menu ul{background-color:var(--bg-color);outline:1px solid var(--outline-color);border-radius:8px;padding:0;list-style:none}.context-menu ul li{width:-moz-fit-content;width:fit-content;min-width:var(--menu-width);align-items:center;font-size:12px;display:flex;position:relative}.context-menu ul li[data-role=seperator]{border-bottom:1px solid var(--divider-color);height:1px;margin:.25em 0}.context-menu ul li[data-role=seperator]:first-child{display:none}.context-menu ul li[data-role=seperator]:last-child{display:none}.context-menu ul li.disabled{opacity:.35}.context-menu ul li.hidden{display:none}.context-menu ul li span{transform-origin:50%;flex-basis:32px;place-content:center;display:grid}.context-menu ul li span svg{width:16px;color:var(--text-color);transform:scaleX(var(--scale),1);transform:scaleY(var(--scale),1)}.context-menu ul li a{color:var(--text-color);flex:1;padding:0 1.65em 0 0;line-height:28px;text-decoration:none;position:relative}.context-menu ul li a:hover{color:var(--text-color)}.context-menu ul li a:focus-visible{outline:0}@keyframes context-menu-fade-in{0%{opacity:0}to{opacity:1}}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
let p = "1.1", o = null;
function c(h, e) {
  return h == null || h === 0 ? e : h;
}
function _(h) {
  return new Promise((e, l) => {
    fetch(h).then((t) => t.json()).then((t) => e(t)).catch((t) => l(t));
  });
}
document.addEventListener("keydown", (h) => {
  h.key == "Escape" && o && o.hide();
});
class w {
  constructor(e) {
    this.version = p, this.handlers = /* @__PURE__ */ new Map(), this.menu = document.createElement("dialog"), this.menu.classList.add("context-menu"), this.menu.innerHTML = "<ul></li>", this.menu_created = !1, this.menu.width = 0, this.menu.height = 0, this.gap = 10, ((t) => {
      function s(i) {
        let n = document.createElement("li"), a = document.createElement("span"), d = document.createElement("a"), r = c(i.icon, ""), u = c(i.text, "");
        return i.id && n.setAttribute("data-id", i.id), i.text && n.setAttribute("data-text", i.text), i.action && n.setAttribute("data-action", i.action), i.group && n.setAttribute("data-group", i.group), i.data && n.setAttribute("data-data", i.data), i.scale && n.style.setProperty("--scale", i.scale), d.setAttribute("href", "#"), u !== "" && (u == "-" ? n.setAttribute("data-role", "seperator") : (d.innerText = u, n.append(d), r !== "" && (a.innerHTML = r), n.prepend(a))), n;
      }
      return new Promise((i, n) => {
        if (this.menu_created)
          i(!0);
        else {
          this.menu_created = !0;
          let a = this.menu.querySelector("ul");
          try {
            let d = t, r = (/* @__PURE__ */ new Date()).getTime();
            d.includes("?") ? d = d + "&ts=" + r : d = d + "?ts=" + r, _(d).then((u) => {
              let m = c(u.width, "180");
              a.style.setProperty("--menu-width", m + "px"), u.items.forEach((f) => {
                a.append(s(f));
              }), document.body.append(this.menu), i(!0);
            });
          } catch (d) {
            n(d);
          }
        }
      });
    })(e), this.menu.addEventListener("contextmenu", (t) => {
      t.preventDefault(), t.stopPropagation();
    }), this.menu.addEventListener("click", (t) => {
      let s = !0, i = t.target.closest("li");
      if (!i) return;
      let n = c(i.dataset.action, "");
      if (n !== "" && i.matches(":not(.disabled)")) {
        let a = this.handlers.get(n);
        if (typeof a == "function") {
          let d = {
            action: n,
            data: JSON.parse(c(i.dataset.data, "{}")),
            el: i,
            host: this.context,
            context_menu: this
          };
          a(d) === !1 && (s = !1);
        }
      }
      s && (this.hide(), t.preventDefault());
    }), document.addEventListener("mousedown", (t) => {
      t.target.closest(".context-menu") || this.hide();
    });
  }
  mount(e) {
    let l = (t, s) => {
      this.update(), t = t + 10, s = s + 0, t < this.gap && (t = gap), t + this.menu.width + this.gap > window.innerWidth && (t = window.innerWidth - this.menu.width - this.gap), s < this.gap && (s = gap), s + this.menu.height + this.gap > window.innerHeight && (s = window.innerHeight - this.menu.height - this.gap), this.show(t, s, e);
    };
    e.addEventListener("contextmenu", (t) => {
      let s = this.handlers.get("before-show"), i = !0;
      if (s && (i = s.bind(e)()), t.preventDefault(), i) {
        let { x: n, y: a } = t;
        l(n, a);
      }
    }), e.addEventListener("click", (t) => {
      let s = this.handlers.get("before-show"), i = !0;
      if (s && (i = s.bind(e)()), t.preventDefault(), t.stopPropagation(), i) {
        let { x: n, y: a } = t;
        l(n, a);
      }
    });
  }
  show(e, l, t) {
    let s = !0;
    o && o.hide(), this.reset_all_menu_items(), this.context = t;
    let i = this.handlers["before-show"];
    if (typeof i == "function") {
      let n = {
        context_menu: this
      };
      i.bind(this.context)(n) === !1 && (s = !1);
    }
    if (s) {
      let n = 14, a, d, r;
      this.menu.classList.add("ux-show"), this.menu.classList.remove("popup-left"), r = this.menu.querySelector("& > ul"), a = parseInt(r.dataset.width), d = parseInt(r.dataset.height), e + a > window.innerWidth - n ? e = window.innerWidth - n - a : e < n && (e = n), l + d > document.documentElement.scrollTop + window.innerHeight - n ? l = document.documentElement.scrollTop + window.innerHeight - n - d : l < n && (l = n), e + a * 2 > window.innerWidth && this.menu.classList.add("popup-left"), this.menu.style.setProperty("left", e + "px"), this.menu.style.setProperty("top", l + "px"), this.menu.show(), o = this;
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
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((l) => {
      l.classList.remove("ux-hidden");
    });
  }
  hide_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((l) => {
      l.classList.add("ux-hidden");
    });
  }
  hide_menu_item_by_cmd(e) {
    this.menu.querySelectorAll('li[data-cmd="' + e + '"]').forEach((l) => {
      l.classList.add("ux-hidden");
    });
  }
  hide_menu_item_by_group(e) {
    this.menu.querySelectorAll('li[data-group*="' + e + '"]').forEach((l) => {
      l.classList.add("ux-hidden");
    });
  }
  get_menu_item(e) {
    return this.menu.querySelector('li[data-id="' + e + '"]');
  }
  disable_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((l) => {
      l.classList.add("ux-disabled");
    });
  }
  enable_menu_item_by_id(e) {
    this.menu.querySelectorAll('li[data-id="' + e + '"]').forEach((l) => {
      l.classList.remove("ux-disabled");
    });
  }
  set_icon(e, l = "") {
    let t = this.get_menu_item(e), s = t.querySelector("span");
    l == "" ? s.innerHTML = "" : (s && s.remove(), s = document.createElement("span"), s.innerHTML = l, t.prepend(s));
  }
  update() {
    new Array();
    let e;
    this.menu.style.visibility = "hidden", this.menu.style.display = "block", e = this.menu.getBoundingClientRect(), this.menu.width = e.width, this.menu.height = e.height, this.menu.style.display = "none", this.menu.style.visibility = "visible";
  }
  on(e, l) {
    this.handlers.set(e, l);
  }
}
export {
  w as ContextMenu
};
//# sourceMappingURL=index.js.map
