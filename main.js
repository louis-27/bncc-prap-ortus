// splide.js
new Splide( '.splide' ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.group-6', {
        perPage    : 1,
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	} ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '.group-6', {
		'cover'      : true,
		'heightRatio': 0.5,
	} ).mount();
} );

// smooth scroll
const scroll = new SmoothScroll('.main-nav a[href*="#"]',{
    speed: 1000
});

