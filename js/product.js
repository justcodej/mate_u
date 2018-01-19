(function () {
    var $banner = $('#banner');
    var $btnLi = $('#banner .btnTab ol li');
    var $imgLi = $('#banner .imgTab ul li');
    var $imgUl = $('#banner .imgTab ul');
    var $border = $('#banner .btnTab ol .border');
    var index = 0;
    var btnW = $btnLi[0].offsetWidth+22;
    var imgW = $banner.get(0).offsetWidth;
    var H = $imgLi[0].offsetHeight;
    var textArr = ['外汇市场的基本面分析','欧元基本面问题？','抛物线指标','日内美指应该回调上涨吧？','如何进行外汇交易？','如何选择安全可靠的交易平台？','原油冻产协议背后的秘密'];
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
        EleMove();
    });
    function init() {
        $imgUl.css({left :imgW*-index});
        $btnLi.eq(index).addClass('on');
        play();
        EleMove();
    }
    function play() {
        $imgUl.css({left :imgW*-index});
        $border.css('left',index*btnW);
        $btnLi.eq(index).addClass('on hold');
    }
    // 鼠标移动
    function mouseMove(El) {
        El.onmouseenter = function () {
            for(var i=0;i<this.childNodes[1].children.length;i++)this.childNodes[1].children[i].style.cssText = 'opacity:1;transition: 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);';
            this.onmousemove = function (e) {
                e = e || window.event;
                var x = (e.clientX-(this.offsetWidth/2));
                var y = (e.clientY-(this.offsetHeight/2));
                changeEle(this,x,y);
            };
            this.onmouseleave = function () {
                for(var i=0;i<this.childNodes[1].children.length;i++)this.childNodes[1].children[i].style.cssText = 'opacity:1;transition: 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99);transform:translate3d(0px,0px,0px)';
            }
        };
    }
    // 判断需要鼠标移动的元素
    function changeEle(This,x,y) {
        for(var i=0;i<This.childNodes[1].children.length;i++){
            var name = This.childNodes[1].children[i].className;
            if(index == 0 && name == 'dollar' || name == 'round1' || name == 'round2' ||name == 'up' || name == 'round4' || name == 'round3'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.02))+'px,'+(parseInt(y*.02))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
            }else if(index == 0 && name == 'arcRound' || name == 'arcLine'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.06))+'px,'+(parseInt(y*.06))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
            }else if(index == 0 && name == 'bigRound' ){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.03))+'px,'+(parseInt(y*.03))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
            }else if(index == 0 && name == 'people'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.02))+'px,'+(parseInt(y*.02))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
            }
            if(index == 3 && name == 'play'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.02))+'px,'+(parseInt(y*.03))+'px,0px) rotateX('+(x*.01)+'deg) rotateY('+(y*.01)+'deg)';
            }else if(index == 3 && name == 'bottom' || name == 'line'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.008))+'px,'+(parseInt(y*.008))+'px,0px)';
            }else if(index == 3 && name == 'ball'){
                This.childNodes[1].children[i].style.cssText = 'opacity:1;transition:none;transform:translate3d('+(parseInt(x*.008))+'px,'+(parseInt(y*.008))+'px,0px)';
            }
        }
    }
    // 元素进入
    function EleMove() {
        // banner 1
        if(index == 0){
            setTimeout(function () {
                if(!$imgLi.eq(0).find('.view p.title').attr('style')){
                    $imgLi.eq(0).find('.view p.title').css('animation','LiMoveY .8s ease forwards');
                    $imgLi.eq(0).find('.view p.subtitle').css('animation','LiMoveY .8s ease forwards');
                }
            },500);
        }
        $imgLi.eq(0).find('.view p.title').on('animationend',function () {
            $imgLi.eq(0).find('.view p.info').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(0).find('.view .text').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(0).find('.view .dollar').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .up').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .round1').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .round2').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .round3').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .round4').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .bigRound').css('animation','changeOpacity 1s ease forwards');
            $imgLi.eq(0).find('.view .people').css('animation', 'changeOpacity 1s ease forwards');
        });
        $imgLi.eq(0).find('.view .text').on('animationend',function () {
            $imgLi.eq(0).find('.view a.btn').css('animation','LiMoveX .8s ease forwards');
            $imgLi.eq(0).find('.view .arcRound').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(0).find('.view .arcLine').css('animation','changeOpacity .8s ease forwards');
        });

        // banner 2
        if(index == 1){
            setTimeout(function () {
                if(!$imgLi.eq(1).find('.view p.title').attr('style')){
                    $imgLi.eq(1).find('.view .redBox').css('animation','changeHeight .8s ease forwards');
                    $imgLi.eq(1).find('.view .tip').css('animation','changeWidth .8s ease forwards');
                }
            },500);
        }
        $imgLi.eq(1).find('.view .redBox').on('animationend',function () {
            $imgLi.eq(1).find('.view .redBox span').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(1).find('.view .tip span').css('animation','changeOpacity .8s ease forwards');
            $imgLi.eq(1).find('.view .title').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(1).find('.view .subtitle').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(1).find('.view .people').css('animation','changeOpacity .8s ease forwards');
        });
        $imgLi.eq(1).find('.view .tip').on('animationend',function () {
            $imgLi.eq(1).find('.view .name').css('animation','LiMoveY .8s ease forwards');
        });
        $imgLi.eq(1).find('.view .name').on('animationend',function () {
            $imgLi.eq(1).find('.view a.btn').css('animation','LiMoveX .8s ease forwards');
        });
        // banner 3
        if(index == 2){
            setTimeout(function () {
                if(!$imgLi.eq(2).find('.view p.title').attr('style')){
                    $imgLi.eq(2).find('.view .title').css('animation','LiMoveY .8s ease forwards');
                }
            },500);
        }
        $imgLi.eq(2).find('.view .title').on('animationend',function () {
            $imgLi.eq(2).find('.view .subtitle').css('animation','LiMoveY .8s ease forwards');
        });
        $imgLi.eq(2).find('.view .subtitle').on('animationend',function () {
            $imgLi.eq(2).find('.view .EN').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(2).find('.view .tip').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(2).find('.view .star').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(2).find('.view a.btn').css('animation','LiMoveY .8s ease forwards');
        });
        if(index == 3){
            setTimeout(function () {
                if(!$imgLi.eq(3).find('.view p.title').attr('style')){
                    $imgLi.eq(3).find('.view .title').css('animation','LiMoveY .8s ease forwards');
                    $imgLi.eq(3).find('.view .EN').css('animation','LiMoveY .8s ease forwards');
                    $imgLi.eq(3).find('.view .line').css('animation','LiMoveY .8s ease forwards');
                    $imgLi.eq(3).find('.view .bottom').css('animation','LiMoveY .8s ease forwards');
                }
            },500);
        }
        $imgLi.eq(3).find('.view .EN').on('animationend',function () {
            $imgLi.eq(3).find('.view .subtitle').css('animation','LiMoveY .8s ease forwards');
            $imgLi.eq(3).find('.view .play').css('animation','LiMoveY .8s ease forwards');
        });
        $imgLi.eq(3).find('.view .subtitle').on('animationend',function () {
            $imgLi.eq(3).find('.view a.btn').css('animation','LiMoveX .8s ease forwards');
            $imgLi.eq(3).find('.view .ball').css('animation','LiMoveT .8s ease forwards');
        })
    }
    // 弹幕
    function createEle(index,text) {
        var oA = document.createElement('a');
            oA.href = '#';
            oA.innerText = text;
            oA.className = 'question question'+(index+1);
        var oSpan = document.createElement('span');
            oA.appendChild(oSpan);
        var oStrong = document.createElement('strong');
            oA.appendChild(oStrong);
        $imgLi.get(3).appendChild(oA);
        var width = parseInt(oA.offsetWidth)-22;
        oA.style.width = width+'px';
        oA.style.top = parseInt(random(80,H-120-42))+'px';
        oA.style.animation = 'changeRight '+(parseInt(random(15,30)))+'s linear infinite';
    }
    $imgLi.eq(0).find('.view .arcLine').on('animationend',function () {
        mouseMove($imgLi.get(0));
    });
    $imgLi.eq(3).find('.view .ball').on('animationend',function () {
        mouseMove($imgLi.get(3));
        for(var j = 0;j < textArr.length;j++)createEle(j,textArr[j]);
    });
    // 随机数
    function random(min,max) {
        return Math.round( Math.random()*(max-min)+min );
    }
    // 窗口改变
    window.addEventListener('resize',function () {
        imgW = window.innerWidth;
        $imgUl.css({left :imgW*-index});
    });
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

