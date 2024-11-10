export default function reactivate(obj:Object, cb:Function):Object {
  function make_reactive (obj:Object, key:string) {
    let val = obj[key];

    Object.defineProperty(obj, key, {
      get () {
        return val;
      },
      set (new_val) {
        val = new_val;
        cb(key);
      }
    })
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      make_reactive(obj, key)
    }
  }

  return obj;
}