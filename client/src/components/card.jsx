import React from 'react';
// var fs = require('fs');

//Does card need it's own handleClick for the favorites button?

//include hover here

//These lines are to create temporary placeholder images for the Restaurants
//They will be removed an replaced with actual data during deployment
// var imgPath = '/restImg.jpg';
// var tempImage = fs.readFile(imgPath);



class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      error: null
    }
  }
/*
    "restaurantCard": {
      "cuisine": [
        "molestiae",
        "dicta"
      ],
      "favorite": false,
      "restaurantName": "Terry - Graham",
      "imageURL": "http:\/\/lorempixel.com\/640\/480\/food",
      "deliveryEstimate": 5,
      "deliveryMin": 8,
      "starReviews": 1.52,
      "totalReviews": 166
    },
    "hover": {
      "percentWasGood": 35,
      "percentOnTime": 49,
      "percentAccuracy": 28,
      "featuredReview": "Ipsam tempora quisquam."
    },
    "_id": "5bd7b87908044a61265a1315",
    "id": 48,
    "__v": 0
  },
*/
  componentDidMount() {

    fetch('http://127.0.0.1:3004/restaurant/nearby')
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        isLoading: false
      })
    )
    .then(console.log(this.state.data))
    .catch(error => this.setState({ error, isLoading: false }));
  }

  render () {
    const cards = (
      <div>
        {this.state.data.map((rests) => 
          <div className="card-container">
            <div className="card-top">
              <img className="rest-image" src='assets/restImg.jpg'></img>
              <div className="favorite">
                <button className="fav-btn"></button>
              </div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom-title">
                <span className="rest-name">{rests.restaurantCard.restaurantName}</span>
                <span className="cuisines">{rests.restaurantCard.cuisines}</span>
              </div>
              <div className="card-bottom-small">
                <div className="small-card-left">
                  <span className="estimate">{rests.restaurantCard.deliveryEstimate} - {rests.restaurantCard.deliveryEstimate + 10} mins</span>
                  <span className="stars">{rests.restaurantCard.starReviews}</span>
                </div>
                <div className="small-card-right">
                  <span className="minimum">${rests.restaurantCard.deliveryMin} min.</span>
                  <span className="total-reviews">{rests.restaurantCard.totalReviews} ratings</span>
                </div>
              </div>
            </div>
            <div className="hover-card">

            </div>
          </div>

        )}
      </div>
      )
    return(
      <div>
        {cards}
      </div>
    );
  }
}


export default Card;