const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`)); 
app.get('/express', (req, res) => {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');	
res.send({ message : 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT USING AXIOS' });  
}); 

const db = require('./models/db.connect.js');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });