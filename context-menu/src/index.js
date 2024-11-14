import './style.css';

let version = '1.1';
let binding_document_mousedown = false;
let active_menu = null;

function get_default(x, y) {
	if ((x === undefined) || (x === null) || (x === 0)) {
		return y;
	}

	return x;
}

function get_json(url) {
	return new Promise((resolve, reject) => {
	    fetch(url)
	        .then(response => response.json())
	        .then(json => resolve(json))
	        .catch(err => reject(err));		
	})
}

document.addEventListener('keydown', evt => {
	if (evt.key == 'Escape') {
		if (active_menu) {
			active_menu.hide();
		}		
	}
})

export class ContextMenu {
	constructor(menu_url) {
		this.version = version;
		this.handlers = new Map();
		this.menu = document.createElement('dialog');
		this.menu.classList.add('context-menu');
		this.menu.innerHTML = '<ul></li>';
		this.menu_created = false;
		this.menu.width = 0;
		this.menu.height = 0;
		this.gap = 10;

		let load = (menu_url) => {
			function create_menu_item(item) {
				let li = document.createElement('li');
				let span = document.createElement('span');
				let a = document.createElement('a');
				let icon = get_default(item.icon, '');
				let text = get_default(item.text, '');
				if (item.id) li.setAttribute('data-id', item.id);
				if (item.text) li.setAttribute('data-text', item.text);
				if (item.action) li.setAttribute('data-action', item.action);
				if (item.group) li.setAttribute('data-group', item.group);
				if (item.data) li.setAttribute('data-data', item.data);
				if (item.scale) li.style.setProperty('--scale', item.scale);

				a.setAttribute('href', '#');

				if (text !== '') {
					if (text == '-') {
						li.setAttribute('data-role', 'seperator');
					} else {
						a.innerText = text;
						li.append(a);

						if (icon !== '') {
							span.innerHTML = icon;
						}

						li.prepend(span);
					}
				}

				return li;
			}

			return new Promise((resolve, reject) => {
				if (!this.menu_created) {
					this.menu_created = true;

					let ul = this.menu.querySelector('ul');

					try {
						let url = menu_url;
						let ts = (new Date()).getTime();

						if (url.includes('?')) {
							url = url + '&ts=' + ts;
						} else {
							url = url + '?ts=' + ts;
						}

						get_json(url).then(menu => {
							let w = get_default(menu.width, '180');

							ul.style.setProperty('--menu-width', w + 'px');

							menu.items.forEach(item => {
								ul.append(create_menu_item(item));
							})			

							document.body.append(this.menu);	
							resolve(true);
						})
					} catch (error) {
						reject(error);
					}
				} else {
					resolve(true);
				}
			})
		}

		load(menu_url);

		this.menu.addEventListener('contextmenu', evt => {
			evt.preventDefault();
			evt.stopPropagation();
		})

		this.menu.addEventListener('click', evt => {
			let ok = true;
			let li = evt.target.closest('li');

			if (!li) return;

			let action = get_default(li.dataset['action'], '');

			if ((action !== '') && (li.matches(':not(.disabled)'))) {
				let handler = this.handlers.get(action);

				if (typeof handler === 'function') {
					let data = {
						action: action,
						data: JSON.parse(get_default(li.dataset['data'], '{}')),
						el: li,
						host: this.context,
						context_menu: this
					}

					// let res = handler.bind(this.context)(data);
					let res = handler(data);
				
					if (res === false) {
						ok = false;
					}
				}
			}

			if (ok) {
				this.hide();
				evt.preventDefault();
			}
		})

		if (!binding_document_mousedown) {
			document.addEventListener('mousedown', evt => {
				let el = evt.target;

				if (!el.closest('.context-menu')) {
					this.hide();
				}				
			})
		}
	}

	mount(el) {
		let show_context_menu = (x, y) => {
			this.update();

			// offset
			x = x + 10;
			y = y + 0;

			if (x < this.gap) {x = gap};
			if (x + this.menu.width + this.gap > window.innerWidth) {x = window.innerWidth - this.menu.width - this.gap };
			if (y < this.gap) {y = gap};
			if (y + this.menu.height + this.gap > window.innerHeight) {y = window.innerHeight - this.menu.height - this.gap};

			this.show(x, y, el);			
		}

		el.addEventListener('contextmenu', evt => {
			let handler = this.handlers.get('before-show');
			let res = true;

			if (handler) {
				res = handler.bind(el)();
			}

			evt.preventDefault();

			if (res) {
				let {x, y} = evt;
				show_context_menu(x, y);
			}
		})

		el.addEventListener('click', evt => {			
			let handler = this.handlers.get('before-show');
			let res = true;

			if (handler) {
				res = handler.bind(el)();
			}

			evt.preventDefault();
			evt.stopPropagation();

			if (res) {
				let {x, y} = evt;
				show_context_menu(x, y);
			}
		})
	}

