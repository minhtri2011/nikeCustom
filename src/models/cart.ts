import { sizes } from "./products";

export interface cartUpload{
  products:cartUploadData[]
}
export interface cartUploadData {  
  quantity: number;
  name: string;
  price: number;
  size: string;
  img: string;
  color: string;
}

export interface cartCreate {
  id:string;
  quantity: number;
  name: string;
  price: number;
  size: string;
  img: string;
  color: string;
  sizes:sizes[];
  typeProduct:string;
  gender:string
}
