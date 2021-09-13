$(document).ready(function () {
	$('.header__menu').click(function (event) {
		$('.icon-menu,.menu__body').toggleClass('active');
		//ЗАПРЕТ СКРОЛА
		$('body').toggleClass('lock');
	});
});