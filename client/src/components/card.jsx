import React from 'react';
import $ from 'jquery';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      previousData: [],
      error: null
    }
  }
/*

*/
  componentDidMount() {

    fetch('http://127.0.0.1:3004/restaurant/nearby')
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        isLoading: false,
        active: false
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  nextResults() {

    let oldData = this.state.data;

    fetch('http://127.0.0.1:3004/restaurant/nearby/next')
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        previousData: oldData,
        isLoading: false,
        active: false
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
    console.log("clicked ", this.state.data[0])

  };

  previousResults() {
    let replacementData = this.state.previousData;

    this.setState({
      data: replacementData
    })
  };

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  

  render () {
    const cards = (
      <div className="card-flexbox">
        <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true" onClick={this.nextResults.bind(this)}></i>
        {this.state.data.map((rests) => 
          <div className="card-container">
            <div className="card-top">
              <div className="image-favorites">
                <img className="rest-image" src="assets/restImg.jpg"></img>
                <div className="favorite">
                  <i className={this.state.active ? "fa fa-bookmark-o hidden" : "fa fa-bookmark-o" ? "fa fa-bookmark-o" : "fa fa-bookmark-o hidden" } aria-hidden="true" onClick={this.toggleClass.bind(this)}></i>
                  <i className={this.state.active ? "fa fa-bookmark" : "fa fa-bookmark hidden" ? "fa fa-bookmark hidden" : "fa fa-bookmark"} aria-hidden="true" onClick={this.toggleClass.bind(this)}></i>
                </div>
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
                  <span className="stars">{rests.restaurantCard.starReviews} stars</span>
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
        <i class="fa fa-chevron-circle-right fa-2x" aria-hidden="true"></i>
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