
$(document).ready(function () {

    if (screen.width < 1025) {
        new fullScroll({
            mainElement: 'main',
            displayDots: false,
            dotsPosition: 'right',
            animateTime: 0.7,
            animateFunction: 'ease'
        });



    }
    else {
        $('#myContainer').multiscroll({
            // navigation: true,
            loopBottom: false,
            loopTop: false,

        });
    }

  

});



