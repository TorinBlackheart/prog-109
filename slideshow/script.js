var slideIndex = 1;
var slideShowTimer;
showSlides(slideIndex);
var previous = document.querySelector("#prev");
var next = document.querySelector("#next");
var play = document.querySelector("#play");
var stopSS = document.querySelector("#stop");
previous.addEventListener("click",function(event){
  showSlides(slideIndex += -1);
});
next.addEventListener("click",function(event){
  showSlides(slideIndex += 1);
});
play.addEventListener("click",function(event){
  playSlideShow();
});
stopSS.addEventListener("click",function(event){
  stopSlideShow();
});
function showSlides(index){
  var i;
  var slides = document.getElementsByClassName("slide");
  if (index > slides.length) {slideIndex = 1}
  if (index < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
function stopSlideShow(){
  clearInterval(slideShowTimer);
}
function playSlideShow(){
  slideShowTimer = setInterval(startSlideShow, 5000);
}
function startSlideShow(){
  showSlides(slideIndex += 1);
}