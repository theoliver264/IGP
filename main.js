document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.parallax');
    let instances = M.Parallax.init(elems);  
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, {
        indicators: true
    });
});

