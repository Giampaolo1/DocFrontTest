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

var options2 = {
  container: "my-carousel",
  title : "Another carousel instance title",
  subtitle: "English Text Example",
  fetchCards: function() {
  }
}











$( document ).ready(function() {
  // Scelgo una freccia (next)

  // $(".next").click(nextSlide);
  //   // console.log("cliccato");
  // $(".prev").click(previousSlide)

  $(".next").click(function(){
     $(".card2").show(1000);
     $(".prev").show(1000);

     $(".card").hide(1000);
     $(".next").hide();


     options2.fetchCards();
     document.getElementById('title').innerHTML=options2.title;
     document.getElementById('subtitle').innerHTML=options2.subtitle;

     document.getElementById('imgtop1').src="https://source.unsplash.com/150x60/?brand";
     document.getElementById('imgtop2').src="https://source.unsplash.com/150x60/?advert";

   });

   $(".prev").click(function(){
     $(".card2").hide(1000);
     $(".prev").hide();


     $(".card").show(1000);
     $(".next").show();


     options1.fetchCards();
     // console.log(options1.container);
     document.getElementById('title').innerHTML=options1.title;
     document.getElementById('subtitle').innerHTML=options1.subtitle;

   });

});

// function nextSlide (){
//
//   var posizioneimg = $(".card.active");
//   posizioneimg.removeClass("active");
//
//   if (posizioneimg.hasClass("last")) {
//   $(".card.first").addClass("active");
//   } else {
//     // Altrimenti passa l active alla prossima
//     posizioneimg.next(".card").addClass("active");
//   }
// }
//
// function previousSlide (){
//
//   var posizioneimg = $(".card.active");
//   posizioneimg.removeClass("active");
//
//   if (posizioneimg.hasClass("first")) {
//   $(".card.first").addClass("active");
//   } else {
//     // Altrimenti passa l active alla precedente
//     posizioneimg.prev(".card").addClass("active");
//   }
// }

$(".containerGlobale").mouseover(function () {
    $(".next, .prev").addClass("opac")
})

$(".containerGlobale").mouseleave(function () {
    $(".next, .prev").removeClass("opac")
})
