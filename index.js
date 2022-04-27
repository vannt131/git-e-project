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

app.get("/",function (req,res){
    res.render("home");
})

app.get("/products",function (req,res){
    res.render("products");
})

app.get("/products/detail-product",function (req,res){
    res.render("detail_product");
})

app.get("/shopping-cart",function (req,res){
    res.render("shopping_cart");
})

app.get("/about-us",function (req,res){
    res.render("aboutus");
})
app.get("/contact-us",function (req,res){
    res.render("contactus");
})

app.get("/check-out",function (req,res){
    res.render("checkout");
})

app.get("/thank-you",function (req,res){
    res.render("thank_you");
})

app.get("/account-log-in",function (req,res){
    res.render("account_log_in");
})
app.get("/account-sign-up",function (req,res){
    res.render("account_sign_up");
})
app.get("/account-forgot-password",function (req,res){
    res.render("account_forgot_password");
})

app.get("/search",function (req,res){
    res.render("search");
})

app.get("/wishlist",function (req,res){
    res.render("wishlist");
})