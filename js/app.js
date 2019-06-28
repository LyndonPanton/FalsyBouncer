"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
	});
};