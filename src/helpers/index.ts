import {Company} from "../types/company";

export const getData = async (TIN: string | undefined) => {
    if (TIN === undefined) {
        return
    }
    let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
    let token = "9b01400ca29f86529746307fc80ee1ca9980be13";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query: TIN, count: 1})
    }
    let response = await fetch(url, options)
    let TextResponce = await response.text()
    let data = JSON.parse(TextResponce).suggestions[0]
    let CompanyData: Company = {}
        CompanyData.name = data.value
        CompanyData.address = data.data.address.value
        CompanyData.MSRN = data.data.ogrn
        CompanyData.date = data.data.state.registration_date
        CompanyData.TIN = TIN
    return CompanyData
}