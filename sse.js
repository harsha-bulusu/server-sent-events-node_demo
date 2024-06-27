const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Connection', 'keep-alive');

    const sendDate = () => {
        res.write(`data: ${new Date().toISOString()}\n\n`);
    };

    const intervalId = setInterval(sendDate, 3000);

    req.on('close', () => {
        clearInterval(intervalId);
    });   
});

server.listen(8000, () => {
    console.log("server started running")
})