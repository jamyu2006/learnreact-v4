const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:5173', // Note the correct spelling of 'origin'
};

// Use CORS middleware for all routes
app.use(cors(corsOptions));

app.get('/events', (req,res) =>{
    res.writeHead(200, {
        'content-type': 'text/event-stream',
        'cache-control': 'no-cache',
        'connection': 'keep-alive'
    });

    //send a SSE every second

    setInterval(() => {
       const data = {message: `${new Date().toISOString()}`}
       console.log("sent: ", data) 
       res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 1000);
});

const port = process.env.PORT || 3000; // You can use environment variables for port configuration

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});