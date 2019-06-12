! function($) {
    function Scale() {
        this.spic = $('#spic');
        this.bpic = $('#bpic');
        this.sf = $('#moveMask');
        this.bf = $('.big_pic');
        this.wrap = $('#largePicDiv');
        this.listli = $('#main-img-slider li');
        this.left = $('#pre_slide');
        this.right = $('#next_slide');
        this.listul = $('#main-img-slider');
    }


    Scale.prototype.init = function() {
        let _this = this;
        this.spic.hover(function() {
            _this.showscale();
            $(this).on('mousemove', function(e) {
                _this.spicmove(e);
            });
            //求小放大镜的尺寸和比例
            _this.sfsize();

        }, function() {
            _this.hidescale();
        });
        //获取点击图片的路径赋值给小图和大图
        this.listli.on('click', function() {
            let $imgurl = $(this).find('img').attr('src');
            _this.spic.find('img').attr('src', $imgurl);
            _this.bpic.attr('src', $imgurl);
        });

        //小图切换
        this.num = 6; //可视的li的length
        this.liwidth = this.listli.eq(0).outerWidth(true);
        this.right.on('click', function() {
            _this.rightclick();
        });

        this.left.on('click', function() {
            _this.leftclick();
        });
    }



    Scale.prototype.rightclick = function() {
        if (this.listli.length > this.num) { //所有Li的长度和可视的li的个数进行。
            this.num++;
            this.left.css('color', '#333');
            if (this.num == this.listli.length) {
                this.right.css('color', '#fff');
            }
        }
        this.listul.animate({
            left: -(this.num - 5) * this.liwidth
        });
    }
    Scale.prototype.leftclick = function() {
        if (this.num > 5) { //所有Li的长度和可视的li的个数进行。
            this.num--;
            this.right.css('color', '#333');
            if (this.num == 5) {
                this.left.css('color', '#fff');
            }
        }
        this.listul.animate({
            left: -(this.num - 5) * this.liwidth
        });
    }
    Scale.prototype.sfsize = function() {
        this.sf.css({
            width: this.spic.width() * this.bf.width() / this.bpic.width(),
            height: this.spic.height() * this.bf.height() / this.bpic.height()
        });
        //求比例：
        this.bili = this.bpic.outerWidth() / this.spic.outerWidth();
    }
    Scale.prototype.showscale = function() {
        this.sf.css('display', 'block');
        this.bf.css('display', 'block');
    }
    Scale.prototype.hidescale = function() {
        this.sf.css('display', 'none');
        this.bf.css('display', 'none');
    }
    Scale.prototype.spicmove = function(e) {
        let l = e.pageX - this.wrap.offset().left - this.sf.width() / 2;
        let t = e.pageY - this.wrap.offset().top - this.sf.height() / 2;
        if (l <= 0) {
            l = 0;
        } else if (l >= this.spic.outerWidth() - this.sf.outerWidth() - 2) {
            l = this.spic.outerWidth() - this.sf.outerWidth() - 2;
        }

        if (t <= 0) {
            t = 0;
        } else if (t >= this.spic.outerHeight() - this.sf.outerHeight() - 2) {
            t = this.spic.outerHeight() - this.sf.outerHeight() - 2;
        }

        this.sf.css({
            left: l,
            top: t
        });

        //给大图赋值位置
        this.bpic.css({
            left: -l * this.bili,
            top: -t * this.bili
        })
    }
    new Scale().init();
}(jQuery);