import React from 'react';
import Card from './card.jsx';
import styled from 'styled-components';
import { Transform } from 'stream';
// import Hover from './hover.jsx';
// import Back from './back.jsx';
// import Next from './next.jsx';


const CardFlexbox = styled.div `
display: flex;
flex-direction: row;
align-items: center;
max-width: 815px;

overflow: hidden;
  // &:hover { overflow: visible; }

`

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
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
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  nextResults() {
    let next = this.state.count;
    next ++;
    this.setState({
      count: next
    });
    if (next === 2) {
      //I know that document.querySelector is not a very React way of thinking
      document.querySelector('.test').style.transform = `translateX(-25%)`;
      document.querySelector('#caret-left').style.visibility = 'visible';
    }
    if (next === 3) {
      document.querySelector('.test').style.transform = `translateX(-50%)`;
    }  
    if (next === 4) {
      document.querySelector('.test').style.transform = `translateX(-75%)`;
      document.querySelector('#caret-right').style.visibility = 'hidden';
    }  
  }

  previousResults() {
    let prev = this.state.count;
    prev --;
    this.setState({
      count: prev
    })
    if (prev === 3) {
      document.querySelector('.test').style.transform = `translateX(-50%)`;
      document.querySelector('#caret-right').style.visibility = 'visible';
    }
    if (prev === 2) {
      document.querySelector('.test').style.transform = `translateX(-25%)`;
    }
    if (prev === 1) {
      document.querySelector('.test').style.transform = `translateX(0%)`;
      document.querySelector('#caret-left').style.visibility = 'hidden';
    }
  }

  render() {
    return(
      <div id="sexy-container">
        <h2>Sponsored restaurants in your area</h2>
        <svg id="caret-left" onClick={this.previousResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
        {/* <Back backs = {this.state.count}></Back> */}
        <CardFlexbox>
          {<Card cards = {this.state.data}></Card>}
        </CardFlexbox>
        {/* <Next nexts = {this.state.count}></Next> */}
        <svg id="caret-right" onClick={this.nextResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
      </div>
    );
  }
};

export default Carousel;