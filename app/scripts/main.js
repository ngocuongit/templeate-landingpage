// Slick slider
$(document).ready(function () {
	$('.quote-list').slick({
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				},
			},
		],
	});
});

$(document).ready(function () {
	var header = $('.header'),
		scroll = $('.header').innerHeight(),
		scrollOffset = 0;

	$(window).on('scroll', function (event) {
		scrollOffset = $(this).scrollTop();
		console.log(scrollOffset);
	});
});

const menuToggle = document.querySelector('.header-toggle');
const menuHeader = document.querySelector('.header-menu');
const expand = 'is-expand';
menuToggle.addEventListener('click', function () {
	menuHeader.classList.add(expand);
});
window.addEventListener('click', function (e) {
	if (!menuHeader.contains(e.target) && !e.target.matches('.header-toggle')) {
		menuHeader.classList.remove(expand);
	}
});
