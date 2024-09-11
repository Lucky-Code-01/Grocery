
// menubar code here 
var menubutton = document.querySelector("#menu_icon").onclick = showmenu;
var menubar = document.querySelector(".navbar");
function showmenu(){
   
   menubar.classList.toggle('javascriptmenu');
   searchbartarget.classList.remove('javascriptmenu');
   cartbox.classList.remove('javascriptmenu');
   userform.classList.remove('javascriptmenu');
}


// search bar code here 
var searchbtn =  document.querySelector(".searchicon").onclick = showsearch;
var searchbartarget = document.querySelector(".search_box");
function showsearch(){
   searchbartarget.classList.toggle('javascriptmenu');
   menubar.classList.remove('javascriptmenu');
   cartbox.classList.remove('javascriptmenu');
   userform.classList.remove('javascriptmenu');
}  

// now the code for the user cart here
var usercart = document.querySelector(".carticon").onclick = showcart;
var cartbox = document.querySelector(".cartbox");
function showcart(){
   cartbox.classList.toggle('javascriptmenu');
   menubar.classList.remove('javascriptmenu');
   searchbartarget.classList.remove('javascriptmenu');
   userform.classList.remove('javascriptmenu');
}

// now the code for the login form
var userlogin = document.querySelector(".loginicon").onclick = showform;
var userform = document.querySelector(".loginbox");
function showform(){
   userform.classList.toggle('javascriptmenu');
   menubar.classList.remove('javascriptmenu');
   searchbartarget.classList.remove('javascriptmenu');
   cartbox.classList.remove('javascriptmenu');
}

// hide the menu icon and other 
window.onscroll=()=>{
   userform.classList.remove('javascriptmenu');
   menubar.classList.remove('javascriptmenu');
   searchbartarget.classList.remove('javascriptmenu');
   cartbox.classList.remove('javascriptmenu');
}


// now we make the slider 

var swiper = new Swiper(".product-slider", {
   loop:true,
   spaceBetween: 20,
   autoplay: {
       delay: 7500,
       disableOnInteraction: false,

   },
   centeredSlides: true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
});


// user review 
var swiper = new Swiper(".review-slider", {
   loop:true,
   spaceBetween: 20,
   autoplay: {
       delay: 7500,
       disableOnInteraction: false,
   },
   centeredSlides: true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
});