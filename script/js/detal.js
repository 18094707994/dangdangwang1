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
                    console.log(v)
                    that.lis[i].src = v
                });







            })

        }
    }
    new info().init();


}(jQuery)