import React from 'react';
import '../../assets/css/main.css';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

const NameGenderForm = ({ formData, setFormData }) => {
    const handleGenderChange = (e) => {
        const updatedGender = e.target.value;
        setFormData({ ...formData, gender: updatedGender });
    };

    return (
        <div className='Name-gender-component form-component'>
            <div className="component-wrapper">
                <Textarea
                    className="name-input"
                    name="soft"
                    placeholder="Name"
                    variant="soft"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <div className="gender-container">
                    <Typography
                        sx={{ mt: 1, mb: 1, py: 1 }}
                        className='gender-option'
                    >
                        Gender:
                    </Typography>
                    <RadioGroup
                        value={formData.gender}
                        onChange={handleGenderChange}
                        className="radio-group"
                    >
                        <FormControlLabel
                            value="Male"
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value="Female"
                            control={<Radio />}
                            label="Female"
                        />
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
};

export default NameGenderForm;