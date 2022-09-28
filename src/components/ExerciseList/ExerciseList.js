import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './ExerciseList.css'

const ExerciseList = () => {
    const [exercise, setExercise] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data));
    }, [])
    return (
        <div className='exercise-list-container'>
            <div>
                <div className='header'>
                    <h1>Fitness Active Club</h1>
                    <h3>Select today's exercise</h3>
                </div>
                <div className='card-list'>
                    {
                        exercise.map(exercise => <Card
                            key={exercise.id}
                            exercise={exercise}
                        ></Card>)
                    }
                </div>
            </div>
            <div>
                <h3>Details List:</h3>
            </div>
        </div>
    );
};

export default ExerciseList;