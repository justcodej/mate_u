
// tab点击
(function () {
    var $navTab = $('#nav .container a.nav_tab');
    var $navBar = $('#nav .container a.nav_tab .bar');
    var onOff = true;
    $navTab.click(function () {
        onOff?open():close();
        onOff = !onOff;
    });
    
    function open() {
        $('#maskLayer').css('top','50px');
        $('#smallMenu').css('top','50px');
        $('#nav').css('background-color','rgba(255,60,0,.9)');
        $navBar.css('background-color','#b22a00');
    }
    function close() {
        $('#maskLayer').css('top','-100vh');
        $('#smallMenu').css('top','-100vh');
        $('#nav').css('background-color','#fff');
        $navBar.css('background-color','#ff3c00');
    }
})();