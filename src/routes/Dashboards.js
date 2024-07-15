import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Homecopy from './Homecopy';
import Destinations from './Destinations';
import Bookings from './Bookings';
import Profile from './Profile';
import './Dashboard.css';

function Dashboards() {
  return (
    
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Travel Dashboard</h2>
        <index/>
        <nav>
          <ul>
            <li><Link to="/Homecopy">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/login/index">Login</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="main-content">
        <header className="header">
          <h1>Welcome to Your Travel Dashboard</h1>
        </header>
        <div className="content">
          <Routes>
            <Route path="/Homecopy" exact component={Homecopy} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/bookings" component={Bookings} />
            <Route path="/profile" component={Profile} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboards;
