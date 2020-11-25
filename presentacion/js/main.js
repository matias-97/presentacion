(function(){
  "use strict"

    document.addEventListener('DOMContentLoaded', function(){

      // Contacto fijo
      var windowHeight = $(window).height();
      var contactoAltura = $('.sidebar').innerHeight();

      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > windowHeight){
          $('.sidebar').addClass('fixed');
          $('body').css({'margin-top': barraAltura+'px'});
        }else {
          $('.sidebar').removeClass('fixed');
          $('body').css({'margin-top': '0px'});
        }
      });

    }); // DOM CONTENT LOADED

})();
