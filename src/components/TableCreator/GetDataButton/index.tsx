import React from 'react';
import {TableInput} from "../TableInput";
import {Button} from "@mui/material";
import {getData} from "../../../helpers";
import {Company} from "../../../types/company";

interface Props{
    company: Company
    setCompany: React.Dispatch<React.SetStateAction<Company>>
}

export const GetDataButton = ({company, setCompany}: Props) => {
    return (
        <div style={{display: 'flex'}}>
            <TableInput name={'ИНН'} value={'TIN'} setCompany={setCompany} company={company}/>
            <Button variant={'contained'} onClick={()=>{
                getData(company.TIN).then(response => {
                    if (response) {
                        setCompany(response)
                    }
                })
            }}>Загрузить</Button>
        </div>
    );
};