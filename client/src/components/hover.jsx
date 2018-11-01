import React from 'react';


class Hover extends React.Component {
  constructor(props) {
    super(props)

  }
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
      <div className="hover-container">
        {this.props.hovers.map((data) => {
          <span className="hover-box">{data.hover.userName}</span>
        })}
      </div>
    )
    return(
      <div>
        {hover}
      </div>
    );
  }
}



export default Hover;