/* Active link */

const navlink = document.querySelectorAll('.nav__link');

function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));




/* Mixitup Filter */

let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 450
    }
});

/* Active work */

const linkwork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkwork.forEach((a) => a.addEventListener('click', activeWork));





