(function () {
    var $btnLi = $('#banner .btnTab ol li');
    var $imgLi = $('#banner .imgTab ul li');
    var $imgUl = $('#banner .imgTab ul');
    var $border = $('#banner .btnTab ol .border');
    var $smallBtn = $('#banner .small .smallBtn');
    var index = 0;
    var btnW = $btnLi[0].offsetWidth+22;
    var imgW = $imgLi[0].offsetWidth;

    init();

    for(var i=0;i<$imgLi.length;i++)$imgLi[i].childNodes[0].style.cssText = 'background:url("./images/product/test_img_'+(i)+'.jpg")no-repeat center';

    $btnLi.hover(function () {
        $(this).addClass('on');
    },function () {
        if(!$(this).hasClass('hold'))$(this).removeClass('on');
    });

    $btnLi.click(function () {
        $btnLi.eq(index).removeClass('on hold');
        index = $(this).index()-1;
        play();
    });

    function init() {
        $imgUl.css({left :imgW*-index});
        $btnLi.eq(index).addClass('on');
    };

    function play() {
        $imgUl.css({left :imgW*-index});
        $border.css('left',index*btnW);
        $btnLi.eq(index).addClass('on hold');
    }
    window.onresize = function () {
        btnW = $btnLi[0].offsetWidth+22;
        imgW = $imgLi[0].offsetWidth;
    }
})();

// 课程列表
(function () {
    var $Tab = $('#main .courseTitle .tab ul li');
    var $poster = $('#main .courseList ul li a.poster');

    $Tab.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $poster.hover(function () {
        $(this).find('.hidden').css('opacity','1');
    },function () {
        $(this).find('.hidden').css('opacity','0');
    })

})();

(function () {


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