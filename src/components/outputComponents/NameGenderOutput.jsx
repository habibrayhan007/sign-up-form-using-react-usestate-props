import React from 'react';

const NameGenderOutput = ({ formData }) => {
    const { name, gender } = formData;

    return (
        <div className='form-component'>
            <h2>Name: {name}</h2>
            <h2>Gender: {gender}</h2>
        </div>
    );
};

export default NameGenderOutput;