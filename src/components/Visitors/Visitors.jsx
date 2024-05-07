import { useState, useEffect } from 'react';
import './Visitors.css';

const Visitors = ({ setVisitors }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setVisitors(1);
  }, []);

  const increment = () => {
    if (count < 50) {
      const newCount = count + 1;
      setCount(newCount);
      setVisitors(newCount);
    }
  };

  const decrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      setVisitors(newCount);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4" dir='rtl'>
      <div className="text-right mb-4 text-lg font-semibold">
        كم عدد الزوار؟
      </div>
      <div className="flex items-center justify-between bg-white border rounded-lg shadow w-full max-w-md">
        <div className="ml-4 mr-5">
          <span className="text-lg font-bold">{count === 1 || count === 2 ? "" : count}</span>
          <span className="text-lg mr-1">{count === 2 ? "زائرين" : count > 2 && count <= 10 ? "زوار" : 'زائر'}</span>
        </div>
        <div className="flex mr-2">
          <button
            onClick={decrement}
            disabled={count === 1}
            className="visitorsButton text-lg font-bold p-2 mx-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            -
          </button>
          <button
            onClick={increment}
            className="visitorsButton text-lg font-bold p-2 mx-1 border rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
