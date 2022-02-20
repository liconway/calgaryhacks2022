import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Journal from './components/Journal';
import Details from './components/Details';

const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/details" element={<Details />} />
        </Routes>
        </Router>
    );
    }

    export default App;