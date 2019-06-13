<?php
  
    header('content-type:text/html;charset=utf-8');//设置字符编码。
    //1.连接数据库
    //php定义常量
    define('HOST','localhost');
    define('USERNAME','root');
    define('PASSWORD','12345678');
    $conn=@mysql_connect(HOST,USERNAME,PASSWORD);//@:容错。
    if(!$conn){
        die('数据库连接错误：'.mysql_error());
    }

    mysql_select_db('taobaolist');
    mysql_query('SET NAMES UTF8');//设置字符集。




  
    