	show(x, y, context) {
		let ok = true;

		if (active_menu) {
			active_menu.hide();				
		}

		this.reset_all_menu_items();
		this.context = context;

		let handler = this.handlers['before-show'];

		if (typeof handler === 'function') {
			let data = {
				context_menu: this
			}

			// return false if you don't want to show menu
			let res = handler.bind(this.context)(data);
		
			if (res === false) {
				ok = false;
			}
		}

		if (ok) {
			let margin = 14;
			let width, height;
			let ul;

			this.menu.classList.add('ux-show');
			this.menu.classList.remove('popup-left');

			ul = this.menu.querySelector('& > ul');
			width = parseInt(ul.dataset['width']);
			height = parseInt(ul.dataset['height']);
			
			if (x + width > (window.innerWidth - margin)) {
				x = window.innerWidth - margin - width;
			} else if (x < margin) {
			 	x = margin;
			}

			if ((y + height) > (document.documentElement.scrollTop + window.innerHeight - margin)) {
				y = document.documentElement.scrollTop + window.innerHeight - margin - height;
			} else if (y < margin) {
				y = margin
			}

			if (x + (width * 2) > window.innerWidth) {
				this.menu.classList.add('popup-left');					
			}

			this.menu.style.setProperty('left', x + 'px');
			this.menu.style.setProperty('top', y + 'px');
			this.menu.show();

			active_menu = this;
		}
	}

	hide() {
		this.menu.classList.remove('ux-show');
		this.menu.close();
		active_menu = null;
	}

	reset_all_menu_items() {
		this.menu.querySelectorAll('.hidden').forEach(item => {
			item.classList.remove('ux-hidden');
		})

		this.menu.querySelectorAll('.disabled').forEach(item => {
			item.classList.remove('ux-disabled');
		})
	}

	show_menu_item_by_id(id) {
		this.menu.querySelectorAll('li[data-id="' + id + '"]').forEach(item => {
			item.classList.remove('ux-hidden');
		})
	}

	hide_menu_item_by_id(id) {
		this.menu.querySelectorAll('li[data-id="' + id + '"]').forEach(item => {
			item.classList.add('ux-hidden');
		})
	}

	hide_menu_item_by_cmd(cmd) {
		this.menu.querySelectorAll('li[data-cmd="' + cmd + '"]').forEach(item => {
			item.classList.add('ux-hidden');
		})
	}

	hide_menu_item_by_group(group) {
		this.menu.querySelectorAll('li[data-group*="' + group + '"]').forEach(item => {
			item.classList.add("ux-hidden");
		})
	}

	get_menu_item(id) {
		return this.menu.querySelector('li[data-id="' + id + '"]');
	}

	disable_menu_item_by_id(id) {
		this.menu.querySelectorAll('li[data-id="' + id + '"]').forEach(item => {
			item.classList.add('ux-disabled');
		})			
	}

	enable_menu_item_by_id(id) {
		this.menu.querySelectorAll('li[data-id="' + id + '"]').forEach(item => {
			item.classList.remove('ux-disabled');
		})			
	}

	set_icon(id, icon = '') {
		let menu_item = this.get_menu_item(id);
		let span = menu_item.querySelector('span');

		if (icon == '') {
			span.innerHTML = '';
		} else {
			if (span) {
				span.remove();
			}

			span = document.createElement('span');
			span.innerHTML = icon;
			menu_item.prepend(span);
		}
	}

	update() {
		let w, h;
		let arr = new Array();
		let i = 0;
		let bounding_rect;

		this.menu.style.visibility = 'hidden';
		this.menu.style.display = 'block';
		bounding_rect = this.menu.getBoundingClientRect();

		this.menu.width = bounding_rect.width;
		this.menu.height = bounding_rect.height;
		this.menu.style.display = 'none';
		this.menu.style.visibility = 'visible';
	}

	on(action, handler) {
		this.handlers.set(action, handler);
	}
}
