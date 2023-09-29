export type CurrencyResponse = {
    currency: CurrencyList;
    timestamp: Date;
};

export type CurrencyList = { [code: string]: string };
