import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./Tour.css";

function Tour() {
  const location = useLocation();
  const data = location.state && location.state.data;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto px-4">
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
              <a href="" className="block text-right">سجل منشأتك</a>
            </li>
            <li className="border-b border-gray-100 py-2 px-4">
              <a href="" className="block text-right">سجل كمرشد</a>
            </li>
            <li className="border-b border-gray-100 py-2 px-4">
              <a href="" className="block text-right">سجل كمصور</a>
            </li>
            <li className="border-b border-gray-100 py-2 px-4">
              <a href="" className="block text-right">سجل كسائق</a>
            </li>
          </ul>
        </div>
      )}
      <h1 className="text-2xl font-bold text-center my-4">تفاصيل رحلتك</h1>
      {data ? (
        <>
          {Object.keys(data.plan).map((day, index) => (
            <div key={index} className="mb-20 mt-10" dir='rtl'>
              <h2 className="text-xl font-semibold mb-4 text-center text-[#BC1C91]">{`اليوم ${index + 1}`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.plan[day].map((activity, idx) => (
                  <div key={idx} className="tourCard bg-white rounded-lg p-4">
                    <img src={activity.img} alt={activity.name} className="w-full h-48 object-cover rounded-md" />
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-[#BC1C91]">{activity.name}</h3>
                      <p className="text-sm">{activity.period}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">عدد السياح : {activity.visitors}</span>
                        <div className="text-yellow-500 flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                            <svg key={i} fill={i < Math.round(activity.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                              <polygon strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                            </svg>
                          ))}
                          <span className="ml-2 text-sm font-medium">({activity.rating.toFixed(1)})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        <div className="cost-details bg-white p-4 rounded-lg shadow mt-4 mb-10" dir='rtl'>
            <h3 className="text-xl font-semibold text-[#BC1C91]">تكلفة إضافية :</h3>
            {data.additionalCosts.details.map((detail, index) => {
                const itemTranslations = {
                    'Vehicle': 'السائق الخاص',
                    'Meals': 'الوجبات الشعبية',
                    'Guide': 'المرشد السياحي'
                };
                return (
                    <p key={index} className="text-sm">{`${itemTranslations[detail.item] || detail.item} : ${detail.cost} ريال`}</p>
                );
            })}
            <p className="text-lg font-semibold">المجموع الكلي : {data.additionalCosts.total} ريال</p>
        </div>
        </>
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default Tour;
