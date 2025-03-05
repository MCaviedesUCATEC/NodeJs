
//console.log('hola mundo como estan');

const http = require('http');

http.createServer((req, res) => {
    console.log(req);
    // res.write('404 | Page not found');
    //res.write('hola mundo');
   // res.writeHead(404);
   //res.writeHead(200, { 'content-type':'text/plain'});
    
   //res.writeHead(200, { 'content-type':'application/plain'});
   const persona ={
        id: 1,
        nombre: 'Miguel'
   }
   res.write(JSON.stringify (persona));
 
   
    res.end();
})
.listen(8080)

console.log('Escuchando en el puerto', 8080);