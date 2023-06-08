import React from 'react'

const SkillsOutput = ({ formData }) => {
    const { skills } = formData;
    return (
        <div>
            <h2>Skills: {skills}</h2>
        </div>
    )
}

export default SkillsOutput;