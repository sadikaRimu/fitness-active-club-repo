import React, { useEffect, useState } from 'react';
import { addToDb, getStoredExerciseTime } from '../../utilities/fakedb';
import Card from '../Card/Card';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import './ExerciseList.css'

const ExerciseList = () => {
    const [exercise, setExercise] = useState([]);
    const [exerciseTime, setExreciseTime] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercise(data));
    }, []);
    useEffect(() => {
        const exerciseTime = getStoredExerciseTime();
        const saveexerciseTime = [];
        for (const id in exerciseTime) {
            const addedNewExercise = exercise.find(product => product.id === id);
            if (addedNewExercise) {
                const quantity = exerciseTime[id];
                addedNewExercise.quantity = quantity;
                saveexerciseTime.push(addedNewExercise);
            }
        }
        setExreciseTime(saveexerciseTime);
    }, [exercise])
    const handleAddToCard = (selectedExercise) => {
        // console.log(selectedExercise);
        const newExrecise = [...exerciseTime, selectedExercise];
        setExreciseTime(newExrecise);
        addToDb(selectedExercise.id);
    }
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
                            handleAddToCard={handleAddToCard}
                        ></Card>)
                    }
                </div>
            </div>
            <div>
                <ExerciseDetails
                    exerciseTime={exerciseTime}
                ></ExerciseDetails>

            </div>


        </div>
    );
};

export default ExerciseList;