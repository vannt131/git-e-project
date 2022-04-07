const express = require("express");
const app = express(); // tạo hosting
const port = process.env.PORT | 4444;
// khởi chạy ứng dụng
app.listen(port, function (){
    console.log("Server is running ....");
});

//tạo cấu hình và kết nối mysql
const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "t2111e",
    multipleStatements: true
});

// khai báo ejs làm view engine
app.set("view engine", "ejs");

// cấp quyền truy cập cho thư mục public
app.use(express.static("public"));

