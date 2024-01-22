document.querySelectorAll(".faq-title").forEach((title) => {
	title.addEventListener("click", (event) => {
		let faq = title.parentNode.parentNode;
		let content = faq.querySelector(".faq-content");
		let icon = title.querySelector(".icon-toggle");

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			icon.src = "images/icon-plus.svg";
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			icon.src = "images/icon-minus.svg";
		}
	});
});
