! function($) {
    var $btn = $('#submitLoginBtn');
    var $username = $('.user');
    var $password = $('.pass');
    var $uspan1 = $('.placeholder1')
    var $uspan2 = $('.placeholder2')
    var $zhuce = $('.register_btn')
    var $usertishi = $('#liDivErrorMessage')
    var $passtishi = $('#login_password_error')
    var $maskbtn = $('#J_loginMaskClose')
    var $mask = $('.masks')

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
        $usertishi.show().html('请输入邮箱/昵称/手机号码');
    })
    $password.focus(function() {
            $passtishi.show().html('请填写长度为6-20个字符的密码');
        })
        //输入框失去焦点，把框里提示显示出来
    $username.blur(function() {
        $usertishi.hide();
        if ($username.val() == '') {
            $uspan1.show();
        }

    })
    $password.blur(function() {
            $passtishi.hide();
            if ($password.val() == '') {
                $uspan2.show();
            }

        })
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

                success: function() {

            }


        }).done(function(d) {
            alert(d);
            if (d) {

                // location.href = 'http://localhost/dangdangwang/src/index.html'
                alert('haha')
            } else {
                password = '';
                alert('密码错误')
            }
        })
    })
}(jQuery)