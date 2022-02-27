import { configureStore } from '@reduxjs/toolkit'
import companyTable from "./slices/companyTable";
export const store = configureStore({
    reducer: companyTable,
})
export type RootState = ReturnType<typeof store.getState>
