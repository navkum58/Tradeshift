// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
     var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-primary').addClass('btn-default');
          $item.addClass('btn-primary');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeAttr('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');
  /*select-country*/

   $('.select-country').focus(function () {
                $('.overlay-full').show();
                $('#country-selection').show();
            });
      $('.close-sidebar').click(function () {
                $('.overlay-full').hide();
                $('#country-selection').hide();
            });

  $('#country-selection menu li button').click(function(e){
     var txt = $(e.target).text();
     console.log(txt);
     $('.select-country').val(txt);
    $('#country-selection menu li button').removeClass('active');
    $(this).addClass('active');
                $('.overlay-full').hide();
                $('#country-selection').hide(500);
  });    
  /*select-country*/
    /*select-company size*/

   $('.select-company-size').focus(function () {
                $('.overlay-full').show();
                $('#company-size').show();
            });
      $('.close-sidebar').click(function () {
                $('.overlay-full').hide();
                $('#company-size').hide();
            });

  $('#company-size menu li button').click(function(e){
     var size = $(e.target).text();
     console.log(size);
     $('.select-company-size').val(size);
      $('#company-size menu li button').removeClass('active');
              $(this).addClass('active');
                $('.overlay-full').hide();
                $('#company-size').hide(500);
  });    
  /*select-company size*/
      /*select-company size*/

   $('.select-industry').focus(function () {
                $('.overlay-full').show();
                $('#industry').show();
            });
      $('.close-sidebar').click(function () {
                $('.overlay-full').hide();
                $('#industry').hide();
            });

  $('#industry menu li button').click(function(e){
     var size = $(e.target).text();
     console.log(size);
     $('.select-industry').val(size);
      $('#industry menu li button').removeClass('active');
              $(this).addClass('active');
                $('.overlay-full').hide();
                $('#industry').hide(500);
  });    
  /*select-company size*/
        /*select-company size*/

   $('.lanuage-selector').focus(function () {
                $('.overlay-full').show();
                $('#language').show();
            });
      $('.close-sidebar').click(function () {
                $('.overlay-full').hide();
                $('#language').hide();
            });

  $('#language menu li button').click(function(e){
     var lang = $(e.target).text();
     console.log(lang);
     $('.lanuage-selector').val(lang);
      $('#language menu li button').removeClass('active');
              $(this).addClass('active');
                $('.overlay-full').hide();
                $('#language').hide(500);
  });  
});
(function($) {
  "use strict"; // Start of use strict
  // Configure tooltips for collapsed side navigation
  $('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
    template: '<div class="tooltip navbar-sidenav-tooltip" role="tooltip" style="pointer-events: none;"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  })
  // Toggle the side navigation
  $("#sidenavToggler").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("sidenav-toggled");
    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
  });
  // Force the toggled class to be removed when a collapsible nav link is clicked
  $(".navbar-sidenav .nav-link-collapse").click(function(e) {
    e.preventDefault();
    $("body").removeClass("sidenav-toggled");
  });
  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .navbar-sidenav, body.fixed-nav .sidenav-toggler, body.fixed-nav .navbar-collapse').on('mousewheel DOMMouseScroll', function(e) {
    var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;
    this.scrollTop += (delta < 0 ? 1 : -1) * 30;
    e.preventDefault();
  });
  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
  // Configure tooltips globally
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
  /*wizard css*/

})(jQuery); // End of use strict
