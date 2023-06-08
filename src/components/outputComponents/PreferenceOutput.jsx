import React from 'react'

const PreferenceOutput = ({ formData }) => {
    const { preference, expectedSalary } = formData;
    return (
        <div className='form-component'>
            <h2>Preference: {preference}</h2>
            <h2>Expected Salary: {expectedSalary}</h2>
        </div>
    )
}

export default PreferenceOutput;