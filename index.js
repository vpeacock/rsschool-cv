// burger toggle

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__navigation');
const menuLink = document.querySelectorAll('.menu-list__link');
const btnToTop = document.querySelector('.btn-top');

const menuToggle = () => {
  if (menu.classList.contains('header__navigation_active')) {
    console.log('крестик в бургер');
    menu.classList.remove('header__navigation_active');
    burger.classList.remove('burger_active');
    burger.style.position = 'absolute';
  } else if (!menu.classList.contains('header__navigation_active')) {
    console.log('бургер в крестик');
    menu.classList.add('header__navigation_active');
    burger.classList.add('burger_active');
    burger.style.position = 'fixed';
  }
};

burger.addEventListener('click', menuToggle);
menuLink.forEach((link) => link.addEventListener('click', menuToggle))


window.onscroll = function() {scrollFunction()};

const  scrollFunction = () =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnToTop.style.display = "block";
  } else {
    btnToTop.style.display = "none";
  }
}


const topFunction = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

btnToTop.addEventListener('click', topFunction);

console.log(`
Score: 130 points

1.  студент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages +10
2.  вёрстка валидная +10
3.  вёрстка семантическая +20
4.  в footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс +10
Если ссылка в футере ведёт на курс stage0, это не ошибка.
5.  для оформления СV используются css-стили +10
6.  при уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10
7.  на странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt +10
8.  навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a +10
Также допускается использование нумерованого списка ol > li или ol > li > a
9.  Содержание CV +30
CV содержит:
  краткую информацию о себе +5
  контакты для связи +5
  перечень навыков +5
  пример кода. Код добавляется при помощи символов и тегов, а не картинкой +5
  перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +5
  информацию об образовании и уровне английского +5
10.  CV выполнено на английском языке +10
`);

