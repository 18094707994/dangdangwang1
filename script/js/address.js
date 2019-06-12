! function($) {
    let $name1 = $('#geo-name')
    let $pop = $('#geo-pop')
    let $anniu = $('.close')
    let $yunfei = $('#freight ul')
    let $baoyou = $('#freight')
    let $popname = $('#geo-pop-name li')
    let $pro = $('#pro')
    let $ci = $('#ci')
    let $dis = $('#dis')
        //加点击事件让它显示和隐藏
    $name1.on('click', function() {
        $name1.addClass('text_hover')
        $pop.css('display', 'block')
    })
    $anniu.on('click', function() {
            $name1.removeClass('text_hover')
            $pop.css('display', 'none')
        })
        //给运费加移入移除事件
    $baoyou.hover(function() {
            $yunfei.css('display', 'block')

        }, function() {
            $yunfei.css('display', 'none')
        })
        //给省市区加点击事件，出现列表
    $pro.on('click', function() {
        $('#province').css('display', 'block').siblings().css('display', 'none')
    })
    $ci.on('click', function() {
        $('#province').css('display', 'block').siblings().css('display', 'none')
    })
    $dis.on('click', function() {
        $('#province').css('display', 'block').siblings().css('display', 'none')
    })
}(jQuery)