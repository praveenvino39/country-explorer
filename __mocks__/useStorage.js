// __mocks__/useStorage.js (create this file in the same directory as your test files)

export const mockGetCountryFromCache = jest.fn();
export const mockSetCountryToCache = jest.fn();
export const mockGetFavouriteCountries = jest.fn();
export const mockAddCountryToFavourites = jest.fn();
export const mockRemoveCountryFromFavourites = jest.fn();

const useStorage = () => ({
    getCountryFromCache: mockGetCountryFromCache,
    setCountryToCache: mockSetCountryToCache,
    getFavouriteCountries: mockGetFavouriteCountries,
    addCountryToFavourites: mockAddCountryToFavourites,
    removeCountryFromFavourites: mockRemoveCountryFromFavourites,
});

export default useStorage;