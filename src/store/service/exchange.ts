import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const exchangeApi = createApi({
    reducerPath: "exchangeApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/exchange",
    }),
    endpoints: (builder) => ({
        getRates: builder.query<{ rate: number }, { from: string; to: string }>(
            {
                query: ({ from, to }) => `/rate/${from}/${to}`,
            }
        ),
    }),
});

export const { useGetRatesQuery } = exchangeApi;
