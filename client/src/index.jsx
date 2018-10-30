import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  
  render() {
    return (
      <div>Hello, this is the rendered React page
        
      </div>
    );
  }

};

ReactDOM.render(<App />, document.getElementById('app'));