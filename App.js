import React, { useState } from 'react';
import Rangoli from './Rangoli';
import GoddessImage from './GoddessImage';
import Story from './Story';
import VisitorEntry from './VisitorEntry';
import './App.css';

function App() {
  const [navratriDay, setNavratriDay] = useState(0);
  const [visitorName, setVisitorName] = useState('');

  // Function to increment day (loops back after day 8)
  const nextDay = () => {
    setNavratriDay((prevDay) => (prevDay + 1) % 9);
  };

  return (
    <div className="app-outer">
      <div className="side-by-side">
        <Rangoli name={visitorName} />
        <GoddessImage day={navratriDay} />
      </div>
      <Story day={navratriDay} />

      <VisitorEntry setVisitorName={setVisitorName} />

      <button className="next-day-btn" onClick={nextDay}>
        Next Day
      </button>
    </div>
  );
}

export default App;
