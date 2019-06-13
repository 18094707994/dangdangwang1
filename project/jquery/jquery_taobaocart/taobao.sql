/*
Navicat MySQL Data Transfer

Source Server         : db1808
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : taobao

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-12 10:24:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `taobaopic`
-- ----------------------------
DROP TABLE IF EXISTS `taobaopic`;
CREATE TABLE `taobaopic` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT COMMENT '数据的编号',
  `url` varchar(200) NOT NULL COMMENT '图片的路径',
  `titile` varchar(50) NOT NULL COMMENT '标题',
  `price` float(8,2) unsigned NOT NULL,
  `sailnumber` int(4) NOT NULL,
  `urls` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of taobaopic
-- ----------------------------
INSERT INTO `taobaopic` VALUES ('1', 'https://img.alicdn.com/bao/uploaded/i1/376829845/TB21AAQoeuSBuNjSsziXXbq8pXa_!!376829845.jpg_200x200q90.jpg_.webp', '海边风景 地中海 欧陆 马赛克剪画 玻璃冰瓷玉背景墙玄关装饰瓷砖', '13.45', '12', 'https://img.alicdn.com/bao/uploaded/i1/376829845/TB21AAQoeuSBuNjSsziXXbq8pXa_!!376829845.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp,https://gd3.alicdn.com/imgextra/i2/151788706/O1CN01bPJfMv2EBOdJAURyy_!!151788706.jpg,https://gd2.alicdn.com/imgextra/i2/151788706/TB2qNhTXGLN8KJjSZFKXXb7NVXa_!!151788706.jpg,https://gd2.alicdn.com/imgextra/i2/151788706/TB2X8BRXGLN8KJjSZFvXXXW8VXa_!!151788706.jpg');
INSERT INTO `taobaopic` VALUES ('2', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '户外炊具野餐包 套锅气罐 收纳包野炊餐具包', '25.25', '25', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('3', 'https://img.alicdn.com/bao/uploaded/i4/184460244/TB2mZTZdpXXXXaqXXXXXXXXXXXX_!!184460244.jpg_200x200q90.jpg_.webp', '户外炊具野餐包 套锅气罐 收纳包野炊餐具包', '100.00', '25', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('4', 'https://img.alicdn.com/bao/uploaded/i1/349769290/TB2YpOhmqagSKJjy0FhXXcrbFXa_!!349769290.jpg_200x200q90.jpg_.webp', '户外炊具野餐包 套锅气罐 收纳包野炊餐具包', '25.25', '25', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('5', 'https://img.alicdn.com/bao/uploaded/i4/1835239099/TB1YNiRnlsmBKNjSZFsXXaXSVXa_!!0-item_pic.jpg_200x200q90.jpg_.webp', '户外炊具野餐包 套锅气罐 收纳包野炊餐具包', '100.00', '25', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('6', 'https://img.alicdn.com/bao/uploaded/i4/27796690/TB2qYQXnjqhSKJjSspnXXc79XXa_!!27796690.jpg_200x200q90.jpg_.webp', '鞋柜简约现代烤漆鞋柜储物柜多功能经济型玄关柜隔断柜门厅收纳柜', '250.00', '360', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('7', 'https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp', '容量阳台储物柜环保家具', '55.00', '100', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('8', 'https://img.alicdn.com/bao/uploaded/i2/1058517030/TB1ut0QbyMnBKNjSZFCXXX0KFXa_!!0-item_pic.jpg_200x200q90.jpg_.webp', '容量阳台储物柜环保家具', '77.00', '10', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('9', 'https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp', '容量阳台储物柜环保家具', '54.00', '22', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('10', 'https://img.alicdn.com/bao/uploaded/i2/1793621456/TB2ImMXXA7mBKNjSZFyXXbydFXa_!!1793621456.jpg_200x200q90.jpg_.webp', '容量阳台储物柜环保家具', '36.00', '33', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');
INSERT INTO `taobaopic` VALUES ('11', 'https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/848389421/TB2S6GrjrplpuFjSspiXXcdfFXa_!!848389421.jpeg_200x200q90.jpg_.webp', '容量阳台储物柜环保家具', '25.00', '44', 'https://img.alicdn.com/bao/uploaded/i2/12401207/TB2WxT5umtYBeNjSspaXXaOOFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i4/128249075/TB2GGV6bHGYBuNjy0FoXXciBFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp,https://img.alicdn.com/bao/uploaded/i2/71025334/TB2t3OfapXXXXc3XXXXXXXXXXXX_!!71025334.jpg_200x200q90.jpg_.webp');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangsan', '123456', 'zhangsan@126.com', '0000-00-00 00:00:00');
INSERT INTO `user` VALUES ('2', 'wangwu', 'b59c67bf196a4758191e42f76670ceba', 'wangwu@126.com', '2018-11-02 11:52:37');
INSERT INTO `user` VALUES ('3', 'lisi', 'b0baee9d279d34fa1dfd71aadb908c3f', 'andy@126.com', '2018-11-02 11:55:52');
INSERT INTO `user` VALUES ('4', '张三丰', '96e79218965eb72c92a549dd5a330112', 'wangwu@126.com', '2018-11-02 11:58:56');
INSERT INTO `user` VALUES ('5', 'zhaosi', 'e10adc3949ba59abbe56e057f20f883e', 'zhangsan@126.com', '2018-11-02 16:13:20');
INSERT INTO `user` VALUES ('6', 'zhangsan123', 'c4ca4238a0b923820dcc509a6f75849b', 'zhangsan@126.com', '2018-11-02 16:23:11');
INSERT INTO `user` VALUES ('7', 'hehe122', '96e79218965eb72c92a549dd5a330112', 'zhangsan@126.com', '2018-12-10 16:58:59');
INSERT INTO `user` VALUES ('8', 'zhangsan111', '96e79218965eb72c92a549dd5a330112', 'zhangsan@126.com', '2018-12-11 09:48:34');
INSERT INTO `user` VALUES ('9', '', 'd41d8cd98f00b204e9800998ecf8427e', '', '2018-12-11 09:53:45');
INSERT INTO `user` VALUES ('10', '', 'd41d8cd98f00b204e9800998ecf8427e', '', '2018-12-11 09:54:38');
INSERT INTO `user` VALUES ('11', '11111', '96e79218965eb72c92a549dd5a330112', 'zhangsan@126.com', '2018-12-11 10:10:31');
