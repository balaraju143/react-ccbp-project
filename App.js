import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './features/users/UserProfile';
import ActivityFeed from './features/activities/ActivityFeed';
import RewardsList from './features/rewards/RewardsList';
import AdminDashboard from './features/admin/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/activity" element={<ActivityFeed />} />
        <Route path="/rewards" element={<RewardsList />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
