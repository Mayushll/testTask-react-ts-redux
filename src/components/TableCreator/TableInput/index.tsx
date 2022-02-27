import React, {ChangeEvent} from 'react';
import {Input, Typography} from "@mui/material";
import {Company} from "../../../types/company";
interface Props{
    name: string;
    value: string;
    setCompany: any;
    company: Company;
}

export const TableInput = ({name, value, company, setCompany}:Props) => {
    const key = company[value as keyof Company]
    return (
        <div>
            <Typography>
                {name}
            </Typography>
            <Input
                value={key ? key : ""}
                onChange={
                    (e:ChangeEvent<HTMLInputElement>)=>{
                        setCompany(
                            {...company, [value]: e.target.value}
                        )
                    }
                }
            />
        </div>
    );
};