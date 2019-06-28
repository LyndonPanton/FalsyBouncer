"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function bouncer(input) {
		if (input.indexOf(", ") === -1 && !input.indexOf(" ") === -1) {
			display("Literals must be separated with this: \", \"", "???");
		} else {
			input = input.split(", ");
			console.log(input, Array.isArray(input));
			let bounced = input.filter(function(value) {
				if (value === "false" || value === "0" || value === "\"\"" || value === "null" || value === "undefined" || value === "NaN" || value === "") {
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

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		bouncer(this.children[0].value);
	});

	let chevron = document.getElementsByClassName("fas")[0];
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});
};