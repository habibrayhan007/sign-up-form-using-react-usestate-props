import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Checkbox } from '@mui/material';

const SkillsField = ({ formData, setFormData }) => {
    const handleSkillsChange = (e) => {
        const skill = e.target.name;

        if (formData.skills.includes(skill)) {
            const updatedSkills = formData.skills.filter((s) => s !== skill);
            setFormData((prevData) => ({
                ...prevData,
                skills: updatedSkills,
            }));
        } else {
            const updatedSkills = [...formData.skills, skill];
            setFormData((prevData) => ({
                ...prevData,
                skills: updatedSkills,
            }));
        }
    };

    return (
        <div className='form-component'>
            <div className="component-wrapper">
                <Box>
                    <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                        Select your skills:
                    </Typography>
                    {formData.preference === 'frontEnd' && (
                        <>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('html')}
                                        onChange={handleSkillsChange}
                                        name="html"
                                    />
                                }
                                label="HTML"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('css')}
                                        onChange={handleSkillsChange}
                                        name="css"
                                    />
                                }
                                label="CSS"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('js')}
                                        onChange={handleSkillsChange}
                                        name="js"
                                    />
                                }
                                label="JavaScript"
                            />
                        </>
                    )}
                    {formData.preference === 'backEnd' && (
                        <>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('cSharp')}
                                        onChange={handleSkillsChange}
                                        name="cSharp"
                                    />
                                }
                                label="C#"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('dotNet')}
                                        onChange={handleSkillsChange}
                                        name="dotNet"
                                    />
                                }
                                label=".NET"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.skills && formData.skills.includes('sql')}
                                        onChange={handleSkillsChange}
                                        name="sql"
                                    />
                                }
                                label="SQL"
                            />
                        </>
                    )}
                </Box>
            </div>
        </div>
    );
};

export default SkillsField;