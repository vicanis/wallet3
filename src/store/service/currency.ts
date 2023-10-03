import { CurrencyList } from "@/entities/currency/list";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
    reducerPath: "currencyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api/currency",
    }),
    endpoints: (builder) => ({
        getCurrencyList: builder.query<{ list: CurrencyList }, {}>({
            query: () => "/",
        }),
    }),
});

export const { useGetCurrencyListQuery } = currencyApi;
