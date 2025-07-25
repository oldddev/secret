import { MongoClient } from "mongodb";

const uri = process.env.URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env");
}

if (process.env.NODE_ENV === "development") {
  // In development, use global to preserve client across hot reloads
  if (!global._mongoClient) {
    client = new MongoClient(uri, options);
    global._mongoClient = client.connect();
  }
  clientPromise = global._mongoClient;
} else {
  // In production, don't use global
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
