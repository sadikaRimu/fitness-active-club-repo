import React, { useEffect, useState } from 'react';
import { addToDb, getStoredExercise, setBreakTime } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ExerciseDetails.css'

const ExerciseDetails = ({ exerciseTime }) => {
    useEffect(() => {
        const storedBreakTime = getStoredExercise();
        if (storedBreakTime) {
            document.getElementById('break-time-text').innerText = JSON.stringify(storedBreakTime) + " seconds";
        }


    }, [exerciseTime])
    let total = 0;
    for (const i of exerciseTime) {
        total = total + i.time;
    }
    const handleAddToBreak = (num) => {
        console.log(num);
        const breakTimeField = document.getElementById('break-time-text');
        breakTimeField.innerText = num + " seconds";
        setBreakTime(num);
    }
    const toastNotification = () => {
        toast.success("you completed Activity  successfully");
    }
    return (
        <div className='exercise-details-section'>
            <ToastContainer />
            <div>
                <img src="../../images/rimu.jpg" alt="" />
                <h3>Sadika Afrin Rimu</h3>
            </div>
            <div className='personal-info'>
                <div>
                    <div className='single-info'>
                        <h3>75</h3><small>kg</small>
                    </div>
                    <small className='measure-unit'>Weight</small>
                </div>
                <div className='height'>
                    <h3>6.5</h3>
                    <small className='measure-unit'>Height</small>
                </div>
                <div className='age'>
                    <div className='single-info'><h3>25</h3><small>years</small></div>
                    <small className='measure-unit'>Age</small>
                </div>
            </div>
            <div>
                <h4>Add A Break</h4>
                <div className='break-time-container'>
                    <button onClick={() => handleAddToBreak(10)} className='break-time'>10s</button>
                    <button onClick={() => handleAddToBreak(20)} className='break-time'>20s</button>
                    <button onClick={() => handleAddToBreak(30)} className='break-time'>30s</button>
                    <button onClick={() => handleAddToBreak(40)} className='break-time'>40s</button>
                    <button onClick={() => handleAddToBreak(50)} className='break-time'>50s</button>
                </div>
            </div>
            <div className='exercise-details'>
                <h4>Exercise Details</h4>
                <div className='exercise-and-time-div'>
                    <h4>Exercise Time</h4>
                    <small>{total} seconds  </small>
                </div>
                <div className='exercise-and-time-div'>
                    <h4>Break Time</h4>
                    <small id="break-time-text"> seconds  </small>
                </div>
            </div>
            <div>
                <button onClick={toastNotification} className='activity-btn-card'>
                    <p className='activity-btn-text'>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default ExerciseDetails;