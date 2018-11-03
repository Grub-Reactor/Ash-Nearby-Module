import React from 'react';

class Back extends React.Component {

  previousResults() {
    let prev = this.props.scrolls;
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
    return (
      <svg id="caret-left" onClick={this.previousResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
    )
  }
}

export default Back;