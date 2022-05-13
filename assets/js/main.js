

// frist slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {

    showSlides(slideIndex += n);

}

function currentSlide(n) {

    showSlides(slideIndex = n);

}

function showSlides(n) {

    var i;

    var slides = document.getElementsByClassName("mySlides");

    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }

    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace("active", "");

    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";

}
var timer = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);


// second slider

$('.schooltype-owl-carousel ').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        900:{
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})


// third slider

$('.testimonial-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items:2 ,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})




function toggleNavBar(){

    console.log("hii")
    var headerRight =  document.getElementById('headerRightformobile');
  
    console.log(headerRight.style.display,'headerRight.style.display')
  
    headerRight.classList.toggle("header-for-mobile");
  }


  ///////////////   serch bar ///////////////////
let menu = document.getElementById("menu");
let y = document.getElementById("line");
let searchModal = document.getElementById("search-modal");
let searchIcon = document.getElementById("search-icon");


function myFunction() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        y.classList.remove("close");
    } else {
        menu.style.display = "flex";
        y.classList.add("close");
    }
    console.log(y);
}

function searchBarOpen() {
    searchModal.style.display = "flex"
}

    function searchBarClose() {
        searchModal.style.display = "none"

    }

    function aboutVideoOpen() {
        aboutModal.style.display = "block"
       
    }
    
