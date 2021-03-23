const http = require("http");
const https = require("https");

const PORT = 3000;
const HOSTNAME = "127.0.0.1";

http.createServer((req, res) => {
    
    if(req.method === "GET") {
        if(req.url === "/getTimeStories") {
            
            https.get("https://time.com", (resp) => {
                
                let data = "";
                resp.on('data', (chunk) => {
                    data += chunk;
                })

                resp.on('end', () => {
                    console.log(data);
                });

            })

        }
    } else {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("Hello there!");
        res.end();
    }

}).listen(PORT, HOSTNAME, () => {
    console.log(`Listening on port ${HOSTNAME}:${PORT}`);
})

