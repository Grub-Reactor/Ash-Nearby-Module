import React from 'react';
import styled from 'styled-components';





class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }


  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  

  render () {
    const cards = (
      <div className="card-container">
        {this.props.cards.data.map((rests) => 
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