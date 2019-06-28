"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function bouncer(input) {
		if (input.indexOf(", ") === -1 ) {
			display("Literals must be separated with this: \", \"", "???");
		} else {
			input = input.split(", ");
			console.log(input, Array.isArray(input));
			let bounced = input.filter(function(value) {
				if (value === "false" || value === "0" || value === "\"\"" || value === "null" || value === "undfined" || value === "NaN") {
					return false;
				}

				return true;
			}).join(", ");

			return display("[" + input + "]", "[" + bounced + "]");
		}
	}

	function display(original, bounced) {
		document.getElementById("display-original-value").textContent = original
		document.getElementById("display-bounced-value").textContent = bounced;
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		bouncer(this.children[0].value);
	});
};