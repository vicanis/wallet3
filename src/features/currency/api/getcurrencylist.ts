import { CurrencyResponse } from "@/entities/currency/list";
import { MongoClient } from "mongodb";

export default async function getCurrencyList() {
    const uri = process.env.MONGODB_URI!;

    const mongoclient = new MongoClient(uri);

    const conn = mongoclient.connect();

    try {
        const db = (await conn).db("wallet2");

        const coll = db.collection<CurrencyResponse>("currency");

        const data = await coll.findOne({}, { sort: { timestamp: -1 } });

        if (data === null) {
            return {};
        }

        return data.currency;
    } finally {
        mongoclient.close();
    }
}
