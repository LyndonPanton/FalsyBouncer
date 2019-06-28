"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function bouncer(input) {
		if (input.indexOf(", ") === -1) {
			return "Literals must be separated with this: \", \"";
		} else {
			let bounced = input.split(", ").map(function(value) {
				return Boolean(value);
			});

			return bounced;
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		bouncer(this.children[0].value);
	});
};