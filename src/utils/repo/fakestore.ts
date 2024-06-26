import { Item } from "Product";

export async function getAllProduct() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Item[] = await response.json();
  return products;
}

export async function getLimitProduct() {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's%20clothing?limit=5"
  );
  const products: Item[] = await response.json();
  return products;
}

export async function getOneProduct(id: number) {
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const product: Item = await response.json();
  return product;
}
