import {emojis} from './emojis.js';
import './style.css';

document.on('keydown', evt => {
    if (evt.ctrlKey && evt.shiftKey && evt.keyCode == 69) {
        evt.preventDefault();
        evt.stopPropagation();

        let sel = document.getSelection();

        if (sel.rangeCount) {
            let range = sel.getRangeAt(0);

            if (range.startContainer.parentElement.closest('.medium-editor')) { 
                select_emoji().then(res => {
                    if (res.cmd == 'ok') {
                        document.execCommand('insertText', false, res.value);
                    }
                })
            }
        }
    }
})

export function select_emoji() {
    let dlg = new Graphite.ModalDialog({
        id: 'emoji-dialog',
        width: 680,
        padding: '40px 30px 30px'
    })

    let sb = new Array();

    sb.push('<div class="emojis">');

    emojis.forEach(emoji => {
        sb.push('<span>' + emoji + '</span>');
    })

    sb.push('</div>');
    dlg.html(sb.join(''));


    dlg.popup.on('click', evt => {
        let el = evt.target;

        let emoji = el.innerText;

        dlg.set_cmd('ok');
        dlg.set_value(emoji);
        dlg.close();
    })


    return dlg.open();
}