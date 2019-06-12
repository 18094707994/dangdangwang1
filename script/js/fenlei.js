;
(function($) { //全部商品分类
    var $nav = $('#nav_l')
    var $sort = $('#__ddnav_sort')
    var $sortbtn = $('.all')
    var $bigfenlei = $('#menulist_content').children('li')
    var $fenlei1 = $('#__ddnav_sort1')
    var $menu = $('#menu_list').children('div')
    var $xiaofen = $('.select_pop')
    var $dafen = $('.select')
    $sortbtn.mouseover(function() {
        $nav.show()
        $sort.show()
    })
    $sort.mouseover(function() {
        $sort.show()
        $nav.show()

        $('.left_box').show()
    })
    $sort.mouseout(function() {
            $nav.hide()
            $sort.hide()

        })
        //给每个li加时间，让它显示列表
    for (var i = 0; i < $bigfenlei.length; i++) {

        $($bigfenlei[i]).on('mouseover', function() {
            $(this).addClass('on').siblings().removeClass('on') //给li添加class名
            $menu.eq($(this).index()).show().siblings().not($bigfenlei.parent()).hide(); //给li相同索引的列表显示

        })
    }
    //给搜索边上的分类按钮加事件
    $dafen.on('mouseover', function() {
            $xiaofen.css({ "height": "286px", "padding": "1px", "border-width": "1px" })
        })
        //移除消失
    $dafen.on('mouseout', function() {
        $xiaofen.css({ "height": "0px", "padding": "0px", "border-width": "0px" })
    })

}(jQuery))