// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
  response.status(405).json({ message: "Method not allowed" });
}
