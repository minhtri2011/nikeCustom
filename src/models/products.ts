export interface sizes {
  size: string;
}
export interface img {
  img: string;
}
export interface imgDetails {
  _id: string;
  color: string;
  imgs:img[];
}
export interface addImgDetails {
  color: string;
  imgs:img[];
}
export interface DeleteProductId{
  _id:string;
}
export interface ProductData {
  name: string;
  gender: string;
  typeProduct: string;
  description: string;
  message: string;
  color: number;
  price: number;
  img: string;
  sizes: sizes[];
  imgDetails: addImgDetails[];
  userCreated: string;
  status: number;
}
export interface Product {
  _id: string;
  name: string;
  gender: string;
  typeProduct: string;
  description: string;
  message: string;
  color: 0;
  price: 0;
  img: string;
  sizes: sizes[];
  imgDetails: imgDetails[];
  userCreated: string;
  status: number;
}