(function () {
    var $newLi = $('#main .newList ul li');

    $newLi.mouseenter(function (e) {
        $(this).find('.border').css({
            width: '1280px'
        })
    });
    $newLi.mouseleave(function () {
        $(this).find('.border').css({
            width: '0'
        })
    });

})();