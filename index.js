const express = require('express');
const app = express();
require("dotenv").config();

app.get('/', (req, res) => {
  res.status(200).send(`🚚 Welcome to the Food Truck!
    Here is our meun:
        1. /hours
        2. /contact
        3. /menu`);
});

app.get('/hours', (req, res) => {
    res.status(200).send(
        '🕒 We are open from 11am to 7pm!'
    )
})

app.get('/contact', (req, res) => {
    res.status(200).send(
        `<p style='color: green'>
        📞 Contact us at 555-FOOD or hello@foodtruck.com
        </p>`
    )
})

app.get('/menu', (req, res) => {
    res.status(200).send(
       `<html><head><title>Menu</title></head><body>
            <h1>🥙 Our Menu</h1>
            <ul>
              <li>Tacos</li>
              <li>Quesadillas</li>
              <li>Smoothies</li>
            </ul>
          </body></html>` 
    )
})

app.listen(process.env.PORT_NUMBER, () => {
  console.log('Server running on http://localhost:3000');
});

app.use((req, res, next) => {
    res.status(404).send('😢 Page not found. Please try another route.');
  });