import React from 'react';
import {useSelector} from "react-redux";
import {Box} from "@mui/material";
import {TableBody} from "./TableBody";
import {RootState} from "../../store/store";
import {TableHead} from "./TableHead";

export const Table = () => {
    const companies = useSelector((state:RootState) => state.companyState)
    return (
        <Box sx={{display: 'flex', margin: '0 auto', alignItems: 'center'}}>
            <table>
                <caption style={{fontSize: '48px', paddingBottom: '10px'}}>Компании</caption>
                <TableHead/>
                <TableBody companies={companies}/>
            </table>
        </Box>
    );
};