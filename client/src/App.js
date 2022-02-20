import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Journal from './components/Journal';
import Details from './components/Details';

const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Journal />} />
            <Route path="/details" element={<Details />} />
        </Routes>
        </Router>
    );
    }

    export default App;