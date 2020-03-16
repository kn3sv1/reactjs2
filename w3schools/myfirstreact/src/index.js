import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
//ReactDOM.render(<Test />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

//https://www.w3schools.com/REACT/react_getstarted.asp
const myfirstelement = <h1>Hello React1!</h1>;
ReactDOM.render(myfirstelement, document.getElementById('root'));