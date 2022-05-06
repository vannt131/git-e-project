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
    database: "db_eproject_ki_1",
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
    const sql_txt = "select * from products";
    conn.query(sql_txt,function (err,result){
        if (err) res.render(err.message)
        else if (result.length > 0){
            res.render("products", {
                products: result
            })
        }
    else res.send("404 Not found");
    });
})

app.get("/ladies-glasses",function (req,res){
    const sql_txt = "select * from products where UserObject like 'All' or UserObject like 'Women'";
    conn.query(sql_txt,function (err,result){
        if (err) res.render(err.message)
        else if (result.length > 0){
            res.render("display_glasses", {
                title_products : "Ladies glasses",
                display_products: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/men-glasses",function (req,res){
    const sql_txt = "select * from products where UserObject like 'All' or UserObject like 'Men'";
    conn.query(sql_txt,function (err,result){
        if (err) res.render(err.message)
        else if (result.length > 0){
            res.render("display_glasses", {
                title_products : "Men's glasses",
                display_products: result
            })
        }
        else res.send("404 Not found");
    });
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

app.get("/search-results",function (req,res){
    res.render("display_glasses");
})

app.get("/wishlist",function (req,res){
    res.render("wishlist");
})

app.get("/terms-and-conditions",function (req,res){
    res.render("terms_and_conditions");
})
app.get("/security-notifications",function (req,res){
    res.render("security_notifications");
})