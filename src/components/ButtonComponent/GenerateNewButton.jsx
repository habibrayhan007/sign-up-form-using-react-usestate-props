import React from 'react'
import { Button } from '@mui/material';

const GenerateNewButton = () => {

    const handleGenerateNew = () => {
        // Logic for generating new data
    };

    return (
        <div className="generate-new-btn">
            <Button variant="contained" onClick={handleGenerateNew}>
                Generate New
            </Button>
        </div>
    )
}

export default GenerateNewButton;