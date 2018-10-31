const express = require('express');
const port = 3004;
const app = express();
const bodyParser = require('body-parser');
const Nearby = require('../DB/schema.js')


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/restaurant/nearby', (req, res) => {
  let query = Nearby.find(({}));
  query.sort({"restaurantCard.deliveryEstimate": 1});
  query.limit(3);

    query.exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
        console.log("server side console ", data);
      }
    })
});

app.get('/restaurant/nearby/next', (req, res) => {
  let query = Nearby.find(({}));
  query.limit(3);

    query.exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send(data)
      }
    })
});

//To be completed, post request to favorite restaurants
app.post('/restaurant/nearby/favorite', (req, res) => {
  //target req.body.data.{restaurantID}
  let query = Nearby.findOneAndUpdate({/*restaurantID*/})
});


app.listen(port, () => console.log(`Express is listening on port ${port}!`));