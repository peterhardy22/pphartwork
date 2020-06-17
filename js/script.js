// for loader
// when the page is loading execute this function
$(window).on("load", function() {
    // determine how long until the loader fades out
    $(".loader .inner").fadeOut(1000, function() {
        // determine how long until the background fades out
        $(".loader").fadeOut(750);
    });
    // call isotope plugin
    $(".items").isotope({
      // filter applied from the start is all
      filter: '*',
      animationOptions: {
          duration: 1500,
          easing: 'linear',
          queue: false        
      }
  });
});

// $(document).ready method
$(document).ready(function() {

// fancybox for portfolio section
    $("[data-fancybox]").fancybox();
    // isotope filtering of portfolio images
    $("#filters a").click(function() {
        // remove current class so when filtering all is not automatically choosen
        $("#filters .current").removeClass("current");
        // this refers to whichever button you click, and when clicked gives it class current for display
        $(this).addClass("current");
        // selector chooses class of data-filter, i.e .apps, .projects, etc.
        var selector = $(this).attr("data-filter");
        // call isoptope with new value
        $(".items").isotope({
            // filter applied from the start is all
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false        
            }
        });
        // don't do anything else after click because we don't want to go to a link
        return false;
    });

// navbar section
    // jQuery for smooth transition when clicking on sections from navbar
    $("#navigation li a").click(function(e) {
        // prevents user from going to link upon click  
        e.preventDefault();
        // get element we want to go to thru the a tag of each navbar element
        var targetElement = $(this).attr("href");
        // get position of target element
        var targetPosition = $(targetElement).offset().top;
        // use jQuery animate function to slowly scroll to section
        // -50 is a bit of an offset
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    });
    // creating a constant variable because it will never be reassigned
    const nav = $("#navigation");
    // jQuery to get the top position of the #navigation element
    const navTop = nav.offset().top;
    // when the widnow is scrolled call stickyNavigation function
    $(window).on("scroll", stickyNavigation);
    // function for creating stickyNavigation
    function stickyNavigation() {
        // create variable for the body element
        const body = $("body");
        // gains position of the scroll window and asks if its >= the position of the top of the navbar
        if($(window).scrollTop() >= navTop) {
            // add whatever the height is pixels worth of padding
            body.css("padding-top", nav.outerHeight() + "px");
            // add that class to the body
            body.addClass("fixedNav");    
        }
        else {
            body.css("padding-top", 0);
            // remove fixedNav class so it doesnt stay with the scroll
            body.removeClass("fixedNav");
        }
    }

});