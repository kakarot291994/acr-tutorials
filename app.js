const port = 8080;
const express = require('express');
const http = require('http');
const app = express();
const server = http.Server(app);
server.listen(port, () => console.log('listenting on port', port));
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Sucess..!')
  res.json({ message: 'Hello, Azure.' })
});


app.get('/error', (req, res) => {
  try {
    const wrong = 1
    wrong = 2
  } catch (err) {
    console.log('Error 500');
    return res.status(500).json({ error: err.message })
  }
  res.json({ message: '' })
});
