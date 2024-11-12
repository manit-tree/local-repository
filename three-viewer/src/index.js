import {ThreeViewer, DepthBufferPlugin} from 'https://threepipe.org/dist/index.mjs'

export function render(el, url = 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf') {
    return new Promise((resolve, reject) => {
        const viewer = new ThreeViewer({canvas: el});

        // Add some plugins 
        viewer.addPluginSync(new DepthBufferPlugin());
      
        // Load an environment map
        const envPromise = viewer.setEnvironmentMap('https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr')
        const modelPromise = viewer.load(url, {
            autoCenter: true,
            autoScale: true,
        })

        Promise.all([envPromise, modelPromise]).then(([env, model]) => {
            resolve()
        }).catch(error => {
            reject();
        })
    })
}
  