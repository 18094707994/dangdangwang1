! function($) { //楼梯
    function Cart() {
        this.loucent = $('.louceng');
        this.loutinav = $('.xfTop a'); //楼梯导航
    }

    Cart.prototype.init = function() {
        let _this = this;
        //右侧楼梯部分

        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $(".xf_ban").show(300);

            } else {
                $(".xf_ban").hide(300);
            };

        });

        // 点击到相应的楼层
        $('.xfTop a').on('click', function() {

            let toptop = $('.louceng').eq($(this).index()).offset().top;
            $('html,document').animate({
                scrollTop: toptop
            });
        });
        // 点击回到顶部
        $('.toTop').click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 300);
        });

    }
    new Cart().init();
}(jQuery)