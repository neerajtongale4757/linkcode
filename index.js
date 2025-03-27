import express from "express";
const app = express();
const port = 3000;

function message(req,res,next){
     req.orgmsg ="hello ";
        
        next()
};


app.use(message);

app.get('/login',(req,res,next)=>{
    console.log("login api is called");
    res.status(200).json({
        msg:`${req.orgmsg}welcome to login page`,
    });

});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});