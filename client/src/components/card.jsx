import React from 'react';
import styled from 'styled-components';
import Hover from './hover.jsx';

const GentlemanContainer = styled.div `
  display: flex;
  flex-direction: row;
  transform: translateX(0%);
  margin-left: 8px;
  transition-duration: 0.3s;
`
const CardContainer = styled.div `
  max-width: 255px;
  padding: 10px;
`

// Card Top CSS

const CardTop = styled.div `
  max-height: 132px;
  z-index: -1;
`
const Ribbon = styled.svg `
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  padding: 6px;
  top: -125px;
  position: relative;
  left: 206px;
  box-shadow: 0 3px 6px rgba(0,0,0,.1);
`
const ribbonActive = {
  color: '#faae1d',
  fill: '#faae1d'
}
const ribbonInactive = {
  color: '#b8c1d1',
  fill: '#b8c1d1'
}
const RestImage = styled.img `
width: 250px;
  height: 132px;
  display: flex;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,.1);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: 0 1px 0 rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.05);
`
const RestName = styled.h4 `
  position: relative;
  left: 15px;
  top: -5px;
  overflow: hidden;
  font-size: 17px;
  text-overflow: ellipsis;
`

//Card Bottom CSS

const CardBottom = styled.div `
  border: 1px solid rgba(0,0,0,.1);
  width: 250px;
  max-width: 250px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: white;
  box-shadow: 0 1px 0 rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.05);
`
const CardBottomSmall = styled.div `
  display: flex;
  z-index: 2;
`
const SmallCardRight = styled.div `
  position: relative;
`
const Cuisines = styled.div `
  font-size: 12px;
  color: rgba(0,0,0,.55);
  position: relative;
  top: -23px;
  left: 15px;
`
const Estimate = styled.div `
  font-size: 12px;
  position: relative;
  line-height: 1.45;
  left: 15px;
  top: -15px;
`
const Minimum = styled.div `
  position: relative;
  color: rgba(0,0,0,.55);
  font-size: 12px;
  line-height: 1.45;
  left: -51px;
  top: -16px;
  text-align: start;
`
const TotalReviews = styled.div `
  position: relative;
  font-size: small;
  top: -10px;
  right: -173px;
  text-align: end;
`
const Stars = styled.div `
  display: inline-block;
  position: relative;
  font-family: FontAwesome;
  top: -12px;
  right: -100px;
`
const starChecked = {
  fontStyle: 'normal',
  color: '#f8ce0b',
  fontSize: '13.5px'
}
const starUnchecked = {
  fontStyle: 'normal',
  color: '#b8c1d1',
  fontSize: '13.5px'

}

//Hover Box CSS

const HoverBox = styled.div `
  position: absolute;
  top: 30px;
  border: 1px solid rgba(0,0,0,.1);
  width: 250px;
  max-width: 250px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: white;
  box-shadow: 0 1px 0 rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.05);
`
const HoverList = styled.ul `
  column-count: 3;
  list-style-type: none;
`
const HoverUserCard = styled.div `
  display: flex;
  align-items:center;
`
const ProfilePic = styled.img `
  border-radius: 50%;
  width: 50px;
  vertical-align: middle;
`


class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.cards,
      active: false,
      hover: false,
    }
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({
      active: !currentState });
  };

  showHover() {
      const datas = (
        <HoverBox>
        {this.props.cards.map((data) =>
        <div>
          <p>Here's what people are saying</p>
            <HoverList>
            <li>
              <h4>{data.hover.percentWasGood}%</h4>
                <span className = "hover-box-text">Food was good</span>
            </li>
            <li>
              <h4>{data.hover.percentOnTime}</h4>
                <span className = "hover-box-text">Delivery was on time</span>
            </li>  
            <li>
              <h4>{data.hover.percentAccuracy}</h4>
                <span className = "hover-box-text">Order was accurate</span>
            </li>
            </HoverList>
          <HoverUserCard>
            <ProfilePic src={data.hover.userProfile}></ProfilePic>
            <div className="hover-user-profile">{data.hover.userName}</div>
            <p></p>
            <div className="hover-review">{data.hover.featuredReview}</div>
          </HoverUserCard>
        </div>
        )}
      </HoverBox>
    )
    return (
      <div>
      {datas}
      </div>
    )
  }
  generateStars(num) {
    return(
    <Stars className="stars-checked">
      <span className="fas fa-star" style={num > 0 ? starChecked : starUnchecked}></span>
      <span className="fas fa-star" style={num > 1 ? starChecked : starUnchecked}></span>
      <span className="fas fa-star" style={num > 2 ? starChecked : starUnchecked}></span>
      <span className="fas fa-star" style={num > 3 ? starChecked : starUnchecked}></span>
      <span className="fas fa-star" style={num > 4 ? starChecked : starUnchecked}></span>
    </Stars>
    )
  }

  render () {
    const cards = (
      <GentlemanContainer className = "test">
        {this.props.cards.map((rests) => 
          <CardContainer>
            <CardTop>
                <div className="favorite"> 
                <RestImage src={rests.restaurantCard.imageURL}></RestImage>
                <Ribbon style={this.state.active ? ribbonActive : ribbonInactive}  onClick={this.toggleClass.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 2.98v18.1L12 16l7 5.08V2.98H5zm0 0" fill="currentColor"></path></Ribbon>
                </div>
            </CardTop>
            <CardBottom>
              <div className="card-title">
                <RestName>{rests.restaurantCard.restaurantName}</RestName>
                <Cuisines>{rests.restaurantCard.cuisine}</Cuisines>
              </div>
              <CardBottomSmall>
                <div className="small-card-left">
                  <Estimate>{rests.restaurantCard.deliveryEstimate} - {rests.restaurantCard.deliveryEstimate + 10} mins</Estimate>
                  <TotalReviews>{rests.restaurantCard.totalReviews} ratings</TotalReviews>
                </div>
                <SmallCardRight>
                  <Hover onHover={<div>{this.showHover()}</div>}></Hover>
                  <div className="stars-outer">{this.generateStars(rests.restaurantCard.starReviews)}</div>
                    <div className="stars-inner"></div>
                  <Minimum>${rests.restaurantCard.deliveryMin} min.</Minimum>
                </SmallCardRight>
              </CardBottomSmall>
            </CardBottom>
          </CardContainer>
        )}
      </GentlemanContainer>
      )
    return(
      <div>
          {cards}
      </div>
    );
  }
}


export default Card;