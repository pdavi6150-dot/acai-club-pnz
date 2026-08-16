const express=require("express");const fs=require("fs");const path=require("path");
const app=express();app.use(express.json());app.use(express.static(path.join(__dirname,"public")));
const DB=path.join(__dirname,"orders.json");if(!fs.existsSync(DB))fs.writeFileSync(DB,"[]");
const read=()=>JSON.parse(fs.readFileSync(DB));const write=x=>fs.writeFileSync(DB,JSON.stringify(x,null,2));
app.post("/api/orders",(req,res)=>{let a=read(),o=req.body;o.status="novo";a.unshift(o);write(a);res.json(o)});
app.get("/api/orders",(req,res)=>res.json(read()));
app.patch("/api/orders/:id",(req,res)=>{let a=read(),o=a.find(x=>String(x.id)===req.params.id);if(!o)return res.sendStatus(404);o.status=req.body.status;write(a);res.json(o)});
app.listen(process.env.PORT||3000,()=>console.log("Açaí Club PNZ online"));
