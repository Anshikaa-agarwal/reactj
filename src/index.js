var React = require('react');
var ReactDOM = require('react-dom');

const d = new Date();
const t = new Date().toLocaleTimeString();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<>
  <h1>Date and Time</h1>
  <p>Date: {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</p>
  <p>Time: {t} </p>
</>)