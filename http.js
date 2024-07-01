const http=require('http')

const server=http.createServer((req, res)=>{
  if(req.url==='/'){
    res.end('Welcome to our home page')
  }
  else if(req.url==='/about'){
    res.end('No history we are new in this')
  }
  else{
    res.end(`
      <h1>oopppsss</h1>
      <a href="/">back home</a>
      `)
  }
  
})
 
server.listen(5000)