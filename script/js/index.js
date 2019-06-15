;
(function($) {



    function Cart() {
        this.goodslist = $('.goodslist');
        this.xiaoshuo = $('#d3150')
        this.loucent = $('.louceng');
        this.loutinav = $('.xfTop a'); //楼梯导航
        this.oul = $('#__suggest_keyword')
        this.memu = $('#menu_list')
        this.area = $('.ddnewhead_area')
        this.arealist = $('.ddnewhead_area_list')
        this.beijing = $('#curent_area')
        this.sortbtn = $('.sort_button')
        this.denglu = $('.login_link')
    }

    Cart.prototype.init = function() {
        let _this = this;

        //渲染主要内容区数据
        $.ajax({
            url: 'http://10.31.164.38/dangdangwang/php/index.php',
            dataType: 'json'
        }).done(function(data) {

            let $strhtml = '<ul class="list_aa " id="component_6318170__7447__7447" ddt-area="7447" dd_name="商品">';
            $.each(data, function(i, v) {

                $strhtml += `
                  
                 
                            <li class="line1 " nname="book-825159-3032_3-3721106_1" ddt-pit="1" dd_name="1">
                                <a title="${v.title}" class="img" href="details.html?sid=${v.sid}" target="_blank"><img class="lazy" data-original="${v.imgurls}" src="" width="200" height="200" alt="${v.title}" style="display: block;"></a>
                                <div class="icon_pop"></div>
                                <p class="name" ddt-src="25298091"><a title="${v.title}" href="details.html?sid=${v.sid}" target="_blank">${v.title};大冰作品全集5册</a></p>
                                <p class="price"><span class="rob type102"><span class="sign">¥</span><span class="num">${v.price}</span></span><span class="price_r type102"></span></p><span class="ebookprice_n"><span class="ebookprice_title">电子书价：</span>
                                <span class="sign">¥</span><span class="num">${v.salenum}</span></span>
                                <div class="button">
                                    <p class="action addCart type11"><a dd_name="加入购物车" href="details.html?sid=${v.sid}" name="buybutton" target="_blank">购买</a></p>
                                </div>
                            </li>
                            
                        
                `;
            });
            $strhtml += '</ul>';
            _this.xiaoshuo.html($strhtml);
            //懒加载
            $(function() { //和拼接的元素放在一起。
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });
        });

        //运送区域
        this.area.mouseover(function() {
            _this.arealist.show();
        })
        this.arealist.on('click', function() {

        })

        //

    }




    new Cart().init();
})(jQuery);