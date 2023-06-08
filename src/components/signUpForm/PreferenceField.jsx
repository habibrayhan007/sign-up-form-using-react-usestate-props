import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Textarea from '@mui/joy/Textarea';

const PreferenceField = ({ formData, setFormData }) => {

    return (
        <div className='form-component'>
            <div className="component-wrapper">
                <Box sx={{ minWidth: 120 }}>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                        Select your preference:
                    </Typography>
                    <FormControl fullWidth className='select-preference'>
                        <InputLabel id="demo-simple-select-label">Preference</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.preference}
                            label="Preference"
                            onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                        >
                            <MenuItem value="backEnd">Backend</MenuItem>
                            <MenuItem value="frontEnd">Frontend</MenuItem>
                        </Select>
                    </FormControl>
                    <Textarea
                        className="expected-salary"
                        name="soft"
                        placeholder="Expected Salary"
                        variant="soft"
                        value={formData.expectedSalary}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            const numericValue = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
                            setFormData({ ...formData, expectedSalary: numericValue });
                        }}
                    />
                </Box>
            </div>
        </div>
    )
}

export default PreferenceField;