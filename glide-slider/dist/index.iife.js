(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode(".glide {\n  box-sizing: border-box;\n  width: 100%;\n  position: relative;\n}\n\n.glide * {\n  box-sizing: inherit;\n}\n\n.glide__track {\n  overflow: hidden;\n}\n\n.glide__slides {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform-style: preserve-3d;\n  touch-action: pan-Y;\n  white-space: nowrap;\n  will-change: transform;\n  flex-wrap: nowrap;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n}\n\n.glide__slides--dragging {\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.glide__slide {\n  white-space: normal;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.glide__slide a {\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none;\n}\n\n.glide__arrows, .glide__bullets {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.glide--rtl {\n  direction: rtl;\n}\n.glide__arrow {\n  z-index: 2;\n  color: #fff;\n  text-transform: uppercase;\n  text-shadow: 0 .25em .5em #0000001a;\n  opacity: 1;\n  cursor: pointer;\n  background-color: #0000;\n  border: 2px solid #ffffff80;\n  border-radius: 4px;\n  padding: 9px 12px;\n  line-height: 1;\n  transition: opacity .15s, border .3s ease-in-out;\n  display: block;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  box-shadow: 0 .25em .5em #0000001a;\n}\n\n.glide__arrow:focus {\n  outline: none;\n}\n\n.glide__arrow:hover {\n  border-color: #fff;\n}\n\n.glide__arrow--left {\n  left: 2em;\n}\n\n.glide__arrow--right {\n  right: 2em;\n}\n\n.glide__arrow--disabled {\n  opacity: .33;\n}\n\n.glide__bullets {\n  z-index: 2;\n  list-style: none;\n  display: inline-flex;\n  position: absolute;\n  bottom: 2em;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.glide__bullet {\n  cursor: pointer;\n  background-color: #ffffff80;\n  border: 2px solid #0000;\n  border-radius: 50%;\n  width: 9px;\n  height: 9px;\n  margin: 0 .25em;\n  padding: 0;\n  line-height: 0;\n  transition: all .3s ease-in-out;\n  box-shadow: 0 .25em .5em #0000001a;\n}\n\n.glide__bullet:focus {\n  outline: none;\n}\n\n.glide__bullet:hover, .glide__bullet:focus {\n  background-color: #ffffff80;\n  border: 2px solid #fff;\n}\n\n.glide__bullet--active {\n  background-color: #fff;\n}\n\n.glide--swipeable {\n  cursor: grab;\n  cursor: -moz-grab;\n  cursor: -webkit-grab;\n}\n\n.glide--dragging {\n  cursor: grabbing;\n  cursor: -moz-grabbing;\n  cursor: -webkit-grabbing;\n}\n.glide .glide__track .glide__slides {\n  height: 100%;\n}\n\n.glide .glide__track .glide__slides .glide__slide {\n  aspect-ratio: 4 / 3;\n  background-color: #ffffff0d;\n  place-content: center;\n  font-size: 34px;\n  display: grid;\n}\n\n.glide .glide__arrows .glide__arrow {\n  box-shadow: none;\n  width: var(--arrow-width, 42px);\n  height: var(--arrow-height, 42px);\n  border: 0;\n  padding: 0;\n}\n\n.glide .glide__arrows .glide__arrow.glide__arrow--left {\n  left: 1.25em;\n}\n\n.glide .glide__arrows .glide__arrow.glide__arrow--right {\n  right: 1.25em;\n}\n\n.glide .glide__bullets {\n  bottom: 1.25em;\n}"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
var glide_slider = function() {
  "use strict";
  /*!
   * Glide.js v3.6.2
   * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
   * Released under the MIT License.
   */
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  var defaults = {
    /**
     * Type of the movement.
     *
     * Available types:
     * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.
     * `carousel` - Changes slides without starting over when it reaches the first or last slide.
     *
     * @type {String}
     */
    type: "slider",
    /**
     * Start at specific slide number defined with zero-based index.
     *
     * @type {Number}
     */
    startAt: 0,
    /**
     * A number of slides visible on the single viewport.
     *
     * @type {Number}
     */
    perView: 1,
    /**
     * Focus currently active slide at a specified position in the track.
     *
     * Available inputs:
     * `center` - Current slide will be always focused at the center of a track.
     * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.
     *
     * @type {String|Number}
     */
    focusAt: 0,
    /**
     * A size of the gap added between slides.
     *
     * @type {Number}
     */
    gap: 10,
    /**
     * Change slides after a specified interval. Use `false` for turning off autoplay.
     *
     * @type {Number|Boolean}
     */
    autoplay: false,
    /**
     * Stop autoplay on mouseover event.
     *
     * @type {Boolean}
     */
    hoverpause: true,
    /**
     * Allow for changing slides with left and right keyboard arrows.
     *
     * @type {Boolean}
     */
    keyboard: true,
    /**
     * Stop running `perView` number of slides from the end. Use this
     * option if you don't want to have an empty space after
     * a slider. Works only with `slider` type and a
     * non-centered `focusAt` setting.
     *
     * @type {Boolean}
     */
    bound: false,
    /**
     * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.
     *
     * @type {Number|Boolean}
     */
    swipeThreshold: 80,
    /**
     * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.
     *
     * @type {Number|Boolean}
     */
    dragThreshold: 120,
    /**
     * A number of slides moved on single swipe.
     *
     * Available types:
     * `` - Moves slider by one slide per swipe
     * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)
     *
     * @type {String}
     */
    perSwipe: "",
    /**
     * Moving distance ratio of the slides on a swiping and dragging.
     *
     * @type {Number}
     */
    touchRatio: 0.5,
    /**
     * Angle required to activate slides moving on swiping or dragging.
     *
     * @type {Number}
     */
    touchAngle: 45,
    /**
     * Duration of the animation in milliseconds.
     *
     * @type {Number}
     */
    animationDuration: 400,
    /**
     * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.
     *
     * @type {Boolean}
     */
    rewind: true,
    /**
     * Duration of the rewinding animation of the `slider` type in milliseconds.
     *
     * @type {Number}
     */
    rewindDuration: 800,
    /**
     * Easing function for the animation.
     *
     * @type {String}
     */
    animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    /**
     * Wait for the animation to finish until the next user input can be processed
     *
     * @type {boolean}
     */
    waitForTransition: true,
    /**
     * Throttle costly events at most once per every wait milliseconds.
     *
     * @type {Number}
     */
    throttle: 10,
    /**
     * Moving direction mode.
     *
     * Available inputs:
     * - 'ltr' - left to right movement,
     * - 'rtl' - right to left movement.
     *
     * @type {String}
     */
    direction: "ltr",
    /**
     * The distance value of the next and previous viewports which
     * have to peek in the current view. Accepts number and
     * pixels as a string. Left and right peeking can be
     * set up separately with a directions object.
     *
     * For example:
     * `100` - Peek 100px on the both sides.
     * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.
     *
     * @type {Number|String|Object}
     */
    peek: 0,
    /**
     * Defines how many clones of current viewport will be generated.
     *
     * @type {Number}
     */
    cloningRatio: 1,
    /**
     * Collection of options applied at specified media breakpoints.
     * For example: display two slides per view under 800px.
     * `{
     *   '800px': {
     *     perView: 2
     *   }
     * }`
     */
    breakpoints: {},
    /**
     * Collection of internally used HTML classes.
     *
     * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object
     * @type {Object}
     */
    classes: {
      swipeable: "glide--swipeable",
      dragging: "glide--dragging",
      direction: {
        ltr: "glide--ltr",
        rtl: "glide--rtl"
      },
      type: {
        slider: "glide--slider",
        carousel: "glide--carousel"
      },
      slide: {
        clone: "glide__slide--clone",
        active: "glide__slide--active"
      },
      arrow: {
        disabled: "glide__arrow--disabled"
      },
      nav: {
        active: "glide__bullet--active"
      }
    }
  };
  function warn(msg) {
    console.error("[Glide warn]: ".concat(msg));
  }
  function toInt(value) {
    return parseInt(value);
  }
  function toFloat(value) {
    return parseFloat(value);
  }
  function isString(value) {
    return typeof value === "string";
  }
  function isObject(value) {
    var type = _typeof(value);
    return type === "function" || type === "object" && !!value;
  }
  function isFunction(value) {
    return typeof value === "function";
  }
  function isUndefined(value) {
    return typeof value === "undefined";
  }
  function isArray(value) {
    return value.constructor === Array;
  }
  function mount(glide, extensions, events) {
    var components = {};
    for (var name in extensions) {
      if (isFunction(extensions[name])) {
        components[name] = extensions[name](glide, components, events);
      } else {
        warn("Extension must be a function");
      }
    }
    for (var _name in components) {
      if (isFunction(components[_name].mount)) {
        components[_name].mount();
      }
    }
    return components;
  }
  function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
  }
  function sortKeys(obj) {
    return Object.keys(obj).sort().reduce(function(r, k) {
      r[k] = obj[k];
      return r[k], r;
    }, {});
  }
  function mergeOptions(defaults2, settings) {
    var options = Object.assign({}, defaults2, settings);
    if (settings.hasOwnProperty("classes")) {
      options.classes = Object.assign({}, defaults2.classes, settings.classes);
      var properties = ["direction", "type", "slide", "arrow", "nav"];
      properties.forEach(function(property) {
        if (settings.classes.hasOwnProperty(property)) {
          options.classes[property] = _objectSpread2(_objectSpread2({}, defaults2.classes[property]), settings.classes[property]);
        }
      });
    }
    if (settings.hasOwnProperty("breakpoints")) {
      options.breakpoints = Object.assign({}, defaults2.breakpoints, settings.breakpoints);
    }
    return options;
  }
  var EventsBus = /* @__PURE__ */ function() {
    function EventsBus2() {
      var events = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, EventsBus2);
      this.events = events;
      this.hop = events.hasOwnProperty;
    }
    _createClass(EventsBus2, [{
      key: "on",
      value: function on(event, handler) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.on(event[i], handler);
          }
          return;
        }
        if (!this.hop.call(this.events, event)) {
          this.events[event] = [];
        }
        var index = this.events[event].push(handler) - 1;
        return {
          remove: function remove() {
            delete this.events[event][index];
          }
        };
      }
      /**
       * Runs registered handlers for specified event.
       *
       * @param {String|Array} event
       * @param {Object=} context
       */
    }, {
      key: "emit",
      value: function emit(event, context) {
        if (isArray(event)) {
          for (var i = 0; i < event.length; i++) {
            this.emit(event[i], context);
          }
          return;
        }
        if (!this.hop.call(this.events, event)) {
          return;
        }
        this.events[event].forEach(function(item) {
          item(context || {});
        });
      }
    }]);
    return EventsBus2;
  }();
  var Glide$1 = /* @__PURE__ */ function() {
    function Glide2(selector) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Glide2);
      this._c = {};
      this._t = [];
      this._e = new EventsBus();
      this.disabled = false;
      this.selector = selector;
      this.settings = mergeOptions(defaults, options);
      this.index = this.settings.startAt;
    }
    _createClass(Glide2, [{
      key: "mount",
      value: function mount$1() {
        var extensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this._e.emit("mount.before");
        if (isObject(extensions)) {
          this._c = mount(this, extensions, this._e);
        } else {
          warn("You need to provide a object on `mount()`");
        }
        this._e.emit("mount.after");
        return this;
      }
      /**
       * Collects an instance `translate` transformers.
       *
       * @param  {Array} transformers Collection of transformers.
       * @return {Void}
       */
    }, {
      key: "mutate",
      value: function mutate() {
        var transformers = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        if (isArray(transformers)) {
          this._t = transformers;
        } else {
          warn("You need to provide a array on `mutate()`");
        }
        return this;
      }
      /**
       * Updates glide with specified settings.
       *
       * @param {Object} settings
       * @return {Glide}
       */
    }, {
      key: "update",
      value: function update() {
        var settings = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.settings = mergeOptions(this.settings, settings);
        if (settings.hasOwnProperty("startAt")) {
          this.index = settings.startAt;
        }
        this._e.emit("update");
        return this;
      }
      /**
       * Change slide with specified pattern. A pattern must be in the special format:
       * `>` - Move one forward
       * `<` - Move one backward
       * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)
       * `>>` - Rewinds to end (last slide)
       * `<<` - Rewinds to start (first slide)
       * `|>` - Move one viewport forward
       * `|<` - Move one viewport backward
       *
       * @param {String} pattern
       * @return {Glide}
       */
    }, {
      key: "go",
      value: function go(pattern) {
        this._c.Run.make(pattern);
        return this;
      }
      /**
       * Move track by specified distance.
       *
       * @param {String} distance
       * @return {Glide}
       */
    }, {
      key: "move",
      value: function move(distance) {
        this._c.Transition.disable();
        this._c.Move.make(distance);
        return this;
      }
      /**
       * Destroy instance and revert all changes done by this._c.
       *
       * @return {Glide}
       */
    }, {
      key: "destroy",
      value: function destroy() {
        this._e.emit("destroy");
        return this;
      }
      /**
       * Start instance autoplaying.
       *
       * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Glide}
       */
    }, {
      key: "play",
      value: function play() {
        var interval = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        if (interval) {
          this.settings.autoplay = interval;
        }
        this._e.emit("play");
        return this;
      }
      /**
       * Stop instance autoplaying.
       *
       * @return {Glide}
       */
    }, {
      key: "pause",
      value: function pause() {
        this._e.emit("pause");
        return this;
      }
      /**
       * Sets glide into a idle status.
       *
       * @return {Glide}
       */
    }, {
      key: "disable",
      value: function disable() {
        this.disabled = true;
        return this;
      }
      /**
       * Sets glide into a active status.
       *
       * @return {Glide}
       */
    }, {
      key: "enable",
      value: function enable() {
        this.disabled = false;
        return this;
      }
      /**
       * Adds cuutom event listener with handler.
       *
       * @param  {String|Array} event
       * @param  {Function} handler
       * @return {Glide}
       */
    }, {
      key: "on",
      value: function on(event, handler) {
        this._e.on(event, handler);
        return this;
      }
      /**
       * Checks if glide is a precised type.
       *
       * @param  {String} name
       * @return {Boolean}
       */
    }, {
      key: "isType",
      value: function isType(name) {
        return this.settings.type === name;
      }
      /**
       * Gets value of the core options.
       *
       * @return {Object}
       */
    }, {
      key: "settings",
      get: function get() {
        return this._o;
      },
      set: function set(o) {
        if (isObject(o)) {
          this._o = o;
        } else {
          warn("Options must be an `object` instance.");
        }
      }
      /**
       * Gets current index of the slider.
       *
       * @return {Object}
       */
    }, {
      key: "index",
      get: function get() {
        return this._i;
      },
      set: function set(i) {
        this._i = toInt(i);
      }
      /**
       * Gets type name of the slider.
       *
       * @return {String}
       */
    }, {
      key: "type",
      get: function get() {
        return this.settings.type;
      }
      /**
       * Gets value of the idle status.
       *
       * @return {Boolean}
       */
    }, {
      key: "disabled",
      get: function get() {
        return this._d;
      },
      set: function set(status) {
        this._d = !!status;
      }
    }]);
    return Glide2;
  }();
  function Run(Glide2, Components, Events) {
    var Run2 = {
      /**
       * Initializes autorunning of the glide.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this._o = false;
      },
      /**
       * Makes glides running based on the passed moving schema.
       *
       * @param {String} move
       */
      make: function make(move) {
        var _this = this;
        if (!Glide2.disabled) {
          !Glide2.settings.waitForTransition || Glide2.disable();
          this.move = move;
          Events.emit("run.before", this.move);
          this.calculate();
          Events.emit("run", this.move);
          Components.Transition.after(function() {
            if (_this.isStart()) {
              Events.emit("run.start", _this.move);
            }
            if (_this.isEnd()) {
              Events.emit("run.end", _this.move);
            }
            if (_this.isOffset()) {
              _this._o = false;
              Events.emit("run.offset", _this.move);
            }
            Events.emit("run.after", _this.move);
            Glide2.enable();
          });
        }
      },
      /**
       * Calculates current index based on defined move.
       *
       * @return {Number|Undefined}
       */
      calculate: function calculate() {
        var move = this.move, length = this.length;
        var steps = move.steps, direction = move.direction;
        var viewSize = 1;
        if (direction === "=") {
          if (Glide2.settings.bound && toInt(steps) > length) {
            Glide2.index = length;
            return;
          }
          Glide2.index = steps;
          return;
        }
        if (direction === ">" && steps === ">") {
          Glide2.index = length;
          return;
        }
        if (direction === "<" && steps === "<") {
          Glide2.index = 0;
          return;
        }
        if (direction === "|") {
          viewSize = Glide2.settings.perView || 1;
        }
        if (direction === ">" || direction === "|" && steps === ">") {
          var index = calculateForwardIndex(viewSize);
          if (index > length) {
            this._o = true;
          }
          Glide2.index = normalizeForwardIndex(index, viewSize);
          return;
        }
        if (direction === "<" || direction === "|" && steps === "<") {
          var _index = calculateBackwardIndex(viewSize);
          if (_index < 0) {
            this._o = true;
          }
          Glide2.index = normalizeBackwardIndex(_index, viewSize);
          return;
        }
        warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
      },
      /**
       * Checks if we are on the first slide.
       *
       * @return {Boolean}
       */
      isStart: function isStart() {
        return Glide2.index <= 0;
      },
      /**
       * Checks if we are on the last slide.
       *
       * @return {Boolean}
       */
      isEnd: function isEnd() {
        return Glide2.index >= this.length;
      },
      /**
       * Checks if we are making a offset run.
       *
       * @param {String} direction
       * @return {Boolean}
       */
      isOffset: function isOffset() {
        var direction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
        if (!direction) {
          return this._o;
        }
        if (!this._o) {
          return false;
        }
        if (direction === "|>") {
          return this.move.direction === "|" && this.move.steps === ">";
        }
        if (direction === "|<") {
          return this.move.direction === "|" && this.move.steps === "<";
        }
        return this.move.direction === direction;
      },
      /**
       * Checks if bound mode is active
       *
       * @return {Boolean}
       */
      isBound: function isBound() {
        return Glide2.isType("slider") && Glide2.settings.focusAt !== "center" && Glide2.settings.bound;
      }
    };
    function calculateForwardIndex(viewSize) {
      var index = Glide2.index;
      if (Glide2.isType("carousel")) {
        return index + viewSize;
      }
      return index + (viewSize - index % viewSize);
    }
    function normalizeForwardIndex(index, viewSize) {
      var length = Run2.length;
      if (index <= length) {
        return index;
      }
      if (Glide2.isType("carousel")) {
        return index - (length + 1);
      }
      if (Glide2.settings.rewind) {
        if (Run2.isBound() && !Run2.isEnd()) {
          return length;
        }
        return 0;
      }
      if (Run2.isBound()) {
        return length;
      }
      return Math.floor(length / viewSize) * viewSize;
    }
    function calculateBackwardIndex(viewSize) {
      var index = Glide2.index;
      if (Glide2.isType("carousel")) {
        return index - viewSize;
      }
      var view = Math.ceil(index / viewSize);
      return (view - 1) * viewSize;
    }
    function normalizeBackwardIndex(index, viewSize) {
      var length = Run2.length;
      if (index >= 0) {
        return index;
      }
      if (Glide2.isType("carousel")) {
        return index + (length + 1);
      }
      if (Glide2.settings.rewind) {
        if (Run2.isBound() && Run2.isStart()) {
          return length;
        }
        return Math.floor(length / viewSize) * viewSize;
      }
      return 0;
    }
    define(Run2, "move", {
      /**
       * Gets value of the move schema.
       *
       * @returns {Object}
       */
      get: function get() {
        return this._m;
      },
      /**
       * Sets value of the move schema.
       *
       * @returns {Object}
       */
      set: function set(value) {
        var step = value.substr(1);
        this._m = {
          direction: value.substr(0, 1),
          steps: step ? toInt(step) ? toInt(step) : step : 0
        };
      }
    });
    define(Run2, "length", {
      /**
       * Gets value of the running distance based
       * on zero-indexing number of slides.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide2.settings;
        var length = Components.Html.slides.length;
        if (this.isBound()) {
          return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);
        }
        return length - 1;
      }
    });
    define(Run2, "offset", {
      /**
       * Gets status of the offsetting flag.
       *
       * @return {Boolean}
       */
      get: function get() {
        return this._o;
      }
    });
    return Run2;
  }
  function now() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function throttle(func, wait) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var timeout, context, args, result;
    var previous = 0;
    var later = function later2() {
      previous = options.leading === false ? 0 : now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    var throttled = function throttled2() {
      var at = now();
      if (!previous && options.leading === false) previous = at;
      var remaining = wait - (at - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = at;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
    throttled.cancel = function() {
      clearTimeout(timeout);
      previous = 0;
      timeout = context = args = null;
    };
    return throttled;
  }
  var MARGIN_TYPE = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"]
  };
  function Gaps(Glide2, Components, Events) {
    var Gaps2 = {
      /**
       * Applies gaps between slides. First and last
       * slides do not receive it's edge margins.
       *
       * @param {HTMLCollection} slides
       * @return {Void}
       */
      apply: function apply(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          var direction = Components.Direction.value;
          if (i !== 0) {
            style[MARGIN_TYPE[direction][0]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][0]] = "";
          }
          if (i !== slides.length - 1) {
            style[MARGIN_TYPE[direction][1]] = "".concat(this.value / 2, "px");
          } else {
            style[MARGIN_TYPE[direction][1]] = "";
          }
        }
      },
      /**
       * Removes gaps from the slides.
       *
       * @param {HTMLCollection} slides
       * @returns {Void}
      */
      remove: function remove(slides) {
        for (var i = 0, len = slides.length; i < len; i++) {
          var style = slides[i].style;
          style.marginLeft = "";
          style.marginRight = "";
        }
      }
    };
    define(Gaps2, "value", {
      /**
       * Gets value of the gap.
       *
       * @returns {Number}
       */
      get: function get() {
        return toInt(Glide2.settings.gap);
      }
    });
    define(Gaps2, "grow", {
      /**
       * Gets additional dimensions value caused by gaps.
       * Used to increase width of the slides wrapper.
       *
       * @returns {Number}
       */
      get: function get() {
        return Gaps2.value * Components.Sizes.length;
      }
    });
    define(Gaps2, "reductor", {
      /**
       * Gets reduction value caused by gaps.
       * Used to subtract width of the slides.
       *
       * @returns {Number}
       */
      get: function get() {
        var perView = Glide2.settings.perView;
        return Gaps2.value * (perView - 1) / perView;
      }
    });
    Events.on(["build.after", "update"], throttle(function() {
      Gaps2.apply(Components.Html.wrapper.children);
    }, 30));
    Events.on("destroy", function() {
      Gaps2.remove(Components.Html.wrapper.children);
    });
    return Gaps2;
  }
  function siblings(node) {
    if (node && node.parentNode) {
      var n = node.parentNode.firstChild;
      var matched = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== node) {
          matched.push(n);
        }
      }
      return matched;
    }
    return [];
  }
  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  }
  var TRACK_SELECTOR = '[data-glide-el="track"]';
  function Html(Glide2, Components, Events) {
    var Html2 = {
      /**
       * Setup slider HTML nodes.
       *
       * @param {Glide} glide
       */
      mount: function mount2() {
        this.root = Glide2.selector;
        this.track = this.root.querySelector(TRACK_SELECTOR);
        this.collectSlides();
      },
      /**
       * Collect slides
       */
      collectSlides: function collectSlides() {
        this.slides = toArray(this.wrapper.children).filter(function(slide) {
          return !slide.classList.contains(Glide2.settings.classes.slide.clone);
        });
      }
    };
    define(Html2, "root", {
      /**
       * Gets node of the glide main element.
       *
       * @return {Object}
       */
      get: function get() {
        return Html2._r;
      },
      /**
       * Sets node of the glide main element.
       *
       * @return {Object}
       */
      set: function set(r) {
        if (isString(r)) {
          r = document.querySelector(r);
        }
        if (r !== null) {
          Html2._r = r;
        } else {
          warn("Root element must be a existing Html node");
        }
      }
    });
    define(Html2, "track", {
      /**
       * Gets node of the glide track with slides.
       *
       * @return {Object}
       */
      get: function get() {
        return Html2._t;
      },
      /**
       * Sets node of the glide track with slides.
       *
       * @return {Object}
       */
      set: function set(t) {
        Html2._t = t;
      }
    });
    define(Html2, "wrapper", {
      /**
       * Gets node of the slides wrapper.
       *
       * @return {Object}
       */
      get: function get() {
        return Html2.track.children[0];
      }
    });
    Events.on("update", function() {
      Html2.collectSlides();
    });
    return Html2;
  }
  function Peek(Glide2, Components, Events) {
    var Peek2 = {
      /**
       * Setups how much to peek based on settings.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this.value = Glide2.settings.peek;
      }
    };
    define(Peek2, "value", {
      /**
       * Gets value of the peek.
       *
       * @returns {Number|Object}
       */
      get: function get() {
        return Peek2._v;
      },
      /**
       * Sets value of the peek.
       *
       * @param {Number|Object} value
       * @return {Void}
       */
      set: function set(value) {
        if (isObject(value)) {
          value.before = toInt(value.before);
          value.after = toInt(value.after);
        } else {
          value = toInt(value);
        }
        Peek2._v = value;
      }
    });
    define(Peek2, "reductor", {
      /**
       * Gets reduction value caused by peek.
       *
       * @returns {Number}
       */
      get: function get() {
        var value = Peek2.value;
        var perView = Glide2.settings.perView;
        if (isObject(value)) {
          return value.before / perView + value.after / perView;
        }
        return value * 2 / perView;
      }
    });
    Events.on(["resize", "update"], function() {
      Peek2.mount();
    });
    return Peek2;
  }
  function Move(Glide2, Components, Events) {
    var Move2 = {
      /**
       * Constructs move component.
       *
       * @returns {Void}
       */
      mount: function mount2() {
        this._o = 0;
      },
      /**
       * Calculates a movement value based on passed offset and currently active index.
       *
       * @param  {Number} offset
       * @return {Void}
       */
      make: function make() {
        var _this = this;
        var offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        this.offset = offset;
        Events.emit("move", {
          movement: this.value
        });
        Components.Transition.after(function() {
          Events.emit("move.after", {
            movement: _this.value
          });
        });
      }
    };
    define(Move2, "offset", {
      /**
       * Gets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      get: function get() {
        return Move2._o;
      },
      /**
       * Sets an offset value used to modify current translate.
       *
       * @return {Object}
       */
      set: function set(value) {
        Move2._o = !isUndefined(value) ? toInt(value) : 0;
      }
    });
    define(Move2, "translate", {
      /**
       * Gets a raw movement value.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Sizes.slideWidth * Glide2.index;
      }
    });
    define(Move2, "value", {
      /**
       * Gets an actual movement value corrected by offset.
       *
       * @return {Number}
       */
      get: function get() {
        var offset = this.offset;
        var translate = this.translate;
        if (Components.Direction.is("rtl")) {
          return translate + offset;
        }
        return translate - offset;
      }
    });
    Events.on(["build.before", "run"], function() {
      Move2.make();
    });
    return Move2;
  }
  function Sizes(Glide2, Components, Events) {
    var Sizes2 = {
      /**
       * Setups dimensions of slides.
       *
       * @return {Void}
       */
      setupSlides: function setupSlides() {
        var width = "".concat(this.slideWidth, "px");
        var slides = Components.Html.slides;
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = width;
        }
      },
      /**
       * Setups dimensions of slides wrapper.
       *
       * @return {Void}
       */
      setupWrapper: function setupWrapper() {
        Components.Html.wrapper.style.width = "".concat(this.wrapperSize, "px");
      },
      /**
       * Removes applied styles from HTML elements.
       *
       * @returns {Void}
       */
      remove: function remove() {
        var slides = Components.Html.slides;
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.width = "";
        }
        Components.Html.wrapper.style.width = "";
      }
    };
    define(Sizes2, "length", {
      /**
       * Gets count number of the slides.
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.slides.length;
      }
    });
    define(Sizes2, "width", {
      /**
       * Gets width value of the slider (visible area).
       *
       * @return {Number}
       */
      get: function get() {
        return Components.Html.track.offsetWidth;
      }
    });
    define(Sizes2, "wrapperSize", {
      /**
       * Gets size of the slides wrapper.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes2.slideWidth * Sizes2.length + Components.Gaps.grow + Components.Clones.grow;
      }
    });
    define(Sizes2, "slideWidth", {
      /**
       * Gets width value of a single slide.
       *
       * @return {Number}
       */
      get: function get() {
        return Sizes2.width / Glide2.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;
      }
    });
    Events.on(["build.before", "resize", "update"], function() {
      Sizes2.setupSlides();
      Sizes2.setupWrapper();
    });
    Events.on("destroy", function() {
      Sizes2.remove();
    });
    return Sizes2;
  }
  function Build(Glide2, Components, Events) {
    var Build2 = {
      /**
       * Init glide building. Adds classes, sets
       * dimensions and setups initial state.
       *
       * @return {Void}
       */
      mount: function mount2() {
        Events.emit("build.before");
        this.typeClass();
        this.activeClass();
        Events.emit("build.after");
      },
      /**
       * Adds `type` class to the glide element.
       *
       * @return {Void}
       */
      typeClass: function typeClass() {
        Components.Html.root.classList.add(Glide2.settings.classes.type[Glide2.settings.type]);
      },
      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      activeClass: function activeClass() {
        var classes = Glide2.settings.classes;
        var slide = Components.Html.slides[Glide2.index];
        if (slide) {
          slide.classList.add(classes.slide.active);
          siblings(slide).forEach(function(sibling) {
            sibling.classList.remove(classes.slide.active);
          });
        }
      },
      /**
       * Removes HTML classes applied at building.
       *
       * @return {Void}
       */
      removeClasses: function removeClasses() {
        var _Glide$settings$class = Glide2.settings.classes, type = _Glide$settings$class.type, slide = _Glide$settings$class.slide;
        Components.Html.root.classList.remove(type[Glide2.settings.type]);
        Components.Html.slides.forEach(function(sibling) {
          sibling.classList.remove(slide.active);
        });
      }
    };
    Events.on(["destroy", "update"], function() {
      Build2.removeClasses();
    });
    Events.on(["resize", "update"], function() {
      Build2.mount();
    });
    Events.on("move.after", function() {
      Build2.activeClass();
    });
    return Build2;
  }
  function Clones(Glide2, Components, Events) {
    var Clones2 = {
      /**
       * Create pattern map and collect slides to be cloned.
       */
      mount: function mount2() {
        this.items = [];
        if (Glide2.isType("carousel")) {
          this.items = this.collect();
        }
      },
      /**
       * Collect clones with pattern.
       *
       * @return {[]}
       */
      collect: function collect() {
        var items = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var slides = Components.Html.slides;
        var _Glide$settings = Glide2.settings, perView = _Glide$settings.perView, classes = _Glide$settings.classes, cloningRatio = _Glide$settings.cloningRatio;
        if (slides.length > 0) {
          var peekIncrementer = +!!Glide2.settings.peek;
          var cloneCount = perView + peekIncrementer + Math.round(perView / 2);
          var append = slides.slice(0, cloneCount).reverse();
          var prepend = slides.slice(cloneCount * -1);
          for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {
            for (var i = 0; i < append.length; i++) {
              var clone = append[i].cloneNode(true);
              clone.classList.add(classes.slide.clone);
              items.push(clone);
            }
            for (var _i = 0; _i < prepend.length; _i++) {
              var _clone = prepend[_i].cloneNode(true);
              _clone.classList.add(classes.slide.clone);
              items.unshift(_clone);
            }
          }
        }
        return items;
      },
      /**
       * Append cloned slides with generated pattern.
       *
       * @return {Void}
       */
      append: function append() {
        var items = this.items;
        var _Components$Html = Components.Html, wrapper = _Components$Html.wrapper, slides = _Components$Html.slides;
        var half = Math.floor(items.length / 2);
        var prepend = items.slice(0, half).reverse();
        var append2 = items.slice(half * -1).reverse();
        var width = "".concat(Components.Sizes.slideWidth, "px");
        for (var i = 0; i < append2.length; i++) {
          wrapper.appendChild(append2[i]);
        }
        for (var _i2 = 0; _i2 < prepend.length; _i2++) {
          wrapper.insertBefore(prepend[_i2], slides[0]);
        }
        for (var _i3 = 0; _i3 < items.length; _i3++) {
          items[_i3].style.width = width;
        }
      },
      /**
       * Remove all cloned slides.
       *
       * @return {Void}
       */
      remove: function remove() {
        var items = this.items;
        for (var i = 0; i < items.length; i++) {
          Components.Html.wrapper.removeChild(items[i]);
        }
      }
    };
    define(Clones2, "grow", {
      /**
       * Gets additional dimensions value caused by clones.
       *
       * @return {Number}
       */
      get: function get() {
        return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones2.items.length;
      }
    });
    Events.on("update", function() {
      Clones2.remove();
      Clones2.mount();
      Clones2.append();
    });
    Events.on("build.before", function() {
      if (Glide2.isType("carousel")) {
        Clones2.append();
      }
    });
    Events.on("destroy", function() {
      Clones2.remove();
    });
    return Clones2;
  }
  var EventsBinder = /* @__PURE__ */ function() {
    function EventsBinder2() {
      var listeners = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, EventsBinder2);
      this.listeners = listeners;
    }
    _createClass(EventsBinder2, [{
      key: "on",
      value: function on(events, el, closure) {
        var capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        if (isString(events)) {
          events = [events];
        }
        for (var i = 0; i < events.length; i++) {
          this.listeners[events[i]] = closure;
          el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
      /**
       * Removes event listeners from arrows HTML elements.
       *
       * @param  {String|Array} events
       * @param  {Element|Window|Document} el
       * @param  {Boolean|Object} capture
       * @return {Void}
       */
    }, {
      key: "off",
      value: function off(events, el) {
        var capture = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (isString(events)) {
          events = [events];
        }
        for (var i = 0; i < events.length; i++) {
          el.removeEventListener(events[i], this.listeners[events[i]], capture);
        }
      }
      /**
       * Destroy collected listeners.
       *
       * @returns {Void}
       */
    }, {
      key: "destroy",
      value: function destroy() {
        delete this.listeners;
      }
    }]);
    return EventsBinder2;
  }();
  function Resize(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Resize2 = {
      /**
       * Initializes window bindings.
       */
      mount: function mount2() {
        this.bind();
      },
      /**
       * Binds `rezsize` listener to the window.
       * It's a costly event, so we are debouncing it.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on("resize", window, throttle(function() {
          Events.emit("resize");
        }, Glide2.settings.throttle));
      },
      /**
       * Unbinds listeners from the window.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off("resize", window);
      }
    };
    Events.on("destroy", function() {
      Resize2.unbind();
      Binder.destroy();
    });
    return Resize2;
  }
  var VALID_DIRECTIONS = ["ltr", "rtl"];
  var FLIPED_MOVEMENTS = {
    ">": "<",
    "<": ">",
    "=": "="
  };
  function Direction(Glide2, Components, Events) {
    var Direction2 = {
      /**
       * Setups gap value based on settings.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this.value = Glide2.settings.direction;
      },
      /**
       * Resolves pattern based on direction value
       *
       * @param {String} pattern
       * @returns {String}
       */
      resolve: function resolve(pattern) {
        var token = pattern.slice(0, 1);
        if (this.is("rtl")) {
          return pattern.split(token).join(FLIPED_MOVEMENTS[token]);
        }
        return pattern;
      },
      /**
       * Checks value of direction mode.
       *
       * @param {String} direction
       * @returns {Boolean}
       */
      is: function is(direction) {
        return this.value === direction;
      },
      /**
       * Applies direction class to the root HTML element.
       *
       * @return {Void}
       */
      addClass: function addClass() {
        Components.Html.root.classList.add(Glide2.settings.classes.direction[this.value]);
      },
      /**
       * Removes direction class from the root HTML element.
       *
       * @return {Void}
       */
      removeClass: function removeClass() {
        Components.Html.root.classList.remove(Glide2.settings.classes.direction[this.value]);
      }
    };
    define(Direction2, "value", {
      /**
       * Gets value of the direction.
       *
       * @returns {Number}
       */
      get: function get() {
        return Direction2._v;
      },
      /**
       * Sets value of the direction.
       *
       * @param {String} value
       * @return {Void}
       */
      set: function set(value) {
        if (VALID_DIRECTIONS.indexOf(value) > -1) {
          Direction2._v = value;
        } else {
          warn("Direction value must be `ltr` or `rtl`");
        }
      }
    });
    Events.on(["destroy", "update"], function() {
      Direction2.removeClass();
    });
    Events.on("update", function() {
      Direction2.mount();
    });
    Events.on(["build.before", "update"], function() {
      Direction2.addClass();
    });
    return Direction2;
  }
  function Rtl(Glide2, Components) {
    return {
      /**
       * Negates the passed translate if glide is in RTL option.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Components.Direction.is("rtl")) {
          return -translate;
        }
        return translate;
      }
    };
  }
  function Gap(Glide2, Components) {
    return {
      /**
       * Modifies passed translate value with number in the `gap` settings.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var multiplier = Math.floor(translate / Components.Sizes.slideWidth);
        return translate + Components.Gaps.value * multiplier;
      }
    };
  }
  function Grow(Glide2, Components) {
    return {
      /**
       * Adds to the passed translate width of the half of clones.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        return translate + Components.Clones.grow / 2;
      }
    };
  }
  function Peeking(Glide2, Components) {
    return {
      /**
       * Modifies passed translate value with a `peek` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        if (Glide2.settings.focusAt >= 0) {
          var peek = Components.Peek.value;
          if (isObject(peek)) {
            return translate - peek.before;
          }
          return translate - peek;
        }
        return translate;
      }
    };
  }
  function Focusing(Glide2, Components) {
    return {
      /**
       * Modifies passed translate value with index in the `focusAt` setting.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      modify: function modify(translate) {
        var gap = Components.Gaps.value;
        var width = Components.Sizes.width;
        var focusAt = Glide2.settings.focusAt;
        var slideWidth = Components.Sizes.slideWidth;
        if (focusAt === "center") {
          return translate - (width / 2 - slideWidth / 2);
        }
        return translate - slideWidth * focusAt - gap * focusAt;
      }
    };
  }
  function mutator(Glide2, Components, Events) {
    var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide2._t, [Rtl]);
    return {
      /**
       * Piplines translate value with registered transformers.
       *
       * @param  {Number} translate
       * @return {Number}
       */
      mutate: function mutate(translate) {
        for (var i = 0; i < TRANSFORMERS.length; i++) {
          var transformer = TRANSFORMERS[i];
          if (isFunction(transformer) && isFunction(transformer().modify)) {
            translate = transformer(Glide2, Components, Events).modify(translate);
          } else {
            warn("Transformer should be a function that returns an object with `modify()` method");
          }
        }
        return translate;
      }
    };
  }
  function Translate(Glide2, Components, Events) {
    var Translate2 = {
      /**
       * Sets value of translate on HTML element.
       *
       * @param {Number} value
       * @return {Void}
       */
      set: function set(value) {
        var transform = mutator(Glide2, Components).mutate(value);
        var translate3d = "translate3d(".concat(-1 * transform, "px, 0px, 0px)");
        Components.Html.wrapper.style.mozTransform = translate3d;
        Components.Html.wrapper.style.webkitTransform = translate3d;
        Components.Html.wrapper.style.transform = translate3d;
      },
      /**
       * Removes value of translate from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transform = "";
      },
      /**
       * @return {number}
       */
      getStartIndex: function getStartIndex() {
        var length = Components.Sizes.length;
        var index = Glide2.index;
        var perView = Glide2.settings.perView;
        if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) {
          return length + (index - perView);
        }
        return (index + perView) % length;
      },
      /**
       * @return {number}
       */
      getTravelDistance: function getTravelDistance() {
        var travelDistance = Components.Sizes.slideWidth * Glide2.settings.perView;
        if (Components.Run.isOffset(">") || Components.Run.isOffset("|>")) {
          return travelDistance * -1;
        }
        return travelDistance;
      }
    };
    Events.on("move", function(context) {
      if (!Glide2.isType("carousel") || !Components.Run.isOffset()) {
        return Translate2.set(context.movement);
      }
      Components.Transition.after(function() {
        Events.emit("translate.jump");
        Translate2.set(Components.Sizes.slideWidth * Glide2.index);
      });
      var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();
      return Translate2.set(startWidth - Components.Translate.getTravelDistance());
    });
    Events.on("destroy", function() {
      Translate2.remove();
    });
    return Translate2;
  }
  function Transition(Glide2, Components, Events) {
    var disabled = false;
    var Transition2 = {
      /**
       * Composes string of the CSS transition.
       *
       * @param {String} property
       * @return {String}
       */
      compose: function compose(property) {
        var settings = Glide2.settings;
        if (disabled) {
          return "".concat(property, " 0ms ").concat(settings.animationTimingFunc);
        }
        return "".concat(property, " ").concat(this.duration, "ms ").concat(settings.animationTimingFunc);
      },
      /**
       * Sets value of transition on HTML element.
       *
       * @param {String=} property
       * @return {Void}
       */
      set: function set() {
        var property = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
        Components.Html.wrapper.style.transition = this.compose(property);
      },
      /**
       * Removes value of transition from HTML element.
       *
       * @return {Void}
       */
      remove: function remove() {
        Components.Html.wrapper.style.transition = "";
      },
      /**
       * Runs callback after animation.
       *
       * @param  {Function} callback
       * @return {Void}
       */
      after: function after(callback) {
        setTimeout(function() {
          callback();
        }, this.duration);
      },
      /**
       * Enable transition.
       *
       * @return {Void}
       */
      enable: function enable() {
        disabled = false;
        this.set();
      },
      /**
       * Disable transition.
       *
       * @return {Void}
       */
      disable: function disable() {
        disabled = true;
        this.set();
      }
    };
    define(Transition2, "duration", {
      /**
       * Gets duration of the transition based
       * on currently running animation type.
       *
       * @return {Number}
       */
      get: function get() {
        var settings = Glide2.settings;
        if (Glide2.isType("slider") && Components.Run.offset) {
          return settings.rewindDuration;
        }
        return settings.animationDuration;
      }
    });
    Events.on("move", function() {
      Transition2.set();
    });
    Events.on(["build.before", "resize", "translate.jump"], function() {
      Transition2.disable();
    });
    Events.on("run", function() {
      Transition2.enable();
    });
    Events.on("destroy", function() {
      Transition2.remove();
    });
    return Transition2;
  }
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function get() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {
  }
  var supportsPassive$1 = supportsPassive;
  var START_EVENTS = ["touchstart", "mousedown"];
  var MOVE_EVENTS = ["touchmove", "mousemove"];
  var END_EVENTS = ["touchend", "touchcancel", "mouseup", "mouseleave"];
  var MOUSE_EVENTS = ["mousedown", "mousemove", "mouseup", "mouseleave"];
  function Swipe(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var swipeSin = 0;
    var swipeStartX = 0;
    var swipeStartY = 0;
    var disabled = false;
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Swipe2 = {
      /**
       * Initializes swipe bindings.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this.bindSwipeStart();
      },
      /**
       * Handler for `swipestart` event. Calculates entry points of the user's tap.
       *
       * @param {Object} event
       * @return {Void}
       */
      start: function start(event) {
        if (!disabled && !Glide2.disabled) {
          this.disable();
          var swipe = this.touches(event);
          swipeSin = null;
          swipeStartX = toInt(swipe.pageX);
          swipeStartY = toInt(swipe.pageY);
          this.bindSwipeMove();
          this.bindSwipeEnd();
          Events.emit("swipe.start");
        }
      },
      /**
       * Handler for `swipemove` event. Calculates user's tap angle and distance.
       *
       * @param {Object} event
       */
      move: function move(event) {
        if (!Glide2.disabled) {
          var _Glide$settings = Glide2.settings, touchAngle = _Glide$settings.touchAngle, touchRatio = _Glide$settings.touchRatio, classes = _Glide$settings.classes;
          var swipe = this.touches(event);
          var subExSx = toInt(swipe.pageX) - swipeStartX;
          var subEySy = toInt(swipe.pageY) - swipeStartY;
          var powEX = Math.abs(subExSx << 2);
          var powEY = Math.abs(subEySy << 2);
          var swipeHypotenuse = Math.sqrt(powEX + powEY);
          var swipeCathetus = Math.sqrt(powEY);
          swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);
          if (swipeSin * 180 / Math.PI < touchAngle) {
            event.stopPropagation();
            Components.Move.make(subExSx * toFloat(touchRatio));
            Components.Html.root.classList.add(classes.dragging);
            Events.emit("swipe.move");
          } else {
            return false;
          }
        }
      },
      /**
       * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.
       *
       * @param {Object} event
       * @return {Void}
       */
      end: function end(event) {
        if (!Glide2.disabled) {
          var _Glide$settings2 = Glide2.settings, perSwipe = _Glide$settings2.perSwipe, touchAngle = _Glide$settings2.touchAngle, classes = _Glide$settings2.classes;
          var swipe = this.touches(event);
          var threshold = this.threshold(event);
          var swipeDistance = swipe.pageX - swipeStartX;
          var swipeDeg = swipeSin * 180 / Math.PI;
          this.enable();
          if (swipeDistance > threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, "<")));
          } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {
            Components.Run.make(Components.Direction.resolve("".concat(perSwipe, ">")));
          } else {
            Components.Move.make();
          }
          Components.Html.root.classList.remove(classes.dragging);
          this.unbindSwipeMove();
          this.unbindSwipeEnd();
          Events.emit("swipe.end");
        }
      },
      /**
       * Binds swipe's starting event.
       *
       * @return {Void}
       */
      bindSwipeStart: function bindSwipeStart() {
        var _this = this;
        var _Glide$settings3 = Glide2.settings, swipeThreshold = _Glide$settings3.swipeThreshold, dragThreshold = _Glide$settings3.dragThreshold;
        if (swipeThreshold) {
          Binder.on(START_EVENTS[0], Components.Html.wrapper, function(event) {
            _this.start(event);
          }, capture);
        }
        if (dragThreshold) {
          Binder.on(START_EVENTS[1], Components.Html.wrapper, function(event) {
            _this.start(event);
          }, capture);
        }
      },
      /**
       * Unbinds swipe's starting event.
       *
       * @return {Void}
       */
      unbindSwipeStart: function unbindSwipeStart() {
        Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);
        Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);
      },
      /**
       * Binds swipe's moving event.
       *
       * @return {Void}
       */
      bindSwipeMove: function bindSwipeMove() {
        var _this2 = this;
        Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function(event) {
          _this2.move(event);
        }, Glide2.settings.throttle), capture);
      },
      /**
       * Unbinds swipe's moving event.
       *
       * @return {Void}
       */
      unbindSwipeMove: function unbindSwipeMove() {
        Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);
      },
      /**
       * Binds swipe's ending event.
       *
       * @return {Void}
       */
      bindSwipeEnd: function bindSwipeEnd() {
        var _this3 = this;
        Binder.on(END_EVENTS, Components.Html.wrapper, function(event) {
          _this3.end(event);
        });
      },
      /**
       * Unbinds swipe's ending event.
       *
       * @return {Void}
       */
      unbindSwipeEnd: function unbindSwipeEnd() {
        Binder.off(END_EVENTS, Components.Html.wrapper);
      },
      /**
       * Normalizes event touches points accorting to different types.
       *
       * @param {Object} event
       */
      touches: function touches(event) {
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return event;
        }
        return event.touches[0] || event.changedTouches[0];
      },
      /**
       * Gets value of minimum swipe distance settings based on event type.
       *
       * @return {Number}
       */
      threshold: function threshold(event) {
        var settings = Glide2.settings;
        if (MOUSE_EVENTS.indexOf(event.type) > -1) {
          return settings.dragThreshold;
        }
        return settings.swipeThreshold;
      },
      /**
       * Enables swipe event.
       *
       * @return {self}
       */
      enable: function enable() {
        disabled = false;
        Components.Transition.enable();
        return this;
      },
      /**
       * Disables swipe event.
       *
       * @return {self}
       */
      disable: function disable() {
        disabled = true;
        Components.Transition.disable();
        return this;
      }
    };
    Events.on("build.after", function() {
      Components.Html.root.classList.add(Glide2.settings.classes.swipeable);
    });
    Events.on("destroy", function() {
      Swipe2.unbindSwipeStart();
      Swipe2.unbindSwipeMove();
      Swipe2.unbindSwipeEnd();
      Binder.destroy();
    });
    return Swipe2;
  }
  function Images(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Images2 = {
      /**
       * Binds listener to glide wrapper.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this.bind();
      },
      /**
       * Binds `dragstart` event on wrapper to prevent dragging images.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on("dragstart", Components.Html.wrapper, this.dragstart);
      },
      /**
       * Unbinds `dragstart` event on wrapper.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off("dragstart", Components.Html.wrapper);
      },
      /**
       * Event handler. Prevents dragging.
       *
       * @return {Void}
       */
      dragstart: function dragstart(event) {
        event.preventDefault();
      }
    };
    Events.on("destroy", function() {
      Images2.unbind();
      Binder.destroy();
    });
    return Images2;
  }
  function Anchors(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var detached = false;
    var prevented = false;
    var Anchors2 = {
      /**
       * Setups a initial state of anchors component.
       *
       * @returns {Void}
       */
      mount: function mount2() {
        this._a = Components.Html.wrapper.querySelectorAll("a");
        this.bind();
      },
      /**
       * Binds events to anchors inside a track.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on("click", Components.Html.wrapper, this.click);
      },
      /**
       * Unbinds events attached to anchors inside a track.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off("click", Components.Html.wrapper);
      },
      /**
       * Handler for click event. Prevents clicks when glide is in `prevent` status.
       *
       * @param  {Object} event
       * @return {Void}
       */
      click: function click(event) {
        if (prevented) {
          event.stopPropagation();
          event.preventDefault();
        }
      },
      /**
       * Detaches anchors click event inside glide.
       *
       * @return {self}
       */
      detach: function detach() {
        prevented = true;
        if (!detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = false;
          }
          detached = true;
        }
        return this;
      },
      /**
       * Attaches anchors click events inside glide.
       *
       * @return {self}
       */
      attach: function attach() {
        prevented = false;
        if (detached) {
          for (var i = 0; i < this.items.length; i++) {
            this.items[i].draggable = true;
          }
          detached = false;
        }
        return this;
      }
    };
    define(Anchors2, "items", {
      /**
       * Gets collection of the arrows HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Anchors2._a;
      }
    });
    Events.on("swipe.move", function() {
      Anchors2.detach();
    });
    Events.on("swipe.end", function() {
      Components.Transition.after(function() {
        Anchors2.attach();
      });
    });
    Events.on("destroy", function() {
      Anchors2.attach();
      Anchors2.unbind();
      Binder.destroy();
    });
    return Anchors2;
  }
  var NAV_SELECTOR = '[data-glide-el="controls[nav]"]';
  var CONTROLS_SELECTOR = '[data-glide-el^="controls"]';
  var PREVIOUS_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*="<"]');
  var NEXT_CONTROLS_SELECTOR = "".concat(CONTROLS_SELECTOR, ' [data-glide-dir*=">"]');
  function Controls(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var capture = supportsPassive$1 ? {
      passive: true
    } : false;
    var Controls2 = {
      /**
       * Inits arrows. Binds events listeners
       * to the arrows HTML elements.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);
        this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);
        this._arrowControls = {
          previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),
          next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)
        };
        this.addBindings();
      },
      /**
       * Sets active class to current slide.
       *
       * @return {Void}
       */
      setActive: function setActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.addClass(this._n[i].children);
        }
      },
      /**
       * Removes active class to current slide.
       *
       * @return {Void}
       */
      removeActive: function removeActive() {
        for (var i = 0; i < this._n.length; i++) {
          this.removeClass(this._n[i].children);
        }
      },
      /**
       * Toggles active class on items inside navigation.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      addClass: function addClass(controls) {
        var settings = Glide2.settings;
        var item = controls[Glide2.index];
        if (!item) {
          return;
        }
        item.classList.add(settings.classes.nav.active);
        siblings(item).forEach(function(sibling) {
          sibling.classList.remove(settings.classes.nav.active);
        });
      },
      /**
       * Removes active class from active control.
       *
       * @param  {HTMLElement} controls
       * @return {Void}
       */
      removeClass: function removeClass(controls) {
        var item = controls[Glide2.index];
        item === null || item === void 0 ? void 0 : item.classList.remove(Glide2.settings.classes.nav.active);
      },
      /**
       * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
       */
      setArrowState: function setArrowState() {
        if (Glide2.settings.rewind) {
          return;
        }
        var next = Controls2._arrowControls.next;
        var previous = Controls2._arrowControls.previous;
        this.resetArrowState(next, previous);
        if (Glide2.index === 0) {
          this.disableArrow(previous);
        }
        if (Glide2.index === Components.Run.length) {
          this.disableArrow(next);
        }
      },
      /**
       * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
       *
       * @param {NodeList[]} lists
       */
      resetArrowState: function resetArrowState() {
        var settings = Glide2.settings;
        for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
          lists[_key] = arguments[_key];
        }
        lists.forEach(function(list) {
          toArray(list).forEach(function(element) {
            element.classList.remove(settings.classes.arrow.disabled);
          });
        });
      },
      /**
       * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
       *
       * @param {NodeList[]} lists
       */
      disableArrow: function disableArrow() {
        var settings = Glide2.settings;
        for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          lists[_key2] = arguments[_key2];
        }
        lists.forEach(function(list) {
          toArray(list).forEach(function(element) {
            element.classList.add(settings.classes.arrow.disabled);
          });
        });
      },
      /**
       * Adds handles to the each group of controls.
       *
       * @return {Void}
       */
      addBindings: function addBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.bind(this._c[i].children);
        }
      },
      /**
       * Removes handles from the each group of controls.
       *
       * @return {Void}
       */
      removeBindings: function removeBindings() {
        for (var i = 0; i < this._c.length; i++) {
          this.unbind(this._c[i].children);
        }
      },
      /**
       * Binds events to arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      bind: function bind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.on("click", elements[i], this.click);
          Binder.on("touchstart", elements[i], this.click, capture);
        }
      },
      /**
       * Unbinds events binded to the arrows HTML elements.
       *
       * @param {HTMLCollection} elements
       * @return {Void}
       */
      unbind: function unbind(elements) {
        for (var i = 0; i < elements.length; i++) {
          Binder.off(["click", "touchstart"], elements[i]);
        }
      },
      /**
       * Handles `click` event on the arrows HTML elements.
       * Moves slider in direction given via the
       * `data-glide-dir` attribute.
       *
       * @param {Object} event
       * @return {void}
       */
      click: function click(event) {
        if (!supportsPassive$1 && event.type === "touchstart") {
          event.preventDefault();
        }
        var direction = event.currentTarget.getAttribute("data-glide-dir");
        Components.Run.make(Components.Direction.resolve(direction));
      }
    };
    define(Controls2, "items", {
      /**
       * Gets collection of the controls HTML elements.
       *
       * @return {HTMLElement[]}
       */
      get: function get() {
        return Controls2._c;
      }
    });
    Events.on(["mount.after", "move.after"], function() {
      Controls2.setActive();
    });
    Events.on(["mount.after", "run"], function() {
      Controls2.setArrowState();
    });
    Events.on("destroy", function() {
      Controls2.removeBindings();
      Controls2.removeActive();
      Binder.destroy();
    });
    return Controls2;
  }
  function Keyboard(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Keyboard2 = {
      /**
       * Binds keyboard events on component mount.
       *
       * @return {Void}
       */
      mount: function mount2() {
        if (Glide2.settings.keyboard) {
          this.bind();
        }
      },
      /**
       * Adds keyboard press events.
       *
       * @return {Void}
       */
      bind: function bind() {
        Binder.on("keyup", document, this.press);
      },
      /**
       * Removes keyboard press events.
       *
       * @return {Void}
       */
      unbind: function unbind() {
        Binder.off("keyup", document);
      },
      /**
       * Handles keyboard's arrows press and moving glide foward and backward.
       *
       * @param  {Object} event
       * @return {Void}
       */
      press: function press(event) {
        var perSwipe = Glide2.settings.perSwipe;
        var arrowSymbols = {
          ArrowRight: ">",
          ArrowLeft: "<"
        };
        if (["ArrowRight", "ArrowLeft"].includes(event.code)) {
          Components.Run.make(Components.Direction.resolve("".concat(perSwipe).concat(arrowSymbols[event.code])));
        }
      }
    };
    Events.on(["destroy", "update"], function() {
      Keyboard2.unbind();
    });
    Events.on("update", function() {
      Keyboard2.mount();
    });
    Events.on("destroy", function() {
      Binder.destroy();
    });
    return Keyboard2;
  }
  function Autoplay(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var Autoplay2 = {
      /**
       * Initializes autoplaying and events.
       *
       * @return {Void}
       */
      mount: function mount2() {
        this.enable();
        this.start();
        if (Glide2.settings.hoverpause) {
          this.bind();
        }
      },
      /**
       * Enables autoplaying
       *
       * @returns {Void}
       */
      enable: function enable() {
        this._e = true;
      },
      /**
       * Disables autoplaying.
       *
       * @returns {Void}
       */
      disable: function disable() {
        this._e = false;
      },
      /**
       * Starts autoplaying in configured interval.
       *
       * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings
       * @return {Void}
       */
      start: function start() {
        var _this = this;
        if (!this._e) {
          return;
        }
        this.enable();
        if (Glide2.settings.autoplay) {
          if (isUndefined(this._i)) {
            this._i = setInterval(function() {
              _this.stop();
              Components.Run.make(">");
              _this.start();
              Events.emit("autoplay");
            }, this.time);
          }
        }
      },
      /**
       * Stops autorunning of the glide.
       *
       * @return {Void}
       */
      stop: function stop() {
        this._i = clearInterval(this._i);
      },
      /**
       * Stops autoplaying while mouse is over glide's area.
       *
       * @return {Void}
       */
      bind: function bind() {
        var _this2 = this;
        Binder.on("mouseover", Components.Html.root, function() {
          if (_this2._e) {
            _this2.stop();
          }
        });
        Binder.on("mouseout", Components.Html.root, function() {
          if (_this2._e) {
            _this2.start();
          }
        });
      },
      /**
       * Unbind mouseover events.
       *
       * @returns {Void}
       */
      unbind: function unbind() {
        Binder.off(["mouseover", "mouseout"], Components.Html.root);
      }
    };
    define(Autoplay2, "time", {
      /**
       * Gets time period value for the autoplay interval. Prioritizes
       * times in `data-glide-autoplay` attrubutes over options.
       *
       * @return {Number}
       */
      get: function get() {
        var autoplay = Components.Html.slides[Glide2.index].getAttribute("data-glide-autoplay");
        if (autoplay) {
          return toInt(autoplay);
        }
        return toInt(Glide2.settings.autoplay);
      }
    });
    Events.on(["destroy", "update"], function() {
      Autoplay2.unbind();
    });
    Events.on(["run.before", "swipe.start", "update"], function() {
      Autoplay2.stop();
    });
    Events.on(["pause", "destroy"], function() {
      Autoplay2.disable();
      Autoplay2.stop();
    });
    Events.on(["run.after", "swipe.end"], function() {
      Autoplay2.start();
    });
    Events.on(["play"], function() {
      Autoplay2.enable();
      Autoplay2.start();
    });
    Events.on("update", function() {
      Autoplay2.mount();
    });
    Events.on("destroy", function() {
      Binder.destroy();
    });
    return Autoplay2;
  }
  function sortBreakpoints(points) {
    if (isObject(points)) {
      return sortKeys(points);
    } else {
      warn("Breakpoints option must be an object");
    }
    return {};
  }
  function Breakpoints(Glide2, Components, Events) {
    var Binder = new EventsBinder();
    var settings = Glide2.settings;
    var points = sortBreakpoints(settings.breakpoints);
    var defaults2 = Object.assign({}, settings);
    var Breakpoints2 = {
      /**
       * Matches settings for currectly matching media breakpoint.
       *
       * @param {Object} points
       * @returns {Object}
       */
      match: function match(points2) {
        if (typeof window.matchMedia !== "undefined") {
          for (var point in points2) {
            if (points2.hasOwnProperty(point)) {
              if (window.matchMedia("(max-width: ".concat(point, "px)")).matches) {
                return points2[point];
              }
            }
          }
        }
        return defaults2;
      }
    };
    Object.assign(settings, Breakpoints2.match(points));
    Binder.on("resize", window, throttle(function() {
      Glide2.settings = mergeOptions(settings, Breakpoints2.match(points));
    }, Glide2.settings.throttle));
    Events.on("update", function() {
      points = sortBreakpoints(points);
      defaults2 = Object.assign({}, settings);
    });
    Events.on("destroy", function() {
      Binder.off("resize", window);
    });
    return Breakpoints2;
  }
  var COMPONENTS = {
    // Required
    Html,
    Translate,
    Transition,
    Direction,
    Peek,
    Sizes,
    Gaps,
    Move,
    Clones,
    Resize,
    Build,
    Run,
    // Optional
    Swipe,
    Images,
    Anchors,
    Controls,
    Keyboard,
    Autoplay,
    Breakpoints
  };
  var Glide = /* @__PURE__ */ function(_Core) {
    _inherits(Glide2, _Core);
    var _super = _createSuper(Glide2);
    function Glide2() {
      _classCallCheck(this, Glide2);
      return _super.apply(this, arguments);
    }
    _createClass(Glide2, [{
      key: "mount",
      value: function mount2() {
        var extensions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return _get(_getPrototypeOf(Glide2.prototype), "mount", this).call(this, Object.assign({}, COMPONENTS, extensions));
      }
    }]);
    return Glide2;
  }(Glide$1);
  function create_element(html) {
    let div = document.createElement("div");
    div.innerHTML = html.trim();
    return div.firstChild;
  }
  function glide_slider2(el, options) {
    let default_options = {
      type: "carousel",
      startAt: 0,
      perView: 3,
      focusAt: "center",
      gap: 20,
      autoplay: 2e3,
      hoverpause: true,
      keyboard: true,
      animationDuration: 400,
      arrows: true,
      bullets: false
    };
    let settings = Object.assign(default_options, options);
    let glide = new Glide(el, settings);
    let sb = new Array();
    if (settings.arrows) {
      sb.push('<div class="glide__arrows" data-glide-el="controls">');
      sb.push('<button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path></svg></button>');
      sb.push('<button class="glide__arrow glide__arrow--right" data-glide-dir=">"><svg viewBox="0 0 24 24" style="fill: currentColor;"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg></button>');
      sb.push("</div>");
      let div = create_element(sb.join(""));
      el.append(div);
    }
    if (settings.bullets) {
      sb = new Array();
      sb.push('<div class="glide__bullets" data-glide-el="controls[nav]">');
      sb.push('<button class="glide__bullet" data-glide-dir="=0"></button>');
      sb.push('<button class="glide__bullet" data-glide-dir="=1"></button>');
      sb.push('<button class="glide__bullet" data-glide-dir="=2"></button>');
      sb.push("</div>");
      let div = create_element(sb.join(""));
      el.append(div);
    }
    glide.mount();
    return glide;
  }
  return glide_slider2;
}();
