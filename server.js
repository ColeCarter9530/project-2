const path = require('path');
const express = require('express');
// const sequelize = require('sequelize');
const exphbs = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection')
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });
  