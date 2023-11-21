import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import CustomerPage from './Pages/CustomerPage';
import StaffPage from './Pages/StaffPage';
import LeaderPage from './Pages/LeaderPage';


const App = () => {
  return (
    <Router>
        {/* <Navigate to="/login" />   */}
      <Routes>
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/customer" element={<CustomerPage></CustomerPage>} />
        <Route path="/staff" element={<StaffPage></StaffPage>} />
        <Route path="/leader" element={<LeaderPage></LeaderPage>} />
      </Routes>
    </Router>
  );
};

export default App;
