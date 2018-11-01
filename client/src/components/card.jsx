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

  generateStars(num) {
    return num;
  }


  render () {
    const cards = (
      <div className="test">
        {this.props.cards.map((rests) => 
          <div className="card-container">
            <div className="card-top">
                <div className="favorite"> 
                <img className="rest-image" src="assets/restImg.jpg"></img>
                  <i className={this.state.active ? "fa fa-bookmark-o hidden" : "fa fa-bookmark-o" ? "fa fa-bookmark-o" : "fa fa-bookmark-o hidden" } aria-hidden="true" onClick={this.toggleClass.bind(this)}></i>
                  <i className={this.state.active ? "fa fa-bookmark" : "fa fa-bookmark hidden" ? "fa fa-bookmark hidden" : "fa fa-bookmark"} aria-hidden="true" onClick={this.toggleClass.bind(this)}></i>
                </div>
            </div>
            <div className="card-bottom">
              <div className="card-title">
                <h4 className="rest-name">{rests.restaurantCard.restaurantName}</h4>
                <span className="cuisines">{rests.restaurantCard.cuisine}</span>
              </div>
              <div className="card-bottom-small">
                <div className="small-card-left">
                  <span className="estimate">{rests.restaurantCard.deliveryEstimate} - {rests.restaurantCard.deliveryEstimate + 10} mins</span>
                  <span className="minimum">${rests.restaurantCard.deliveryMin} min.</span>

                </div>
                <div className="small-card-right">
                  <span className="stars">{this.generateStars(rests.restaurantCard.starReviews)} stars</span>
                  <span className="total-reviews">{rests.restaurantCard.totalReviews} ratings</span>
                </div>
              </div>
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