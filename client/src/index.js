import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import img from './img/wood.png';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundPosition: 'center', height: '100vh' }}>
    <Navigation />
    <App />
    </div>
    </React.StrictMode>,
    document.getElementById("root")

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
