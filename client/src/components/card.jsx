import React from 'react';
import styled from 'styled-components';
import Hover from './hover.jsx';



class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }


  toggleClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState });
  };

  generateStars(num) {
    const starPercentage = (num / 5) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    // document.querySelector(`.stars-inner`).style.width = starPercentageRounded; 
    return;
  }
  

  render () {
    const cards = (
      <div className="test">
        {this.props.cards.map((rests) => 
          <div className="card-container">
            <div className="card-top">
                <div className="favorite"> 
                <img className="rest-image"src={rests.restaurantCard.imageURL}></img>
                <svg id="ribbon" className={this.state.active ? "ribbon-active" : "ribbon-inactive"}  onClick={this.toggleClass.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 2.98v18.1L12 16l7 5.08V2.98H5zm0 0" fill="currentColor"></path></svg>
                  {/* <i className={this.state.active ? "fa fa-bookmark-o hidden" : "fa fa-bookmark-o" ? "fa fa-bookmark-o" : "fa fa-bookmark-o hidden" } aria-hidden="true" onClick={this.toggleClass.bind(this)}></i>
                  <i className={this.state.active ? "fa fa-bookmark" : "fa fa-bookmark hidden" ? "fa fa-bookmark hidden" : "fa fa-bookmark"} aria-hidden="true" onClick={this.toggleClass.bind(this)}></i> */}
                </div>
            </div>
            <div className="card-bottom">
              <div className="card-title">
                <h4 className="rest-name">{rests.restaurantCard.restaurantName}</h4>
                <div className="cuisines">{rests.restaurantCard.cuisine}</div>
              </div>
              <div className="card-bottom-small">
                <div className="small-card-left">
                  <div className="estimate">{rests.restaurantCard.deliveryEstimate} - {rests.restaurantCard.deliveryEstimate + 10} mins</div>
                  <div className="total-reviews">{rests.restaurantCard.totalReviews} ratings</div>
                </div>
                <div className="small-card-right">
                  <div className="stars-outer">{this.generateStars(rests.restaurantCard.starReviews)}</div>
                    <div className="stars-inner"></div>
                  <div className="minimum">${rests.restaurantCard.deliveryMin} min.</div>
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