/* 
插件自身的作用域与用户当前的作用域相互独立，也就是插件内部的私有变量不能影响使用者的环境变量；
插件需具备默认参数(配置参数，默认参数)。
插件除了具备已实现的基本功能外，需提供部分API，使用者可以通过该API修改插件功能的默认参数，从而实现用户自定义插件效果；
插件需提供监听入口，及针对指定元素进行监听，使得该元素与插件响应达到插件效果；
插件支持链式调用。 
*/
;(function($){
    
    $.fn.extend({
        tab:function(option){

            var setting={
                activeclass:'active',
                tabbtn:'.tab_title li',
                tabcontent:'.tab_content .item',
                etype:'click'
            };

            var endoption=$.extend(setting,option);//配置参数覆盖默认参数

            $(this).each(function(index,value){
                var _this=$(this);//.tab
                if(endoption.etype=='mouseover' || endoption.etype!='click'){
                    $(this).find(endoption.tabbtn).on(endoption.etype,function(){
                        $(this).addClass(endoption.activeclass).siblings().removeClass(endoption.activeclass);
                        _this.find(endoption.tabcontent).eq($(this).index()).addClass('show').siblings().removeClass('show');
                    });
                }else{
                    $(this).find(endoption.tabbtn).on('click',function(){
                        $(this).addClass(endoption.activeclass).siblings().removeClass(endoption.activeclass);
                        _this.find(endoption.tabcontent).eq($(this).index()).addClass('show').siblings().removeClass('show');
                    });
                }
            });



        }
    });


})(jQuery);
