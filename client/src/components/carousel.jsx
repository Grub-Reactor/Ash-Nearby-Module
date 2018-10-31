import React from 'react';
import Card from './card.jsx';


class Carousel extends React.Component {

  render() {
    return(
      <div>
        <div className = "card-container">
        {<Card cards></Card>}
        </div>
      </div>
    );
  }
};

export default Carousel;