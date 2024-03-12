function page4animaion()
{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    var a = document.querySelector("#elem1")
    console.log(a);
    var elemc = document.querySelector("#image-container")
    var fixed =  document.querySelector("#fixed-image")
    elemc.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    })
    elemc.addEventListener("mouseleave",function(){
        fixed.style.display = "none"
    }) 
    
    
    var elems = document.querySelectorAll(".elem")
    elems.forEach(function(e)  {
        e.addEventListener("mouseenter",function()
        {
         var image = e.getAttribute("data-image")
         fixed.style.backgroundImage = `url(${image})`
        })
    })
    
}
page4animaion()


function swiperAnimation()
{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation()



var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimage = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click",function()
{
   if(flag == 0)
   {
    full.style.top= 0
    navimage.style.opcaity= 0
    flag = 1
    }else
    {
        full.style.top= "-100%"
        navimage.style.opcaity = 1
        flag = 0
    }
}) 