export function CurrencyApiCall<T extends {}>(
    action: string,
    args?: any
): Promise<T> {
    return ApiCall("currency_data", action, args);
}

export function ExchangeApiCall<T extends {}>(
    action: string,
    args?: any
): Promise<T> {
    return ApiCall("exchangerates_data", action, args);
}

async function ApiCall<T extends {}>(
    scope: string,
    action: string,
    args?: any
): Promise<T> {
    const apikey = process.env.APILAYER_KEY!;

    let url = `https://api.apilayer.com/${scope}/${action}`;

    if (typeof args !== "undefined") {
        url += "?" + new URLSearchParams(args).toString();
    }

    const resp = await fetch(url, { headers: { apikey } });

    const data: ApiLayerResponse<T> = await resp.json();

    if (data.success === true) {
        return data;
    }

    throw new Error(data.message);
}

export type ApiLayerCurrencyList = {
    currencies: {
        [code: string]: string;
    };
};

export type ApiLayerExchangeData = {
    rates: {
        [code: string]: number;
    };
};

type ApiLayerResponseSuccess<T extends {}> = {
    success: true;
} & T;

type ApiLayerResponseFailure = {
    success: false;
    message: string;
};

export type ApiLayerResponse<T extends {}> =
    | ApiLayerResponseSuccess<T>
    | ApiLayerResponseFailure;
