import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = () => {
    return (
        <div>
            <h3>Sadika Afrin</h3>
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