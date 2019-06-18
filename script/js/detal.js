! function($) {
    class info {
        constructor() {
            this.urls = $('.urls');
            this.spic = $('#spic')
            this.sid = location.search.substring(1).split('=')[1]; //把从index那传来的？sid=数字，变为真正的单一个
            //这样就可以把sid传给后端，然后在返还值给前端用来凭借详情页的内容。
            this.lis = $('.urls li a img')
            this.cartbtn = $('#buy-num')
            this.addbtn = $('#num_add')
            this.delbtn = $('#num_del')
            this.num = 1
            this.gouwubtn = $('#part_buy_button')
            this.arrsid = []; //商品的sid
            this.arrnum = []; //商品的数量
        }
        init() {

            let that = this;
            $.ajax({
                    url: 'http://10.31.164.38/dangdangwang/php/postdata.php',
                    data: {
                        sid: that.sid,
                    },
                    dataType: 'json',

                }).done(function(d) {


                    let imgs = d.urls.split(',')


                    $.each(imgs, function(i, v) {

                        that.lis[i].src = v
                    });







                })
                //通过登录按钮，跳转到登录页面
            $('.login_link').on("click", function() {
                    location.href = 'login.html'
                })
                //获取通过登录页面设置的cookie
            if ($.cookie('username')) {
                console.log($.cookie('username'))

                $('#nickname ').html('Hi,' + $.cookie('username'))
                $('.ddnewhead_welcome').css('width', "140px")
                $('#tuichu').css('display', 'block')


            }
            //给退出按钮加点击事件，让它跳到首页
            $('#tuichu').on('click', function() {
                    $.cookie('username', '18094707994', {
                        expires: -1
                    });
                    location.href = 'details.html?sid=1'
                    $('#tuichu').css('display', 'none')
                    $('#nickname ').html('') //让请登录出现
                })
                //给购物车加减按钮添加点击事件
            this.addbtn.on('click', function() {
                that.num++ //点击数字加一

                    that.cartbtn.val(that.num)
            })
            this.delbtn.on('click', function() {
                    that.num-- //点击数字减一

                        that.cartbtn.val(that.num)
                    if (that.cartbtn.val() < 0) { //判断为负的时候，num只能为0
                        that.cartbtn.val(0)
                    }
                })
                //点击按钮将商品的数量和id存放cookie中

            this.gouwubtn.on('click', function() { //点击加入购物车按钮。

                //判断当前的商品sid是否存在购物车(cookie)
                //判断当前的按钮对应的商品的sid和取出的cookie里面的sid进行比较

                //获取当前的按钮对应的商品的sid
                var $sid = location.search.substring(1).split('=')[1];
                that.cookietoarray(); //获取已经存在的cookie值。

                if ($.inArray($sid, that.arrsid) != -1) { //商品存在，数量叠加 
                    //先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
                    var num = parseInt(that.arrnum[$.inArray($sid, that.arrsid)]) + parseInt($('#buy-num').val());
                    that.arrnum[$.inArray($sid, that.arrsid)] = num;
                    addcookie('cookienum', that.arrnum.toString(), 10); //数组存入cookie

                } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
                    that.arrsid.push($sid); //将当前的id存入数组
                    addcookie('cookiesid', that.arrsid.toString(), 10); //数组存入cookie
                    that.arrnum.push($('#buy-num').val());
                    addcookie('cookienum', that.arrnum.toString(), 10); //数组存入cookie
                }
                location.href = "cart.html"
            });
        }

        cookietoarray() {
            if (getcookie('cookiesid') && getcookie('cookienum')) { //判断商品是第一次存还是多次存储
                this.arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
                this.arrnum = getcookie('cookienum').split(','); //cookie商品的num
            }
        }
    }
    new info().init();


}(jQuery)