import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/main.jsx';

class Test extends React.Component{
  render(){
    return (
      <div id="container">
        <Main />
      </div>
    )
  }
};

ReactDOM.render(<Test />, document.getElementById('app'));
