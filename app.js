require('dotenv').config();
const express = require('express');
const { router: routerUser } = require('./routes/user');
const { router: routerDiamonds } = require('./routes/diamonds');
const { dbConnection } = require('./database/config');

const app = express();
const port = process.env.PORT;

// Start db connection
dbConnection();

// TODO: this should go the the middleware
app.use(express.urlencoded());
app.use(express.json());

app.use('/user', routerUser);
app.use('/diamonds', routerDiamonds);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
