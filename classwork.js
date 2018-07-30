const http = require('http');
const port = process.env.PORT || 8000;

function handleRequest(request, response) {

    // console.log(request);
    // console.log(response);
    response.end("It works!" + request.url);

}

const server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log(`Server listing on port ${port}`);
    console.log("Awful teeth!");

});