document.addEventListener('DOMContentLoaded', function(){
    // window.onscroll = function() { stickyHeader(); };
    mainNavigation();
    topOfForm();

    window.addEventListener('resize', clearNav);
});

// function stickyHeader() {
//     let header = document.querySelector('header');

//     (window.pageYOffset > header.clientHeight)? header.classList.add('sticky') : header.classList.remove('sticky');
// }

function mainNavigation() {
    let hamburger = document.querySelector('.hamburger');
    let dropdowns = document.querySelectorAll('li.dropdown');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
    }, true);

    dropdowns.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('open');

            if (this.classList.contains('open')) {
                let h = this.children[1].scrollHeight;
                this.children[1].style.height = h+'px';
            } else {
                this.children[1].style.height = '';
            }
        }, true);
    });
}

function clearNav() {
    let hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('open');
    hamburger.nextElementSibling.classList.remove('open');
}

function topOfForm() {
    let links = document.querySelectorAll('a[href="/#contactForm"]'),
        form = document.querySelector('#contactForm');

    links.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            console.dir(form);
            const y = form.offsetTop - 120;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
        }, true);
    });
}