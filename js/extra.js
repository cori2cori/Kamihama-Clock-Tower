"use strict";
const theme = {
	switcher: '#theme-switcher',
	get: function() {
		const name = (document.cookie.match(new RegExp("(?:^|; )theme=([^;]*)")) ?? [0, false])[1] ?? false;
		const $switcher = document.querySelector(theme.switcher);
		if (name && $switcher)
			$switcher.value = name;
		return name;
	},
	set: function(name) {
		if (!name)
			return false;
		const old_name = document.body.getAttribute("data-theme");
		if (old_name)
			document.body.classList.remove("theme-"+old_name);
		document.body.setAttribute("data-theme", name);
		document.body.classList.add("theme-"+name);
		document.cookie = "theme="+name+"; path=/; max-age=436320000; secure; samesite=lax";
		return true;
	}
};

// e.g.: <div class="lcarousel"><img class="lcarousel current" /><img class="lcarousel" /></div>
const lcarousel = {
	name: "lcarousel",
	cursor: "current",
	wrapTag: "div",
	itemTag: "img",
	init: function() {
		document.querySelectorAll(lcarousel.wrapTag+"."+lcarousel.name+" > "+lcarousel.itemTag+"."+lcarousel.name+":first-of-type").forEach((el) => {
			el.classList.add(lcarousel.cursor);
		});
		return true;
	},
	cycle: function($wrapper) {
		const $current = $wrapper.querySelector(lcarousel.itemTag+"."+lcarousel.name+"."+lcarousel.cursor);
		$current.classList.remove(lcarousel.cursor);
		if ($current.nextElementSibling && $current.nextElementSibling.classList.contains(lcarousel.name))
			$current.nextElementSibling.classList.add(lcarousel.cursor);
		else
			$wrapper.querySelector(lcarousel.itemTag+"."+lcarousel.name+":first-of-type").classList.add(lcarousel.cursor);
		return true;
	},
	cycleAll: function() {
		document.querySelectorAll(lcarousel.wrapTag+"."+lcarousel.name).forEach((el) => {
			if (el.querySelectorAll(lcarousel.itemTag+"."+lcarousel.name).length > 1)
				lcarousel.cycle(el);
		});
		return true;
	}
};

document.addEventListener("DOMContentLoaded", function() {
	theme.set(theme.get());
	const $switcher = document.querySelector(theme.switcher);
	if ($switcher)
		$switcher.addEventListener("change", (event) => {
			theme.set(event.target.value);
		});

	lcarousel.init();
}, {once: true});

