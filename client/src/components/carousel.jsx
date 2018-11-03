import React from 'react';
import Card from './card.jsx';
import Hover from './hover.jsx';
import styled from 'styled-components';
import { Transform } from 'stream';
import $ from 'jquery';


const CardFlexbox = styled.div `
display: flex;
flex-direction: row;
align-items: center;
max-width: 815px;
overflow: hidden;
`

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      count: 25,
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
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  nextResults() {
    let next = this.state.count;
    console.log(next)
    document.querySelector('.test').style.transform = `translateX(-${next}%)`;
    this.setState({
      count: (next + 25)
    });
    next += 25;
    if (next >= 100) {
      this.setState({
        count: 75
      })
      next = 75
    }
  };

  previousResults() {
    let prev = this.state.count;
    console.log(prev)
    document.querySelector('.test').style.transform = `translateX(-${prev}%)`;
    this.setState({
      count: (prev - 25)
    });
    prev -= 25;
    if (prev <= 0) {
      this.setState({
        count: 25
      })
      prev = 25;
    }
  };

  render() {
    return(
      <div id="sexy-container">
        <h2>Sponsored restaurants in your area</h2>
        <svg id="caret-left" onClick={this.previousResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
        <CardFlexbox>
          {<Card cards={this.state.data}></Card>}
          {<Hover hovers={this.state.data}></Hover>}
        </CardFlexbox>
        <svg id="caret-right" onClick={this.nextResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
      </div>
    );
  }
};

export default Carousel;