$(document).ready(function(){

//efecto menu
  $('.menu a').each(function(index, elemento){
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top:'0'
    },500+(index*500));
  });




//Scroll menu
var acercaDe =$('#acerca-de').offset().top;
var trabajos =$('#trabajos').offset().top;
var contacto =$('#contacto').offset().top;

$('#btn-acerca-de').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: acercaDe
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-trabajos').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: trabajos
/*tiempo que tarda la animación --> */    }, 500);
});

$('#btn-contacto').on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
      scrollTop: contacto
/*tiempo que tarda la animación --> */    }, 500);
});

});
