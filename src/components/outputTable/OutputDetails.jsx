import React from 'react';
import { Typography, Box, Button } from '@mui/material';

const OutputDetails = ({ rowData, onBack, onGenerateNew }) => {
    const { name, gender, preference, expectedSalary, skills } = rowData;

    const handleBack = () => {
        onBack();
    };

    const handleGenerateNew = () => {
        onGenerateNew();
    };

    return (
        <div className='output-details-container'>
            <Box className="output-details-wrapper" sx={{ mt: 4 }}>
                <Typography variant="h3">Details</Typography>
                <Typography variant="body1">Name: {name}</Typography>
                <Typography variant="body1">Gender: {gender}</Typography>
                <Typography variant="body1">Preference: {preference}</Typography>
                <Typography variant="body1">Expected Salary: {expectedSalary}</Typography>
                <Typography variant="body1">Skills: {skills}</Typography>
            </Box>
            <div className="button-area">
                <Button variant="contained" onClick={handleBack} sx={{ mt: 2, mr: 2 }}>
                    Back
                </Button>
            </div>
        </div>
    );
};

export default OutputDetails;