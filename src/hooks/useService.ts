import React from 'react'
import useStorage from './useStorage'
import { CountryParser } from '../utils/CountryTypeUtils'

export const useService = () => {
    const { setCountryToCache, getCountryFromCache } = useStorage()

    const searchCountryByName = async (name: string): Promise<Country | null> => {
        try {
            const existingCountry = await getCountryFromCache(name)
            if (existingCountry) {
                console.log("Data FROM CACHE");
                return existingCountry
            }

            const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            const data = await response.json()
            if (data.status !== 404) {
                const country = CountryParser.fromJson(data[0])
                await setCountryToCache(country)
                console.log("Data FROM NETWORK");
                return country
            }
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    return {
        searchCountryByName
    }
}

export default useService