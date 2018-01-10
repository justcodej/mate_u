
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

// hover

(function () {
    var $img = $('#main .imgAd .content .adView .img');
    var $hiddenText = $('#main .imgAd .content .adView .hiddenText');

    $img.hover(function () {
        $(this).siblings('.hiddenText').css('top','0');
        $(this).siblings('.hiddenText').find('.line').css('transform','skewY(-4deg)');
        show($(this))
    },function () {
        $(this).siblings('.hiddenText').css('top','260px');
        $(this).siblings('.hiddenText').find('.line').css('transform','skewY(0deg)');
        hidden($(this))
    });
    $hiddenText.hover(function () {
        $(this).css('top','0');
        show($(this))
    },function () {
        $(this).css('top','260px');
        hidden($(this))
    });


    function show(This) {
        This.siblings('.showText').find('p').css({
            backgroundColor: '#fff',
            color: '#333'
        })
    }
    function hidden(This) {
        This.siblings('.showText').find('p').css({
            backgroundColor: '#38363c',
            color: '#fff'
        })
    }

})();

// scroll
(function () {

    if( $(document,'body').scrollTop() <= 3000 ){
        $('#nav').css({
            opacity:'1',
            transform: 'translateY(0) scale(1)'
        });
    };
    $('#nav').on('transitionend',function () {
        $('#main .banner .bg').css({
            opacity:'1',
            transform: 'translateY(0) scale(1)'
        });
        $('#main .banner .bg .title').css({
            opacity:'1',
            transform: 'translateY(0) scale(1)'
        });
        $('#main .banner .bg .subtitle').css({
            opacity:'1',
            transform: 'translateY(0) scale(1)'
        });
    });
    $('#main .banner .bg .subtitle').on('transitionend',function () {
        $('#main .banner .redBar').css('width','100vw');
        $('#main .banner .content .aboutInfo').css({
            opacity:'1',
            transform: 'rotateX(0deg) translateY(0)'
        });
    });

    $(document,'body').scroll(function () {

    });
    function gdjz(div,cssname,offset,cb){
        var a,b,c,d;
        d=$(div).offset().top;
        a=eval(d + offset);
        b=$(window).scrollTop();
        c=$(window).height();
        if(b+c>a){
            $((div)).addClass((cssname));
            cb && cb();
        }
    }
})();

// 鼠标跟随
(function () {
    var oBanner = $("#main .banner").get(0);
    var oBg = $('#main .banner .bg').get(0);
    var x,y,w,h;
    oBanner.onmousemove = function (e) {
        e = e || event;
        x = e.clientX;
        y = e.clientY-80;
        w = this.clientWidth/2;
        h = (this.clientHeight-80)/2;
        x > w?x=parseInt((x*1-w)*0.05):x=parseInt((x*-1-w)*0.05);
        y > h?y=parseInt((y*1-h)*0.05):y=parseInt((y*-1-h)*0.05);

        console.log(y,x)

    };
})();