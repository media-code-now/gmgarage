$(window).on("load", function () {
    // Preload
    $("#preload").fadeOut(500);
 });
 
 jQuery(document).ready(function () {
 
    // Owl Carousel Team
    $('.wrapper-team-carousel').owlCarousel({
       loop: true,
       margin: 20,
       nav: false,
       dots: true,
       responsive: {
          0: {
             items: 1
          },
          600: {
             items: 2
          },
          768: {
             items: 3
          },
          1000: {
             items: 4
          }
       }
    });
    
    // Owl Carousel Testimonials
    $('.wrapper-testimonials-carousel').owlCarousel({
       loop: true,
       margin: 20,
       nav: false,
       dots: true,
       responsive: {
          0: {
             items: 1
          },
          600: {
             items: 1
          },
          768: {
             items: 2
          },
          1000: {
             items: 2
          }
       }
    });

    // Scroll Fixed Menu
    $(window).scroll(function () {
       var headerTop = $('.top-header-wrapper').height();
       if ($(this).scrollTop() >= headerTop) {
          $('.bottom-header-wrapper').addClass('fixedmenu');
       } else {
          $('.bottom-header-wrapper').removeClass('fixedmenu');
       }
    });
 
    // Scroll Top Button
    $('#scroll-top').click(function () {
       $('body,html').animate({
          scrollTop: 0
       }, 800);
       return false;
    });
 
    $('#scroll-top').hide();
 
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
          $('#scroll-top').fadeIn();
       } else {
          $('#scroll-top').fadeOut();
       }
    });
 
    // Scroll Menu
    $(".menu").on("click", "a", function (event) {
       event.preventDefault();
       var id = $(this).attr('href'),
          top = $(id).offset().top;
       $('body,html').animate({
          scrollTop: top
       }, 1500);
    });
 
    $("#logo, .wrapper-header-content .btn").on("click", function (event) {
       event.preventDefault();
       var id = $(this).attr('href'),
          top = $(id).offset().top;
       $('body,html').animate({
          scrollTop: top
       }, 1500);
    });
 
    // Slide Mobile Menu
    var openMenu = $('#openmenu');
    var closeMenu = $('#closemenu');
    var navigation = $('#nav');
 
    openMenu.click(function (event) {
       event.preventDefault();
       navigation.animate({
          'left': '0px'
       }, 800);
 
    });
 
    closeMenu.click(function (event) {
       event.preventDefault();
       navigation.animate({
          'left': '-320px'
       }, 800);
    });
 
    $(".menu li a, #logo, .wrapper-header-content .btn").on("click", function (event) {
       event.preventDefault();
       navigation.animate({
          'left': '-320px'
       }, 800);
    });
 
    // Ajax Send Form
    $('#sendform').click(function (event) {
       event.preventDefault();
       var name = $('input[name="name"]').val();
       var surname = $('input[name="surname"]').val();
       var email = $('input[name="email"]').val();
       var subject = $('input[name="subject"]').val();
       var message = $('textarea[name="message"]').val();
       if (name == '' || surname == '' || email == '' || subject == '' || message == '') {
 
          $('.res').fadeIn().html('<span class="error">All fields must be filled.</span>');
          $('input, textarea').focus(function () {
             $('.res').fadeOut();
          });
 
       } else {
          $.ajax({
             url: '../appointment.php',
             type: 'POST',
             data: {
                name: name,
                surname: surname,
                email: email,
                subject: subject,
                message: message
             },
             dataType: 'html',
             success: function (data) {
                if (data == 'Send') {
                   $('.res').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');
 
                   $('input[name="name"]').val('');
                   $('input[name="surname"]').val('');
                   $('input[name="email"]').val('');
                   $('input[name="subject"]').val('');
                   $('textarea[name="message"]').val('');
 
                }
             }
 
          });
       }
    });
 }); // ready