import React from 'react';

function GoddessImage({ day }) {
  const goddessImages = [
    'durga-day1.png', 'durga-day2.png', 'durga-day3.png', 'durga-day4.png',
    'durga-day5.png', 'durga-day6.png', 'durga-day7.png', 'durga-day8.png', 'durga-day9.png'
  ];
  return (
    <img
      src={process.env.PUBLIC_URL + '/' + goddessImages[day]}
      alt="Goddess Durga"
      className="goddess-image"
      style={{animation: 'fadeIn 2s'}}
    />
  );
}

export default GoddessImage;
