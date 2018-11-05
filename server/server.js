const express = require('express');
const port = 3004;
const app = express();
const bodyParser = require('body-parser');
const Nearby = require('../DB/schema.js')


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/restaurant/:id/', (req, res) => {
  console.log("request params", req.params.id);
  let query = Nearby.find(({}));
  query.sort({"restaurantCard.deliveryEstimate": 1});
  query.limit(12);

    query.exec(function(err, data) {
      if (err) {
        res.sendStatus(404);
        console.log(err);
      } else {
        res.send(data);
      }
    })
});

//To be completed, post request to favorite restaurants
app.post('/restaurant/:id/favorite', (req, res) => {
  //target req.body.data.{restaurantID}
  let query = Nearby.findOneAndUpdate({/*restaurantID*/})
});


app.listen(port, () => console.log(`Express is listening on port ${port}!`));