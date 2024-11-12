import { ThreeViewer as m, DepthBufferPlugin as i } from "https://threepipe.org/dist/index.mjs";
function d(t, r = "https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf") {
  return new Promise((n, o) => {
    const e = new m({ canvas: t });
    e.addPluginSync(new i());
    const s = e.setEnvironmentMap("https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr"), a = e.load(r, {
      autoCenter: !0,
      autoScale: !0
    });
    Promise.all([s, a]).then(([l, u]) => {
      n();
    }).catch((l) => {
      o();
    });
  });
}
export {
  d as render
};
