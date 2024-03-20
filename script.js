new Swiper(".gallery .swiper", {
	loop: true,
	loopAdditionalSlides: 1,
	centeredSlides: false,
	speed: 400,
	pagination: {
		el: ".gallery .swiper-pagination",
		clickable: true,
		type: "fraction",
		formatFractionCurrent: function (number) {
			return ("0" + number).slice(-2);
		},
		formatFractionTotal: function (number) {
			return ("0" + number).slice(-2);
		}
	},
	navigation: {
		nextEl: ".gallery .swiper-button-next",
		prevEl: ".gallery .swiper-button-prev"
	},
	slidesPerView: 1,
	spaceBetween: 0,
	breakpoints: {
		800: {
			slidesPerView: 2
		},
        1400: {
            slidesPerView: 3
        },
        2000: {
            slidesPerView: 4
        }

	}
});
