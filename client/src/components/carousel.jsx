import React from 'react';
import Card from './card.jsx';
import styled from 'styled-components';


const CardFlexbox = styled.div `
display: flex;
flex-direction: row;
align-items: center;
`

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      previousData: [],
      error: null
    }
    this.nextResults = this.nextResults.bind(this)
  }

  componentDidMount() {

    fetch('http://127.0.0.1:3004/restaurant/nearby')
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }


  nextResults() {

    let oldData = this.state.data;

    fetch('http://127.0.0.1:3004/restaurant/nearby/next')
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        previousData: oldData,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
    console.log("clicked ", this.state.data[0])

  };

  previousResults() {
    let replacementData = this.state.previousData;
    if (replacementData.length === 0) {
      return;
    }
    if (replacementData[0].restaurantName === this.state.previousData[0].restaurantName) {
      return;
    }
    this.setState({
      data: replacementData
    })
  };


  render() {
    return(
      <div id="sexy-container">
        <h2>Sponsored restaurants in your area</h2>
        <CardFlexbox>
          <i className="fa fa-chevron-circle-left fa-2x" aria-hidden="true" onClick={this.previousResults.bind(this)}></i>
          {<Card cards={this.state}></Card>}
          <i className="fa fa-chevron-circle-right fa-2x" aria-hidden="true" onClick={this.nextResults.bind(this)}></i>
        </CardFlexbox>
      </div>
    );
  }
};

export default Carousel;