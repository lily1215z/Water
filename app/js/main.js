$(function(){


    let iconMenu = document.querySelector(".icon-menu");
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    if (iconMenu) {
       iconMenu.addEventListener("click", function () {
          iconMenu.classList.toggle("active");
          body.classList.toggle("lock");
          menuBody.classList.toggle("active");
       });
    }


// Счетчик 
    let buttonCountPlus = document.getElementById("buttonCountPlus");
let buttonCountMinus = document.getElementById("buttonCountMinus");
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 1;
let price = 290.76;

buttonCountPlus.onclick = function() {
    if (number <= 3) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

buttonCountMinus.onclick = function() {
   if (number >= 2) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
};


$('.shares__inner').slick({
  dots:true,
  arrows:true,
  slidesToShow: 1,
   responsive: [
      {
         breakpoint: 500,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         arrows:false,
         dots: true
         }
      },
      // {
      //    breakpoint: 600,
      //    settings: {
      //    slidesToShow: 1,
      //    slidesToScroll: 1
      //    }
      // },
      // {
      //    breakpoint: 480,
      //    settings: {
      //    slidesToShow: 1,
      //    slidesToScroll: 1
      //    }
      // }
   ]
});

$('.partner__inner').slick({
   dots:true,
   arrows:true,
   adaptiveHeight: true,
   slidesToShow: 5,
    responsive: [
       {
          breakpoint: 1320,
          settings: {
         //  slidesToShow: 1,
         //  slidesToScroll: 1,
         //  infinite: true,
          arrows:false,
          dots: true
          }
       },
        {
         breakpoint: 958,
         settings: {
         slidesToShow: 4,
         arrows:false,
         slidesToScroll: 1
         }
      },
      {
         breakpoint: 774,
         settings: {
         slidesToShow: 2,
         arrows:false,
         slidesToScroll: 2
         }
      },
      {
         breakpoint: 419,
         settings: {
         slidesToShow: 1,
         arrows:false,
         slidesToScroll: 1
         }
      }
    ]
 });

  
});
