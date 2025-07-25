import clientPromise from "@/lib/db";

export async function POST(request) {
  try {
    const reqBody = await request.json();

    const client = await clientPromise;
    const db = client.db("blaze");
    const collection = db.collection("users");

    const result = await collection.insertOne({
      email: reqBody.email,
      password: reqBody.password,
    });

    return Response.json({ message: "Inserted, Thanks!" });
  } catch (err) {
    return Response.json({ error: "Some weird error." });
  }
}
