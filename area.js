const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        const queryobj = url.parse(req.url,true).query;
        const params = new url.URLSearchParams(queryobj);
        if(params.has('object')){
            let radius = params.get('radius');
            if(params.get('object')==='sphere'){
                let area = 3.14*radius*radius;
                res.writeHead(200,{'Content-Type':'text/plain'})
                res.write("Area of the circle is " + area);
                res.end();
            }
            else{
                let volume = 1.34*3.14*radius*radius*radius;
                res.writeHead(200,{'Content-Type':'text/plain'})
                res.write("Volume of the sphere is " + volume);
                res.end();
            }
        }
    }
})
server.listen(8080);