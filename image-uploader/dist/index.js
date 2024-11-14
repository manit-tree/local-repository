(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("[data-role=image-uploader]{background-color:#1a1a1a;width:320px;height:320px;position:relative}[data-role=image-uploader] .dz-message{display:none}[data-role=image-uploader] img.preview{object-position:center;object-fit:var(--object-fit,contain);width:100%;height:100%;display:none;position:absolute;top:0;bottom:0;left:0;right:0}[data-role=image-uploader][data-filename] img.preview{display:block}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var f = F;
function F() {
  var n = [].slice.call(arguments), e = !1;
  typeof n[0] == "boolean" && (e = n.shift());
  var t = n[0];
  if (g(t))
    throw new Error("extendee must be an object");
  for (var i = n.slice(1), s = i.length, l = 0; l < s; l++) {
    var r = i[l];
    for (var o in r)
      if (Object.prototype.hasOwnProperty.call(r, o)) {
        var u = r[o];
        if (e && b(u)) {
          var d = Array.isArray(u) ? [] : {};
          t[o] = F(
            !0,
            Object.prototype.hasOwnProperty.call(t, o) && !g(t[o]) ? t[o] : d,
            u
          );
        } else
          t[o] = u;
      }
  }
  return t;
}
function b(n) {
  return Array.isArray(n) || {}.toString.call(n) == "[object Object]";
}
function g(n) {
  return !n || typeof n != "object" && typeof n != "function";
}
function k(n) {
  return n && n.__esModule ? n.default : n;
}
class v {
  // Add an event listener for given event
  on(e, t) {
    return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    this._callbacks = this._callbacks || {};
    let i = this._callbacks[e];
    if (i) for (let s of i) s.apply(this, t);
    return this.element && this.element.dispatchEvent(this.makeEvent("dropzone:" + e, {
      args: t
    })), this;
  }
  makeEvent(e, t) {
    let i = {
      bubbles: !0,
      cancelable: !0,
      detail: t
    };
    if (typeof window.CustomEvent == "function") return new CustomEvent(e, i);
    var s = document.createEvent("CustomEvent");
    return s.initCustomEvent(e, i.bubbles, i.cancelable, i.detail), s;
  }
  // Remove event listener for given event. If fn is not provided, all event
  // listeners for that event will be removed. If neither is provided, all
  // event listeners will be removed.
  off(e, t) {
    if (!this._callbacks || arguments.length === 0)
      return this._callbacks = {}, this;
    let i = this._callbacks[e];
    if (!i) return this;
    if (arguments.length === 1)
      return delete this._callbacks[e], this;
    for (let s = 0; s < i.length; s++)
      if (i[s] === t) {
        i.splice(s, 1);
        break;
      }
    return this;
  }
}
var y = {};
y = `<div class="dz-preview dz-file-preview">
  <div class="dz-image"><img data-dz-thumbnail=""></div>
  <div class="dz-details">
    <div class="dz-size"><span data-dz-size=""></span></div>
    <div class="dz-filename"><span data-dz-name=""></span></div>
  </div>
  <div class="dz-progress">
    <span class="dz-upload" data-dz-uploadprogress=""></span>
  </div>
  <div class="dz-error-message"><span data-dz-errormessage=""></span></div>
  <div class="dz-success-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2071 29.7929L14.2929 25.7071C14.6834 25.3166 15.3166 25.3166 15.7071 25.7071L21.2929 31.2929C21.6834 31.6834 22.3166 31.6834 22.7071 31.2929L38.2929 15.7071C38.6834 15.3166 39.3166 15.3166 39.7071 15.7071L43.7929 19.7929C44.1834 20.1834 44.1834 20.8166 43.7929 21.2071L22.7071 42.2929C22.3166 42.6834 21.6834 42.6834 21.2929 42.2929L10.2071 31.2071C9.81658 30.8166 9.81658 30.1834 10.2071 29.7929Z"></path>
    </svg>
  </div>
  <div class="dz-error-mark">
    <svg width="54" height="54" viewBox="0 0 54 54" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.2929 20.2929L19.2071 13.2071C18.8166 12.8166 18.1834 12.8166 17.7929 13.2071L13.2071 17.7929C12.8166 18.1834 12.8166 18.8166 13.2071 19.2071L20.2929 26.2929C20.6834 26.6834 20.6834 27.3166 20.2929 27.7071L13.2071 34.7929C12.8166 35.1834 12.8166 35.8166 13.2071 36.2071L17.7929 40.7929C18.1834 41.1834 18.8166 41.1834 19.2071 40.7929L26.2929 33.7071C26.6834 33.3166 27.3166 33.3166 27.7071 33.7071L34.7929 40.7929C35.1834 41.1834 35.8166 41.1834 36.2071 40.7929L40.7929 36.2071C41.1834 35.8166 41.1834 35.1834 40.7929 34.7929L33.7071 27.7071C33.3166 27.3166 33.3166 26.6834 33.7071 26.2929L40.7929 19.2071C41.1834 18.8166 41.1834 18.1834 40.7929 17.7929L36.2071 13.2071C35.8166 12.8166 35.1834 12.8166 34.7929 13.2071L27.7071 20.2929C27.3166 20.6834 26.6834 20.6834 26.2929 20.2929Z"></path>
    </svg>
  </div>
</div>
`;
let C = {
  /**
  * Has to be specified on elements other than form (or when the form doesn't
  * have an `action` attribute).
  *
  * You can also provide a function that will be called with `files` and
  * `dataBlocks`  and must return the url as string.
  */
  url: null,
  /**
  * Can be changed to `"put"` if necessary. You can also provide a function
  * that will be called with `files` and must return the method (since `v3.12.0`).
  */
  method: "post",
  /**
  * Will be set on the XHRequest.
  */
  withCredentials: !1,
  /**
  * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
  * If set to null or 0, no timeout is going to be set.
  */
  timeout: null,
  /**
  * How many file uploads to process in parallel (See the
  * Enqueuing file uploads documentation section for more info)
  */
  parallelUploads: 2,
  /**
  * Whether to send multiple files in one request. If
  * this it set to true, then the fallback file input element will
  * have the `multiple` attribute as well. This option will
  * also trigger additional events (like `processingmultiple`). See the events
  * documentation section for more information.
  */
  uploadMultiple: !1,
  /**
  * Whether you want files to be uploaded in chunks to your server. This can't be
  * used in combination with `uploadMultiple`.
  *
  * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
  */
  chunking: !1,
  /**
  * If `chunking` is enabled, this defines whether **every** file should be chunked,
  * even if the file size is below chunkSize. This means, that the additional chunk
  * form data will be submitted and the `chunksUploaded` callback will be invoked.
  */
  forceChunking: !1,
  /**
  * If `chunking` is `true`, then this defines the chunk size in bytes.
  */
  chunkSize: 2097152,
  /**
  * If `true`, the individual chunks of a file are being uploaded simultaneously.
  */
  parallelChunkUploads: !1,
  /**
  * Whether a chunk should be retried if it fails.
  */
  retryChunks: !1,
  /**
  * If `retryChunks` is true, how many times should it be retried.
  */
  retryChunksLimit: 3,
  /**
  * The maximum filesize (in MiB) that is allowed to be uploaded.
  */
  maxFilesize: 256,
  /**
  * The name of the file param that gets transferred.
  * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
  * Dropzone will append `[]` to the name.
  */
  paramName: "file",
  /**
  * Whether thumbnails for images should be generated
  */
  createImageThumbnails: !0,
  /**
  * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
  */
  maxThumbnailFilesize: 10,
  /**
  * If `null`, the ratio of the image will be used to calculate it.
  */
  thumbnailWidth: 120,
  /**
  * The same as `thumbnailWidth`. If both are null, images will not be resized.
  */
  thumbnailHeight: 120,
  /**
  * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
  * Can be either `contain` or `crop`.
  */
  thumbnailMethod: "crop",
  /**
  * If set, images will be resized to these dimensions before being **uploaded**.
  * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
  * ratio of the file will be preserved.
  *
  * The `options.transformFile` function uses these options, so if the `transformFile` function
  * is overridden, these options don't do anything.
  */
  resizeWidth: null,
  /**
  * See `resizeWidth`.
  */
  resizeHeight: null,
  /**
  * The mime type of the resized image (before it gets uploaded to the server).
  * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
  * See `resizeWidth` for more information.
  */
  resizeMimeType: null,
  /**
  * The quality of the resized images. See `resizeWidth`.
  */
  resizeQuality: 0.8,
  /**
  * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
  * Can be either `contain` or `crop`.
  */
  resizeMethod: "contain",
  /**
  * The base that is used to calculate the **displayed** filesize. You can
  * change this to 1024 if you would rather display kibibytes, mebibytes,
  * etc... 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte`
  * not `1 kilobyte`. You can change this to `1024` if you don't care about
  * validity.
  */
  filesizeBase: 1e3,
  /**
  * If not `null` defines how many files this Dropzone handles. If it exceeds,
  * the event `maxfilesexceeded` will be called. The dropzone element gets the
  * class `dz-max-files-reached` accordingly so you can provide visual
  * feedback.
  */
  maxFiles: null,
  /**
  * An optional object to send additional headers to the server. Eg:
  * `{ "My-Awesome-Header": "header value" }`
  */
  headers: null,
  /**
  * Should the default headers be set or not?
  * Accept: application/json <- for requesting json response
  * Cache-Control: no-cache <- Request shouldnt be cached
  * X-Requested-With: XMLHttpRequest <- We sent the request via XMLHttpRequest
  */
  defaultHeaders: !0,
  /**
  * If `true`, the dropzone element itself will be clickable, if `false`
  * nothing will be clickable.
  *
  * You can also pass an HTML element, a CSS selector (for multiple elements)
  * or an array of those. In that case, all of those elements will trigger an
  * upload when clicked.
  */
  clickable: !0,
  /**
  * Whether hidden files in directories should be ignored.
  */
  ignoreHiddenFiles: !0,
  /**
  * The default implementation of `accept` checks the file's mime type or
  * extension against this list. This is a comma separated list of mime
  * types or file extensions.
  *
  * Eg.: `image/*,application/pdf,.psd`
  *
  * If the Dropzone is `clickable` this option will also be used as
  * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
  * parameter on the hidden file input as well.
  */
  acceptedFiles: null,
  /**
  * **Deprecated!**
  * Use acceptedFiles instead.
  */
  acceptedMimeTypes: null,
  /**
  * If false, files will be added to the queue but the queue will not be
  * processed automatically.
  * This can be useful if you need some additional user input before sending
  * files (or if you want want all files sent at once).
  * If you're ready to send the file simply call `myDropzone.processQueue()`.
  *
  * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
  * section for more information.
  */
  autoProcessQueue: !0,
  /**
  * If false, files added to the dropzone will not be queued by default.
  * You'll have to call `enqueueFile(file)` manually.
  */
  autoQueue: !0,
  /**
  * If `true`, this will add a link to every file preview to remove or cancel (if
  * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
  * and `dictRemoveFile` options are used for the wording.
  */
  addRemoveLinks: !1,
  /**
  * Defines where to display the file previews – if `null` the
  * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
  * selector. The element should have the `dropzone-previews` class so
  * the previews are displayed properly.
  */
  previewsContainer: null,
  /**
  * Set this to `true` if you don't want previews to be shown.
  */
  disablePreviews: !1,
  /**
  * This is the element the hidden input field (which is used when clicking on the
  * dropzone to trigger file selection) will be appended to. This might
  * be important in case you use frameworks to switch the content of your page.
  *
  * Can be a selector string, or an element directly.
  */
  hiddenInputContainer: "body",
  /**
  * If null, no capture type will be specified
  * If camera, mobile devices will skip the file selection and choose camera
  * If microphone, mobile devices will skip the file selection and choose the microphone
  * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
  * On apple devices multiple must be set to false.  AcceptedFiles may need to
  * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
  */
  capture: null,
  /**
  * **Deprecated**. Use `renameFile` instead.
  */
  renameFilename: null,
  /**
  * A function that is invoked before the file is uploaded to the server and renames the file.
  * This function gets the `File` as argument and can use the `file.name`. The actual name of the
  * file that gets used during the upload can be accessed through `file.upload.filename`.
  */
  renameFile: null,
  /**
  * If `true` the fallback will be forced. This is very useful to test your server
  * implementations first and make sure that everything works as
  * expected without dropzone if you experience problems, and to test
  * how your fallbacks will look.
  */
  forceFallback: !1,
  /**
  * The text used before any files are dropped.
  */
  dictDefaultMessage: "Drop files here to upload",
  /**
  * The text that replaces the default message text it the browser is not supported.
  */
  dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
  /**
  * The text that will be added before the fallback form.
  * If you provide a  fallback element yourself, or if this option is `null` this will
  * be ignored.
  */
  dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
  /**
  * If the filesize is too big.
  * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
  */
  dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
  /**
  * If the file doesn't match the file type.
  */
  dictInvalidFileType: "You can't upload files of this type.",
  /**
  * If the server response was invalid.
  * `{{statusCode}}` will be replaced with the servers status code.
  */
  dictResponseError: "Server responded with {{statusCode}} code.",
  /**
  * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
  */
  dictCancelUpload: "Cancel upload",
  /**
  * The text that is displayed if an upload was manually canceled
  */
  dictUploadCanceled: "Upload canceled.",
  /**
  * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
  */
  dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
  /**
  * If `addRemoveLinks` is true, the text to be used to remove a file.
  */
  dictRemoveFile: "Remove file",
  /**
  * If this is not null, then the user will be prompted before removing a file.
  */
  dictRemoveFileConfirmation: null,
  /**
  * Displayed if `maxFiles` is st and exceeded.
  * The string `{{maxFiles}}` will be replaced by the configuration value.
  */
  dictMaxFilesExceeded: "You can not upload any more files.",
  /**
  * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
  * `b` for bytes.
  */
  dictFileSizeUnits: {
    tb: "TB",
    gb: "GB",
    mb: "MB",
    kb: "KB",
    b: "b"
  },
  /**
  * Called when dropzone initialized
  * You can add event listeners here
  */
  init() {
  },
  /**
  * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
  * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
  * of a function, this needs to return a map.
  *
  * The default implementation does nothing for normal uploads, but adds relevant information for
  * chunked uploads.
  *
  * This is the same as adding hidden input fields in the form element.
  */
  params(n, e, t) {
    if (t) return {
      dzuuid: t.file.upload.uuid,
      dzchunkindex: t.index,
      dztotalfilesize: t.file.size,
      dzchunksize: this.options.chunkSize,
      dztotalchunkcount: t.file.upload.totalChunkCount,
      dzchunkbyteoffset: t.index * this.options.chunkSize
    };
  },
  /**
  * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
  * and a `done` function as parameters.
  *
  * If the done function is invoked without arguments, the file is "accepted" and will
  * be processed. If you pass an error message, the file is rejected, and the error
  * message will be displayed.
  * This function will not be called if the file is too big or doesn't match the mime types.
  */
  accept(n, e) {
    return e();
  },
  /**
  * The callback that will be invoked when all chunks have been uploaded for a file.
  * It gets the file for which the chunks have been uploaded as the first parameter,
  * and the `done` function as second. `done()` needs to be invoked when everything
  * needed to finish the upload process is done.
  */
  chunksUploaded: function(n, e) {
    e();
  },
  /**
  * Sends the file as binary blob in body instead of form data.
  * If this is set, the `params` option will be ignored.
  * It's an error to set this to `true` along with `uploadMultiple` since
  * multiple files cannot be in a single binary body.
  */
  binaryBody: !1,
  /**
  * Gets called when the browser is not supported.
  * The default implementation shows the fallback input field and adds
  * a text.
  */
  fallback() {
    let n;
    this.element.className = `${this.element.className} dz-browser-not-supported`;
    for (let t of this.element.getElementsByTagName("div")) if (/(^| )dz-message($| )/.test(t.className)) {
      n = t, t.className = "dz-message";
      break;
    }
    n || (n = a.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(n));
    let e = n.getElementsByTagName("span")[0];
    return e && (e.textContent != null ? e.textContent = this.options.dictFallbackMessage : e.innerText != null && (e.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm());
  },
  /**
  * Gets called to calculate the thumbnail dimensions.
  *
  * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
  *
  *  - `srcWidth` & `srcHeight` (required)
  *  - `trgWidth` & `trgHeight` (required)
  *  - `srcX` & `srcY` (optional, default `0`)
  *  - `trgX` & `trgY` (optional, default `0`)
  *
  * Those values are going to be used by `ctx.drawImage()`.
  */
  resize(n, e, t, i) {
    let s = {
      srcX: 0,
      srcY: 0,
      srcWidth: n.width,
      srcHeight: n.height
    }, l = n.width / n.height;
    e == null && t == null ? (e = s.srcWidth, t = s.srcHeight) : e == null ? e = t * l : t == null && (t = e / l), e = Math.min(e, s.srcWidth), t = Math.min(t, s.srcHeight);
    let r = e / t;
    if (s.srcWidth > e || s.srcHeight > t)
      if (i === "crop")
        l > r ? (s.srcHeight = n.height, s.srcWidth = s.srcHeight * r) : (s.srcWidth = n.width, s.srcHeight = s.srcWidth / r);
      else if (i === "contain")
        l > r ? t = e / l : e = t * l;
      else throw new Error(`Unknown resizeMethod '${i}'`);
    return s.srcX = (n.width - s.srcWidth) / 2, s.srcY = (n.height - s.srcHeight) / 2, s.trgWidth = e, s.trgHeight = t, s;
  },
  /**
  * Can be used to transform the file (for example, resize an image if necessary).
  *
  * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
  * images according to those dimensions.
  *
  * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
  * to be invoked with the file when the transformation is done.
  */
  transformFile(n, e) {
    return (this.options.resizeWidth || this.options.resizeHeight) && n.type.match(/image.*/) ? this.resizeImage(n, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, e) : e(n);
  },
  /**
  * A string that contains the template used for each dropped
  * file. Change it to fulfill your needs but make sure to properly
  * provide all elements.
  *
  * If you want to use an actual HTML element instead of providing a String
  * as a config option, you could create a div with the id `tpl`,
  * put the template inside it and provide the element like this:
  *
  *     document
  *       .querySelector('#tpl')
  *       .innerHTML
  *
  */
  previewTemplate: /* @__PURE__ */ k(y),
  /*
  Those functions register themselves to the events on init and handle all
  the user interface specific stuff. Overwriting them won't break the upload
  but can break the way it's displayed.
  You can overwrite them if you don't like the default behavior. If you just
  want to add an additional event handler, register it on the dropzone object
  and don't overwrite those options.
  */
  // Those are self explanatory and simply concern the DragnDrop.
  drop(n) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragstart(n) {
  },
  dragend(n) {
    return this.element.classList.remove("dz-drag-hover");
  },
  dragenter(n) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragover(n) {
    return this.element.classList.add("dz-drag-hover");
  },
  dragleave(n) {
    return this.element.classList.remove("dz-drag-hover");
  },
  paste(n) {
  },
  // Called whenever there are no files left in the dropzone anymore, and the
  // dropzone should be displayed as if in the initial state.
  reset() {
    return this.element.classList.remove("dz-started");
  },
  // Called when a file is added to the queue
  // Receives `file`
  addedfile(n) {
    if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer && !this.options.disablePreviews) {
      n.previewElement = a.createElement(this.options.previewTemplate.trim()), n.previewTemplate = n.previewElement, this.previewsContainer.appendChild(n.previewElement);
      for (var e of n.previewElement.querySelectorAll("[data-dz-name]")) e.textContent = n.name;
      for (e of n.previewElement.querySelectorAll("[data-dz-size]")) e.innerHTML = this.filesize(n.size);
      this.options.addRemoveLinks && (n._removeLink = a.createElement(`<a class="dz-remove" href="javascript:undefined;" data-dz-remove>${this.options.dictRemoveFile}</a>`), n.previewElement.appendChild(n._removeLink));
      let t = (i) => (i.preventDefault(), i.stopPropagation(), n.status === a.UPLOADING ? a.confirm(
        this.options.dictCancelUploadConfirmation,
        () => this.removeFile(n)
      ) : this.options.dictRemoveFileConfirmation ? a.confirm(
        this.options.dictRemoveFileConfirmation,
        () => this.removeFile(n)
      ) : this.removeFile(n));
      for (let i of n.previewElement.querySelectorAll("[data-dz-remove]")) i.addEventListener("click", t);
    }
  },
  // Called whenever a file is removed.
  removedfile(n) {
    return n.previewElement != null && n.previewElement.parentNode != null && n.previewElement.parentNode.removeChild(n.previewElement), this._updateMaxFilesReachedClass();
  },
  // Called when a thumbnail has been generated
  // Receives `file` and `dataUrl`
  thumbnail(n, e) {
    if (n.previewElement) {
      n.previewElement.classList.remove("dz-file-preview");
      for (let t of n.previewElement.querySelectorAll("[data-dz-thumbnail]"))
        t.alt = n.name, t.src = e;
      return setTimeout(
        () => n.previewElement.classList.add("dz-image-preview"),
        1
      );
    }
  },
  // Called whenever an error occurs
  // Receives `file` and `message`
  error(n, e) {
    if (n.previewElement) {
      n.previewElement.classList.add("dz-error"), typeof e != "string" && e.error && (e = e.error);
      for (let t of n.previewElement.querySelectorAll("[data-dz-errormessage]")) t.textContent = e;
    }
  },
  errormultiple() {
  },
  // Called when a file gets processed. Since there is a cue, not all added
  // files are processed immediately.
  // Receives `file`
  processing(n) {
    if (n.previewElement && (n.previewElement.classList.add("dz-processing"), n._removeLink))
      return n._removeLink.innerHTML = this.options.dictCancelUpload;
  },
  processingmultiple() {
  },
  // Called whenever the upload progress gets updated.
  // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
  // To get the total number of bytes of the file, use `file.size`
  uploadprogress(n, e, t) {
    if (n.previewElement) for (let i of n.previewElement.querySelectorAll("[data-dz-uploadprogress]")) i.nodeName === "PROGRESS" ? i.value = e : i.style.width = `${e}%`;
  },
  // Called whenever the total upload progress gets updated.
  // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
  totaluploadprogress() {
  },
  // Called just before the file is sent. Gets the `xhr` object as second
  // parameter, so you can modify it (for example to add a CSRF token) and a
  // `formData` object to add additional information.
  sending() {
  },
  sendingmultiple() {
  },
  // When the complete upload is finished and successful
  // Receives `file`
  success(n) {
    if (n.previewElement) return n.previewElement.classList.add("dz-success");
  },
  successmultiple() {
  },
  // When the upload is canceled.
  canceled(n) {
    return this.emit("error", n, this.options.dictUploadCanceled);
  },
  canceledmultiple() {
  },
  // When the upload is finished, either with success or an error.
  // Receives `file`
  complete(n) {
    if (n._removeLink && (n._removeLink.innerHTML = this.options.dictRemoveFile), n.previewElement) return n.previewElement.classList.add("dz-complete");
  },
  completemultiple() {
  },
  maxfilesexceeded() {
  },
  maxfilesreached() {
  },
  queuecomplete() {
  },
  addedfiles() {
  }
};
var z = C;
class a extends v {
  static initClass() {
    this.prototype.Emitter = v, this.prototype.events = [
      "drop",
      "dragstart",
      "dragend",
      "dragenter",
      "dragover",
      "dragleave",
      "addedfile",
      "addedfiles",
      "removedfile",
      "thumbnail",
      "error",
      "errormultiple",
      "processing",
      "processingmultiple",
      "uploadprogress",
      "totaluploadprogress",
      "sending",
      "sendingmultiple",
      "success",
      "successmultiple",
      "canceled",
      "canceledmultiple",
      "complete",
      "completemultiple",
      "reset",
      "maxfilesexceeded",
      "maxfilesreached",
      "queuecomplete"
    ], this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1;
  }
  // Returns all files that have been accepted
  getAcceptedFiles() {
    return this.files.filter(
      (e) => e.accepted
    ).map(
      (e) => e
    );
  }
  // Returns all files that have been rejected
  // Not sure when that's going to be useful, but added for completeness.
  getRejectedFiles() {
    return this.files.filter(
      (e) => !e.accepted
    ).map(
      (e) => e
    );
  }
  getFilesWithStatus(e) {
    return this.files.filter(
      (t) => t.status === e
    ).map(
      (t) => t
    );
  }
  // Returns all files that are in the queue
  getQueuedFiles() {
    return this.getFilesWithStatus(a.QUEUED);
  }
  getUploadingFiles() {
    return this.getFilesWithStatus(a.UPLOADING);
  }
  getAddedFiles() {
    return this.getFilesWithStatus(a.ADDED);
  }
  // Files that are either queued or uploading
  getActiveFiles() {
    return this.files.filter(
      (e) => e.status === a.UPLOADING || e.status === a.QUEUED
    ).map(
      (e) => e
    );
  }
  // The function that gets called when Dropzone is initialized. You
  // can (and should) setup event listeners inside this function.
  init() {
    if (this.element.tagName === "form" && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(a.createElement(`<div class="dz-default dz-message"><button class="dz-button" type="button">${this.options.dictDefaultMessage}</button></div>`)), this.clickableElements.length) {
      let i = () => {
        this.hiddenFileInput && this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = document.createElement("input"), this.hiddenFileInput.setAttribute("type", "file"), (this.options.maxFiles === null || this.options.maxFiles > 1) && this.hiddenFileInput.setAttribute("multiple", "multiple"), this.hiddenFileInput.className = "dz-hidden-input", this.options.acceptedFiles !== null && this.hiddenFileInput.setAttribute("accept", this.options.acceptedFiles), this.options.capture !== null && this.hiddenFileInput.setAttribute("capture", this.options.capture), this.hiddenFileInput.setAttribute("tabindex", "-1"), this.hiddenFileInput.style.visibility = "hidden", this.hiddenFileInput.style.position = "absolute", this.hiddenFileInput.style.top = "0", this.hiddenFileInput.style.left = "0", this.hiddenFileInput.style.height = "0", this.hiddenFileInput.style.width = "0", a.getElement(this.options.hiddenInputContainer, "hiddenInputContainer").appendChild(this.hiddenFileInput), this.hiddenFileInput.addEventListener("change", () => {
          let { files: s } = this.hiddenFileInput;
          if (s.length) for (let l of s) this.addFile(l);
          this.emit("addedfiles", s), i();
        });
      };
      i();
    }
    this.URL = window.URL !== null ? window.URL : window.webkitURL;
    for (let i of this.events) this.on(i, this.options[i]);
    this.on(
      "uploadprogress",
      () => this.updateTotalUploadProgress()
    ), this.on(
      "removedfile",
      () => this.updateTotalUploadProgress()
    ), this.on(
      "canceled",
      (i) => this.emit("complete", i)
    ), this.on("complete", (i) => {
      if (this.getAddedFiles().length === 0 && this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0)
        return setTimeout(
          () => this.emit("queuecomplete"),
          0
        );
    });
    const e = function(i) {
      if (i.dataTransfer.types) {
        for (var s = 0; s < i.dataTransfer.types.length; s++)
          if (i.dataTransfer.types[s] === "Files") return !0;
      }
      return !1;
    };
    let t = function(i) {
      if (e(i))
        return i.stopPropagation(), i.preventDefault ? i.preventDefault() : i.returnValue = !1;
    };
    return this.listeners = [
      {
        element: this.element,
        events: {
          dragstart: (i) => this.emit("dragstart", i),
          dragenter: (i) => (t(i), this.emit("dragenter", i)),
          dragover: (i) => {
            let s;
            try {
              s = i.dataTransfer.effectAllowed;
            } catch {
            }
            return i.dataTransfer.dropEffect = s === "move" || s === "linkMove" ? "move" : "copy", t(i), this.emit("dragover", i);
          },
          dragleave: (i) => this.emit("dragleave", i),
          drop: (i) => (t(i), this.drop(i)),
          dragend: (i) => this.emit("dragend", i)
        }
      }
    ], this.clickableElements.forEach((i) => this.listeners.push({
      element: i,
      events: {
        click: (s) => ((i !== this.element || s.target === this.element || a.elementInside(s.target, this.element.querySelector(".dz-message"))) && this.hiddenFileInput.click(), !0)
      }
    })), this.enable(), this.options.init.call(this);
  }
  // Not fully tested yet
  destroy() {
    return this.disable(), this.removeAllFiles(!0), this.hiddenFileInput != null && this.hiddenFileInput.parentNode && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, a.instances.splice(a.instances.indexOf(this), 1);
  }
  updateTotalUploadProgress() {
    let e, t = 0, i = 0;
    if (this.getActiveFiles().length) {
      for (let l of this.getActiveFiles())
        t += l.upload.bytesSent, i += l.upload.total;
      e = 100 * t / i;
    } else e = 100;
    return this.emit("totaluploadprogress", e, i, t);
  }
  // @options.paramName can be a function taking one parameter rather than a string.
  // A parameter name for a file is obtained simply by calling this with an index number.
  _getParamName(e) {
    return typeof this.options.paramName == "function" ? this.options.paramName(e) : `${this.options.paramName}${this.options.uploadMultiple ? `[${e}]` : ""}`;
  }
  // If @options.renameFile is a function,
  // the function will be used to rename the file.name before appending it to the formData
  _renameFile(e) {
    return typeof this.options.renameFile != "function" ? e.name : this.options.renameFile(e);
  }
  // Returns a form that can be used as fallback if the browser does not support DragnDrop
  //
  // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
  // This code has to pass in IE7 :(
  getFallbackForm() {
    let e, t;
    if (e = this.getExistingFallback()) return e;
    let i = '<div class="dz-fallback">';
    this.options.dictFallbackText && (i += `<p>${this.options.dictFallbackText}</p>`), i += `<input type="file" name="${this._getParamName(0)}" ${this.options.uploadMultiple ? 'multiple="multiple"' : void 0} /><input type="submit" value="Upload!"></div>`;
    let s = a.createElement(i);
    return this.element.tagName !== "FORM" ? (t = a.createElement(`<form action="${this.options.url}" enctype="multipart/form-data" method="${this.options.method}"></form>`), t.appendChild(s)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), t ?? s;
  }
  // Returns the fallback elements if they exist already
  //
  // This code has to pass in IE7 :(
  getExistingFallback() {
    let e = function(i) {
      for (let s of i)
        if (/(^| )fallback($| )/.test(s.className)) return s;
    };
    for (let i of [
      "div",
      "form"
    ]) {
      var t;
      if (t = e(this.element.getElementsByTagName(i))) return t;
    }
  }
  // Activates all listeners stored in @listeners
  setupEventListeners() {
    return this.listeners.map(
      (e) => (() => {
        let t = [];
        for (let i in e.events) {
          let s = e.events[i];
          t.push(e.element.addEventListener(i, s, !1));
        }
        return t;
      })()
    );
  }
  // Deactivates all listeners stored in @listeners
  removeEventListeners() {
    return this.listeners.map(
      (e) => (() => {
        let t = [];
        for (let i in e.events) {
          let s = e.events[i];
          t.push(e.element.removeEventListener(i, s, !1));
        }
        return t;
      })()
    );
  }
  // Removes all event listeners and cancels all files in the queue or being processed.
  disable() {
    return this.clickableElements.forEach(
      (e) => e.classList.remove("dz-clickable")
    ), this.removeEventListeners(), this.disabled = !0, this.files.map(
      (e) => this.cancelUpload(e)
    );
  }
  enable() {
    return delete this.disabled, this.clickableElements.forEach(
      (e) => e.classList.add("dz-clickable")
    ), this.setupEventListeners();
  }
  // Returns a nicely formatted filesize
  filesize(e) {
    let t = 0, i = "b";
    if (e > 0) {
      let s = [
        "tb",
        "gb",
        "mb",
        "kb",
        "b"
      ];
      for (let l = 0; l < s.length; l++) {
        let r = s[l], o = Math.pow(this.options.filesizeBase, 4 - l) / 10;
        if (e >= o) {
          t = e / Math.pow(this.options.filesizeBase, 4 - l), i = r;
          break;
        }
      }
      t = Math.round(10 * t) / 10;
    }
    return `<strong>${t}</strong> ${this.options.dictFileSizeUnits[i]}`;
  }
  // Adds or removes the `dz-max-files-reached` class from the form.
  _updateMaxFilesReachedClass() {
    return this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached");
  }
  drop(e) {
    if (!e.dataTransfer) return;
    this.emit("drop", e);
    let t = [];
    for (let i = 0; i < e.dataTransfer.files.length; i++) t[i] = e.dataTransfer.files[i];
    if (t.length) {
      let { items: i } = e.dataTransfer;
      i && i.length && i[0].webkitGetAsEntry != null ? this._addFilesFromItems(i) : this.handleFiles(t);
    }
    this.emit("addedfiles", t);
  }
  paste(e) {
    if (A(
      e != null ? e.clipboardData : void 0,
      (i) => i.items
    ) == null) return;
    this.emit("paste", e);
    let { items: t } = e.clipboardData;
    if (t.length) return this._addFilesFromItems(t);
  }
  handleFiles(e) {
    for (let t of e) this.addFile(t);
  }
  // When a folder is dropped (or files are pasted), items must be handled
  // instead of files.
  _addFilesFromItems(e) {
    return (() => {
      let t = [];
      for (let s of e) {
        var i;
        s.webkitGetAsEntry != null && (i = s.webkitGetAsEntry()) ? i.isFile ? t.push(this.addFile(s.getAsFile())) : i.isDirectory ? t.push(this._addFilesFromDirectory(i, i.name)) : t.push(void 0) : s.getAsFile != null && (s.kind == null || s.kind === "file") ? t.push(this.addFile(s.getAsFile())) : t.push(void 0);
      }
      return t;
    })();
  }
  // Goes through the directory, and adds each file it finds recursively
  _addFilesFromDirectory(e, t) {
    let i = e.createReader(), s = (r) => U(
      console,
      "log",
      (o) => o.log(r)
    );
    var l = () => i.readEntries((r) => {
      if (r.length > 0) {
        for (let o of r)
          o.isFile ? o.file((u) => {
            if (!(this.options.ignoreHiddenFiles && u.name.substring(0, 1) === "."))
              return u.fullPath = `${t}/${u.name}`, this.addFile(u);
          }) : o.isDirectory && this._addFilesFromDirectory(o, `${t}/${o.name}`);
        l();
      }
      return null;
    }, s);
    return l();
  }
  // If `done()` is called without argument the file is accepted
  // If you call it with an error message, the file is rejected
  // (This allows for asynchronous validation)
  //
  // This function checks the filesize, and if the file.type passes the
  // `acceptedFiles` check.
  accept(e, t) {
    this.options.maxFilesize && e.size > this.options.maxFilesize * 1048576 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : a.isValidFile(e, this.options.acceptedFiles) ? this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType);
  }
  addFile(e) {
    e.upload = {
      uuid: a.uuidv4(),
      progress: 0,
      // Setting the total upload size to file.size for the beginning
      // It's actual different than the size to be transmitted.
      total: e.size,
      bytesSent: 0,
      filename: this._renameFile(e)
    }, this.files.push(e), e.status = a.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, (t) => {
      t ? (e.accepted = !1, this._errorProcessing([
        e
      ], t)) : (e.accepted = !0, this.options.autoQueue && this.enqueueFile(e)), this._updateMaxFilesReachedClass();
    });
  }
  // Wrapper for enqueueFile
  enqueueFiles(e) {
    for (let t of e) this.enqueueFile(t);
    return null;
  }
  enqueueFile(e) {
    if (e.status === a.ADDED && e.accepted === !0) {
      if (e.status = a.QUEUED, this.options.autoProcessQueue) return setTimeout(
        () => this.processQueue(),
        0
      );
    } else throw new Error("This file can't be queued because it has already been processed or was rejected.");
  }
  _enqueueThumbnail(e) {
    if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= this.options.maxThumbnailFilesize * 1048576)
      return this._thumbnailQueue.push(e), setTimeout(
        () => this._processThumbnailQueue(),
        0
      );
  }
  _processThumbnailQueue() {
    if (this._processingThumbnail || this._thumbnailQueue.length === 0) return;
    this._processingThumbnail = !0;
    let e = this._thumbnailQueue.shift();
    return this.createThumbnail(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, (t) => (this.emit("thumbnail", e, t), this._processingThumbnail = !1, this._processThumbnailQueue()));
  }
  // Can be called by the user to remove a file
  removeFile(e) {
    if (e.status === a.UPLOADING && this.cancelUpload(e), this.files = L(this.files, e), this.emit("removedfile", e), this.files.length === 0) return this.emit("reset");
  }
  // Removes all files that aren't currently processed from the list
  removeAllFiles(e) {
    e == null && (e = !1);
    for (let t of this.files.slice()) (t.status !== a.UPLOADING || e) && this.removeFile(t);
    return null;
  }
  // Resizes an image before it gets sent to the server. This function is the default behavior of
  // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
  // the resized blob.
  resizeImage(e, t, i, s, l) {
    return this.createThumbnail(e, t, i, s, !0, (r, o) => {
      if (o == null)
        return l(e);
      {
        let { resizeMimeType: u } = this.options;
        u == null && (u = e.type);
        let d = o.toDataURL(u, this.options.resizeQuality);
        return (u === "image/jpeg" || u === "image/jpg") && (d = E.restore(e.dataURL, d)), l(a.dataURItoBlob(d));
      }
    });
  }
  createThumbnail(e, t, i, s, l, r) {
    let o = new FileReader();
    o.onload = () => {
      if (e.dataURL = o.result, e.type === "image/svg+xml") {
        r != null && r(o.result);
        return;
      }
      this.createThumbnailFromUrl(e, t, i, s, l, r);
    }, o.readAsDataURL(e);
  }
  // `mockFile` needs to have these attributes:
  //
  //     { name: 'name', size: 12345, imageUrl: '' }
  //
  // `callback` will be invoked when the image has been downloaded and displayed.
  // `crossOrigin` will be added to the `img` tag when accessing the file.
  displayExistingFile(e, t, i, s, l = !0) {
    if (this.emit("addedfile", e), this.emit("complete", e), !l)
      this.emit("thumbnail", e, t), i && i();
    else {
      let r = (o) => {
        this.emit("thumbnail", e, o), i && i();
      };
      e.dataURL = t, this.createThumbnailFromUrl(e, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, this.options.fixOrientation, r, s);
    }
  }
  createThumbnailFromUrl(e, t, i, s, l, r, o) {
    let u = document.createElement("img");
    return o && (u.crossOrigin = o), l = getComputedStyle(document.body).imageOrientation == "from-image" ? !1 : l, u.onload = () => {
      let d = (h) => h(1);
      return typeof EXIF < "u" && EXIF !== null && l && (d = (h) => EXIF.getData(u, function() {
        return h(EXIF.getTag(this, "Orientation"));
      })), d((h) => {
        e.width = u.width, e.height = u.height;
        let p = this.options.resize.call(this, e, t, i, s), c = document.createElement("canvas"), m = c.getContext("2d");
        switch (c.width = p.trgWidth, c.height = p.trgHeight, h > 4 && (c.width = p.trgHeight, c.height = p.trgWidth), h) {
          case 2:
            m.translate(c.width, 0), m.scale(-1, 1);
            break;
          case 3:
            m.translate(c.width, c.height), m.rotate(Math.PI);
            break;
          case 4:
            m.translate(0, c.height), m.scale(1, -1);
            break;
          case 5:
            m.rotate(0.5 * Math.PI), m.scale(1, -1);
            break;
          case 6:
            m.rotate(0.5 * Math.PI), m.translate(0, -c.width);
            break;
          case 7:
            m.rotate(0.5 * Math.PI), m.translate(c.height, -c.width), m.scale(-1, 1);
            break;
          case 8:
            m.rotate(-0.5 * Math.PI), m.translate(-c.height, 0);
            break;
        }
        x(m, u, p.srcX != null ? p.srcX : 0, p.srcY != null ? p.srcY : 0, p.srcWidth, p.srcHeight, p.trgX != null ? p.trgX : 0, p.trgY != null ? p.trgY : 0, p.trgWidth, p.trgHeight);
        let w = c.toDataURL("image/png");
        if (r != null) return r(w, c);
      });
    }, r != null && (u.onerror = r), u.src = e.dataURL;
  }
  // Goes through the queue and processes files if there aren't too many already.
  processQueue() {
    let { parallelUploads: e } = this.options, t = this.getUploadingFiles().length, i = t;
    if (t >= e) return;
    let s = this.getQueuedFiles();
    if (s.length > 0) {
      if (this.options.uploadMultiple)
        return this.processFiles(s.slice(0, e - t));
      for (; i < e; ) {
        if (!s.length) return;
        this.processFile(s.shift()), i++;
      }
    }
  }
  // Wrapper for `processFiles`
  processFile(e) {
    return this.processFiles([
      e
    ]);
  }
  // Loads the file, then calls finishedLoading()
  processFiles(e) {
    for (let t of e)
      t.processing = !0, t.status = a.UPLOADING, this.emit("processing", t);
    return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e);
  }
  _getFilesWithXhr(e) {
    return this.files.filter(
      (t) => t.xhr === e
    ).map(
      (t) => t
    );
  }
  // Cancels the file upload and sets the status to CANCELED
  // **if** the file is actually being uploaded.
  // If it's still in the queue, the file is being removed from it and the status
  // set to CANCELED.
  cancelUpload(e) {
    if (e.status === a.UPLOADING) {
      let t = this._getFilesWithXhr(e.xhr);
      for (let i of t) i.status = a.CANCELED;
      typeof e.xhr < "u" && e.xhr.abort();
      for (let i of t) this.emit("canceled", i);
      this.options.uploadMultiple && this.emit("canceledmultiple", t);
    } else (e.status === a.ADDED || e.status === a.QUEUED) && (e.status = a.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [
      e
    ]));
    if (this.options.autoProcessQueue) return this.processQueue();
  }
  resolveOption(e, ...t) {
    return typeof e == "function" ? e.apply(this, t) : e;
  }
  uploadFile(e) {
    return this.uploadFiles([
      e
    ]);
  }
  uploadFiles(e) {
    this._transformFiles(e, (t) => {
      if (this.options.chunking) {
        let i = t[0];
        e[0].upload.chunked = this.options.chunking && (this.options.forceChunking || i.size > this.options.chunkSize), e[0].upload.totalChunkCount = Math.ceil(i.size / this.options.chunkSize);
      }
      if (e[0].upload.chunked) {
        let i = e[0], s = t[0];
        i.upload.chunks = [];
        let l = () => {
          let r = 0;
          for (; i.upload.chunks[r] !== void 0; ) r++;
          if (r >= i.upload.totalChunkCount) return;
          let o = r * this.options.chunkSize, u = Math.min(o + this.options.chunkSize, s.size), d = {
            name: this._getParamName(0),
            data: s.webkitSlice ? s.webkitSlice(o, u) : s.slice(o, u),
            filename: i.upload.filename,
            chunkIndex: r
          };
          i.upload.chunks[r] = {
            file: i,
            index: r,
            dataBlock: d,
            status: a.UPLOADING,
            progress: 0,
            retries: 0
          }, this._uploadData(e, [
            d
          ]);
        };
        if (i.upload.finishedChunkUpload = (r, o) => {
          let u = !0;
          r.status = a.SUCCESS, r.dataBlock = null, r.response = r.xhr.responseText, r.responseHeaders = r.xhr.getAllResponseHeaders(), r.xhr = null;
          for (let d = 0; d < i.upload.totalChunkCount; d++) {
            if (i.upload.chunks[d] === void 0) return l();
            i.upload.chunks[d].status !== a.SUCCESS && (u = !1);
          }
          u && this.options.chunksUploaded(i, () => {
            this._finished(e, o, null);
          });
        }, this.options.parallelChunkUploads) for (let r = 0; r < i.upload.totalChunkCount; r++) l();
        else l();
      } else {
        let i = [];
        for (let s = 0; s < e.length; s++) i[s] = {
          name: this._getParamName(s),
          data: t[s],
          filename: e[s].upload.filename
        };
        this._uploadData(e, i);
      }
    });
  }
  /// Returns the right chunk for given file and xhr
  _getChunk(e, t) {
    for (let i = 0; i < e.upload.totalChunkCount; i++)
      if (e.upload.chunks[i] !== void 0 && e.upload.chunks[i].xhr === t) return e.upload.chunks[i];
  }
  // This function actually uploads the file(s) to the server.
  //
  //  If dataBlocks contains the actual data to upload (meaning, that this could
  // either be transformed files, or individual chunks for chunked upload) then
  // they will be used for the actual data to upload.
  _uploadData(e, t) {
    let i = new XMLHttpRequest();
    for (let d of e) d.xhr = i;
    e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = i);
    let s = this.resolveOption(this.options.method, e, t), l = this.resolveOption(this.options.url, e, t);
    i.open(s, l, !0), this.resolveOption(this.options.timeout, e) && (i.timeout = this.resolveOption(this.options.timeout, e)), i.withCredentials = !!this.options.withCredentials, i.onload = (d) => {
      this._finishedUploading(e, i, d);
    }, i.ontimeout = () => {
      this._handleUploadError(e, i, `Request timedout after ${this.options.timeout / 1e3} seconds`);
    }, i.onerror = () => {
      this._handleUploadError(e, i);
    };
    let o = i.upload != null ? i.upload : i;
    o.onprogress = (d) => this._updateFilesUploadProgress(e, i, d);
    let u = this.options.defaultHeaders ? {
      Accept: "application/json",
      "Cache-Control": "no-cache",
      "X-Requested-With": "XMLHttpRequest"
    } : {};
    this.options.binaryBody && (u["Content-Type"] = e[0].type), this.options.headers && f(u, this.options.headers);
    for (let d in u) {
      let h = u[d];
      h && i.setRequestHeader(d, h);
    }
    if (this.options.binaryBody) {
      for (let d of e) this.emit("sending", d, i);
      this.options.uploadMultiple && this.emit("sendingmultiple", e, i), this.submitRequest(i, null, e);
    } else {
      let d = new FormData();
      if (this.options.params) {
        let h = this.options.params;
        typeof h == "function" && (h = h.call(this, e, i, e[0].upload.chunked ? this._getChunk(e[0], i) : null));
        for (let p in h) {
          let c = h[p];
          if (Array.isArray(c))
            for (let m = 0; m < c.length; m++) d.append(p, c[m]);
          else d.append(p, c);
        }
      }
      for (let h of e) this.emit("sending", h, i, d);
      this.options.uploadMultiple && this.emit("sendingmultiple", e, i, d), this._addFormElementData(d);
      for (let h = 0; h < t.length; h++) {
        let p = t[h];
        d.append(p.name, p.data, p.filename);
      }
      this.submitRequest(i, d, e);
    }
  }
  // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.
  _transformFiles(e, t) {
    let i = [], s = 0;
    for (let l = 0; l < e.length; l++) this.options.transformFile.call(this, e[l], (r) => {
      i[l] = r, ++s === e.length && t(i);
    });
  }
  // Takes care of adding other input elements of the form to the AJAX request
  _addFormElementData(e) {
    if (this.element.tagName === "FORM") for (let t of this.element.querySelectorAll("input, textarea, select, button")) {
      let i = t.getAttribute("name"), s = t.getAttribute("type");
      if (s && (s = s.toLowerCase()), !(typeof i > "u" || i === null))
        if (t.tagName === "SELECT" && t.hasAttribute("multiple"))
          for (let l of t.options) l.selected && e.append(i, l.value);
        else (!s || s !== "checkbox" && s !== "radio" || t.checked) && e.append(i, t.value);
    }
  }
  // Invoked when there is new progress information about given files.
  // If e is not provided, it is assumed that the upload is finished.
  _updateFilesUploadProgress(e, t, i) {
    if (e[0].upload.chunked) {
      let s = e[0], l = this._getChunk(s, t);
      i ? (l.progress = 100 * i.loaded / i.total, l.total = i.total, l.bytesSent = i.loaded) : (l.progress = 100, l.bytesSent = l.total), s.upload.progress = 0, s.upload.total = 0, s.upload.bytesSent = 0;
      for (let r = 0; r < s.upload.totalChunkCount; r++) s.upload.chunks[r] && typeof s.upload.chunks[r].progress < "u" && (s.upload.progress += s.upload.chunks[r].progress, s.upload.total += s.upload.chunks[r].total, s.upload.bytesSent += s.upload.chunks[r].bytesSent);
      s.upload.progress = s.upload.progress / s.upload.totalChunkCount, this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent);
    } else
      for (let s of e)
        s.upload.total && s.upload.bytesSent && s.upload.bytesSent == s.upload.total || (i ? (s.upload.progress = 100 * i.loaded / i.total, s.upload.total = i.total, s.upload.bytesSent = i.loaded) : (s.upload.progress = 100, s.upload.bytesSent = s.upload.total), this.emit("uploadprogress", s, s.upload.progress, s.upload.bytesSent));
  }
  _finishedUploading(e, t, i) {
    let s;
    if (e[0].status !== a.CANCELED && t.readyState === 4) {
      if (t.responseType !== "arraybuffer" && t.responseType !== "blob" && (s = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json")))
        try {
          s = JSON.parse(s);
        } catch (l) {
          i = l, s = "Invalid JSON response from server.";
        }
      this._updateFilesUploadProgress(e, t), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t), s) : this._finished(e, s, i) : this._handleUploadError(e, t, s);
    }
  }
  _handleUploadError(e, t, i) {
    if (e[0].status !== a.CANCELED) {
      if (e[0].upload.chunked && this.options.retryChunks) {
        let s = this._getChunk(e[0], t);
        if (s.retries++ < this.options.retryChunksLimit) {
          this._uploadData(e, [
            s.dataBlock
          ]);
          return;
        } else console.warn("Retried this chunk too often. Giving up.");
      }
      this._errorProcessing(e, i || this.options.dictResponseError.replace("{{statusCode}}", t.status), t);
    }
  }
  submitRequest(e, t, i) {
    if (e.readyState != 1) {
      console.warn("Cannot send this request because the XMLHttpRequest.readyState is not OPENED.");
      return;
    }
    if (this.options.binaryBody)
      if (i[0].upload.chunked) {
        const s = this._getChunk(i[0], e);
        e.send(s.dataBlock.data);
      } else e.send(i[0]);
    else e.send(t);
  }
  // Called internally when processing is finished.
  // Individual callbacks have to be called in the appropriate sections.
  _finished(e, t, i) {
    for (let s of e)
      s.status = a.SUCCESS, this.emit("success", s, t, i), this.emit("complete", s);
    if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
  }
  // Called internally when processing is finished.
  // Individual callbacks have to be called in the appropriate sections.
  _errorProcessing(e, t, i) {
    for (let s of e)
      s.status = a.ERROR, this.emit("error", s, t, i), this.emit("complete", s);
    if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue();
  }
  static uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
      let t = Math.random() * 16 | 0;
      return (e === "x" ? t : t & 3 | 8).toString(16);
    });
  }
  constructor(e, t) {
    super();
    let i, s;
    if (this.element = e, this.clickableElements = [], this.listeners = [], this.files = [], typeof this.element == "string" && (this.element = document.querySelector(this.element)), !this.element || this.element.nodeType == null) throw new Error("Invalid dropzone element.");
    if (this.element.dropzone) throw new Error("Dropzone already attached.");
    a.instances.push(this), this.element.dropzone = this;
    let l = (s = a.optionsForElement(this.element)) != null ? s : {};
    if (this.options = f(!0, {}, z, l, t ?? {}), this.options.previewTemplate = this.options.previewTemplate.replace(/\n*/g, ""), this.options.forceFallback || !a.isBrowserSupported()) return this.options.fallback.call(this);
    if (this.options.url == null && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided.");
    if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    if (this.options.uploadMultiple && this.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
    if (this.options.binaryBody && this.options.uploadMultiple) throw new Error("You cannot set both: binaryBody and uploadMultiple.");
    this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.renameFilename != null && (this.options.renameFile = (r) => this.options.renameFilename.call(this, r.name, r)), typeof this.options.method == "string" && (this.options.method = this.options.method.toUpperCase()), (i = this.getExistingFallback()) && i.parentNode && i.parentNode.removeChild(i), this.options.previewsContainer !== !1 && (this.options.previewsContainer ? this.previewsContainer = a.getElement(this.options.previewsContainer, "previewsContainer") : this.previewsContainer = this.element), this.options.clickable && (this.options.clickable === !0 ? this.clickableElements = [
      this.element
    ] : this.clickableElements = a.getElements(this.options.clickable, "clickable")), this.init();
  }
}
a.initClass();
a.options = {};
a.optionsForElement = function(n) {
  if (n.getAttribute("id")) return a.options[S(n.getAttribute("id"))];
};
a.instances = [];
a.forElement = function(n) {
  if (typeof n == "string" && (n = document.querySelector(n)), (n != null ? n.dropzone : void 0) == null) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  return n.dropzone;
};
a.discover = function() {
  let n;
  if (document.querySelectorAll) n = document.querySelectorAll(".dropzone");
  else {
    n = [];
    let e = (t) => (() => {
      let i = [];
      for (let s of t) /(^| )dropzone($| )/.test(s.className) ? i.push(n.push(s)) : i.push(void 0);
      return i;
    })();
    e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"));
  }
  return (() => {
    let e = [];
    for (let t of n)
      a.optionsForElement(t) !== !1 ? e.push(new a(t)) : e.push(void 0);
    return e;
  })();
};
a.blockedBrowsers = [
  // The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
  /opera.*(Macintosh|Windows Phone).*version\/12/i
];
a.isBrowserSupported = function() {
  let n = !0;
  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
    if (!("classList" in document.createElement("a"))) n = !1;
    else {
      a.blacklistedBrowsers !== void 0 && (a.blockedBrowsers = a.blacklistedBrowsers);
      for (let e of a.blockedBrowsers) if (e.test(navigator.userAgent)) {
        n = !1;
        continue;
      }
    }
  else n = !1;
  return n;
};
a.dataURItoBlob = function(n) {
  let e = atob(n.split(",")[1]), t = n.split(",")[0].split(":")[1].split(";")[0], i = new ArrayBuffer(e.length), s = new Uint8Array(i);
  for (let l = 0, r = e.length, o = 0 <= r; o ? l <= r : l >= r; o ? l++ : l--) s[l] = e.charCodeAt(l);
  return new Blob([
    i
  ], {
    type: t
  });
};
const L = (n, e) => n.filter(
  (t) => t !== e
).map(
  (t) => t
), S = (n) => n.replace(
  /[\-_](\w)/g,
  (e) => e.charAt(1).toUpperCase()
);
a.createElement = function(n) {
  let e = document.createElement("div");
  return e.innerHTML = n, e.childNodes[0];
};
a.elementInside = function(n, e) {
  if (n === e) return !0;
  for (; n = n.parentNode; )
    if (n === e) return !0;
  return !1;
};
a.getElement = function(n, e) {
  let t;
  if (typeof n == "string" ? t = document.querySelector(n) : n.nodeType != null && (t = n), t == null) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector or a plain HTML element.`);
  return t;
};
a.getElements = function(n, e) {
  let t, i;
  if (n instanceof Array) {
    i = [];
    try {
      for (t of n) i.push(this.getElement(t, e));
    } catch {
      i = null;
    }
  } else if (typeof n == "string") {
    i = [];
    for (t of document.querySelectorAll(n)) i.push(t);
  } else n.nodeType != null && (i = [
    n
  ]);
  if (i == null || !i.length) throw new Error(`Invalid \`${e}\` option provided. Please provide a CSS selector, a plain HTML element or a list of those.`);
  return i;
};
a.confirm = function(n, e, t) {
  if (window.confirm(n)) return e();
  if (t != null) return t();
};
a.isValidFile = function(n, e) {
  if (!e) return !0;
  e = e.split(",");
  let t = n.type, i = t.replace(/\/.*$/, "");
  for (let s of e)
    if (s = s.trim(), s.charAt(0) === ".") {
      if (n.name.toLowerCase().indexOf(s.toLowerCase(), n.name.length - s.length) !== -1) return !0;
    } else if (/\/\*$/.test(s)) {
      if (i === s.replace(/\/.*$/, "")) return !0;
    } else if (t === s) return !0;
  return !1;
};
typeof jQuery < "u" && jQuery !== null && (jQuery.fn.dropzone = function(n) {
  return this.each(function() {
    return new a(this, n);
  });
});
a.ADDED = "added";
a.QUEUED = "queued";
a.ACCEPTED = a.QUEUED;
a.UPLOADING = "uploading";
a.PROCESSING = a.UPLOADING;
a.CANCELED = "canceled";
a.ERROR = "error";
a.SUCCESS = "success";
let T = function(n) {
  n.naturalWidth;
  let e = n.naturalHeight, t = document.createElement("canvas");
  t.width = 1, t.height = e;
  let i = t.getContext("2d");
  i.drawImage(n, 0, 0);
  let { data: s } = i.getImageData(1, 0, 1, e), l = 0, r = e, o = e;
  for (; o > l; )
    s[(o - 1) * 4 + 3] === 0 ? r = o : l = o, o = r + l >> 1;
  let u = o / e;
  return u === 0 ? 1 : u;
};
var x = function(n, e, t, i, s, l, r, o, u, d) {
  let h = T(e);
  return n.drawImage(e, t, i, s, l, r, o, u, d / h);
};
class E {
  static initClass() {
    this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  static encode64(e) {
    let t = "", i, s, l = "", r, o, u, d = "", h = 0;
    for (; i = e[h++], s = e[h++], l = e[h++], r = i >> 2, o = (i & 3) << 4 | s >> 4, u = (s & 15) << 2 | l >> 6, d = l & 63, isNaN(s) ? u = d = 64 : isNaN(l) && (d = 64), t = t + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(u) + this.KEY_STR.charAt(d), i = s = l = "", r = o = u = d = "", h < e.length; )
      ;
    return t;
  }
  static restore(e, t) {
    if (!e.match("data:image/jpeg;base64,")) return t;
    let i = this.decode64(e.replace("data:image/jpeg;base64,", "")), s = this.slice2Segments(i), l = this.exifManipulation(t, s);
    return `data:image/jpeg;base64,${this.encode64(l)}`;
  }
  static exifManipulation(e, t) {
    let i = this.getExifArray(t), s = this.insertExif(e, i);
    return new Uint8Array(s);
  }
  static getExifArray(e) {
    let t, i = 0;
    for (; i < e.length; ) {
      if (t = e[i], t[0] === 255 & t[1] === 225) return t;
      i++;
    }
    return [];
  }
  static insertExif(e, t) {
    let i = e.replace("data:image/jpeg;base64,", ""), s = this.decode64(i), l = s.indexOf(255, 3), r = s.slice(0, l), o = s.slice(l), u = r;
    return u = u.concat(t), u = u.concat(o), u;
  }
  static slice2Segments(e) {
    let t = 0, i = [];
    for (; ; ) {
      var s;
      if (e[t] === 255 & e[t + 1] === 218) break;
      if (e[t] === 255 & e[t + 1] === 216) t += 2;
      else {
        s = e[t + 2] * 256 + e[t + 3];
        let l = t + s + 2, r = e.slice(t, l);
        i.push(r), t = l;
      }
      if (t > e.length) break;
    }
    return i;
  }
  static decode64(e) {
    let t, i, s = "", l, r, o, u = "", d = 0, h = [];
    for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn(`There were invalid base64 characters in the input text.
Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='
Expect errors in decoding.`), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l = this.KEY_STR.indexOf(e.charAt(d++)), r = this.KEY_STR.indexOf(e.charAt(d++)), o = this.KEY_STR.indexOf(e.charAt(d++)), u = this.KEY_STR.indexOf(e.charAt(d++)), t = l << 2 | r >> 4, i = (r & 15) << 4 | o >> 2, s = (o & 3) << 6 | u, h.push(t), o !== 64 && h.push(i), u !== 64 && h.push(s), t = i = s = "", l = r = o = u = "", d < e.length; )
      ;
    return h;
  }
}
E.initClass();
function A(n, e) {
  return typeof n < "u" && n !== null ? e(n) : void 0;
}
function U(n, e, t) {
  if (typeof n < "u" && n !== null && typeof n[e] == "function") return t(n, e);
}
class M {
  constructor(e = {}) {
    let t = {
      url: "./upload",
      disablePreviews: !0
    };
    this.options = Object.assign(t, e);
  }
  mount(e, t = "contain") {
    let i;
    e.setAttribute("data-role", "image-uploader"), i = document.createElement("img"), i.classList.add("preview"), i.style.setProperty("--object-fit", t), e.append(i), this.options.init = function() {
      this.on("addedfile", async (s) => {
        let l = new FileReader();
        l.onload = (r) => {
          e.setAttribute("data-filename", s.name), e.querySelector("img.preview").src = l.result;
        }, l.readAsDataURL(s);
      });
    }, new a(e, this.options);
  }
}
export {
  M as ImageUploader
};
//# sourceMappingURL=index.js.map
