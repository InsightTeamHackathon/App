import React, { useState, useEffect } from 'react';
import './Dates.css';

const options = [
  { days: 'يومين', value: 2 },
  { days: 'يوم', value: 1 },
  { days: '7 أيام', value: 7 },
  { days: '4 أيام', value: 4 },
];

const Dates = ({ setDates }) => {
  const [selectedDay, setSelectedDay] = useState(2);

  useEffect(() => {
    setDates(2); 
  }, []);

  const handleChange = (value) => {
    setSelectedDay(value);
    setDates(value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {options.map((option, index) => (
        <div key={index}
             dir='rtl'
             className={`datesCardContainer flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer ${selectedDay === option.value ? 'selectedDates' : ''}`}
             onClick={() => handleChange(option.value)}
             style={{ height: '150px' }}>
          <div className="text-lg font-semibold">{option.days}</div>
        </div>
      ))}
    </div>
  );
};

export default Dates;
