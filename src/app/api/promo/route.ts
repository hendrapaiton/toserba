import { getOneProduct } from "@/utils/repo/fakestore";

export async function GET() {
  const id = Math.floor(Math.random() * 20);
  const image: string = (await getOneProduct(id)).image;
  return Response.json({ image: image });
}
