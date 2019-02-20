//1.导入模块
const express=require("express");

//2.创建服务器
var app=express();
app.listen(3000);
//2.1加载跨域访问组件
const cors=require("cors");
//2.2配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:3001","http://localhost:3001","http://localhost:4200"],
    credentials:true
}));

//托管静态资源
//__dirname---绝对路径
app.use(express.static(__dirname+"/public"));