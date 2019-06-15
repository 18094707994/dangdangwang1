! function($) {
    const $btn = $('#submitLoginBtn');
    const $username = $('.user');
    var username = document.querySelector('.user')
    const $password = $('.pass');
    const $uspan1 = $('.placeholder1')
    const $uspan2 = $('.placeholder2')
    const $zhuce = $('.register_btn')
    const $usertishi = $('#liDivErrorMessage')
    const $passtishi = $('#login_password_error')
    const $maskbtn = $('#J_loginMaskClose')
    const $mask = $('.masks')
    const $closeuser = $('#clearUsername')
        // var $url = 'http://localhost/dangdangwang/php/'
        //把安全提醒点击后关掉
    $maskbtn.on('click', function() {
            $mask.hide();
        })
        //把输入框内的提示关掉
    $uspan1.on('click', function() {
        $username.focus();
        $uspan1.hide();
    })
    $uspan2.on('click', function() {
            $password.focus();
            $uspan2.hide();
        })
        //得到焦点，给输入的提示
    $username.focus(function() {
        $('#username_div').css('border-color', '#e6e6e6')
        $usertishi.show().html('请输入邮箱/昵称/手机号码');
    })
    $password.focus(function() {
            $passtishi.show().html('请填写长度为6-20个字符的密码');
            $('#password_div').css('border-color', '#e6e6e6')
        })
        //输入框失去焦点，把框里提示显示出来
    $username.blur(function() {
            $usertishi.hide();
            if ($username.val() == '') {
                $uspan1.show();
            }

        })
        //用户名称输入东西时，显示关闭按钮
    if ($username.val() == '') {
        $closeuser.hide()
    }
    username.oninput = function() {
            $closeuser.show()
            if ($username.val() == '') {
                $closeuser.hide()
            }
        }
        //点击关闭按钮，用户名的内容被清空
    $closeuser.on('click', function() {
        $username.val('')
        $uspan1.show();
        $('#username_div').css('border-color', '#e6e6e6')


    })
    $password.blur(function() {
            $passtishi.hide();
            if ($password.val() == '') {
                $uspan2.show();
            }


        })
        //点击注册跳转

    //提交表单
    $btn.on('click', function() {

        $.ajax({
            type: 'POST',
            url: 'http://10.31.164.38/dangdangwang/php/login.php',
            data: {
                user: $username.val(),
                password: $password.val()
            },
            dataType: 'json',




        }).done(function(d) {

            if (d == 1) {


                alert('haha')
                    //设置cookie
                $.cookie("username", "18094707994", {
                    expires: 228
                })
                location.href = 'details.html?sid=1'
            } else {

                $password.val('');
                $usertishi.show().html('用户名或密码输入错误，请核对后重新输入').css('color', 'red')
                    // $('#username_div span').css('border-color', 'red')
                    // $('#password_div span')
                $('#username_div').css('border-color', '#ff0000')
                $('#password_div').css('border-color', '#ff0000')


            }
        })
    })
}(jQuery)