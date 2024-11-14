import Dropzone from 'dropzone';
import './style.css';

export class ImageUploader {
    constructor(options = {}) {
        let default_options = {
            url: './upload',
            disablePreviews: true
        }

        this.options = Object.assign(default_options, options);
    }

    mount(el, object_fit = 'contain') {
        let preview; 

        el.setAttribute('data-role', 'image-uploader');
        preview = document.createElement('img');
        preview.classList.add('preview');
        preview.style.setProperty('--object-fit', object_fit);
        el.append(preview);

        this.options.init = function() {
            this.on('addedfile', async file => {            
                let reader = new FileReader();

                reader.onload = (evt) => {
                    el.setAttribute('data-filename', file.name);
                    el.querySelector('img.preview').src = reader.result;
                }

                reader.readAsDataURL(file);
            })            
        }

        let dropzone = new Dropzone(el, this.options);
    }
}
