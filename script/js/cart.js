! function() {
    //1.渲染商品列表, 传入两个参数，一个id和数量，根据id和数量渲染整个可见的列表.
    function goodslist(id, count) {


        $.ajax({
            url: 'http://10.31.164.38/dangdangwang/php/index.php', //获取所有的接口数据
            dataType: 'json',

        }).done(function(data) {
            $.each(data, function(index, value) {
                if (id == value.sid) { //遍历判断sid和传入的sid是否相同，方便将那条数据设置到渲染的商品列表中。

                    var $clonebox = $('.fn-shops:hidden').clone(true, true);
                    $clonebox.find('.row_img').find('img').attr('src', value.imgurls);
                    $clonebox.find('.row_img').find('img').attr('sid', value.sid);
                    $clonebox.find('.row_name').find('a').html(value.titile);
                    $clonebox.find('#row3').find('span').html(value.price);
                    $clonebox.find('.amount ').find('input').val(count);
                    //计算每个商品的价格。
                    $clonebox.find('.row4').find('span').html((value.price * count).toFixed(2));

                    $clonebox.css('display', 'block');
                    $('#cart ').append($clonebox);
                    priceall(); //计算总价的


                    // var $clonebox = $('.fn-shops :hidden').clone(true, true);
                }



            });
            //给 全选按钮加点击事件


            $('.checknow ').on('click', function() {
                    var pr = $('.fn-shops:visible').find('.row3').find('span').html()
                    var sl = $('.fn-shops:visible').find('.amount ').find(' input').val()

                    if ($(this).attr('class').indexOf('check_on') != -1) { //存在这个属性，点击按钮应该取消勾子
                        $('.alls').removeClass('check_on') //
                        $('.quan').removeClass('check_on')
                        $('.dianpu ').removeClass('check_on')
                        $('.all1 ').removeClass('check_on')
                        $('.price').html('')
                        $('.fn-shops:visible').find('.row4').find('span').html('')

                    } else {
                        $('.alls').addClass('check_on')
                        $('.quan').addClass('check_on')
                        $('.dianpu ').addClass('check_on')
                        $('.all1 ').addClass('check_on')
                        $('.fn-shops:visible').find('.row4').find('span').html(pr * sl)
                        $('.price').html($('.fn-shops:visible').find('.row4').find('span').html()) //需要点击成功触发



                    }
                })
                //给总计加判断如果刷新的时候就是全选的，那就显示总计的金额
            if ($('.alls').attr('class').indexOf('check_on') != -1) {
                var pr = $('.fn-shops:visible').find('.row3').find('span').html()
                var sl = $('.fn-shops:visible').find('.amount ').find(' input').val()

                $('.fn-shops:visible').find('.row4').find('span').html(pr * sl)

                $('.price').html($('.fn-shops:visible').find('.row4').find('span').html())

            } else {

            }
            //给商品选择按钮加点击事件
            // if ($('.quan').attr('class').indexOf('check_on') != -1) {
            //     var pr = $('.fn-shops:visible').find('.row3').find('span').html()
            //     var sl = $('.fn-shops:visible').find('.amount ').find(' input').val()
            //     $('.fn-shops:visible').find('.row4').find('span').html(pr * sl)
            // }




            // //6.数量的改变
            // //改变商品数量++
            var $addbt = $('.fn-shops:visible  .fn-updatecount a ')[1]

            $($addbt).on('click', function() {

                var $pri = $('.fn-shops:visible').find('#row3').find('span').html() //取到单价的值

                var $count = $(this).parents('.amount ').find(' input').val(); //值
                $count++;
                if ($count >= 99) {
                    $count = 99;
                }
                $(this).parents('.amount ').find(' input').val($count); //赋值回去

                $('.row4').find('span').html($count * $pri); //改变后的价格
                $('.price').html($('.fn-shops:visible').find('.row4').find('span').html())
                priceall(); //重新计算总和。
                // alert($(this).parents('.bb_none').find('.fn-count-tip  input').val())
                setcookie($(this)); //将改变的数量重新添加到cookie

            });
            // //改变商品数量--
            var $delbt = $('.fn-shops:visible  .fn-updatecount a ')[0]

            $($delbt).on('click', function() {
                var $pri = $('.fn-shops:visible').find('#row3').find('span').html() //取到单价的值
                var $count = $(this).parents('.amount ').find(' input').val(); //取到数量的值
                $count--;
                if ($count <= 1) {
                    $count = 1;
                }
                $(this).parents('.amount ').find(' input').val($count); //点击改变输入框的值
                $('.row4').find('span').html($count * $pri); //改变后的价格

                $('.price').html($('.fn-shops:visible').find('.row4').find('span').html())
                priceall();
                setcookie($(this));
            });

            // //直接输入改变数量

            $('.fn-shops:visible  .fn-updatecount  input').on('input', function() {

                var $reg = /^\d+$/g; //只能输入数字
                var $value = parseInt($(this).val());
                if ($reg.test($value)) { //是数字
                    if ($value >= 99) { //限定范围
                        $(this).val(99);
                    } else if ($value <= 0) {
                        $(this).val(1);
                    } else {
                        $(this).val($value);
                    }
                } else { //不是数字
                    $(this).val(1);
                }
                var $pri = $('.fn-shops:visible').find('#row3').find('span').html() //取到单价的值
                var $count = $(this).parents('.amount ').find(' input').val(); //取到数量的值
                $('.row4').find('span').html($count * $pri); //改变后的价格 
                $('.price').html($('.fn-shops:visible').find('.row4').find('span').html())
                priceall();
                setcookie($(this));
            });


        })
    }
    //2.获取cookie，执行渲染列表的函数
    if (getcookie('cookiesid') && getcookie('cookienum')) {

        var s = getcookie('cookiesid').split(','); //数组sid
        var n = getcookie('cookienum').split(','); //数组num

        $.each(s, function(i, value) {
            goodslist(s[i], n[i]);
        });
        //计算有几个商品被选中
        var num = 0
        if ($('.quan').attr('class').indexOf('check_on') != -1) {
            num++
            $('.jianshu').html(num)
        } else {
            num--
            $('.jianshu').html(num)
        }


    }



    // //4.计算总价和总的商品件数，必须是选中的商品。
    function priceall() {
        var $sum = 0;
        var $count = 0;
        $('.fn-shops:visible').each(function(index, element) {
            if ($(element).find('.cart-checkbox input').prop('checked')) {
                $sum += parseInt($(element).find('.quantity-form').find('input').val());
                $count += parseFloat($(element).find('.b-sum').find('strong').html());
            }
        });

        $('.amount-sum').find('em').html($sum);
        $('.totalprice').html('￥' + $count.toFixed(2));
    }







    // //7.计算数量改变后单个商品的价格
    // function singlegoodsprice(obj) { //obj:当前元素
    //     var $dj = parseFloat(obj.parents('.goods-item').find('.b-price').find('strong').html()); //单价
    //     var $cnum = parseInt(obj.parents('.goods-item').find('.quantity-form input').val()); //数量
    //     return ($dj * $cnum).toFixed(2); //结果
    // }

    // //8.将改变后的数量的值存放到cookie
    // //点击按钮将商品的数量和id存放cookie中
    var arrsid = []; //商品的id
    var arrnum = []; //商品的数量
    //提前获取cookie里面id和num
    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
            arrnum = getcookie('cookienum').split(','); //cookie商品的num
        }
    }

    function setcookie(obj) { //obj:当前操作的对象
        cookietoarray(); //得到数组
        var $index = obj.parents('.bb_none').find('img').attr('sid'); //通过id找数量的位置
        arrnum[$.inArray($index, arrsid)] = obj.parents('.bb_none').find('.fn-count-tip  input').val();
        addcookie('cookienum', arrnum.toString(), 7);
    }

    //3.如果购物车为空，显示empty-cart盒子(购物车空空的)
    // kong();

    // function kong() {
    //     if (getcookie('cookiesid') && getcookie('cookienum')) {
    //         $('.empty-cart').hide(); //cookie存在，购物车有商品，隐藏盒子。
    //     } else {
    //         $('.empty-cart').show();
    //     }
    // }
    // //9.删除操作
    // //删除cookie
    function delgoodslist(sid, arrsid) { //sid：当前删除的sid，arrsid:cookie的sid的值
        var $index = -1;
        $.each(arrsid, function(index, value) { //删除的sid对应的索引位置。 index:数组项的索引
            if (sid == value) {
                $index = index; //如果传入的值和数组的值相同，返回值对应的索引。
            }
        });
        arrsid.splice($index, 1); //删除数组对应的值
        arrnum.splice($index, 1); //删除数组对应的值
        addcookie('cookiesid', arrsid.toString(), 7); //添加cookie
        addcookie('cookienum', arrnum.toString(), 7); //添加cookie
    }
    $('.fn-remove-product').on('click', function() {
            alert($(this).parents('.bb_none').find('img').attr('sid'));
            alert($(this).parents('.bb_none').find('img').attr('sid'))
            delgoodslist($('this').parents('.bb_none').find('img').attr('sid'))
        })
        // //删除单个商品的函数(委托)
        // $('.item-list').on('click', '.b-action a', function(ev) {
        //     cookietoarray(); //得到数组,上面的删除cookie需要。
        //     if (confirm('你确定要删除吗？')) {
        //         $(this).first().parents('.goods-info').remove(); //通过当前点击的元素找到整个一行列表，删除
        //     }
        //     delgoodslist($(this).first().parents('.goods-info').find('img').attr('sid'), arrsid);
        //     priceall();
        // });


    //删除全部商品的函数
    // $('.operation a:first').on('click', function() {
    //     cookietoarray(); //得到数组,上面的删除cookie需要。
    //     if (confirm('你确定要全部删除吗？')) {
    //         $('.goods-item:visible').each(function() {
    //             if ($(this).find('input:checkbox').is(':checked')) { //复选框一定是选中的
    //                 $(this).remove();
    //                 delgoodslist($(this).find('img').attr('sid'), arrsid);
    //             }
    //         });
    //         priceall();
    //     }
    // });

    //5.全选操作





    var $inputs = $('.goods-item:visible').find(':checkbox');
    $('.item-list').on('change', $inputs, function() { //事件的委托的this指向被委托的元素
        if ($('.goods-item:visible').find('input:checkbox').length == $('.goods-item:visible').find('input:checked').size()) {
            $('#j_selectall2 ').prop('checked', true);
        } else {
            $('#j_selectall2 ').prop('checked', false);
        }
        priceall(); //取消选项，重算总和。
    });

}();