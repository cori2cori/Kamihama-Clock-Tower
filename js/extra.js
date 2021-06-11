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
		document.body.classList.add('theme-'+name);
		document.cookie = "theme="+name+"; path=/; max-age=436320000; secure; samesite=lax";
		return true;
	}
};

const lcarousel = {
	name: 'lcarousel',
	init: function() {
		document.querySelectorAll("div."+lcarousel.name+" > img."+lcarousel.name+":first-of-type").forEach((el) => {
			el.classList.add('current');
		});
		return true;
	},
	cycle: function(wrapper) {
		const current = wrapper.querySelector("img.lcarousel.current");
		current.classList.remove('current');
		if (current.nextElementSibling && current.nextElementSibling.classList.contains('lcarousel'))
			current.nextElementSibling.classList.add('current');
		else
			wrapper.querySelector("img.lcarousel:first-of-type").classList.add('current');
		return true;
	},
	cycleAll: function() {
		document.querySelectorAll("div."+lcarousel.name).forEach((el) => {
			if (el.querySelectorAll("img."+lcarousel.name).length > 1)
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
});

