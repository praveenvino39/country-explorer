interface Area {
    miles: number
    kilometres: number
}

interface Currency {
    name: string
    symbol: string
}

interface Flag {
    assetLink: string
    alt: string
}

interface Country {
    name: string;
    capitals: string[];
    population: number;
    area: Area;
    languagesSpoken: string[];
    timezones: string[];
    currencies: Currency[]
    flag: Flag
}