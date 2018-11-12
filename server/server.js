const express = require('express');
const port = 3004;
const app = express();
const bodyParser = require('body-parser');
const Nearby = require('../DB/schema.js')
const path = require('path');


app.use('/:id', express.static('public'));
// app.use('grub-reactor/:id', express.static(path.join(__dirname, '../', 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/restaurant/:id/', (req, res) => {
  console.log("request params", req.params.id);
  let query = Nearby.find(({}));
  query.where('id').gt(req.params.id-10).lt(req.params.id+10)
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

app.listen(port, () => console.log(`Express is listening on port ${port}!`));