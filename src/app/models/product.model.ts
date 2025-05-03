export interface Product {
  id: number;
  name: string;
  availableCount: number;
  price: number;
  orderedQuantity?: number;
  total?: number;
}