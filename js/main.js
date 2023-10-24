 //CHANGES SCROLL
 $(document).scroll(function() {
    navbarScroll();
  });
  
  function navbarScroll() {
    var y = window.scrollY;
    if (y > 20) {
    $('.mainNav').addClass('NavSmall');
    $('.mainLogo').addClass('logoScroll');
  
    } else if (y < 10) {
    $('.mainNav').removeClass('NavSmall');
    $('.mainLogo').removeClass('logoScroll');
   
    }
  }
  
    //SCROLLING
  $(document).ready(function() {
  
    var scrollLink = $('.scroll');
  
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
      scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
  
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
  
      scrollLink.each(function() {
  
      var sectionOffset = $(this.hash).offset().top - 20;
  
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
      })
  
    })
  
    })
  
     //SEND MESSAGE
     var form = $('#main-contact-form');
     form.submit(function(event){
       event.preventDefault();
   
       var form_status = $('<div class="form_status"></div>');
       $.ajax({
         url: $(this).attr('action'),
         type:  'post',
         data: $(this).serialize(),
         beforeSend: function(){
           form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin text-white d-block text-center"></i> <span class="d-block text-center">--- Enviando ---</span></p>').fadeIn() );
         }
       }).done(function(data){
         form_status.html('<p class="d-block text-center">Mensaje enviado</p>').delay(3000).fadeOut();
       });
     });