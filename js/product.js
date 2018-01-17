(function () {
    var $btnLi = $('#banner .btnTab ol li');
    var $imgLi = $('#banner .imgTab ul li');
    var $imgUl = $('#banner .imgTab ul');
    var $border = $('#banner .btnTab ol .border');
    var index = 0;
    var btnW = $btnLi[0].offsetWidth+22;
    var imgW = $imgLi[0].offsetWidth;

    init();

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
        play();
    }

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
    var $bannerLi = $('#banner .imgTab ul li');

    for(var i=0;i<$bannerLi.length;i++)bannerMove($bannerLi.get(i),i);


    if($(document,'body').scrollTop() <= 3000){
        $('#banner .imgTab ul li:nth-of-type(1) .view p.title').css('animation','LiMoveY .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view p.subtitle').css('animation','LiMoveY .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .bigRound').css('animation','Liscale 1s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .people').css('animation','Liscale 1s ease forwards');
    }

    $('#banner .imgTab ul li:nth-of-type(1) .view p.title').on('animationend',function () {
        $('#banner .imgTab ul li:nth-of-type(1) .view p.info').css('animation','LiMoveY .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view p.text').css('animation','LiMoveY .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .dollar').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .up').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .round1').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .round2').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .round3').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .round4').css('animation','Liscale .8s ease forwards');
    });
    $('#banner .imgTab ul li:nth-of-type(1) .view p.text').on('animationend',function () {
        $('#banner .imgTab ul li:nth-of-type(1) .view a.btn').css('animation','LiMoveX .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .arcRound').css('animation','Liscale .8s ease forwards');
        $('#banner .imgTab ul li:nth-of-type(1) .view .arcLine').css('animation','Liscale .8s ease forwards');
    })
    $('#banner .imgTab ul li:nth-of-type(1) .view .arcLine').on('animationend',function () {

    });



    function bannerMove(El,index) {
        El.onmouseenter = function () {
            for(var i=0;i<this.childNodes[1].children.length;i++)this.childNodes[1].children[i].style.cssText = 'opacity:1;transition: 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);';
            this.onmousemove = function (e) {
                var x = (e.clientX-(this.offsetWidth/2));
                var y = (e.clientY-(this.offsetHeight/2));
                changeEle(this,x,y,index);
            };
            this.onmouseleave = function () {
                for(var i=0;i<this.childNodes[1].children.length;i++)this.childNodes[1].children[i].style.cssText = 'opacity:1;transition: 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);transform:translate3d(0px,0px,0px)';
            }
        };
    }



    function changeEle(This,x,y,index) {
        for(var i=0;i<This.childNodes[1].children.length;i++){
            var name = This.childNodes[1].children[i].className;
            if(index == 0){
                if(name == 'dollar' || name == 'round1' || name == 'round2' ||name == 'up' || name == 'round4' || name == 'round3'){
                    This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.02))+'px,'+(parseInt(y*.02))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
                }else if(name == 'arcRound' || name == 'arcLine'){
                    This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.06))+'px,'+(parseInt(y*.06))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
                }else if (name == 'bigRound' ){
                    This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.03))+'px,'+(parseInt(y*.03))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
                }else if(name == 'people'){
                    This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.02))+'px,'+(parseInt(y*.02))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
                }
            }else if(index == 1){
                if(name = ''){

                }
            }
        }
    }



})();