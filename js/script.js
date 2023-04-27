const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeBtn = document.querySelector('.menu__close'),
      body = document.querySelector('body');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__progresses-counter'),
      lines = document.querySelectorAll('.skills__progresses-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// Scroll

$('a[meta-link]').on('click', function(e){
    e.preventDefault();
    menu.classList.remove('active');

    let el = $(this);
    let dest = el.attr('href');

    if(dest !== undefined && dest !== '') { 
        $('html').animate({ 
    	    scrollTop: $(dest).offset().top - 50
        }, 500 
        );
    }

    return false;
});

