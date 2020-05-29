// Javascript code must be properly structured and well commented.
// The usage of ECMAScript 2015 new constructs (templates, classes, Promises),
 // Each instance has its own info (title, subtitle, icon)
 // the overlay arrows that dynamically appear on the left and right side of the carousel when mouse hover the carousel and only when there are hidden cards on that side.



//oggetto con proprietà
var options1 = {
  container: "my-carousel",
  title : "Fresh and just uploaded content",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  fetchCards: function() {
    // document.getElementById('cardTop').innerHTML='<img src="https://source.unsplash.com/150x60/?nature">';
    // document.getElementById('cardBottom').innerHTML='Welcome to Effective Time Management';
  }
}

options1.fetchCards();
console.log(options1.container);

document.getElementById('title').innerHTML=options1.title;
document.getElementById('subtitle').innerHTML=options1.subtitle;

$( document ).ready(function() {

  // Scelgo una freccia (next)

  $(".next").click(nextSlide);
    // console.log("cliccato");

  $(".prev").click(previousSlide)


});

function nextSlide (){

  var posizioneimg = $(".card.active");
  posizioneimg.removeClass("active");

  if (posizioneimg.hasClass("last")) {
  $(".card.first").addClass("active");
  } else {
    // Altrimenti passa l active alla prossima
    posizioneimg.next(".card").addClass("active");
  }
}

function previousSlide (){

  var posizioneimg = $(".card.active");
  posizioneimg.removeClass("active");

  if (posizioneimg.hasClass("first")) {
  $(".card.first").addClass("active");
  } else {
    // Altrimenti passa l active alla precedente
    posizioneimg.prev(".card").addClass("active");
  }
}

$(".containerGlobale").mouseover(function () {
    $(".next, .prev").addClass("opac")
})

$(".containerGlobale").mouseleave(function () {
    $(".next, .prev").removeClass("opac")
})
