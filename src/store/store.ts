import { configureStore } from "@reduxjs/toolkit";
import { exchangeApi } from "./service/exchange";
import { currencyApi } from "./service/currency";

export const store = configureStore({
    reducer: {
        [exchangeApi.reducerPath]: exchangeApi.reducer,
        [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            exchangeApi.middleware,
            currencyApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
