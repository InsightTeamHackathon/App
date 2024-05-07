import React, { useState, useEffect } from 'react';
import './Vehicle.css';

const Vehicle = ({ setVehicle }) => {
    const [buttonValue, setButtonValue] = useState("");

    useEffect(() => {
        setVehicle("No");
    }, []);

    const handleButtonClick = (value) => {
        setButtonValue(value);
        setVehicle(value);
    };

    return (
        <div className="vehicleParent" dir="rtl">
            <div className="vehicleQuestion mb-4">
                <h1>هل تريد إضافة سائق خاص؟</h1>
            </div>
            <div className="flex vehicleButtonsContainer">
                <button 
                    className="vehicleButton" 
                    style={{ 
                        backgroundColor: buttonValue === "Yes" ? '#BC1C91' : '#F1F1F1',
                        color: buttonValue === "Yes" ? '#FFFFFF' : '#000000'
                    }} 
                    onClick={() => handleButtonClick("Yes")}>
                    نعم
                </button>
                <button 
                    className="vehicleButton" 
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

export default Vehicle;
