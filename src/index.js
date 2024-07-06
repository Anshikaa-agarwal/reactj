var React = require('react');
var ReactDOM = require('react-dom');

const d = new Date();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
  <h1>Date and Time</h1>
  <p>Date: {d.getDate}/{d.getMonth}/{d.getFullYear}</p>
</>)