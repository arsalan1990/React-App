import React from "react";
import ReactDOM from 'react-dom';

function Hi() {
  return <div>Hello World!</div>;
}
  function Hi(props) {
  return <div>Hello {props.name}!</div>;
  }

ReactDOM.render(<Hi name="Dave"/>,document.querySelector('#root'));




















