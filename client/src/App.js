import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Journal from './components/Journal';
import Details from './components/Details';
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/details" element={<Details />} />
            {/* <Route 
                path="/journal" 
                element={
                    <RequireAuth>
                        <Journal />
                    </RequireAuth>
                } 
            />
            <Route 
                path="/details" 
                element={
                    <RequireAuth>
                        <Details />
                    </RequireAuth>
            } /> */}
        </Routes>
        </Router>
    );
    }

    export default App;