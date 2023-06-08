import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import GenerateNewButton from '../ButtonComponent/GenerateNewButton';

const OutputTable = ({ formData }) => {
    const { name, gender, preference, expectedSalary, skills } = formData;

    return (
        <div className="table-container">
            <h2>Final Output</h2>
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
                                    <button>...</button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <GenerateNewButton />
        </div>
    );
};

export default OutputTable;