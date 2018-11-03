import React from 'react';

class Next extends React.component {

  nextResults() {
    let next = this.props.nexts;
    next ++;
    this.setState({
      count: next
    });
    if (next === 2) {
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

  render() {
    return(
      <svg id="caret-right" onClick={this.nextResults.bind(this)} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M18.6 7.51l2.48 2.47-6.6 6.6-2.47 2.47-2.47-2.47-6.55-6.55 2.48-2.47 6.54 6.54 6.59-6.59zm0 0" fill="currentColor"></path></svg>
    )
  }
}

export default Next;