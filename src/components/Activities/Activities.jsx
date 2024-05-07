import React, { useState, useEffect } from 'react';
import './Activities.css';

function Activities({ setActivities }) {
  const [selectedOptions, setSelectedOptions] = useState([1, 2]); 

  const options = [
    { id: 1, text: 'مزارع', image: '/images/icons/farms.svg' },
    { id: 2, text: 'مصانع', image: '/images/icons/factories.svg' },
    { id: 3, text: 'تسوق', image: '/images/icons/shopping.svg' },
    { id: 4, text: 'متاحف', image: '/images/icons/museums.svg' },
    { id: 5, text: 'أنشطة للأطفال', image: '/images/icons/kid-activities.svg' }
  ];

  const handleSelect = (id) => {
    const newSelectedOptions = selectedOptions.includes(id) 
      ? selectedOptions.filter(optionId => optionId !== id)
      : [...selectedOptions, id];
    
    setSelectedOptions(newSelectedOptions);
    setActivities(newSelectedOptions);
  };


  useEffect(() => {
    setActivities([1, 2]);
  }, []);

  return (
    <div className="p-4 flex flex-col justify-center items-center h-full">
      <div>
        <div className="text-center mb-4">أي نشاط من هذه تحب تضيفه لخطتك؟</div>
        <ul className="flex flex-col items-center">
          {options.map(option => (
            <li key={option.id} className="flex items-center my-2">
              <img src={option.image} alt={option.text} className="w-12 h-12 rounded-full" />
              <button
                dir='rtl'
                onClick={() => handleSelect(option.id)}
                className={`buttonOptions-style flex items-center justify-between p-3 rounded-lg ml-3 w-48 h-12 ${selectedOptions.includes(option.id) ? 'bg-[#BC1C91] text-white' : 'bg-white'}`}
              >
                <h1>{option.text}</h1>
                {selectedOptions.includes(option.id) && (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Activities;
