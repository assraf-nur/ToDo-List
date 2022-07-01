import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <h2 className='text-center text-5xl font-semibold'>Calender</h2>
            <div className='mx-auto mt-12 text-center'>
                <Calendar onChange={onChange} value={value} className='mx-auto'></Calendar>
            </div>
        </div>
    );
};

export default Calender;