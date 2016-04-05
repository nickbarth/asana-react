import React from 'react'
import ReactDom from 'react-dom'

class Home extends React.Component {
  render() {
    return (
      <h2 className="h1">Home</h2>
    );
  }
}

ReactDom.render(<Home />, document.getElementById('app'));
