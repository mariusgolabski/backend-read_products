// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    return response.status(200).json(product);
  }
  response.status(405).json({ message: "Method not allowed" });
}
