import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CompanyState} from "../../types/company";
const initialState: CompanyState = {
    companyState: []
}
export const tableSlice = createSlice({
    name: 'companyTable',
    initialState,
    reducers: {
        makeCompany: (state, action:PayloadAction<any>) => {
            state.companyState = [...state.companyState, action.payload]
            console.log(state.companyState)
        },
        setProperty: (state, action:PayloadAction<any>) => {
            let {id, value, property} = action.payload
            let index = state.companyState.findIndex(item => item.id === id)

            state.companyState[index] = {...state.companyState[index], [property]: value}
        },
        removeCompany: (state, action:PayloadAction<any>) => {
            state.companyState = state.companyState.filter(item => item.id !== action.payload)
        },
    },
})
export const { makeCompany, setProperty, removeCompany } = tableSlice.actions
export default tableSlice.reducer