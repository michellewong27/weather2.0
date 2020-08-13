import React from 'react';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div></div>
    
      <div className="toolbar_nav_items">
        <ul>
          <li><a href="/">Current Weather</a></li>
          <li><a href="/weather">5 Day Forecast</a></li>
          <li><a href="/monthly">Monthly Forecast</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;