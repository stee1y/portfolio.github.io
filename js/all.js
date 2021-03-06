const header = document.querySelector('.header'),
  main = document.querySelector('.main'),
  home = document.querySelector('.home'),
  about = document.querySelector('.about'),
  footer = document.querySelector('.footer'),
  photo = document.querySelector('.photo'),
  name = document.querySelector('.name'),
  profession = document.querySelector('.profession'),
  socialList = document.querySelector('.social-list'),
  help = document.querySelector('.help'),
  socialListItem = document.querySelectorAll('.social-list__item'),
  overlayHidden = document.querySelectorAll('.overlay'),
  allNav = document.querySelectorAll('a[href*="#"]')
function toggleMenu(e) {
  socialListItem.forEach((e) => {
    e.children[0].removeEventListener('click', (e) => e.stopPropagation())
  }),
    header.classList.toggle('header--open'),
    home.classList.toggle('home--open'),
    about.classList.toggle('about--open'),
    main.classList.toggle('main--open'),
    footer.classList.toggle('footer--open'),
    photo.classList.toggle('photo--open'),
    name.classList.toggle('name--open'),
    profession.classList.toggle('profession--open'),
    socialList.classList.toggle('social-list--open'),
    help.classList.toggle('help--hidden'),
    overlayHidden.forEach((e) => {
      e.classList.toggle('overlay--hidden')
    })
}
for (let e of allNav)
  e.classList.contains('navigation__link') &&
    e.addEventListener('click', (o) => {
      o.preventDefault()
      const t = e.getAttribute('href')
      document
        .querySelector(`${t}`)
        .scrollIntoView({ behavior: 'smooth', block: 'start' }),
        toggleMenu()
    })
socialListItem.forEach((e) => {
  e.children[0].addEventListener('click', (e) => e.stopPropagation())
}),
  header.addEventListener('click', toggleMenu)

window.addEventListener(
  `resize`,
  (event) => {
    window.location.reload()
  },
  false
)
