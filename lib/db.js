"use server";

import { MongoClient } from "mongodb";

const uri = process.env.URI;
const options = {};

if (!uri) {
  throw new Error("Please define the URI environment variable");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Preserve MongoClient across hot reloads in development
  if (!global._mongoClient) {
    client = new MongoClient(uri, options);
    global._mongoClient = client.connect();
  }
  clientPromise = global._mongoClient;
} else {
  // New client for every production environment run
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
