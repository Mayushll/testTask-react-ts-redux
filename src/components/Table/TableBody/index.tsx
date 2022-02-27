import React from 'react';
import {TableItem} from "./TableItem";
import {Company} from "../../../types/company";

interface Props {
    companies: Company[]
}

export const TableBody = ({companies}: Props) => {
    return (
        <tbody>
        {companies.map(
            (item: Company) => {
                return (
                    <TableItem info={item} key={item.id}/>
                )
            }
        )}
        </tbody>
    );
};