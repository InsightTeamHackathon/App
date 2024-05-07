import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Dates from '../../components/Dates/Dates';
import Activities from '../../components/Activities/Activities';
import Visitors from '../../components/Visitors/Visitors';
import Vehicle from '../../components/Vehicle/Vehicle';
import Meals from '../../components/Meals/Meals';
import Start from '../../components/Start/Start';
import Ending from '../../components/Ending/Ending';
import Guide from '../../components/Guide/Guide';
import { generateTourismPlan } from '../../services/Planner';

function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [finalPlan, setFinalPlan] = useState({});
  const totalSteps = 8;
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    activities: [],
    dates: '',
    visitors: '',
    vehicle: '',
    meals: '',
    guide: ''
  });

  useEffect(() => {
    if (Object.keys(finalPlan).length !== 0) {
      navigate('/tour', { state: { data: finalPlan } });
    }
  }, [finalPlan, navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const questions = [
    { id: 1, component: <Start /> },
    { id: 2, component: <Activities setActivities={(data) => setInputs(prev => ({ ...prev, activities: data }))} /> },
    { id: 3, component: <Dates setDates={(data) => setInputs(prev => ({ ...prev, dates: data }))} /> },
    { id: 4, component: <Visitors setVisitors={(data) => setInputs(prev => ({ ...prev, visitors: data }))} /> },
    { id: 5, component: <Meals setMeals={(data) => setInputs(prev => ({ ...prev, meals: data }))} /> },
    { id: 6, component: <Guide setGuide={(data) => setInputs(prev => ({ ...prev, guide: data }))} /> },
    { id: 7, component: <Vehicle setVehicle={(data) => setInputs(prev => ({ ...prev, vehicle: data }))} /> },
    { id: 8, component: <Ending /> }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === totalSteps) {
      const plan = generateTourismPlan(inputs);
      setFinalPlan(plan);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="parentDiv font-arabic h-[calc(100vh)] overflow-hidden">
      <div className="p-4 flex flex-col h-screen">
        <header className="flex justify-between items-center mb-5">
          <img src="/images/logo.png" alt="Logo" className="h-[75px]" />
          <button onClick={toggleSidebar}>
            <img src="/images/icons/hamburger.svg" alt="Menu" />
          </button>
        </header>
        {isSidebarOpen && (
          <div className="fixed top-0 right-0 w-48 h-full z-10 shadow-md bg-white sideBarMenuContainer">
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-2xl">
              <img src="/images/icons/close.svg" alt="Close" />
            </button>
            <ul className="mt-12 space-y-4" dir="rtl">
              <li className="border-b border-gray-100 py-2 px-4">
                  <a href="#" onClick={(e) => e.preventDefault()} className="block text-right">سجل منشأتك</a>
              </li>
              <li className="border-b border-gray-100 py-2 px-4">
                  <a href="#" onClick={(e) => e.preventDefault()} className="block text-right">سجل كمرشد</a>
              </li>
              <li className="border-b border-gray-100 py-2 px-4">
                  <a href="#" onClick={(e) => e.preventDefault()} className="block text-right">سجل كمصور</a>
              </li>
              <li className="border-b border-gray-100 py-2 px-4">
                  <a href="#" onClick={(e) => e.preventDefault()} className="block text-right">سجل كسائق</a>
              </li>
            </ul>
          </div>      
        )}
        <div className="w-full rounded bg-white h-2" dir='rtl'>
          <div className="bg-[#BC1C91] rounded h-2" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>
        <div className="flex justify-between my-2" dir='rtl'>
          {currentStep > 1 ? <button onClick={previousStep}>
            <img src="/images/icons/goBack.svg" alt="Go Back" />
          </button> : <div></div>}
          <span style={{ fontFamily: 'Comfortaa' }}>{currentStep}/{totalSteps}</span>
        </div>
        <div className="flex-grow flex flex-col justify-center">
          {questions.find(q => q.id === currentStep)?.component}
        </div>
        <div className="fixed bottom-0 left-0 right-0 px-4 py-2">
          <button onClick={nextStep} className="w-full bg-[#BC1C91] text-white rounded-lg h-[40px]">
            {currentStep === totalSteps ? "أعرض النتائج" : "التالي"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
