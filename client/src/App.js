import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Journal from './components/Journal';
import Details from './components/Details';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    console.log(loggedIn);
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Homepage setLoggedIn={setLoggedIn}/>} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/details" element={<Details />} />
        </Routes>
        </Router>
    );
    }

    export default App;