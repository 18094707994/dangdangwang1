/* 
插件自身的作用域与用户当前的作用域相互独立，也就是插件内部的私有变量不能影响使用者的环境变量；
插件需具备默认设置参数；
插件除了具备已实现的基本功能外，需提供部分API，使用者可以通过该API修改插件功能的默认参数，从而实现用户自定义插件效果；
插件需提供监听入口，及针对指定元素进行监听，使得该元素与插件响应达到插件效果；
插件支持链式调用。
*/
;(function(window){
    
    function Tab(option){
        this.setting={//默认参数
            id:'#tab',
            etype:'onclick',//切换的事件类型
            tabtimer:false,//自动切换
            invoke:2//默认从哪项开始
        };
        this.option=option;//配置参数
        this.init();
    }

    Tab.prototype.init=function(){
        //配置参数覆盖默认参数
        Object.assign(this.setting,this.option);
        this.tab=document.querySelector(this.setting.id);
        this.tabtitle=this.tab.querySelectorAll('.tab_title li');
        this.tabcontent=this.tab.querySelectorAll('.tab_content .item');
        this.num=0;//存放当前点击标题的索引
        this.timer=null;//鼠标移入移出的返回值
        this.autotimer=null;//自动轮播的返回值
        var _this=this;
        

        for(var i=0;i<this.tabtitle.length;i++){
            this.tabtitle[i].index=i;
            if(this.setting.etype=='onclick' || this.setting.etype!='onmouseover'){
                this.tabtitle[i].onclick=function(){
                    _this.num=this.index;
                    _this.tabswitch();
                }
            }else{
                //防止tab切换频繁触发。
                this.tabtitle[i][this.setting.etype]=function(){
                    _this.num=this.index;
                    _this.timer=setTimeout(function(){
                        _this.tabswitch();
                    },400);  
                };
                this.tabtitle[i].onmouseout=function(){
                    clearTimeout(_this.timer);
                }
            }
        }

        //判断是否自动切换
        if(this.setting.tabtimer){
            this.autoplay();
            this.tab.onmouseover=function(){
                clearInterval(_this.autotimer);
            };
            this.tab.onmouseout=function(){
                _this.autoplay();
            }
        }
        //默认从哪项开始
        if(this.setting.invoke && this.setting.invoke>0 && this.setting.invoke<=this.tabtitle.length){
            this.num=this.setting.invoke-1;
            this.tabswitch();
        }else{
            this.num=0;
        }

    }

    //切换过程
    Tab.prototype.tabswitch=function(){
        for(var i=0;i<this.tabtitle.length;i++){
            this.tabtitle[i].className='';
            this.tabcontent[i].className='item';
        }
        this.tabtitle[this.num].className='active';
        this.tabcontent[this.num].className='item show';
    }

    //自动切换
    Tab.prototype.autoplay=function(){
        var _this=this;
        this.autotimer=setInterval(function(){
            _this.num++;
            if(_this.num>_this.tabtitle.length-1){
                _this.num=0;
            }
            _this.tabswitch();
        },3000);
    }


    window.Tab=Tab;//将构造函数暴露出来
})(window);