// set date
const date=document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close links

const navToggle=document.querySelector('.nav-toggle');
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click',()=>{
 const linksHeight=links.getBoundingClientRect().height; 
 const containerHeight=linksContainer.getBoundingClientRect().height; 
 if(containerHeight===0){
  linksContainer.style.height=`${linksHeight}px`
 }else{
  linksContainer.style.height=0;
 }
});

//  fixed navbar


const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

// console.log(navbar.getBoundingClientRect().height);
// console.log(topLink.getBoundingClientRect().height);

window.addEventListener('scroll',()=>{
 const scrollHeight = window.scrollY;
 const navHeight = navbar.getBoundingClientRect().height;
 if (scrollHeight > navHeight) {
   navbar.classList.add("fixed-nav");
 } else {
   navbar.classList.remove("fixed-nav");
 }

 if (scrollHeight > 500) {
   topLink.classList.add("show-link");
 } else {
   topLink.classList.remove("show-link");
 }

});

 // smooth scroll

 // select links

 const scrollLinks = document.querySelectorAll(".scroll-link");

 scrollLinks.forEach((link)=>{
  link.addEventListener('click',(e)=>{

   e.preventDefault();

   console.log(e.currentTarget)

   console.log(e.currentTarget.getAttribute("href").slice(1));
   console.log(e.currentTarget.href.slice(-4));
  })
 })
