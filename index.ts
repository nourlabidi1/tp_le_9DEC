import express from 'express';
const app=express();
const PORT=5000;
app.get('/',(req,resp)=>{
    resp.send('Hello Express');
});
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`  
    
    );
});
