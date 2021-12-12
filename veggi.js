const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
    fs.readFile('vegg.json','utf8',function(err,data){
        const jsondata = JSON.parse(data);
        console.log(typeof(jsondata));
        const jsonstring = JSON.stringify(jsondata);
        res.write(jsonstring);
        res.end();
    })
}
});
server.listen(8080);