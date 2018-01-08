/*
* @Author: Marte
* @Date:   2018-01-06 16:02:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-08 15:18:40
*/

(function(){
    var h=$("#team .team_big").height();
    var w=$("#team .team_big").width();
    $("#team .team_hover_cont").css({'height':h});

    $('.team_box').hover(function(){
        // $(this).find($('.team_bg')).fadeOut();
        $(this).find($('.team_hover_cont')).slideDown();
        $(this).find($('.team_small')).fadeIn();
        $(this).find($('.team_name')).animate({'margin-top':'50px'}).css({'color':'#e84117'})
    },function(){
        $(this).find($('.team_hover_cont')).slideUp();
        $(this).find($('.team_small')).fadeOut();
        $(this).find($('.team_name')).animate({'margin-top':'10px'}).css({'color':'#333'})
    })

})();
(function($){
        $.fn.extend({
            show : function(div){
                var w = this.width(),
                        h = this.height(),
                        xpos = w/2,
                        ypos = h/2,
                        eventType = "",
                        direct = "";
                this.css({"overflow" : "hidden", "position" : "relative"});
                div.css({"position" : "absolute", "top" : this.width()});
                this.on("mouseenter mouseleave", function(e){
                    var oe = e || event;
                    var x = oe.offsetX;
                    var y = oe.offsetY;
                    var angle = Math.atan((x - xpos)/(y - ypos)) * 180 / Math.PI;
                    if(angle > -45 && angle < 45 && y > ypos){
                        direct = "down";
                    }
                    if(angle > -45 && angle < 45 && y < ypos){
                        direct = "up";
                    }
                    if(((angle > -90 && angle <-45) || (angle >45 && angle <90)) && x > xpos){
                        direct = "right";
                    }
                    if(((angle > -90 && angle <-45) || (angle >45 && angle <90)) && x < xpos){
                        direct = "left";
                    }
                    move(e.type, direct)
                });
                function move(eventType, direct){
                    if(eventType == "mouseenter"){
                        switch(direct){
                            case "down":
                                div.css({"left": "0px", "top": h}).stop(true,true).animate({"top": "0px"}, "fast");
                                break;
                            case "up":
                                div.css({"left": "0px", "top": -h}).stop(true,true).animate({"top": "0px"}, "fast");
                                break;
                            case "right":
                                div.css({"left": w, "top": "0px"}).stop(true,true).animate({"left": "0px"}, "fast");
                                break;
                            case "left":
                                div.css({"left": -w, "top": "0px"}).stop(true,true).animate({"left": "0px"}, "fast");
                                break;
                        }
                    }else{
                        switch(direct){
                            case "down":
                                div.stop(true,true).animate({"top": h}, "fast");
                                break;
                            case "up":
                                div.stop(true,true).animate({"top": -h}, "fast");
                                break;
                            case "right":
                                div.stop(true,true).animate({"left": w}, "fast");
                                break;
                            case "left":
                                div.stop(true,true).animate({"left": -w}, "fast");
                                break;
                        }
                    }
                }
            }
        });
    })(jQuery)
    $("#indus .indus_box li").each(function(i){
    $(this).show($(".inner").eq(i));
});