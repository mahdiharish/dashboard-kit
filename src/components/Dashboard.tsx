import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Overview from './pages/Overview';
import Ticket from './pages/Ticket';

function Dashboard() {
  return (
    <Layout>
      <Routes>
        <Route path="/Overview" element={<Overview />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
    </Layout>
  );
}

export default Dashboard;