const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const navbar = document.querySelector('.navbar');
const cardsContainer = document.querySelector('.cards__container');
const cardsTitle = document.querySelector('.cards__title');

/**
 * Animation
 */
// const hideLogo = function () {
// 	logo.classList.add('transparent');
// 	logo.classList.add('small');
// 	setTimeout(() => {
// 		logo.classList.add('hidden');
// 	}, 600);
// };
// const revealMain = () => main.classList.remove('hidden');
const revealNavbar = () => navbar.classList.remove('transparent');
const revealTitle = () => cardsTitle.classList.remove('slide-up', 'transparent');
const revealCards = () =>
	[...cardsContainer.children].forEach(child => child.classList.remove('card-hidden'));

// setTimeout(hideLogo, 1500);
// setTimeout(revealMain, 2100);
setTimeout(revealNavbar, 700);
setTimeout(revealTitle, 1300);
setTimeout(revealCards, 1600);

/**
 * Create cards
 */
const titles = [
	'sliced text',
	'shape morph',
	'column & row',
	'perspective grid',
	'svg filter',
	'long read',
];
const links = ['/sliced', '/shape-morph', '/column-row', '/grid', '/svg-filter', '/long-read'];
const createCards = function () {
	titles.forEach((title, i) => {
		const html = `
		<a href="/single-spacelabs${links[i]}" class="card card-hidden">
			<div class="card__banner">
				<img class="card__banner" src="assets/banner-${i + 1}.jpg" alt="banner-${i + 1}"/>
			</div>
			<h2 class="card__title">${title}</h2>
		</a>
	`;
		cardsContainer.insertAdjacentHTML('beforeend', html);
	});
};
createCards();
