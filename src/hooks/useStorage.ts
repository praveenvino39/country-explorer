import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEY } from '../constant'


const useStorage = () => {
    const getCountryFromCache = async (countryName: string) => {
        const countriesString = await AsyncStorage.getItem(STORAGE_KEY.COUNTRIES)
        const countries: Country[] = JSON.parse(countriesString ?? "[]")
        const country = countries.find((country) => country.name.toLowerCase() === countryName.toLowerCase())
        return country;
    }

    const setCountryToCache = async (country: Country) => {
        const countriesString = await AsyncStorage.getItem(STORAGE_KEY.COUNTRIES)
        const countries: Country[] = JSON.parse(countriesString ?? "[]")
        countries.push(country)
        await AsyncStorage.setItem(STORAGE_KEY.COUNTRIES, JSON.stringify(countries))
    }

    const getFavouriteCountries = async () => {
        const countriesString = await AsyncStorage.getItem(STORAGE_KEY.FAVOURITES)
        const countries: Country[] = JSON.parse(countriesString ?? "[]")
        return countries
    }

    const addCountryToFavourites = async (country: Country) => {
        const countriesString = await AsyncStorage.getItem(STORAGE_KEY.FAVOURITES)
        const countries: Country[] = JSON.parse(countriesString ?? "[]")
        const isExist = countries.find((_country) => _country.name.toLowerCase() === country.name.toLowerCase())
        if (!isExist) {
            countries.push(country)
            await AsyncStorage.setItem(STORAGE_KEY.FAVOURITES, JSON.stringify(countries))
        }
    }

    const removeCountryFromFavourites = async (countryName: string) => {
        const countriesString = await AsyncStorage.getItem(STORAGE_KEY.FAVOURITES)
        const countries: Country[] = JSON.parse(countriesString ?? "[]")
        const removeIndex = countries.findIndex((country) => country.name.toLowerCase() === countryName.toLowerCase())
        countries.splice(removeIndex, 1)
        await AsyncStorage.setItem(STORAGE_KEY.FAVOURITES, JSON.stringify(countries))
    }
    return {
        getCountryFromCache,
        setCountryToCache,
        addCountryToFavourites,
        removeCountryFromFavourites,
        getFavouriteCountries
    }
}

export default useStorage