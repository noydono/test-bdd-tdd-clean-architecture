const express = require('express'),
    app = express(),
    port = 4000;


app.listen(port,(err)=>{
    if(err){
        console.log("listen err port: " + port);
    }else{
        console.log("listen success port: " + port)
    }
})