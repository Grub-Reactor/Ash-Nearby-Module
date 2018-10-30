import React from 'react';
//Does card need it's own handleClick for the favorites button?

//include hover here

class Card extends React.Component {


  componentDidMount() {
    //read fetch article, consider using that instead of Ajax
    //wow that was easy
    fetch('http://localhost:3000/restaurant/nearby')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render () {
    return(
      <div>

      </div>
    );
  }
}
