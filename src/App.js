// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Indonesia from './pages/Indonesia';
import Programming from './pages/Programming';
import Saved from './pages/Saved';
import Search from './pages/Search';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Indonesia />} />
                    <Route path="/Programming" element={<Programming />} />
                    <Route path="/Saved" element={<Saved />} />
                    <Route path="/Search" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;