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
}

document.addEventListener("DOMContentLoaded", function() {
	theme.set(theme.get());
	const $switcher = document.querySelector(theme.switcher);
	if ($switcher)
		$switcher.addEventListener("change", (event) => {
			theme.set(event.target.value);
		});
});

