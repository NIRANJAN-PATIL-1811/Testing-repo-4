const app = require('./index.js');
const connection = require('./db_connection.js');
require('dotenv/config');

async function saveToDB(username, password) {
  await connection.query(
    `
      CREATE TABLE IF NOT EXISTS user_info
      (
        id INT PRIMARY KEY, AUTO_INCREMENT,
        username VARCHAR(20) NOT NULL,
        password VARCHAR(20) NOT NULL
      );
    `
  );


  await connection.query(
    `
      INSERT INTO user_info
      (username, password)
      VALUES
      ('${username}', '${password}');
    `
  );

  return true;
}

app.get('/', (req, res) => {
  res.send('Hello From Server!');
});

app.get('/login', async (req, res) => {
  const { username, password } = req.query;
  const messageFromDB = await saveToDB(username, password);
  if (messageFromDB) {
    console.log('data stored!');
  }
  else {
    console.log('data not stored!');
  }
  res.send('Login page');
});


app.get('/logout', (req, res) => {
  res.send('Logout page');
});


app.listen(process.env.PORT, `${process.env.IP}`, () => {
  console.log(`Server is running at http://${process.env.IP}:${process.env.PORT}`);
});