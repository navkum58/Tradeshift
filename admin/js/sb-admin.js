// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function(e) {
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

    allNextBtn.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
            nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
    /*select-country*/

    $('.select-country').focus(function() {
        $('.overlay-full').show();
        $('#country-selection').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#country-selection').hide();
    });

    $('#country-selection menu li button').click(function(e) {
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

    $('.select-company-size').focus(function() {
        $('.overlay-full').show();
        $('#company-size').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#company-size').hide();
    });

    $('#company-size menu li button').click(function(e) {
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

    $('.select-industry').focus(function() {
        $('.overlay-full').show();
        $('#industry').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#industry').hide();
    });

    $('#industry menu li button').click(function(e) {
        var size = $(e.target).text();
        console.log(size);
        $('.select-industry').val(size);
        $('#industry menu li button').removeClass('active');
        $(this).addClass('active');
        $('.overlay-full').hide();
        $('#industry').hide(500);
    });
    /*select-company size*/
    /*select-action*/

    $('.action-btn').click(function() {
        $('.overlay-full').show();
        $('#actions-side').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#actions-side').hide();
    });

    $('#actions-side menu li button').click(function(e) {
        var size = $(e.target).text();
        console.log(size);
        $('.action-btn').val(size);
        $('#actions-side menu li button').removeClass('active');
        $(this).addClass('active');
        $('.overlay-full').hide();
        $('#actions-side').hide(500);
        $('.currency').hide(500);
    });
    /*select-company size*/
    $('.download-block').click(function() {
        $('.overlay-full').show();
        $('.download-all').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('.download-all').hide();
    });
    /*select-company size*/
    /*currency*/
    $('.currency-selector').click(function() {
        $('.overlay-full').show();
        $('.currency').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('.currency').hide(500);
    });
    /*select-currency*/

    $('.lanuage-selector').focus(function() {
        $('.overlay-full').show();
        $('#language').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#language').hide();
    });

    $('#language menu li button').click(function(e) {
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
    //select all checkboxes
    $("#select_all").change(function() { //"select all" change 
        $(".checkbox").prop('checked', $(this).prop("checked")); //change all ".checkbox" checked status
    });

    //".checkbox" change 
    $('.checkbox').change(function() {
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if (false == $(this).prop("checked")) { //if this item is unchecked
            $("#select_all").prop('checked', false); //change "select all" checked status to false
        }
        //check "select all" if all checkbox items are checked
        if ($('.checkbox:checked').length == $('.checkbox').length) {
            $("#select_all").prop('checked', true);
        }
    });
    $('.action-btn-product').click(function() {
        $('.create-product ').removeClass('hide');
    });
    $('.close-dialog').click(function() {
        $('.create-product ').addClass('hide');

    });
    /*edit-variant-block*/
    $('.edit-variant-block').click(function() {
        $('.overlay-full').show();
        $('.edit-variant ').removeClass('hide');
    });
    $('.close-sidebar').click(function() {
        $('.edit-variant').addClass('hide');
    });
    /*edit-variant-block ends*/
    $('.toggle-switch a').click(function() {
        $('.toggle-switch a').removeClass('active');
        $(this).addClass('active');
    });
    $('#carouselExample').on('slide.bs.carousel', function(e) {


        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                } else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });
    /*select-country*/

    $('.company-ownership').focus(function() {
        $('.overlay-full').show();
        $('#company-ownership').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('#company-ownership').hide();
    });

    $('#company-ownership menu li button').click(function(e) {
        var txt = $(e.target).text();
        console.log(txt);
        $('.company-ownership').val(txt);
        $('#company-ownership menu li button').removeClass('active');
        $(this).addClass('active');
        $('.overlay-full').hide();
        $('#company-ownership').hide(500);
    });
    /*select-country*/
    /*share capitol*/

    $('.share-capital').focus(function() {
        $('.overlay-full').show();
        $('#share-capital').show();
    });
    $('.cancel-popup').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide();
    });

    /*$('#share-capital menu li button').click(function(e){
       var txt = $(e.target).text();
       console.log(txt);
       $('.company-ownership').val(txt);
      $('#company-ownership menu li button').removeClass('active');
      $(this).addClass('active');
                  $('.overlay-full').hide();
                  $('#company-ownership').hide(500);
    }); */
    /*select-country*/

    $('.company-address').focus(function() {
        $('.overlay-full').show();
        $('#company-address').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide();
    });
    $('.save-data').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide();
    });

    $('.registration-address').focus(function() {
        $('.overlay-full').show();
        $('#registration-address').show();
    });
    $('.close-sidebar').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide();
    });
    $('.save-data').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide();
    });
    $('.ts-support').click(function() {
        $('.support-list').addClass('hide');
        $('.support-main').removeClass('hide');
    });

    $('.add-filter').click(function() {
        $('.overlay-full').show();
        $('#add-filter').show();
    });
    $('.relation-block').click(function() {
        $('.overlay-full').show();
        $('#relation-filter').show();
    });

    $('#relation-filter menu li button').click(function() {
        $('#relation-filter menu li button').removeClass('active');
        $(this).addClass('active');
    });

    $('.apply').click(function() {
        $('.overlay-full').hide();
        $('.right-bar').hide(500);
    });

    $('.company-detail').click(function() {
        $('.overlay-full').show();
        $('#company-detail').show();
    });
    $('.edit-company').click(function() {
        $('.overlay-full').show();
        $('#edit-company').show();
    });
    $('.create-docs').click(function() {
        $('.overlay-full').show();
        $('#create-docs').show();
    });
    $('.categorize').click(function() {
        $('.overlay-full').show();
        $('#categorize').show();
    });
    $('.properties').click(function() {
        $('.overlay-full').show();
        $('#properties').show();
    });
    $('.invite-company-btn').click(function() {
        $('.overlay-full').show();
        $('#invite-company').show();
    });
    $('.add-filter').click(function() {
        $('.overlay-full').show();
        $('#add-filter').show();
    });
    $('.sort-filter').click(function() {
        $('.overlay-full').show();
        $('#sort-filter').show();
    });
    $('.document-option').click(function() {
        $('.overlay-full').show();
        $('#document-option').show();
    });
    $('.pre-filter').click(function() {
        $('.overlay-full').show();
        $('#pre-filter').show();
    });
    $('.create-team').click(function(){
        $('.overlay-full').show();
        $('#create-team').show();
    });
    $('.edit-member li').click(function(){
        $('.edit-member li').removeClass('active')
        $(this).addClass('active');
        $('.ui-item ').toggleClass('hide');
        /*
        $('.overlay-full').show();
        $('#create-team').show();*/
    });
     $('.add-member').click(function(){
        $('.overlay-full').show();
        $('#add-member').show();
    });
      $('.edit-item').click(function(){
        $('.overlay-full').show();
        $('#edit-item').show();
    });
    
    $('.app-store-mode li a').click(function(){
        $('.app-store-mode li').removeClass('active');
        $(this).parents('li').addClass('active');

    });

   $('.categories-button').focus(function() {
        $('.overlay-full').show();
        $('#categories-button').show();
    });
   

    $('#categories-button menu li button').click(function(e) {
        var size = $(e.target).text();
        console.log(size);
        $('.categories-button span').html(size);
        $('#categories-button menu li button').removeClass('active');
        $(this).addClass('active');
        $('.overlay-full').hide();
        $('#categories-button').hide(500);
    });
    $('.app-list a').click(function(){
        $('.app-detail-popup').removeClass('hide');
    });
    $('.app-list-block li  a').click(function(){
        $('.app-detail-popup').removeClass('hide');
    });
    $('.close-popup').click(function(){
        $('.app-detail-popup').addClass('hide');
    });
    $('.item-block').click(function(){
        $('.popup-detail-item ').removeClass('hide');
    });

    $('.close-box').click(function(){
        $('.popup-detail-item ').addClass('hide');
    });

    $('.add-cart').click(function(){
        $('#cart-block').removeClass('hide');
    });

     $('.write-request-btn').click(function(){
        $('.write-request').removeClass('hide');
    });

    $('.close-box').click(function(){
        $('.write-request').addClass('hide');
    });

    $('.purchase-request').click(function(){
        $('.item-list').addClass('hide');
        $('.popup-detail-item').addClass('hide');
        $('.write-request').addClass('hide');
        $('.p-request').removeClass('hide');
        $('.chat-block').removeClass('hide');
    });
    $('.go-store').click(function(){
        $('.item-list').removeClass('hide');
        $('.p-request').addClass('hide');
        $('.chat-block').addClass('hide');
    });

     $('.item-code-block').click(function(){
        $('#item-code-block').removeClass('hide');
        $('.overlay-full').removeClass('hide');
    });
     $('.product-list-table tr td').click(function(){
        $('#product-detail').removeClass('hide');
        $('.overlay-full').removeClass('hide');
     });
      $('.approval-confirm').click(function() {
        $('.overlay-full').show();
        $('#approval-confirm').show();
    });
      $('.comments-block').click(function(){
        $('.overlay-full').show();
        $('#comments-block').show();
      });

       $('.close-comment').click(function(){
        $('#comments-block').hide();
    });

        $('.reject-purchase').click(function(){
        $('.overlay-full').show();
        $('#reject-purchase').show();
      });

        $('.reject').click(function(){
            $('.overlay-full').hide();
            $('.right-bar').hide();
        });
    $('.inbox-task').click(function(){
        $('.bg-dark').addClass('inbox-show');
        $('.inbox-wrapper').removeClass('hide');
    });

    $('.close-inbox').click(function(){

        $('.bg-dark').removeClass('inbox-show');
        $('.inbox-wrapper').addClass('hide');
    });
      $('.edit-data').click(function(){
        $('.read-mode').addClass('hide');
        $('.edit-mode').removeClass('hide');
    });
    $('.update-data').click(function(){
        $('.read-mode').removeClass('hide');
        $('.edit-mode').addClass('hide');
    });
})(jQuery); // End of use strict