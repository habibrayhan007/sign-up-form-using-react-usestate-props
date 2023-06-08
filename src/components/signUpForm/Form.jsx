import React, { useState } from 'react';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FormHeader from './FormHeader';
import NameGenderForm from './NameGenderForm';
import NameGenderOutput from '../outputComponents/NameGenderOutput';
import PreferenceField from './PreferenceField';
import PreferenceOutput from '../outputComponents/PreferenceOutput';
import SkillsField from './SkillsField';
import OutputTable from '../outputTable/OutputTable';
import GenerateNewButton from '../ButtonComponent/GenerateNewButton';
import OutputDetails from '../outputTable/OutputDetails';

const steps = ['Basic Info', 'Employee info', 'Skills'];

const Form = () => {
    const initialState = {
        name: '',
        gender: '',
        preference: '',
        expectedSalary: '',
        skills: '',
    };

    const [formData, setFormData] = useState(initialState);
    console.log(formData);
    console.log(typeof (formData.skills));
    const [activeStep, setActiveStep] = useState(0);
    const [nameGenderOutput, setNameGenderOutput] = useState(false);
    const [preferenceOutput, setPreferenceOutput] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [showOutputDetails, setShowOutputDetails] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
    const [showDetails, setShowDetails] = useState(false); // Add this state

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);

        if (newActiveStep === 1) {
            setNameGenderOutput(true);
        } else if (newActiveStep === 2) {
            setPreferenceOutput(true);
        }
    };

    const handleSubmit = () => {
        setSubmitClicked(true);
    };

    const handleGenerateNew = () => {
        setActiveStep(0);
        setFormData(initialState);
        setNameGenderOutput(false);
        setPreferenceOutput(false);
        setSubmitClicked(false);
        setShowOutputDetails(false);
        setSelectedRowData(null);
        setShowDetails(false); // Add this line
    };

    const handleSeeDetails = () => {
        setSelectedRowData(formData);
        setShowOutputDetails(true);
        setShowDetails(true); // Add this line
    };

    const handleBackFromDetails = () => {
        setShowOutputDetails(false);
        setShowDetails(false);
        setSelectedRowData(null);
    };

    const enablePreferenceFields = activeStep >= 1;
    const enableSkillsFields = activeStep >= 2;

    return (
        <div className="main-page">
            {submitClicked && showOutputDetails ? (
                <OutputDetails rowData={selectedRowData} onBack={handleBackFromDetails} />
            ) : (
                <div className="output-table">
                    {!submitClicked && !showOutputDetails && (
                        <div className="form-wrapper">
                            <FormHeader />
                            <Box sx={{ width: '100%' }}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                <div className="form-container-box">
                                    <div className="form-area">
                                        <React.Fragment>
                                            <Box className="form-area-wrapper" sx={{ mt: 2, mb: 1, py: 1 }}>
                                                {activeStep === 0 && <NameGenderForm formData={formData} setFormData={setFormData} />}
                                                {activeStep === 1 && (
                                                    <React.Fragment>
                                                        {nameGenderOutput && <NameGenderOutput formData={formData} />}
                                                        {enablePreferenceFields && (
                                                            <React.Fragment>
                                                                <PreferenceField formData={formData} setFormData={setFormData} />
                                                            </React.Fragment>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                                {activeStep === 2 && (
                                                    <React.Fragment>
                                                        {nameGenderOutput && <NameGenderOutput formData={formData} />}
                                                        {preferenceOutput && <PreferenceOutput formData={formData} />}
                                                        {enableSkillsFields && (
                                                            <React.Fragment>
                                                                <SkillsField formData={formData} setFormData={setFormData} />
                                                            </React.Fragment>
                                                        )}
                                                    </React.Fragment>
                                                )}
                                            </Box>
                                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                                <Button
                                                    variant="contained"
                                                    color="inherit"
                                                    disabled={activeStep === 0}
                                                    onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
                                                    sx={{ mr: 1 }}
                                                >
                                                    Previous
                                                </Button>
                                                <Box sx={{ flex: '1 1 auto' }} />
                                                {activeStep === steps.length - 1 ? (
                                                    <Button variant="contained" onClick={handleSubmit} sx={{ mr: 1 }}>
                                                        Submit
                                                    </Button>
                                                ) : (
                                                    <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }} disabled={activeStep === steps.length - 1}>
                                                        Next
                                                    </Button>
                                                )}
                                            </Box>
                                        </React.Fragment>
                                    </div>
                                </div>
                            </Box>
                        </div>
                    )}
                    {submitClicked && !showOutputDetails && <OutputTable formData={formData} onSeeDetails={handleSeeDetails} />}
                </div>
            )}
            {submitClicked && <GenerateNewButton handleGenerateNew={handleGenerateNew} />}
        </div>
    );
};

export default Form;