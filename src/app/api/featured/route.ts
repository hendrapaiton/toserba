import { getLimitProduct } from "@/utils/repo/fakestore";

export async function GET() {
  return Response.json(await getLimitProduct());
}
