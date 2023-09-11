import { mockCountry } from "../useService";

let storage = {
    COUNTRIES: JSON.stringify([mockCountry]),
    FAVOURITES: JSON.stringify([mockCountry])
};

export default {
    setItem: jest.fn(async (key, value) => {
        storage[key] = value;
    }),
    getItem: jest.fn(async (key) => {
        return storage[key] || null;
    }),
    removeItem: jest.fn(async (key) => {
        delete storage[key];
    }),
    clear: jest.fn(async () => {
        storage = {};
    }),
};