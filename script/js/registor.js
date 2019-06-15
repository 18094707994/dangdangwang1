! function($) {

    var $iphone = $('#txt_username')
    var $pass = $('#txt_password')
    var $repass = $('#txt_repassword')
    var $iphonetishi = $('#J_tipUsername')
    var $passtishi = $('#J_tipPassword')
    var $repasstishi = $('#J_tipSurePassword')
    var $vcode = $('#txt_vcode')
    var vcode = document.querySelector('#txt_vcode')
    var $vcodetishi = $('#J_tipVcode')
    var $vcodebtn = $('#vcodeImgBtn')
    var $submit = $('#J_submitRegister')
    var $xianshi = $('#username_ok')
    var $passxianshi = $('#spn_password_ok')
    var $repassxianshi = $('#spn_repassword_ok')
    var $passcol1 = $('#spnPwdStrong1')
    var $passcol2 = $('#spnPwdStrong2')
    var $passcol3 = $('#spnPwdStrong3')
    var $cols = $('#spnPwdStrongTips')
    var $vcodexianshi = $('#spn_vcode_ok')
    var $userflag = false
    var $passwrodflag = false
    var $repassflag = false
    var $vcodeflag = false
        //一进入注册页面就获取光标
    window.onload = function() {
        $iphone.focus();


    }

    // 密码
    $pass.focus(function() {

            $passtishi.show().html('密码为6-20个字符，可由英文、数字及符号组成')
            $passcol1.hide();
            $passcol2.hide();
            $passcol3.hide();
            $passxianshi.hide()
        })
        //密码框失去焦点时的显示情况
    $pass.blur(function() {
        if ($pass.val() != '') {
            $passtishi.hide();
            if ($pass.val().length >= 6) {
                $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes'); //打钩
                $passwrodflag = true
            } else {
                $passtishi.show().html('密码长度6-20个字符，请重新输入').css('color', "red");
                $passcol1.hide()
                $passxianshi.show().removeClass('icon_yes').addClass('icon_wrong');
            }

        } else {
            $passtishi.hide();
            $passcol1.hide();
            $passxianshi.hide()
        }

    })


    // 确认密码
    $repass.focus(function() {

        $repasstishi.css({ "color": "#9e9e9e" });
        $repasstishi.show().html('请再次输入密码')
        $repassxianshi.hide()
    })
    $repass.blur(function() {
            if ($(this).val().length != '') {
                if ($(this).val() == $pass.val()) {
                    $repassxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                    $repassflag = true
                    $repasstishi.hide()
                } else {
                    $repassxianshi.show().removeClass('icon_yes').addClass('icon_wrong');
                    $repasstishi.css({ "color": "red" });
                    $repasstishi.show().html('两次输入的密码不一致，请重新输入')
                }
            } else {
                $repasstishi.hide()
                $repassxianshi.hide()
            }


        })
        //验证码验证
    $vcode.focus(function() {

            $vcodetishi.show().html('请填写图片中的字符不区分大小写')
        })
        //封装产生随机数
    function tuxing() {
        var arr = [];
        for (i = 48; i <= 57; i++) {
            arr.push(String.fromCharCode(i))
        };
        for (i = 97; i <= 122; i++) {
            arr.push(String.fromCharCode(i))
        }

        var str = ''
        for (i = 0; i < 4; i++) {

            var rannum = parseInt(Math.random() * arr.length);
            if (rannum <= 9) {
                str += arr[rannum];
            } else {
                var isupp = Math.random() > 0.5 ? true : false;
                if (isupp) {
                    str += arr[rannum].toUpperCase()
                } else {
                    str += arr[rannum]
                }
            }


        }
        return str
    }
    //输入图形码
    $('#vcodes').html(tuxing()) //让他一进程序就能看到验证码，先调用一次

    $vcodebtn.on('click', function() { //每一次点击换图
        $('#vcodes').html(tuxing())

    })
    vcode.oninput = function() {

            if ($(this).val().length != '') {
                if ($(this).val().length == 4) {

                    if ($(this).val() == $('#vcodes').html()) { //为啥一个要用val一个要用html
                        $vcodexianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                        $vcodeflag = true
                    } else { //跟验证码匹配不正确输出
                        $vcodexianshi.show().removeClass('icon_yes').addClass('icon_wrong');
                        $vcodetishi.show().html(' 图形验证码输入错误，请重新输入')
                        $vcodetishi.css('color', 'red')
                    }
                } else {
                    $vcodetishi.hide()

                }
            } else {
                $vcodetishi.hide()
            }


        }
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

                                $xianshi.show().removeClass('icon_wrong').addClass('icon_yes');

                                $iphonetishi.html('');
                                $userflag = true;
                            } else {

                                $xianshi.show().removeClass('icon_yes').addClass('icon_wrong');
                                $iphonetishi.html('此手机号已注册，请更换其它手机号');

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
                    $passcol2.hide();
                    $passcol3.hide();
                    $passtishi.hide();
                    $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                    $passwrodflag = true;
                    break;
                case 2:
                    $passcol2.show();
                    $passcol1.hide();
                    $passcol3.hide();
                    $passtishi.hide();
                    $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                    $passwrodflag = true;
                    break;
                case 3:
                    $passcol3.show();
                    $passcol1.hide();
                    $passcol2.hide();
                    $passtishi.hide();
                    $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                    $passwrodflag = true;
                    break;
                case 4:
                    $passcol3.show();
                    $passcol1.hide();
                    $passcol2.hide();
                    $passtishi.hide();
                    $passxianshi.show().removeClass('icon_wrong').addClass('icon_yes');
                    $passwrodflag = true;
                    break;

            }
        } else {
            $passcol1.show();
            $passtishi.hide();
            $passxianshi.hide();
        }
    })

    //提交数据给后端，后端把数据加入数据库中

    $submit.on('click', function() {
        if ($userflag == true && $passwrodflag == true && $repassflag == true && $vcodeflag) { //先做所有都打钩的判断
            $.ajax({

                url: 'http://10.31.164.38/dangdangwang/php/reg.php',
                data: {
                    username: $iphone.val(),
                    password: $pass.val()
                },

            }).done(function(d) {
                alert(d)
            })
        }

    })

}(jQuery)