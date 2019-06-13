<?php
	header('content-type:text/html;charset=utf-8');
	//设置常量
	define('HOST','localhost');
	define('USERNAME','root');
	define('PASSWORD','12345678');
	define('DBNAME','taobaolist');

	//连接数据库
	$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);

    //判断数据库连接是否成功
	if($conn->connect_error){
		die('数据库连接失败'.$conn->connect_error);
	}

	//设置字符编码
	$conn->query('SET NAMES UTF8');


	//查询记录集
	$result=$conn->query("select * from goodslist");
	
	//生成接口数据
    $dataarr=array();
    for($i=0;$i<$result->num_rows;$i++){
        $dataarr[$i]=$result->fetch_assoc();
    }
    echo json_encode($dataarr);


?>