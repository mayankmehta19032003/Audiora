import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "d2qvzha7rg9z";
const apiSecret = "tb7m8ej9zn9t3zf7bk45csftnrawcyruxuxrz5yscbd326t4re4pafpqhtypyyjs";

export const client = new StreamClient(apiKey, apiSecret);
