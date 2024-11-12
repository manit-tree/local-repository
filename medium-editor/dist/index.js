(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode('.medium-editor {\n  position: relative;\n}\n\n[data-role="action-bar"] {\n  display: none;\n}\n\n[data-role="action-bar"].active {\n  pointer-event: all;\n  opacity: 0;\n  background-color: #ff0;\n  border-radius: .5rem;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  padding: 6px;\n  display: flex;\n  position: absolute;\n}\n\n[data-role="action-bar"].active span {\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: 1px solid red;\n  width: 32px;\n  height: 32px;\n  display: block;\n  position: relative;\n}\n\n[data-role="action-bar"].active span:active {\n  top: 2px;\n}\n\n[data-role="action-bar"].fade-in {\n  animation-name: fade-in;\n  animation-duration: .5s;\n  animation-iteration-count: 1;\n  animation-fill-mode: both;\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}'));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
let timer = null;
class ActionBar {
  constructor(options) {
    let default_options = {
      gap: 8,
      timeout: 5e3,
      commands: ["bold", "italic", "|", "link", "remove-style"]
    };
    let _options = Object.assign(default_options, options);
    this.onClick = null;
    this.gap = _options.gap;
    this.timeout = _options.timeout;
    this.rootElement = document.createElement("div");
    this.rootElement.setAttribute("data-role", "action-bar");
    let sb2 = new Array();
    _options.commands.forEach((cmd) => {
      if (cmd == "|") {
        sb2.push('<span class="seperator"></span>');
      } else {
        sb2.push('<span data-cmd="' + cmd + '"></span>');
      }
    });
    this.rootElement.innerHTML = sb2.join("");
    this.getBoundingRect();
    this.rootElement.addEventListener("mouseenter", () => {
      clearTimeout(timer);
    });
    this.rootElement.addEventListener("mouseleave", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.hide();
      }, this.timeout);
    });
    this.rootElement.addEventListener("click", (evt) => {
      clearTimeout(timer);
      let target = evt.target;
      if (target.matches("span[data-cmd]")) {
        let cmd = target.getAttribute("data-cmd");
        let cb = this.onClick;
        if (cb) {
          cb(cmd);
        }
        this.hide();
      }
    });
    document.body.append(this.rootElement);
  }
  getBoundingRect() {
    let bounding_rect = this.rootElement.getBoundingClientRect();
    this.width = bounding_rect.width;
    this.height = bounding_rect.height;
  }
  set_commands(cmds) {
    cmds.forEach((cmd) => {
      if (cmd == "|") {
        sb.push('<span class="seperator"></span>');
      } else {
        sb.push('<span data-cmd="' + cmd + '"></span>');
      }
    });
    this.rootElement.innerHTML = sb.join("");
  }
  show(el, x, y) {
    clearTimeout(timer);
    this.editor = el;
    this.rootElement.setAttribute("class", "");
    this.rootElement.style.left = x + "px";
    this.rootElement.style.top = y + "px";
    this.rootElement.classList.add("active");
    this.rootElement.classList.add("fade-in");
    timer = setTimeout(() => {
      clearTimeout(timer);
      this.hide();
    }, this.timeout);
  }
  hide() {
    clearTimeout(timer);
    this.rootElement.classList.remove("active");
  }
}
let action_bar_intance = null;
function get_action_bar() {
  if (!action_bar_intance) {
    action_bar_intance = new ActionBar();
  }
  return action_bar_intance;
}
class MediumEditor {
  constructor(el, action_bar) {
    this.rootElement = el;
    this.rootElement.classList.add("medium-editor");
    this.action_bar = action_bar;
    this.editable = false;
    this.rootElement.addEventListener("mouseup", (evt) => {
      if (!this.editable) return;
      let sel = document.getSelection();
      if (sel.type === "Range") {
        if (sel.rangeCount > 0) {
          this.action_bar.rootElement.classList.add("active");
          setTimeout(() => {
            this.action_bar.getBoundingRect();
            let range = sel.getRangeAt(0);
            let bounding_rect = range.getBoundingClientRect();
            let left = bounding_rect.x + (bounding_rect.width - this.action_bar.width) / 2;
            let top = bounding_rect.y - this.action_bar.height - this.action_bar.gap;
            if (left < this.action_bar.gap) {
              left = this.action_bar.gap;
            }
            if (left + this.action_bar.width > window.innerWidth) {
              left = window.innerWidth - this.action_bar.width - this.action_bar.gap;
            }
            if (top < this.action_bar.gap) {
              top = this.action_bar.gap;
            }
            if (top > window.innerHeight - this.action_bar.gap) {
              top = window.innerHeight - this.action_bar.height - this.action_bar.gap;
            }
            this.action_bar.show(this.rootElement, left, top);
          }, 10);
        } else {
          this.action_bar.hide();
        }
      } else {
        this.action_bar.hide();
      }
    });
    this.rootElement.addEventListener("blur", (evt) => {
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
    });
  }
  set_editable(value) {
    this.editable = value;
    if (this.editable) {
      this.rootElement.setAttribute("contenteditable", "true");
    } else {
      this.rootElement.setAttribute("contenteditable", "false");
    }
  }
}
export {
  MediumEditor,
  get_action_bar
};
