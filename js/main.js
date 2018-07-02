function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function detectMobile() {
    var x = document.getElementById('mobileCheck');
    var y = document.getElementById('desktopCheck');

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent)) {
        //alert("You are on mobile");
        x.className += ' w3-show';
    } else {
        //alert("You are on desktop");
        y.className += ' w3-show';
    }
}
