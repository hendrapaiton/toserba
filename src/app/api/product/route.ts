import { getAllProduct, getOneProduct } from "@/utils/repo/fakestore";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id !== null) {
    const product = await getOneProduct(parseInt(id));
    return Response.json(product);
  } else {
    const products = await getAllProduct();
    return Response.json(products);
  }
}
