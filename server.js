//import express
const exp=require("express")
const app=exp();


const mc=require("mongodb")

const path=require("path")

const errorHandler=require("express-async-handler")

app.use(exp.static(path.join(__dirname,"dist/OnlineBookStore")))

//import Api obj
const userApiObj=require("./APIS/userApi")
const booksApiObj=require("./APIS/booksApi")
const cartApiObj=require("./APIS/cartApi")
const adminApiObj=require("./APIS/adminApi")
const wishlistApiObj=require("./APIS/wishlistApi")
const orderApiObj=require("./APIS/orderApi")


//forward api obj
app.use("/user",userApiObj);
app.use("/books",booksApiObj)
app.use("/cart",cartApiObj)
app.use("/admin",adminApiObj)
app.use("/wishlist",wishlistApiObj)
app.use("/order",orderApiObj)

//databaseconnectivity
const dburl="mongodb+srv://CDB37:CDB37@mongodb.lurqj.mongodb.net/MyAppDatabase?retryWrites=true&w=majority";

mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(client=>{
    //get db obj
    const databaseObj=client.db("MyAppDatabase");
    const userCollectionObj=databaseObj.collection("usercollection");
    const booksCollectionObj=databaseObj.collection("bookscollection");
    const cartCollectionObj=databaseObj.collection("cartcollection");
    const adminCollectionObj=databaseObj.collection("admincollection");
    const wishlistCollectionObj=databaseObj.collection("wishlistcollection");
    const orderCollectionObj=databaseObj.collection("ordercollection");

    //sharing collection obj
    app.set("userCollectionObj",userCollectionObj);
    app.set("booksCollectionObj",booksCollectionObj);
    app.set("cartCollectionObj",cartCollectionObj);
    app.set("adminCollectionObj",adminCollectionObj);
    app.set("wishlistCollectionObj",wishlistCollectionObj);
    app.set("orderCollectionObj",orderCollectionObj);
    console.log("Database Server started");
})
.catch(err=>console.log("error in database connection",err))

//handle invalid paths
app.use((req,res,next)=>{
    res.send({message:req.url+"is Invalid"})
})

//error handling
app.use((err,req,res,next)=>{
    res.send({message:"Error Occurred",reason:err.message})
})



//assign port number
const port=3000;
app.listen(port,()=>console.log(`webserver on port ${port}`))