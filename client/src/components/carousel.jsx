import React from 'react';
import Card from './card.jsx';
import styled from 'styled-components';
import { Transform } from 'stream';


const CardFlexbox = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 815px;
  overflow: hidden;
  
  &:hover { overflowY: visible; }
`
const SexyContainer = styled.div `
  margin: 25px;
  margin-left: 25px;
`
const CaretLeft = styled.svg `
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: blue;
  background-color: white;
  box-shadow: 0 0 6px rgba(0,0,0,.1);
  transform: rotate(90deg);
  position: relative;
  left: 0px;
  top: 164px;
  z-index: 1;
  visibility: hidden;
`
const CaretRight = styled.svg `
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: blue;
  background-color: white;
  box-shadow: 0 0 6px rgba(0,0,0,.1);
  transform: rotate(270deg);
  position: relative;
  left: 798px;
  top: -145px;
  z-index: 1;
  visibility: visible;
`
const HeadTwo = styled.h2 `
  position: relative;
  margin-left: 45px;
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
    // const restaurantId = window.location.pathname.split('/')[2]
    // let id = Math.floor((Math.random() * 100) + 1);
    // fetch(`/grub-reactor/${restaurantId}`)
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
      document.querySelector('.caret-left').style.visibility = 'visible';
    }
    if (next === 3) {
      document.querySelector('.test').style.transform = `translateX(-50%)`;
    }  
    if (next === 4) {
      document.querySelector('.test').style.transform = `translateX(-75%)`;
      document.querySelector('.caret-right').style.visibility = 'hidden';
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
      document.querySelector('.caret-right').style.visibility = 'visible';
    }
    if (prev === 2) {
      document.querySelector('.test').style.transform = `translateX(-25%)`;
    }
    if (prev === 1) {
      document.querySelector('.test').style.transform = `translateX(0%)`;
      document.querySelector('.caret-left').style.visibility = 'hidden';
    }
  }

  render() {
    return(
      <SexyContainer>
        <HeadTwo>Sponsored restaurants in your area</HeadTwo>
        <CaretLeft className="caret-left" onClick={this.previousResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></CaretLeft>
        <CardFlexbox>
          {<Card cards = {this.state.data}></Card>}
        </CardFlexbox>
        <CaretRight className="caret-right" onClick={this.nextResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></CaretRight>
      </SexyContainer>
    );
  }
};

export default Carousel;