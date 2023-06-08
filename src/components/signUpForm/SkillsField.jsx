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

    const isSkillSelected = (skill) => {
        return formData.skills.includes(skill);
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
                                        checked={isSkillSelected('html')}
                                        onChange={handleSkillsChange}
                                        name="html"
                                    />
                                }
                                label="HTML"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSkillSelected('css')}
                                        onChange={handleSkillsChange}
                                        name="css"
                                    />
                                }
                                label="CSS"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSkillSelected('js')}
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
                                        checked={isSkillSelected('cSharp')}
                                        onChange={handleSkillsChange}
                                        name="cSharp"
                                    />
                                }
                                label="C#"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSkillSelected('dotNet')}
                                        onChange={handleSkillsChange}
                                        name="dotNet"
                                    />
                                }
                                label=".NET"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSkillSelected('sql')}
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