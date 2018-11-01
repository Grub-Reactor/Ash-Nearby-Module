import React from 'react';
import Card from './card.jsx';
import Hover from './hover.jsx';
import styled from 'styled-components';


const CardFlexbox = styled.div `
display: flex;
flex-direction: row;
align-items: center;
`
/*
For previous, use conditional rendering.
previousData 0 = x, 1 = x2, 2 = x3 etc.
Then switch onClick?
*/
class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      currentData: [],
      previousData: [],
      count: 0,
      error: null
    }
    this.nextResults = this.nextResults.bind(this)
  }

  componentDidMount() {
    let id = Math.floor((Math.random() * 100) + 1);
    fetch(`/restaurant/${id}`)
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        isLoading: false,
        previousData: data.slice(0, 3),
        currentData: data.slice(0, 3),
        nextData: data.slice(3, 6),
        count: 6
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  nextResults() {
    //resets to the beginning of the results
    if (this.state.count > 15) {
      return;
    }
  
    let currentCount = this.state.count;
    
    this.setState({
      previousData: this.state.currentData,
      currentData: this.state.nextData,
      nextData: this.state.data.slice(currentCount, (currentCount + 3)),
      count: this.state.count + 3
    })
    console.log("All data", this.state.data)
    console.log("Current Data ", this.state.currentData);
    console.log("Previous Data ", this.state.previousData);
    console.log("Next data", this.state.nextData)
    console.log("Count", this.state.count);
  };

  previousResults() {
    if (this.state.count === 6) {
      return;
    }
    let currentCount = this.state.count -6;
    this.setState({
      currentData: this.state.previousData,
      previousData: this.state.data.slice(currentCount, (currentCount + 3)),
      nextData: this.state.data.slice((currentCount + 3), (currentCount + 6)),
      count: this.state.count - 3
    })
    console.log("Current Data ", this.state.currentData);
    console.log("Previous Data ", this.state.previousData);
    console.log("Count", this.state.count);

  };


  render() {
    return(
      <div id="sexy-container">
        <h2>Sponsored restaurants in your area</h2>
        <CardFlexbox>
          <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true" onClick={this.previousResults.bind(this)}></i>
          {<Card cards={this.state.currentData}></Card>}
          {<Hover hovers={this.state.currentData}></Hover>}
          <i className="fa fa-chevron-circle-right fa-2x" aria-hidden="true" onClick={this.nextResults.bind(this)}></i>
        </CardFlexbox>
      </div>
    );
  }
};

export default Carousel;