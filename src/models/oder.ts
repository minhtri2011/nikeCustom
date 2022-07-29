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

export interface userOder {
  status: number;
  isPayed: boolean;
  _id: string;
  userOrder: string;
  products: userOrderProduct[];
  description: string;
  createdAt: string;
  updateAt: string;
}
export interface userOrderProduct {
  _id: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  color: string;
  img: string;
}
