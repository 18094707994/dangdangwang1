! function($) {
    class info {
        constructor() {
            this.urls = $('.urls');
            this.spic = $('#spic')
            this.sid = location.search.substring(1).split('=')[1]; //把从index那传来的？sid=数字，变为真正的单一个
            //这样就可以把sid传给后端，然后在返还值给前端用来凭借详情页的内容。
            this.lis = $('.urls li a img')
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
        }
    }
    new info().init();


}(jQuery)