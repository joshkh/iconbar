/*
* Uses jQuery!!!!111one
*/


/*====================================
=            ON DOM READY            =
====================================*/
$(function() {

    // Toggle Nav on Click
    $('#site-menu').mouseenter(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });

    $('#site-menu').mouseleave(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });


    // Toggle Nav on Click
    $('#site-menu2').mouseenter(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav2();
    });

    $('#site-menu2').mouseleave(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav2();
    });


    $('#site-menu-revealer').mouseenter(function() {
        // Calling a function in case you want to expand upon this.
        toggleRevealer();
    });




});


/*========================================
=            CUSTOM FUNCTIONS            =
========================================*/

function toggleRevealer() {
    if ($('#site-menu-revealer').hasClass('expand')) {
        // Do things on Nav Close
        $('#site-menu-revealer').removeClass('expand');
    } else {
        // Do things on Nav Open
        $('#site-menu-revealer').addClass('expand');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}



function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}


function toggleNav2() {
    if ($('#site-wrapper').hasClass('show-nav2')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav2');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav2');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}
