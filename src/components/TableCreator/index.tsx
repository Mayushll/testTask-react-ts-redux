import React, {useState} from 'react';
import {TableInput} from "./TableInput";
import {Box, Button} from "@mui/material";
import {Company} from "../../types/company";
import {useDispatch, useSelector} from "react-redux";
import {makeCompany} from "../../store/slices/companyTable";
import {RootState} from "../../store/store";
import {ModalStyle} from "./index.style";
import {getData} from "../../helpers";
import {GetDataButton} from "./GetDataButton";

export const TableCreator = () => {
    const [company, setCompany] = useState<Company>({})
    const list = useSelector((state:RootState)=>state.companyState)
    const dispatch = useDispatch()
    const addCompany = async () => {
        const companyWithId = {...company, id: (list.length+1)}
        dispatch(makeCompany(companyWithId))
        setCompany({})
    }
    return (
        <Box sx={ModalStyle}>
            <TableInput name={'Наименование'} value={'name'} setCompany={setCompany} company={company}/>
            <TableInput name={'Адрес'} value={'address'} setCompany={setCompany} company={company}/>
            <TableInput name={'ОГРН'} value={'MSRN'} setCompany={setCompany} company={company}/>
            <GetDataButton company={company} setCompany={setCompany}/>
            <TableInput name={'Дата регистрации'} value={'date'} setCompany={setCompany} company={company}/>
            <Button
                onClick={addCompany}
            >Отправить результат</Button>
        </Box>
    );
};