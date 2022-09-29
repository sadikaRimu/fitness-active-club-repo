import React from 'react';
import './Card.css'

const Card = (props) => {
    //console.log(props);
    const { id, name, price, img, time } = props.exercise;
    const { exercise, handleAddToCard } = props;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>For Age: {price}</p>
                <p>Time Required: {time}s</p>
            </div>
            <button onClick={() => handleAddToCard(exercise)} className='btn-card'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Card;