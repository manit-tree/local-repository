### Usage

```js
import { ContextMenu } from './src/index.js';

let context_menu = new ContextMenu('./context-menu.json');

context_menu.on('bold', function(data) {
    console.log(data);
    console.log(this);
})

context_menu.on('before-show', function() {
    console.log('before-show');
    console.log(this);
    return true;
})

context_menu.mount(yellow_box);
context_menu.mount(red_box);
```

### context-menu.json

```json
{
    "width": 220,
    "items": [
        {
            "id":"01",
            "icon":"<svg fill=\"#000000\" version=\"1.1\" id=\"Icons\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \r\t viewBox=\"0 0 32 32\" xml:space=\"preserve\">\r<g>\r\t<path d=\"M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6\r\t\tc0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z\"/>\r\t<path d=\"M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z\"/>\r</g>\r<g>\r\t<path d=\"M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z\"/>\r</g>\r</svg>",
            "text":"Hello world",
            "action":"bold",
            "group":"",
            "data":""
        },

        {
            "id":"02",
            "icon":"<svg viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r  <rect width=\"16\" height=\"16\" id=\"icon-bound\" fill=\"none\" />\r  <path fill=\"currentColor\" id=\"bold\" d=\"M9,1l-6,0l-0,14l6,0c2.208,0 4,-1.792 4,-4c0,-1.194 -0.524,-2.267 -1.355,-3c0.831,-0.733 1.355,-1.806 1.355,-3c-0,-2.208 -1.792,-4 -4,-4Zm-1,8c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Zm0,-6c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Z\" />\r</svg>",
            "scale": "0.95",
            "text":"How are you ?",
            "action":"xxx",
            "group":"",
            "data":""
        },

        {
            "text":"-"
        },

        {
            "id":"01",
            "icon":"<svg fill=\"#000000\" version=\"1.1\" id=\"Icons\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \r\t viewBox=\"0 0 32 32\" xml:space=\"preserve\">\r<g>\r\t<path d=\"M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6\r\t\tc0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z\"/>\r\t<path d=\"M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z\"/>\r</g>\r<g>\r\t<path d=\"M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z\"/>\r</g>\r</svg>",
            "text":"Hello world",
            "action":"xxx",
            "group":"",
            "data":""
        },

        {
            "id":"02",
            "icon":"<svg viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r  <rect width=\"16\" height=\"16\" id=\"icon-bound\" fill=\"none\" />\r  <path fill=\"currentColor\" id=\"bold\" d=\"M9,1l-6,0l-0,14l6,0c2.208,0 4,-1.792 4,-4c0,-1.194 -0.524,-2.267 -1.355,-3c0.831,-0.733 1.355,-1.806 1.355,-3c-0,-2.208 -1.792,-4 -4,-4Zm-1,8c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Zm0,-6c1.104,-0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-0,0 -2,0 -2,0l-0,-4l2,-0Z\" />\r</svg>",
            "scale":"0.95",
            "text":"How are you ?",
            "action":"xxx",
            "group":"",
            "data":""
        }        
    ]
}
```