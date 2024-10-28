require('dotenv').config();

const AI = require("./AI.js")
const app = require('express')();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:5173' })); 

app.get('/command', async (req, res) => {
    const command = req.query.command; 
    if(!command) return res.send("bad");

    let x = JSON.parse(await AI.analyze(command));
    if(x.command == 'none') return res.send("bad");
  res.send("good");
});

app.listen(process.env.PORT || 3000);