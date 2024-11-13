(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("[data-role=action-bar]{display:none}[data-role=action-bar].active{background-color:var(--neutral-0,#fff);opacity:0;border-radius:.5rem;justify-content:center;align-items:center;gap:6px;padding:6px;display:flex;position:absolute;box-shadow:0 0 6px #00000040}[data-role=action-bar].active span{display:brid;cursor:pointer;-webkit-user-select:none;user-select:none;place-content:center;width:18px;height:18px;position:relative}[data-role=action-bar].active span svg{pointer-events:none;transform-origin:50%;width:100%;height:100%;transform:scale(var(--scale));top:var(--top,0);display:block;position:relative}[data-role=action-bar].active span:active{top:2px}[data-role=action-bar].fade-in{animation-name:action-bar-fade-in;animation-duration:.5s;animation-iteration-count:1;animation-fill-mode:both}@keyframes action-bar-fade-in{0%{opacity:0}to{opacity:1}}[data-theme=dark] [data-role=action-bar].active{background-color:var(--bg-300)}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
let e = null;
class r {
  constructor(i) {
    let o = Object.assign({
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
    }, i);
    this.gap = o.gap, this.timeout = o.timeout, this.commands = o.commands, this.rootElement = document.createElement("div"), this.rootElement.setAttribute("data-role", "action-bar");
    let n = new Array();
    o.commands.forEach((t) => {
      t.cmd == "|" ? n.push('<span class="seperator"></span>') : n.push('<span data-cmd="' + t.cmd + '" style="' + (t.scale ? "--scale:" + t.scale + ";" : "") + (t.top ? "--top:" + t.top + ";" : "") + '">' + t.icon + "</span>");
    }), this.rootElement.innerHTML = n.join(""), this.getBoundingRect(), this.rootElement.addEventListener("mouseenter", () => {
      clearTimeout(e);
    }), this.rootElement.addEventListener("mouseleave", () => {
      clearTimeout(e), e = setTimeout(() => {
        this.hide();
      }, this.timeout);
    }), this.rootElement.addEventListener("click", (t) => {
      clearTimeout(e);
      let c = t.target;
      if (c.matches("span[data-cmd]")) {
        let s = c.getAttribute("data-cmd"), l = this.commands.filter((m) => m.cmd == s);
        l.length > 0 && (s = l[0], typeof s.action == "function" && s.action()), this.hide();
      }
    }), document.body.append(this.rootElement);
  }
  getBoundingRect() {
    let i = this.rootElement.getBoundingClientRect();
    this.width = i.width, this.height = i.height;
  }
  show(i, a, o) {
    clearTimeout(e), this.editor = i, this.rootElement.setAttribute("class", ""), this.rootElement.style.left = a + "px", this.rootElement.style.top = o + "px", this.rootElement.classList.add("active"), this.rootElement.classList.add("fade-in"), e = setTimeout(() => {
      clearTimeout(e), this.hide();
    }, this.timeout);
  }
  hide() {
    clearTimeout(e), this.rootElement.classList.remove("active");
  }
}
export {
  r as ActionBar
};
//# sourceMappingURL=index.js.map
