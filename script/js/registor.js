! function($) {
    var $iphone = $('#txt_username')
    var $pass = $('#txt_password')
    var $repass = $('#txt_repassword')
    var $iphonetishi = $('#J_tipUsername')
    var $passtishi = $('#J_tipPassword')
    var $repasstishi = $('#J_tipSurePassword')
    var $vcode = $('#txt_vcode')
    var $vcodetishi = $('#J_tipVcode')
    var $submit = $('#J_submitRegister')
    var $xianshi = $('#username_ok')
    var $passxianshi = $('#spn_password_ok')
    var $passcol1 = $('#spnPwdStrong1')
    var $passcol2 = $('#spnPwdStrong2')
    var $passcol3 = $('#spnPwdStrong3')
    var $cols = $('#spnPwdStrongTips')
    var $userflag = false

    //一进入注册页面就获取光标
    window.onload = function() {
        $iphone.focus();


    }

    //密码
    $pass.focus(function() {

        $passtishi.show().html('密码为6-20个字符，可由英文、数字及符号组成')
        $passcol1.hide();
        $passcol2.hide();
        $passcol3.hide();

    })
    $pass.blur(function() {
            if ($pass.val() != '') {
                $passtishi.hide();
            } else {
                $passtishi.hide();
                $passcol1.hide();
            }

        })
        // 确认密码
    $repass.focus(function() {

        $repasstishi.css({ "color": "#9e9e9e" });
        $repasstishi.show().html('请再次输入密码')

    })
    $repass.blur(function() {
            $repasstishi.hide().html('请再次输入密码')

        })
        //验证码
    $vcode.focus(function() {

        $vcodetishi.show().html('请填写图片中的字符不区分大小写')
    })
    $vcode.blur(function() {
            $vcodetishi.hide()
        })
        //验证用户名是否重复和表单验证
    $iphone.blur(function() {
            if (this.value != '') {
                var reg = /^1[34578]\d{9}$/
                if (reg.test(this.value) && this.value.length == 11) { //检测格式是否正确


                    $.ajax({ //格式正确以后把值传给后端进行对比，是否重复

                        url: 'http://10.31.164.38/dangdangwang/php/reg.php',
                        data: {
                            xingming: $iphone.val()
                        },
                        success: function(d) {

                            if (!d) { //不存在'

                                $xianshi.show().html('√');
                                $xianshi.css({ "color": "green" });
                                $iphonetishi.html('');
                                $userflag = true;
                            } else {
                                $xianshi.show().removeClass('icon_yes').addClass('icon_wrong');
                                $iphonetishi.html('用户名已存在');
                                $userflag = false;
                            }
                        }
                    })

                } else {
                    $iphonetishi.html('手机格式不正确');
                    $iphonetishi.css({ "color": "red" });
                    $xianshi.show().removeClass('icon_yes').addClass('icon_wrong');
                    phonenameflag = false;
                    $userflag = false;
                }

            }



        })
        //验证密码和进行验证
    $pass.on('input', function() {

            if (this.value.length >= 6 && this.value.length <= 20) {
                var num = 0;
                var reg1 = /\d+/;
                var reg2 = /[a-z]+/;
                var reg3 = /[A-Z]+/;
                var reg4 = /\w\_/;
                if (reg1.test(this.value)) {
                    num++;
                }
                if (reg2.test(this.value)) {
                    num++;
                }
                if (reg3.test(this.value)) {
                    num++;
                }
                if (reg4.test(this.value)) {
                    num++;
                }
                switch (num) {
                    case 1:
                        $passcol1.show();
                        $passtishi.hide();
                        $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                        passwrodflag = true;
                        break;
                    case 2:
                        $passcol2.show();
                        $passtishi.hide();
                        $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                        passwrodflag = true;
                        break;
                    case 3:
                        $passcol3.show();
                        $passtishi.hide();
                        $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                        passwrodflag = true;
                        break;
                    case 4:
                        $passcol3.show();
                        $passtishi.hide();
                        $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                        passwrodflag = true;
                        break;

                }
            } else {
                $passcol1.show();
                $passtishi.hide();
                $passxianshi.show().removeClass('icon_yes').addClass('icon_wrong');
            }
        })
        //判断密码是否可以打钩
    $pass.blur(function() {
        if (this.value.length < 6) {
            $passtishi.html('密码长度6-20个字符，请重新输入');

        }
        if (passwrodflag) {
            oSpn[1].innerHTML = '√';
            oSpn[1].style.cssText = 'color:green';
            passwrodflag = true;
        }
    })

    //提交数据给后端，后端把数据加入数据库中
    $submit.on('click', function() {

        $.ajax({

            url: 'http://10.31.164.38/dangdangwang/php/reg.php',
            data: {
                username: $iphone.val(),
                password: $pass.val()
            },

        })
    })

}(jQuery)