declare module "Product" {
  type Rating = {
    rate: number;
    count: number;
  };

  type Item = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: Rating;
  };

  type Nav = {
    name: string;
    link: string;
  };
}
