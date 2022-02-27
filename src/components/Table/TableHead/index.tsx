import React from 'react';

export const TableHead = () => {
    return (
        <thead>
            <tr>
                <th style={{width: '15vw'}}>
                    Наименование
                </th>
                <th style={{width: '15vw'}}>
                    Адрес
                </th>
                <th style={{width: '15vw'}}>
                    ОГРН
                </th>
                <th style={{width: '15vw'}}>
                    ИНН
                </th>
                <th style={{width: '15vw'}}>
                    Дата регистрации
                </th>
            </tr>
        </thead>
    );
};