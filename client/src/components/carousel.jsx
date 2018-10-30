import React from 'react';
import $ from 'jquery';
import Card from './card.jsx';



/*
Ways to implement this module:
1.  Conditional rendering. Load multiple sets of restaurant cards and
    render them as you click back/forward
2.  handleClickBack/Next will load the next 3 cards or previous 3 
3.
*/

class Carousel extends React.Component {




  render() {
    return(
      <div>
        <button className="scroll-btn">-</button>
        <div className = "card-container">
        {<Card cards></Card>}
        </div>
        <button className="scroll-btn">+</button>
      </div>
    );
  }
};

export default Carousel;