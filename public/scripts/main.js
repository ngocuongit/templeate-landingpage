"use strict";$(document).ready(function(){$(".quote-list").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})}),$(document).ready(function(){var t;$(".header"),$(".header").innerHeight();$(window).on("scroll",function(e){t=$(this).scrollTop(),console.log(t)})});var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expand="is-expand";menuToggle.addEventListener("click",function(){menuHeader.classList.add(expand)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(expand)});