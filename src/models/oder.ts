export interface oder {
  status: number;
  isPayed: boolean;
  _id: string;
  userOrder: string;
  products: productsOder[];
  createdAt: string;
  updatedAt: string;
}

export interface productsOder {
  _id: string;
  name: string;
  size: number;
  price: number;
  quantity: number;
  color: string;
  img: string;
}
