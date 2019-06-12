! function() {
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

}()