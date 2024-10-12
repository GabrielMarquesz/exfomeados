

  
// src/app/models/product.model.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;  // Este campo deve estar presente
}
