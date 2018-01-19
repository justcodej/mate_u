
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
    // banner
    if( $(document,'body').scrollTop() <= 4000 ){
        $('#nav').css({
            transform: 'translateY(0)'
        });
    }
    $('#nav').on('transitionend',function () {
        $('#main .banner .bg').css({
            opacity:'1'
        });
        $('#main .banner .bg .title').css({
            opacity:'1',
            transform: 'translateY(0)'
        });
        $('#main .banner .bg .subtitle').css({
            opacity:'1',
            transform: 'translateY(0)'
        });
    });
    $('#main .banner .bg .subtitle').on('transitionend',function () {
        $('#main .banner .redBar').css('width','100vw');
    });
    $('#main .banner .redBar').on('transitionend',function () {
        $('#main .banner .content .aboutInfo').addClass('play');
    });
    $('#main .banner .content .aboutInfo').on('transitionend',function () {
        $('#main .banner .content .aboutInfo').find('p').css('opacity','1');
        $('#main .banner .content .maskLayer').css('width','0');
    });
    // team
    $(document,'body').scroll(function () {
        //title&subtitle
        gdjz($('#main .team .content .title'),'scroll',100);
        gdjz($('#main .team .content .subtitle'),'scroll',100);
        gdjz($('#main .team .content .info'),'scroll',100);
        // team part1
        gdjz($('#main .team .content .part1 .poster .redLine'),'scroll',100);
        gdjz($('#main .team .content .part1 .poster img.img'),'scroll',100);
        gdjz($('#main .team .content .part1 .message'),'scroll',100);
        // team part2
        gdjz($('#main .team .content .part2 .poster .redLine'),'scroll',100);
        gdjz($('#main .team .content .part2 .poster img.img'),'scroll',100);
        gdjz($('#main .team .content .part2 .message'),'scroll',100);
        // team part3
        gdjz($('#main .team .content .part3 .poster .redLine'),'scroll',100);
        gdjz($('#main .team .content .part3 .poster img.img'),'scroll',100);
        gdjz($('#main .team .content .part3 .message'),'scroll',100);
        // team part4
        gdjz($('#main .team .content .part4 .poster .redLine'),'scroll',100);
        gdjz($('#main .team .content .part4 .poster img.img'),'scroll',100);
        gdjz($('#main .team .content .part4 .message'),'scroll',100);
        // iconTab
        gdjz($('#main .iconTab'),'scroll',100);
        gdjz($('#main .coreTitle'),'scroll',100);
        gdjz($('#main .imgAd .content'),'scroll',100);
        gdjz($('#main .tip'),'scroll',100);

        var ST = parseInt($(this).scrollTop()/8);
        $('#main .team .content>.part').css({
            transform: 'translateY('+(-ST)+'px)'
        });
        $('#main .team .content>.title').css({
            transform: 'translateY('+(-ST)+'px)'
        })



    });
    function gdjz(div,cssname,offset){
        var a,b,c,d;
        d=$(div).offset().top;
        a=eval(d + offset);
        b=$(window).scrollTop();
        c=$(window).height();
        if(b+c>a)$((div)).addClass((cssname));
    }
})();