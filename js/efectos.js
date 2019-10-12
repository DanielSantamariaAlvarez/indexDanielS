
//boton arriba
$('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop:'0px'
    }, 300);
  });


  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      $('.ir-arriba').slideDown(300);
    }else{
      $('.ir-arriba').slideUp(300);
    }
  });

//atributos míos :V
var words = ["Ingeniero", "Desarrollador web",
"Creador", "Inventor", "Estudiante"],
    wordWrapper = document.getElementById('word'),
    wordWrapperContent = wordWrapper.innerHTML,
    addingWord = false,
    counter = 1;

setInterval(function(){

  if(wordWrapperContent.length > 0 && !addingWord ) {
    wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
    wordWrapperContent = wordWrapper.innerHTML;
  } else {
    addingWord = true;
  }

  if( addingWord ){
    if( wordWrapperContent.length < words[counter].length  ) {
      wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
      wordWrapperContent = wordWrapper.innerHTML;
    } else {
      if( counter < words.length) {
        counter ++
      }
      addingWord = false;
    }
  }

  if( counter == words.length) {
    counter = 0;
  }

}, 100);


// BOTONES
var trabajos= $('#trabajos').offset().top;
// var precios = $('#precios').offset().top;
var contacto =$('#contacto').offset().top;
// var caracteristicas =$('#caracteristicas').offset().top;

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
