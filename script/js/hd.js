 //幻灯片
 ;
 (function($) {
     function Hd() {
         this.banner = $('#daban ');
         this.btns = $('#tabs li'); //5个按钮
         this.pics = $('#lunbo li'); //14张图
         this.leftarrow = $('#lefta'); //左右箭头
         this.rightarrow = $('#righta');
         this.oUl = $('#lunbo');
         this.num = 0;
         this.bstop = true;
         this.flag = 1;

         //1.改变布局。

     }
     Hd.prototype.init = function() {


             let _this = this;
             this.liwidth = $('#liwidth').width();

             //      //给ul设置宽度
             //  this.oUl.width($('.pic li').length * this.liwidth).css('left', -this.liwidth);
             //箭头显示与隐藏
             this.banner.hover(function() {
                 _this.leftarrow.css('display', 'block')
                 _this.rightarrow.css('display', 'block');
             }, function() {
                 _this.leftarrow.css('display', 'none');
                 _this.rightarrow.css('display', 'none');
             })

             this.btns.on('click', function() {
                 _this.num = $(this).index(); //当前的索引
                 _this.tab();
                 _this.btns.eq(_this.num).addClass('now').siblings().removeClass('now');
             });
             //箭头事件

             this.rightarrow.on('click', function() {
                 _this.rightarro();
             });
             this.leftarrow.on('click', function() {
                     _this.leftarro();
                 })
                 //移到箭头的时候红框消失
             this.rightarrow.on('mouseover', function() {
                 _this.pics.removeClass('pic_hover')
             });
             this.leftarrow.on('mouseover', function() {
                     _this.pics.removeClass('pic_hover')
                 })
                 //给每个li添加移入带上红框
             for (var i = 0; i < this.pics.length; i++) {
                 $(this.pics[i]).on('mouseover', function() {
                     $(this).addClass('pic_hover')
                 })
                 $(this.pics[i]).on('mouseout', function() {
                         $(this).removeClass('pic_hover')
                     })
                     //加点击的效果,点击之后加红框
                 $(this.pics[i]).on('click', function() {
                     $(this).addClass('pic_hover choose').siblings().removeClass('pic_hover choose')
                 })

             }

         }
         //封装运动过程
     Hd.prototype.tab = function() {
             let _this = this;
             this.oUl.stop(true, true).animate({
                 left: -(this.num + 1) * this.liwidth
             }, function() {
                 if (_this.num == -1) {
                     _this.oUl.css('left', -(_this.btns.length) * _this.liwidth + 'px')


                     _this.num = _this.btns.length - 1
                 }
                 if (_this.num == _this.btns.length) {
                     _this.oUl.css('left', -(_this.liwidth) + 'px')

                     _this.num = 0
                 }
                 _this.flag = 1;
             });
         }
         //右箭头时间
     Hd.prototype.rightarro = function() {
             let _this = this;
             if (this.flag) {
                 this.flag = 0;
                 this.num++;
                 this.tab();

                 if (this.num == this.btns.length) {

                     this.btns.eq(0).addClass('now').siblings().removeClass('now');
                 } else {
                     this.btns.eq(this.num).addClass('now').siblings().removeClass('now');
                 }
             }


         }
         //左箭头事件
     Hd.prototype.leftarro = function() {
             if (this.flag) {
                 this.flag = 0;
                 this.num--;
                 // this.btns.eq(this.num).addClass('now').siblings().removeClass('now');

                 if (this.num < 0) {
                     this.btns.eq(this.btns.length - 1).addClass('now').siblings().removeClass('now');
                 } else {
                     this.btns.eq(this.num).addClass('now').siblings().removeClass('now');
                 }
                 this.tab();
             }

         }
         //倒计时
     var day = document.querySelector('#day')
     var tim = document.querySelector('#tim')
     var min = document.querySelector('#min')
     var sec = document.querySelector('#sec')


     function countdown() {
         var arr = []
         var futruetime = new Date('2019/8/22 8:00:00');
         var currenttime = new Date();
         // 时间可以相减，结果是毫秒数。
         var remaintime = parseInt((futruetime - currenttime) / 1000);


         var day = parseInt(remaintime / 86400);
         var hour = parseInt(remaintime % 86400 / 3600);
         var min = parseInt((remaintime % 3600 / 60));
         var sec = remaintime % 60;

         return arr = [day, hour, min, sec]
     }
     setInterval(function() {
         day.innerHTML = countdown()[0];
         tim.innerHTML = countdown()[1];
         min.innerHTML = countdown()[2];
         sec.innerHTML = countdown()[3];
     }, 1000);

     new Hd().init();
 }(jQuery))