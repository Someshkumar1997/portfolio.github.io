/* Show Menu */

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/* Menu show */
/* validate if constant exist */

if(navToggle) {
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu');
    })
}

/* Menu hide */
    /* validate if constant exist */

if(navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu');
    })
}


    /* Remove menu for mobile */

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));



/* Background Header */

function scrollHeader(){
    const header = document.getElementById('header')

// when the scroll is greater than 50vhw add the scroll header class to header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/* Contact Form */
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || Message.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Write all the input fields';
    }
    else{
        // serviceID - TemplateID - form - publickey

        emailjs.sendForm('service_gi7free', 'template_k5oa8sr', '#contact-form', '6E7DEv_pkEPA6fb6s')
        .then(() => {
            // show message and add color, window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message Sent ✅';

            // remove message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent = '';
            }, 5000);
        })
    }
};

contactForm.addEventListener('submit', sendEmail);


/* Style switcher */

const styleSwitcherToggle = document.querySelector('.style__switcher-toggler'),
styleSwitcher = document.querySelector('.style__switcher');

styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

// hide switcher on scroll
window.addEventListener('scroll', () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});

const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        }
        else {
            style.setAttribute('disabled', 'true');
        }
    });
}






