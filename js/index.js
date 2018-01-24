/*
* @Author: Marte
* @Date:   2018-01-06 16:02:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-24 17:14:31
*/
/* 浮动导航返回顶部 */
(function(){
    // console.log($('#fixed_nav .fixed_last').eq(0))
    $('#fixed_nav .fixed_last').eq(0).click(function(){
       $('body,html').animate({scrollTop:0},500);
    })
})();
/* 首页banner效果 */
(function(){
    function move(){
        var banner_h=$('#index_banner').height();
        $('#demo1').css({'height':banner_h+80});
        $('video').click(function() {
        if ($(this).hasClass('pause')) {
        } else {
            $("video").trigger("pause");
            $(this).removeClass('play');
            $(this).addClass('pause');
            $('video').css({'opacity':0}).siblings().slideDown('slow',function(){
                $('.bn_text_over').animate({'width':'100%'},'400',function(){
                    $('.bn_text_over').siblings().css({'opacity':1});
                    $('.bn_text_over').css({'right':0});
                    $('.bn_text_over').animate({'width':'0'},'400',function(){
                        $('.bn_pic_over').animate({'width':'100%'},'400',function(){
                            $('.bn_pic_over').siblings().css({'opacity':1});
                            $('.bn_pic_over').css({'right':0});
                            $('.bn_pic_over').animate({'width':'0'},'400',function(){
                                $('.bn_text2_over').animate({'width':'100%'},'400',function(){
                                    $('.bn_text2_over').siblings().css({'opacity':1});
                                    $('.bn_text2_over').css({'right':'0'});
                                    $('.bn_text2_over').animate({'width':'0'},function(){
                                        $('.shibo_over').animate({'width':'0'},'400',function(){
                                            $('.shibo_over').animate({'width':'100%'},'400',function(){
                                                $('.shibo_over').siblings().css({'opacity':1});
                                                $('.shibo_over').css({'right':'0'});
                                                $('.shibo_over').animate({'width':'0'})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
            }
        })
        $('video').bind('error ended', function(){
            $('video').css({'opacity':0}).siblings().slideDown('slow',function(){
                $('.bn_text_over').animate({'width':'100%'},'400',function(){
                    $('.bn_text_over').siblings().css({'opacity':1});
                    $('.bn_text_over').css({'right':0});
                    $('.bn_text_over').animate({'width':'0'},'400',function(){
                        $('.bn_pic_over').animate({'width':'100%'},'400',function(){
                            $('.bn_pic_over').siblings().css({'opacity':1});
                            $('.bn_pic_over').css({'right':0});
                            $('.bn_pic_over').animate({'width':'0'},'400',function(){
                                $('.bn_text2_over').animate({'width':'100%'},'400',function(){
                                    $('.bn_text2_over').siblings().css({'opacity':1});
                                    $('.bn_text2_over').css({'right':'0'});
                                    $('.bn_text2_over').animate({'width':'0'},function(){
                                        $('.shibo_over').animate({'width':'0'},'400',function(){
                                            $('.shibo_over').animate({'width':'100%'},'400',function(){
                                                $('.shibo_over').siblings().css({'opacity':1});
                                                $('.shibo_over').css({'right':'0'});
                                                $('.shibo_over').animate({'width':'0'})
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
            // $('.banner_overlay_bg').eq(0).slideDown();
        })
    }

    function isIE(){
    if (window.navigator.userAgent.indexOf("MSIE")>=1 || window.navigator.userAgent.indexOf("Edge")>=1 || window.navigator.userAgent.indexOf("rv:11.0")>=1){
        return true;
    }else{
          return false;
    }
    }

    var isie = isIE();

    if(isie){
        $('body,html').css({'width':'1920px','overflow-x':'hidden'});
        $('#demo1 .common_bg').css({'position':'absolute','height':'100%'})
        move();
    }else{
        var particles = true,
        particleDensity,
        options = {
            effectWeight: 1,
            outerBuffer: 1.08,
            elementDepth: 220
        };
    $(document).ready(function() {

        $("#demo1").logosDistort(options);

        if (particles) {
            particleDensity = window.outerWidth * 7.5;
            if (particleDensity < 13000) {
                particleDensity = 13000;
            } else if (particleDensity > 20000) {
                particleDensity = 20000;
            }
            return $('#particle-target').particleground({
                dotColor: '#ff663f',
                lineColor: 'rgb(235,85,47)',
                density: particleDensity.toFixed(0),
                parallax: false
            });
        }
    });
        move();
    }




})();


/* 产业 */

/* 团队成员 */
(function () {
    $('#team .content ul li').mouseenter(function () {$(this).addClass('hold')}).mouseleave(function () {$(this).removeClass('hold')});
})();

/* 市场新闻 */
(function(){
    (function(){
        $('#MKT_new .new_title>li').click(function(){
            $(this).addClass('new_hover').siblings().removeClass('new_hover');
            var q=$(this).index();
            $('#MKT_new .new_cont').eq(q).css({'display':'block'}).siblings().css({'display':'none'});
            console.log()
        })

    })();
})()
/* 浮动导航 */
