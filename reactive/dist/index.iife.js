var reactivate = function() {
  "use strict";
  function reactivate2(obj, cb) {
    function make_reactive(obj2, key) {
      let val = obj2[key];
      Object.defineProperty(obj2, key, {
        get() {
          return val;
        },
        set(new_val) {
          val = new_val;
          cb(key);
        }
      });
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        make_reactive(obj, key);
      }
    }
    return obj;
  }
  return reactivate2;
}();
