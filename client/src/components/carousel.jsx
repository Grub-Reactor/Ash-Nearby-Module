import React from 'react';
import Card from './card.jsx';
import Hover from './hover.jsx';
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
      currentData: [],
      count: 1,
      error: null
    }
    this.nextResults = this.nextResults.bind(this);
    this.previousResults = this.previousResults.bind(this);
  }

  componentDidMount() {
    let id = Math.floor((Math.random() * 100) + 1);
    fetch(`/restaurant/${id}`)
    .then(response => response.json())
    .then(data => 
      this.setState({
        data: data,
        isLoading: false,
        currentData: data.slice(0, 3),
        count: 1
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  nextResults() {
    if (this.state.count <= 1) {
      this.setState({
        currentData: this.state.data.slice(3, 6),
        count: 2,
      });
    };
    if (this.state.count === 2) {
      this.setState({
        currentData: this.state.data.slice(6, 9),
        count: 3,
      });
    };   
    if (this.state.count === 3) {
      this.setState({
        currentData: this.state.data.slice(9, 12),
        count: 4,
      });
    };
  };

  previousResults() {
    if (this.state.count === 1) {
      this.setState({
        currentData: this.state.data.slice(0, 3),
        count: 0,
      });
    };
    if (this.state.count === 2) {
      this.setState({
        currentData: this.state.data.slice(3, 6),
        count: 1,
      });
    };   
    if (this.state.count >= 3) {
      this.setState({
        currentData: this.state.data.slice(6, 9),
        count: 2,
      });
    };
  };

  render() {
    return(
      <div id="sexy-container">
        <h2>Sponsored restaurants in your area</h2>

        <CardFlexbox>
        <svg id="caret-left" onClick={this.previousResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
          {<Card cards={this.state.currentData}></Card>}
          {<Hover hovers={this.state.currentData}></Hover>}
          <svg id="caret-right" onClick={this.nextResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
        </CardFlexbox>
      </div>
    );
  }
};

export default Carousel;