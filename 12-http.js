const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to our home page')
    return
  }
  if(request.url === '/about'){
    response.end("Here's our short history")
    return
  }
  response.end(`<h1> Oops! </h1>
    <p> We can't find that page you want</p>
    <a href="/">Back Home </a>
    `)
})

server.listen(5000)
