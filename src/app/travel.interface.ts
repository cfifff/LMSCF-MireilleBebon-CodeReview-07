

export interface ProductInfo {
  id: string;
  name: string;
  description: string;  
  img: string;
  costPrice: string;
  
}
export interface ShoppingCartItem {
  product: ProductInfo;
  quantity: number;
  
}

export interface OrderInfo {
  items?: ShoppingCartItem[];
  totalPrice?: number;
  customerInfo?: CustomerInfo;
 
}

export interface CustomerInfo {
  name: string;
  email: string;
  phoneNumber: string;
}
