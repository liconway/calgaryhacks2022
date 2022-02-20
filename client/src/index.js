import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import img from './img/wood.png';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>

        <Navigation />
        <App />
    </div>
    </React.StrictMode>,
    document.getElementById("root")

);

