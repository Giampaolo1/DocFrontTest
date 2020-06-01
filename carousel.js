
// Original Structure:

//object with properties ORIGINAL
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

// Instruction on click:

$( document ).ready(function() {

  // ARROW NEXT FX

  $(".next").click(function(){
     $(".card2").addClass("flex");
     $(".prev").addClass("flex");

     $(".card").hide(1000);
     $(".next").hide();

     options2.fetchCards();
     document.getElementById('title').innerHTML=options2.title;
     document.getElementById('subtitle').innerHTML=options2.subtitle;
     document.getElementById('icona').innerHTML='<i class="fab fa-slideshare"></i>';

     // Load IMG on click (For Delay)

     document.getElementById('imgtop1').src="https://source.unsplash.com/150x60/?brand";
     document.getElementById('imgtop2').src="https://source.unsplash.com/150x60/?advert";

   });

  // ARROW PREV FX

   $(".prev").click(function(){
     $(".card2").removeClass("flex");
     $(".prev").removeClass("flex");

     $(".card").show(1667);
     $(".next").show();

     options1.fetchCards();
     // console.log(options1.container);
     document.getElementById('title').innerHTML=options1.title;
     document.getElementById('subtitle').innerHTML=options1.subtitle;
     document.getElementById('icona').innerHTML='<i class="fas fa-lightbulb"></i>';

   });

});

// mouse OVER and LEAVE for the arrow

$(".containerGlobale").mouseover(function () {
    $(".next, .prev").addClass("opac")
})

$(".containerGlobale").mouseleave(function () {
    $(".next, .prev").removeClass("opac")
})








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
