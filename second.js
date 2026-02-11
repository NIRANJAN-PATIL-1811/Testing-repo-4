const app = require('./index.js');

app.get('/', (req, res) => {
  res.send('Hello From Server!');
});

app.get('/login', (req, res) => {
  res.send('Login page');
});


app.get('/logout', (req, res) => {
  res.send('Logout page');
});