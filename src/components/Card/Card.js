import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props);
    const { id, name, price, img } = props.exercise;
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h3>name: {name}</h3>
            <p>For Age: {price}</p>
        </div>
    );
};

export default Card;