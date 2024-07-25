// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <ul className="folder-list">
        <li className="folder-item">Folder 1</li>
        <li className="folder-item">Folder 2</li>
      </ul>
      <div className="upload-form">
        <form>
          <input type="text" placeholder="Image Name" />
          <input type="file" />
          <button type="submit">Upload Image</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
