// var loader = document.getElementById('preloader')

// window.addEventListener('load', function(){
// 	loader.style.display = "none"
// })




ScrollReveal({
	distance: '60px',
	duration:1200,
	delay: 000,
	reset: false,
});
ScrollReveal().reveal(".main__button,.testemonial__container,.contact__content", { delay: 0, origin: "bottom" });
ScrollReveal().reveal(".main__content h1,.main__content p ,.about__img,.about-studio__img,.contact__img", { delay: 0, origin: "left", interval: 0 });
ScrollReveal().reveal(".main__img, .submain-text__container,.about__content ,.about-studio__content,.founder__title,.founder__content,", { delay: 0, origin: "bottom" });
ScrollReveal().reveal(".drop__item , .submain__img ,.submain__price,.open-air__item,.founder__img,.why__item,.fqa__accordion", { delay: 0, origin: "right", interval: 100 });


var acc = document.getElementsByClassName("staff__acordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");

	});
}

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 50,
			sectionId = current.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active')
		} else {
			document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active')
		}
	})
}



const nav = document.querySelector('header')
function scrollHeader() {
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80) {
		nav.classList.add('scroll-header');
	} else {
		nav.classList.remove('scroll-header')
	}
}
window.addEventListener('scroll', scrollHeader)


const burgerBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.hader__nav')

burgerBtn.addEventListener('click',function(){
	burgerBtn.classList.toggle('active')
	burgerMenu.classList.toggle('active')
})



const telSelector = document.querySelectorAll('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);