function transxp1() {
    var transxpvar1 = document.querySelectorAll(".trans-xp1");

    for (var i = 0; i < transxpvar1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transxpvar1[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transxpvar1[i].classList.add("active-xp1");
        } else {
            transxpvar1[i].classList.remove("active-xp1");
        }
    }
}
// window.addEventListener(transxp, 1000);
setTimeout(transxp1, 500);


function transxp() {
    var transxpvar = document.querySelectorAll(".trans-xp");

    for (var i = 0; i < transxpvar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transxpvar[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transxpvar[i].classList.add("active-xp");
        } else {
            transxpvar[i].classList.remove("active-xp");
        }
    }
}
window.addEventListener("scroll", transxp);



function transxm() {
    var transxmvar = document.querySelectorAll(".trans-xm");

    for (var i = 0; i < transxmvar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transxmvar[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transxmvar[i].classList.add("active-xm");
        } else {
            transxmvar[i].classList.remove("active-xm");
        }
    }
}
window.addEventListener("scroll", transxm);

function transxm1() {
    var transxmvar1 = document.querySelectorAll(".trans-xm1");

    for (var i = 0; i < transxmvar1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transxmvar1[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transxmvar1[i].classList.add("active-xm1");
        } else {
            transxmvar1[i].classList.remove("active-xm1");
        }
    }
}
// window.addEventListener("scroll", transxm1);
setTimeout(transxm1, 500);



function transyp() {
    var transypvar = document.querySelectorAll(".trans-yp");

    for (var i = 0; i < transypvar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transypvar[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transypvar[i].classList.add("active-yp");
        } else {
            transypvar[i].classList.remove("active-yp");
        }
    }
}
window.addEventListener("scroll", transyp);

function transyp1() {
    var transyp1var = document.querySelectorAll(".trans-yp1");

    for (var i = 0; i < transyp1var.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transyp1var[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transyp1var[i].classList.add("active-yp1");
        } else {
            transyp1var[i].classList.remove("active-yp1");
        }
    }
}
// window.addEventListener("scroll", transyp1);
setTimeout(transyp1, 500);



function transym() {
    var transymvar = document.querySelectorAll(".trans-ym");

    for (var i = 0; i < transymvar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transymvar[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transymvar[i].classList.add("active-ym");
        } else {
            transymvar[i].classList.remove("active-ym");
        }
    }
}
window.addEventListener("scroll", transym);

function transym1() {
    var transym1var = document.querySelectorAll(".trans-ym1");

    for (var i = 0; i < transym1var.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = transym1var[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
            transym1var[i].classList.add("active-ym1");
        } else {
            transym1var[i].classList.remove("active-ym1");
        }
    }
}
// window.addEventListener("scroll", transyp1);
setTimeout(transym1, 500);



function sscale() {
    var scalevar = document.querySelectorAll(".scale-scroll");

    for (var i = 0; i < scalevar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = scalevar[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            scalevar[i].classList.add("active-scale");
        } else {
            scalevar[i].classList.remove("active-scale");
        }
    }
}
// window.addEventListener("scroll", sscale);
setTimeout(sscale, 500);

function sscale2() {
    var scalevar = document.querySelectorAll(".scale-scroll2");

    for (var i = 0; i < scalevar.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = scalevar[i].getBoundingClientRect().top;
        var elementVisible = 10;

        if (elementTop < windowHeight - elementVisible) {
            scalevar[i].classList.add("active-scale2");
        } else {
            scalevar[i].classList.remove("active-scale2");
        }
    }
}
window.addEventListener("scroll", sscale2);







$('.blogslick').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick "
        // instead of a settings object
    ]
});
$('.slickpro').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick "
        // instead of a settings object
    ]
});





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides  ");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}




// auto play

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
    // change every 3 sec
}




// location.reload();
// window.onbeforeunload = function() {
//     window.scrollTo(0, 0);
// }