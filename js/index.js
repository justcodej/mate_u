/*
* @Author: Marte
* @Date:   2018-01-06 16:02:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-19 18:20:02
*/

/* 首页banner效果 */
(function(){
    var banner_h=$('#index_banner').height();

    $('#demo1').css({'height':banner_h+100});
    console.log(banner_h);
    console.log($('#demo1').height());
    $('video').click(function() {
    if ($(this).hasClass('pause')) {
    } else {
        $("video").trigger("pause");
        $(this).removeClass('play');
        $(this).addClass('pause');
        $('video').css({'opacity':0}).siblings().slideDown('slow',function(){

        });
        // $('#demo1').eq(0).slideDown();
        }
    })
    $('video').bind('error ended', function(){
        $('video').css({'opacity':0}).siblings().slideDown('slow',function(){

        });
        // $('.banner_overlay_bg').eq(0).slideDown();
    })


})();


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