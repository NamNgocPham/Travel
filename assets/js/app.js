// Show user
const  user = document.querySelector(".header__contact--user");


const userList = document.querySelector(".header__contact--user--list");
user.addEventListener("click", () => {
    userList.classList.toggle("active");
})

// Show login 

const userLogin = document.querySelector(".header__contact--user--link");


userLogin.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("active");
    console.log(modal);

    const closeModal = document.querySelector(".modal__head--icon");
    closeModal.addEventListener('click', () => {
        modal.classList.remove("active");
        userList.classList.remove("active");
    })

    modal.addEventListener("click", function(event) {
        if (event.target === modal || event.target === closeModal) {
            modal.classList.remove("active");
            userList.classList.remove("active");
        }
    })

});

// Slider

$(document).ready(function() {
    $(".banner").slick({
        autoplay : true,
        speed: 1000,
        prevArrow : '.arrow__prev',
        nextArrow : '.arrow__next'
    })
})

$('.responsive').slick({
    dots: true,
    nav : true,
    autoplay: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

$(document).ready(function() {
    $(".slide__special--list").slick({
        autoplay : true,
        speed: 1000,
        dots : true
    })
})

// navbar mobile 

const navbar__icon = document.querySelector(".header__contact--menu");
const navbar__mobile = document.querySelector(".navbar__mobile");

navbar__icon.addEventListener('click', () => {
    navbar__mobile.classList.toggle("active");
})

// Back to top 
const toTop = document.querySelector(".to-top");
$(document).ready(function() {
    $(window).scroll(function() {
        if (window.pageYOffset > 100) {
            toTop.classList.add("active");
        }
        else {
            toTop.classList.remove("active");
        }
    });

    // Animate

    $(".to-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    })
})