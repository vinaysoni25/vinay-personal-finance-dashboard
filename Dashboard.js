import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Personal Finance Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/expenses">Expense Tracker</Link></li>
          <li><Link to="/budget">Budget Planner</Link></li>
          <li><Link to="/savings">Savings Goals</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
