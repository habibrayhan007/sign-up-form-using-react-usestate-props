import React, { useState } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import OutputDetails from './OutputDetails';

const OutputTable = ({ formData, onSeeDetails }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);

    const { name, gender, preference, expectedSalary, skills } = formData;

    const handleSeeDetails = () => {
        setSelectedRowData(formData);
        setShowDetails(true);
        onSeeDetails(); // Call the prop function
    };

    if (showDetails) {
        return <OutputDetails rowData={selectedRowData} />;
    }

    return (
        <div className="table-container">
            <Typography variant="h2">Final Output</Typography>
            <div className="table-data">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Preference</TableCell>
                                <TableCell>Expected Salary</TableCell>
                                <TableCell>Skills</TableCell>
                                <TableCell>View Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{name}</TableCell>
                                <TableCell>{gender}</TableCell>
                                <TableCell>{preference}</TableCell>
                                <TableCell>{expectedSalary}</TableCell>
                                <TableCell>{skills}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={handleSeeDetails}>
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default OutputTable;