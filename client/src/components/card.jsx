import React from 'react';
import styled from 'styled-components';
import Hover from './hover.jsx';



class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      hover: false,
    }
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState });
  };

  showHover(data) {
    return(
      <div className="hover-container">Hello
        <div className="hover-box"> Test!
          <h5>Here's what people are saying:</h5>
          <div className="hover-box-top">
            <ul>
              <li>{data.hover.percentWasGood}</li>
              <li>{data.hover.percentOnTime}</li>
              <li>{data.hover.percentAccuracy}</li>
            </ul>
          </div>
          <div className="hover-user-card">
            <div className="hover-avatar">{data.hover.userProfile}</div>
            <div className="hover-user-profile">{data.hover.userName}</div>
            <div className="hover-review">{data.hover.featuredReview}</div>
          </div>
        </div>
    </div>
    )
  }

  generateStars(num) {
    return(
    <div className='stars'>
      <i className={num > 0 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
      <i className={num > 1 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
      <i className={num > 2 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
      <i className={num > 3 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
      <i className={num > 4 ? "fas fa-star rating-star-checked" : "fas fa-star rating-star-unchecked"}></i>
    </div>
    )
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
                </div>
            </div>
            <div className="card-bottom">
            <Hover onHover={<div>{this.showHover(rests)}</div>}>
            </Hover>
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