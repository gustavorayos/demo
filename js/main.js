function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function detectMobile() {
    var mobileSmall = document.getElementById('mobileSmall');
    var mobileLarge = document.getElementById('mobileLarge');
    var desktopSmall = document.getElementById('desktopSmall');
    var desktopLarge = document.getElementById('desktopLarge');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)) {
        //alert("You are on mobile");
        if (screen.width <= 992) {
            mobileSmall.className += ' w3-show';
        }
        else {
            mobileLarge.className += ' w3-show';
        }
    }
    else {
        //alert("You are on desktop");
        if ($(window).width() <= 992) {
            desktopSmall.className += ' w3-show';
        }
        else {
            desktopLarge.className += ' w3-show';
        }
    }
}

