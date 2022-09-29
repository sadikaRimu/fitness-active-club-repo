import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = () => {
    return (
        <div className='exercise-details-section'>
            <div>
                <img src="../../../images/rimu.jpg" alt="" />
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
                    <small className='break-time'>10s</small>
                    <small className='break-time'>20s</small>
                    <small className='break-time'>30s</small>
                    <small className='break-time'>40s</small>
                    <small className='break-time'>50s</small>
                </div>
            </div>
            <div>
                <h4>Exercise Details</h4>
            </div>
        </div>
    );
};

export default ExerciseDetails;