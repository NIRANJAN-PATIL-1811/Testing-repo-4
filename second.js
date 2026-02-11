const app = require('./index.js');
require('dotenv/config');

app.get('/', (req, res) => {
  res.send('Hello From Server!');
});

app.get('/login', (req, res) => {
  res.send('Login page');
});


app.get('/logout', (req, res) => {
  res.send('Logout page');
});


app.listen(process.env.PORT, `${process.env.IP}`, () => {
  console.log(`Server is running at http://${process.env.IP}:${process.env.PORT}`);
});