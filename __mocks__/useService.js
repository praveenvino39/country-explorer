// __mocks__/useService.js (create this file in the same directory as your test files)

export const mockCountry = {
    name: "India",
    capitals: ["New Delhi"],
    area: {
        kilometres: 3287263,
        miles: 2042610.529508
    },
    currencies: [{ name: "Rupee", symbol: "₹" }],
    flag: {
        assetLink: "https://flagcdn.com/in.svg",
        alt: "Indian flag"
    },
    languagesSpoken: ["Tamil", "Hindi", "English"],
    population: 1300000,
    timezones: ["UTC+5:30"]
}

export const mockCountry2 = {
    name: "United States",
    capitals: ["New Delhi"],
    area: {
        kilometres: 3287263,
        miles: 2042610.529508
    },
    currencies: [{ name: "Rupee", symbol: "₹" }],
    flag: {
        assetLink: "https://flagcdn.com/in.svg",
        alt: "Indian flag"
    },
    languagesSpoken: ["Tamil", "Hindi", "English"],
    population: 1300000,
    timezones: ["UTC+5:30"]
}

export const mockSearchCountryByName = jest.fn(() => new Promise((resolve, reject) => {
}))

const useService = () => ({
    searchCountryByName: mockSearchCountryByName,
});

export default useService;