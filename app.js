const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const port = 3001;


app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(bodyParser.json())
app.use(cookieParser())

// const users = [{ name: 'testSubject371' }]

app.post('/login', (req, res) => {
  const { name } = req.body
  res.cookie('name', name, { path:'/hello' })
  res.end()
})

app.get('/hello', (req, res) => {
  console.log(req.cookies)
  const {name} = req.cookies
  if (!name) {
    res.status(404).send(`You don't have an account`);
  } else {
    res.status(200).send(`Hello ${name}`)
  }
})

app.listen(port, () => {
  console.log(`listening at localhost:${port}`)
})
