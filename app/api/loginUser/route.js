import clientPromise from "@/lib/db";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("blaze");
    const collection = db.collection("users");

    const requestBody = await request.json();
    const user = {
      email: requestBody.email,
      password: requestBody.password,
    };

    let findUser = await collection.findOne(user);
    if (!findUser) return Response.json({ valid: false });

    return Response.json({ valid: true });
  } catch (err) {
    return Response.json({ messsage: "Some Error" });
  }
}
