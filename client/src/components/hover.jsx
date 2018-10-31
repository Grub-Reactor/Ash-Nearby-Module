import React from 'react';


class Hover extends React.Component {

  /*
  hover: {
    percentWasGood: Number,
    percentOnTime: Number,
    percentAccuracy: Number,
    userName: String,
    userProfile: String,
    featuredReview: String
  }
  */


  render () {
    const hover = (
      <div>
        {this.props.hover.data.restaurantCard.hover.map}
      </div>
    )
    return(
      <div className="hover-card">

      </div>
    );
  }



}





export default Hover;