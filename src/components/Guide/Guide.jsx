import React, { useState, useEffect } from 'react';
import './Guide.css';

const Guide = ({ setGuide }) => {
    const [buttonValue, setButtonValue] = useState("");

    useEffect(() => {
        setGuide("No");
    }, []);

    const handleButtonClick = (value) => {
        setButtonValue(value);
        setGuide(value);
    };

    return (
        <div className="guideParent" dir="rtl">
            <div className="guideQuestion mb-4">
                <h1>هل تريد إضافة مرشد سياحي؟</h1>
            </div>
            <div className="flex guideButtonsContainer">
                <button 
                    className="guideButton" 
                    style={{ 
                        backgroundColor: buttonValue === "Yes" ? '#BC1C91' : '#F1F1F1',
                        color: buttonValue === "Yes" ? '#FFFFFF' : '#000000'
                    }} 
                    onClick={() => handleButtonClick("Yes")}>
                    نعم
                </button>
                <button 
                    className="guideButton" 
                    style={{ 
                        backgroundColor: buttonValue === "No" ? '#BC1C91' : '#F1F1F1',
                        color: buttonValue === "No" ? '#FFFFFF' : '#000000'
                    }} 
                    onClick={() => handleButtonClick("No")}>
                    لا
                </button>
            </div>
        </div>
    )
}

export default Guide;
