

// accordion
let accordionContainerElement = document.querySelectorAll(".accordion-element");

for (let item of accordionContainerElement) {
	item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
}



// cookies
document.addEventListener("DOMContentLoaded", function() {
    let cookiePopup = document.getElementById("cookie-popup");
    let acceptButton = document.getElementById("accept-btn");
    let rejectButton = document.getElementById("reject-btn");
  
    let hasAcceptedCookies = localStorage.getItem("acceptedCookies");
  
    if (!hasAcceptedCookies) {
      cookiePopup.style.display = "block";
    }
    acceptButton.addEventListener("click", function() {
      cookiePopup.style.display = "none";
      localStorage.setItem("acceptedCookies", "true");
    });
  
    rejectButton.addEventListener("click", function() {
      cookiePopup.style.display = "none";
    });
  });
  



// burger
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});





// scroll

let calcScrollValue = () => {
	let scrollProgress = document.getElementById("progress");
	let progressValue = document.getElementById("progress-value");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
	  scrollProgress.style.display = "grid";
	} else {
	  scrollProgress.style.display = "none";
	}
	scrollProgress.addEventListener("click", () => {
	  document.documentElement.scrollTop = 0;
	});
	scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;