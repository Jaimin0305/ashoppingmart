import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Context from './Context/Context.jsx';


ReactDOM.render(
  <>
  <Context>
    <App/>
  </Context>

  </>,
  document.getElementById("root")
);