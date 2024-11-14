import {colors} from './colors.js';
import './style.css';

export function select_color(current_color) {
    let dlg = new Graphite.ModalDialog({
        id: 'color-dialog',
        width: 560,
        padding: '40px 30px 30px'
    })

    let sb = new Array();

    sb.push('<div class="colors">');

    colors.forEach(color => {
        let cls = '';

        if (color == current_color) {
            cls = 'active';
        }

        sb.push('<span class="' + cls + '" data-color="' + color + '" style="--color:var(--' + color +')" title="' + color + '"></span>');
    })

    sb.push('</div>');
    dlg.html(sb.join(''));


    dlg.popup.on('click', evt => {
        let el = evt.target;

        let color = el.getAttribute('data-color');

        dlg.set_cmd('ok');
        dlg.set_value(color);
        dlg.close();
    })


    return dlg.open();
}