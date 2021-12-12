const http = require('http')
const url = require('url');
const server = http.createServer((req,res)=>{
    if(req.method==='GET'){
        const queryobj = url.parse(req.url,true).query;
        let params = new url.URLSearchParams(queryobj);
        if(params.has('name')&&params.has('year')){
            let dob_year = params.get('year');
            let months = params.get('months');
            let date = params.get('date');
            let name = params.get('name');
            let age = 2021-dob_year;
          res.writeHead(200,{"Content-Type":"text/plain"});
          res.write("Hello " + name);
          res.write("Your age is " + age);
          res.end();
          }
        }
        })
        server.listen(8080);
         