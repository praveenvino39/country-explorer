


export const CountryParser = {
    fromJson: (data: Record<string, any>): Country => {
        return {
            name: data.name.common,
            area: {
                miles: data.area * 0.621371,
                kilometres: data.area
            },
            capitals: data.capital,
            population: data.population,
            currencies: CountryParser.parseCurrencies(data.currencies),
            languagesSpoken: CountryParser.parseLanguages(data.languages),
            timezones: data.timezones,
            flag: {
                assetLink: data.flags.svg,
                alt: data.flags.alt
            }
        }
    },
    parseLanguages: (languages: Record<string, string>) => {
        return Object.values(languages);
    },
    parseCurrencies: (currencies: Record<string, any>): Currency[] => {
        return Object.values(currencies).map((currency) => ({
            name: currency.name,
            symbol: currency.symbol,
        }));
    }
}
