import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setProperty} from "../../../../../store/slices/companyTable";
import {DebounceInput} from "react-debounce-input";
import {Typography} from "@mui/material";

interface Props {
    text: string | undefined
    id: number | undefined
    property: string | undefined
}

export const TableElement = ({property, id,text}: Props) => {
    const dispatch = useDispatch()
    const [isChanging, setIsChanging] = useState<boolean>(false)
    return (
        <>
            {!isChanging ?
                (
                    <td style={{textAlign: 'center'}} onClick={() => {
                        setIsChanging(true)
                    }}>
                        <Typography>{text}</Typography>
                    </td>
                )
                : (
                    <td style={{textAlign: 'center'}}>
                        <DebounceInput debounceTimeout={300} autoFocus={true} onBlur={() => setIsChanging(false)} value={text} onChange={
                            (e)=>{
                                dispatch(setProperty({id: id, value: e.target.value, property: property}))
                            }
                        }/>
                    </td>
                )
            }
        </>

    );
};