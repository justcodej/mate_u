/*
* @Author: Marte
* @Date:   2018-01-06 16:02:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-23 16:17:21
*/

/* 首页banner效果 */
(function(){
    var banner_h=$('#index_banner').height();

    $('#demo1').css({'height':banner_h+100});
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