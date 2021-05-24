const menuMain = document.getElementById('main-menu')
const menuMainLinks = document.querySelectorAll('.main-menu__link')

menuMain.addEventListener('click', e => {
    if(e.target.classList.contains('main-menu__link')){
        menuMainLinks.forEach( item => {
            item.classList.remove('main-menu__link--active')
        })
        e.target.classList.add('main-menu__link--active')
    }
})