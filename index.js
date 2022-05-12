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
    host: "dbfree.net",
    port: "3306",
    user: "eyeonic",
    password: "eyeonic12345",
    database: "data_eyeonic",
    multipleStatements: true
});

// khai báo ejs làm view engine
app.set("view engine", "ejs");

// cấp quyền truy cập cho thư mục public
app.use(express.static("public"));


app.get("/",function (req,res){
    const sql_txt = "select * from products";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("home", {
                data_prod_home: result
            })
        }
        else res.send("404 Not found");
    });
})



app.get("/products",function (req,res){
    const sql_txt = "select * from products";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("products", {
                title:"Products",
                products: result
            })
        }
        else res.send("404 Not found");
    });
})

app.get("/ladies-glasses",function (req,res){
    const sql_txt = "select * from products where UserObject = 'All' or UserObject = 'Women'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("ladies_glasses", {
                data_ladies: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/ladies-glasses/sort-name",function (req,res){
    const name = req.query.name || "";
    const sql_sort_name = "select * from products where UserObject = 'All' or UserObject = 'Women' order by ProductName "+name;
    conn.query(sql_sort_name,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("ladies_glasses", {
                data_ladies: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/ladies-glasses/sort-price",function (req,res){
    const price = req.query.price || "";
    const sql_price = "select * from products where UserObject = 'All' or UserObject = 'Women' order by PriceSale "+price;
    conn.query(sql_price,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("ladies_glasses", {
                data_ladies: result
            })
        }
        else res.send("404 Not found");
    });
})


app.get("/men-glasses",function (req,res){
    const sql_txt = "select * from products where UserObject = 'All' or UserObject = 'Men'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("men_glasses", {
                data_men: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/men-glasses/sort-name",function (req,res){
    const name = req.query.name || "";
    const sql_sort_name = "select * from products where UserObject = 'All' or UserObject = 'Men' order by ProductName "+name;
    conn.query(sql_sort_name,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("men_glasses", {
                data_men: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/men-glasses/sort-price",function (req,res){
    const price = req.query.price || "";
    const sql_price = "select * from products where UserObject = 'All' or UserObject = 'Men' order by PriceSale "+price;
    conn.query(sql_price,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("men_glasses", {
                data_men: result
            })
        }
        else res.send("404 Not found");
    });
})

app.get("/glass-frames",function (req,res){
    const sql_txt = "select * from products where Type = 'Frame'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("glasses_frame", {
                data_frame: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/glass-frames/sort-name",function (req,res){
    const name = req.query.name || "";
    const sql_sort_name = "select * from products where Type = 'Frame' order by ProductName "+name;
    conn.query(sql_sort_name,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("glasses_frame", {
                data_frame: result
            })
        }
        else res.send("404 Not found");
    });
})
app.get("/glass-frames/sort-price",function (req,res){
    const price = req.query.price || "";
    const sql_price = "select * from products where Type = 'Frame' order by PriceSale "+price;
    conn.query(sql_price,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("glasses_frame", {
                data_frame: result
            })
        }
        else res.send("404 Not found");
    });
})

app.get("/brand",function (req,res){
    const brand = req.query.brand || "";
    const sql_txt = "select * from products left join brand on products.BrandName = brand.BrandName " +
        "where products.BrandName like '%"+brand+"%'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("display_brand", {
                data_brand_products: result
            })
        }
        else res.send("404 Not found");
    });
})

app.get("/products/detail-product",function (req,res){
    const id = req.query.id || "";
    const sql_txt = "select * from products where ID = "+id;
    conn.query(sql_txt,function (err,result) {
        if(err) res.send(err.message);
        else if(result.length > 0)
            res.render("detail_product",{
                product:result[0]
            });
        else res.send("404 Not found");
    })
})

app.get("/glasses",function (req,res){
    const sql_txt = "select * from products where Type = 'Glasses'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("products", {
                title:"Glasses",
                products: result
            })
        }
        else res.send("404 Not found");
    });
})

app.get("/search-results",function (req,res){
    const valuae = req.query.search;
    const sql_txt = "select * from products where ProductName like "+"'%"+valuae+"%'";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else if (result.length > 0){
            res.render("search_results", {
                data_search: result
            })
        }
        else res.send("404 Not found");
    });
})


app.get("/shopping-cart",function (req,res){
    const sql_txt = "select * from shoppingcart";
    conn.query(sql_txt,function (err,result){
        if (err) res.send(err.message)
        else{
            res.render("shopping_cart", {
                products_cart: result
            })
        }
    });
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