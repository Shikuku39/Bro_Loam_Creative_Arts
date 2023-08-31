const load = document.querySelector('.loadermain')

window.addEventListener("load", function(){
    load.style.display = 'none'
})

function closeNav() {
    document.querySelector('#nav-check').checked = false
}

const scrollToTopBtn = document.querySelector('#scrollToTopBtn')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block"
    } else {
        scrollToTopBtn.style.display = "none"
    }
}

function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}