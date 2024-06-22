import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
