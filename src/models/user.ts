export interface User {
  age: number;
  email: string;
  name: string;
  productsFavorite: [ProductsFavorite];
  userType: string;
  _id: string;
}
export interface ProductsFavorite {
  quantity: number;
  status: number;
  _id: string;
  name: string;
  message: string;
  sizes: [Size];
  size: string;
  price: number;
  color: string;
  img: string;
}
export interface Size {
  _id: string;
  size: string;
}

export interface DeleteId {
  _id: string;
}

export interface UpdateAdminId {
  id: string;
}
export interface UpdateAdmin {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface EditUserAdmin {
  name: string;
  email: string;
  password?: string;
  age: number;
}
export interface Login{
  email:string;
  password:string;
}
export interface SignUp{
  name:string;
  email:string;
  password:string;
  typeUser:string;
  age:number;
}
export interface favoriteProducts{
  productsFavorite: favoriteProduct[]
}
export interface favoriteProduct{
  productId:string
  name:string
  price:number
  size:string
  img:string
  color:string
  quantity:number
  message:string
  sizes:[null]
}