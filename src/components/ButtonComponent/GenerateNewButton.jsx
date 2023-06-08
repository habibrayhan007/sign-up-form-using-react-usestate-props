import React from 'react';
import { Button } from '@mui/material';

const GenerateNewButton = ({ handleGenerateNew }) => {
    return (
        <div className="generate-new-btn">
            <Button variant="contained" onClick={handleGenerateNew}>
                Generate New
            </Button>
        </div>
    );
};

export default GenerateNewButton;