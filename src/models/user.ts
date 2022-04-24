export interface User {
  age: number;
  email: string;
  name: string;
  productsFavorite: any[];
  userType: string;
  _id: string;
}
export interface UserPayload{
  messager:string
  token:string
  user:User
}