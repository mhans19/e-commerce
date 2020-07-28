// DEPENDENCIES
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// PORT
const app = express();
const PORT = process.env.PORT || 3001;
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
// SYNC SEQUELIZE MODELS TO THE DATABASE AND THEN TURN ON SERVER
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
