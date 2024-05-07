import React, { useState, useEffect } from 'react';
import './Meals.css';

const Meals = ({ setMeals }) => {
    const [buttonValue, setButtonValue] = useState("");

    useEffect(() => {
        setMeals("No");
    }, []);

    const handleButtonClick = (value) => {
        setButtonValue(value);
        setMeals(value);
    };

    return (
        <div className="mealParent" dir="rtl">
            <div className="mealQuestion mb-4">
                <h1>هل تريد إضافة وجبات الأكل الشعبي؟</h1>
            </div>
            <div className="flex mealButtonsContainer">
                <button 
                    className="mealButton" 
                    style={{ 
                        backgroundColor: buttonValue === "Yes" ? '#BC1C91' : '#F1F1F1',
                        color: buttonValue === "Yes" ? '#FFFFFF' : 'initial'
                    }} 
                    onClick={() => handleButtonClick("Yes")}>
                    نعم
                </button>
                <button 
                    className="mealButton" 
                    style={{ 
                        backgroundColor: buttonValue === "No" ? '#BC1C91' : '#F1F1F1',
                        color: buttonValue === "No" ? '#FFFFFF' : 'initial'
                    }} 
                    onClick={() => handleButtonClick("No")}>
                    لا
                </button>
            </div>
        </div>
    )
}

export default Meals;
