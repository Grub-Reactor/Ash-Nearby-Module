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

  onMouseEnter() {
    this.setState(toggleHover()
    )
  }

  toggleHover() {
    return {
      hover: !this.state.hover
    };
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
              <div className="card-title" onMouseEnter={<Hover props={rests}></Hover>}>
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
          {<Hover hovers={this.props.cards}></Hover>}
      </div>
    );
  }
}


export default Card;