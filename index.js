const express = require('express');


const app = express();


app.listen(3000, "0.0.0.0", () => {
  console.log('Server is running at http://0.0.0.0:3000');
});


module.exports = app;