(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("[data-role=medium-editor]{display:none}[data-role=medium-editor].active{background-color:var(--neutral-0,#fff);opacity:0;border-radius:.5rem;justify-content:center;align-items:center;gap:8px;padding:6px;display:flex;position:fixed;box-shadow:0 0 6px #00000040}[data-role=medium-editor].active span{display:brid;cursor:pointer;-webkit-user-select:none;user-select:none;place-content:center;width:18px;height:18px;position:relative}[data-role=medium-editor].active span svg{pointer-events:none;transform-origin:50%;width:100%;height:100%;transform:scale(var(--scale));top:var(--top,0);display:block;position:relative}[data-role=medium-editor].active span:active{top:2px}[data-role=medium-editor].active span .hidden{display:none}[data-role=medium-editor].fade-in{animation-name:medium-editor-fade-in;animation-duration:.5s;animation-iteration-count:1;animation-fill-mode:both}@keyframes medium-editor-fade-in{0%{opacity:0}to{opacity:1}}[data-theme=dark] [data-role=medium-editor].active{background-color:var(--bg-300)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var u = Object.defineProperty;
var g = (l, t, i) => t in l ? u(l, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[t] = i;
var c = (l, t, i) => g(l, typeof t != "symbol" ? t + "" : t, i);
let a = null;
class f {
  constructor(t) {
    c(this, "mount", (t, i = null) => {
      t.classList.add("medium-editor"), t.addEventListener("mouseup", (n) => {
        if (t.getAttribute("contenteditable") == "true") {
          let s = document.getSelection();
          s.type === "Range" ? s.rangeCount > 0 ? (this.rootElement.classList.add("active"), setTimeout(() => {
            this.getBoundingRect();
            let r = s.getRangeAt(0).getBoundingClientRect(), o = r.x + (r.width - this.width) / 2, d = r.y - this.height - this.gap;
            o < this.gap && (o = this.gap), o + this.width > window.innerWidth && (o = window.innerWidth - this.width - this.gap), d < this.gap && (d = this.gap), d > window.innerHeight - this.gap && (d = window.innerHeight - this.height - this.gap), this.rootElement.querySelectorAll("span[data-cmd]").removeClass("hidden"), i && Array.isArray(i) && this.rootElement.querySelectorAll("span[data-cmd]").forEach((h) => {
              let m = h.getAttribute("data-cmd");
              i.includes(m) || h.classList.add("hidden");
            }), this.show(this.rootElement, o, d);
          }, 10)) : this.hide() : this.hide();
        }
      }), t.addEventListener("blur", (n) => {
        let s = n.explicitOriginalTarget, e = !1;
        s && s instanceof HTMLElement && s.closest('[data-role="medium-editor"]') && (e = !0), e || this.editor === t && this.hide();
      });
    });
    let n = Object.assign({
      gap: 8,
      timeout: 5e3,
      commands: [
        {
          cmd: "bold",
          icon: ""
        },
        {
          cmd: "italic",
          icon: ""
        },
        {
          cmd: "|"
        },
        {
          cmd: "remove-style",
          icon: ""
        },
        {
          cmd: "link",
          icon: ""
        },
        {
          cmd: "unlink",
          icon: ""
        }
      ]
    }, t);
    this.gap = n.gap, this.timeout = n.timeout, this.commands = n.commands, this.rootElement = document.createElement("div"), this.rootElement.setAttribute("data-role", "medium-editor");
    let s = new Array();
    n.commands.forEach((e) => {
      e.cmd == "|" ? s.push('<span class="seperator"></span>') : s.push('<span data-cmd="' + e.cmd + '" style="' + (e.scale ? "--scale:" + e.scale + ";" : "") + (e.top ? "--top:" + e.top + ";" : "") + '">' + e.icon + "</span>");
    }), this.rootElement.innerHTML = s.join(""), this.getBoundingRect(), this.rootElement.addEventListener("mouseenter", () => {
      clearTimeout(a);
    }), this.rootElement.addEventListener("mouseleave", () => {
      clearTimeout(a), a = setTimeout(() => {
        this.hide();
      }, this.timeout);
    }), this.rootElement.addEventListener("click", (e) => {
      clearTimeout(a);
      let r = e.target;
      if (r.matches("span[data-cmd]")) {
        let o = r.getAttribute("data-cmd"), d = this.commands.filter((h) => h.cmd == o);
        d.length > 0 && (o = d[0], typeof o.action == "function" && o.action()), this.hide();
      }
    }), document.body.append(this.rootElement);
  }
  getBoundingRect() {
    let t = this.rootElement.getBoundingClientRect();
    this.width = t.width, this.height = t.height;
  }
  show(t, i, n) {
    clearTimeout(a), this.editor = t, this.rootElement.setAttribute("class", ""), this.rootElement.style.left = i + "px", this.rootElement.style.top = n + "px", this.rootElement.classList.add("active"), this.rootElement.classList.add("fade-in"), a = setTimeout(() => {
      clearTimeout(a), this.hide();
    }, this.timeout);
  }
  hide() {
    clearTimeout(a), this.rootElement.classList.remove("active");
  }
}
export {
  f as MediumEditor
};
//# sourceMappingURL=index.js.map
