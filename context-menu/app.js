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
