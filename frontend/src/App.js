import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Login from './components/Login';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Header />
                  <Sidebar />
                  <Content />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Box>
      </Router>
    </AuthProvider>
  );
};

export default App;
