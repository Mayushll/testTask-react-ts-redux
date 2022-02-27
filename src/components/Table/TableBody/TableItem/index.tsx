import React from 'react';
import {Company} from "../../../../types/company";
import {TableElement} from "./TableElement";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {removeCompany} from "../../../../store/slices/companyTable";

interface Props{
    info: Company
}

export const TableItem = ({info}: Props) => {
    const {name, TIN, MSRN, address, id, date} = info
    const dispatch = useDispatch()
    return (
        <tr style={{position: 'relative'}}>
            <TableElement property={'name'} text={name} id={id} />
            <TableElement property={'address'} text={address} id={id}/>
            <TableElement property={'MSRN'} text={MSRN} id={id}/>
            <TableElement property={'TIN'} text={TIN} id={id}/>
            <TableElement property={'date'} text={date} id={id}/>
            <td style={{position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)'}}>
                <Button sx={{ fontSize: '25px', color: '#ff0000'}} onClick={()=>{
                    dispatch(removeCompany(id))
                }}>X</Button>
            </td>
        </tr>
    );
};