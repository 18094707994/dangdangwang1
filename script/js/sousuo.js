! function($) {

    var $search = $('#key_S');
    var search = document.querySelector('#key_S')
    var $wenzi = $('#label_key')
    var $xuanran = $('#suggest_key')
    $search.focus(function() {
        $wenzi.hide()
        $xuanran.show()
    })
    $search.blur(function() {
        $xuanran.hide()
        if ($search.val() == '') {
            $wenzi.show()

        }

    })
    if ($xuanran.empty()) {
        $xuanran.hide()
    }
    search.oninput = function() {

        var cs = document.createElement('script');
        cs.src = 'https://suggest.taobao.com/sug?code=utf-8&q=' + search.value + '&_ksTS=1559009682637_1461&callback=taobao';
        // cs.src='https://suggest.taobao.com/sug?code=utf-8&q='+search.value+'&_ksTS=1559031932788_611&callback=tao&k=1&area=c2c&bucketid=17';
        document.body.append(cs); //他追加的就是taobao({"result":[]})类似于这样的函数调用，知识还有很多数据
    }

    // taobao({
    //     "result": []
    // })

}(jQuery)

function taobao(data) {

    //获取的数据
    //渲染
    var $xuanran = $('#suggest_key')

    let $strhtml = '  <ul id="__suggest_keyword">'
    $.each(data.result, function(i, v) {
        console.log(v)
        $strhtml += `
          
        <li type="search" dd_name="搜索推荐" id="li_0" value="0" t;,0,&quot;onmouseover="mo(this.value);overchangedata(0,0)" onmouseout="outchangedata(0,0)" class=""><div id="key_0" class=""><div title="${v[0]}">${v[0]}</div></div></li>
                
        `;

    });
    $strhtml += '</ul>';

    $xuanran.html($strhtml);
}