import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {
      id: 1,
      name: 'Basic Tee',
      price: 35.0,
      availableCount: 10,
      description: 'A comfortable and versatile basic t-shirt.',
      category: 'Clothing',
    },
    {
      id: 2,
      name: 'Classic Jeans',
      price: 75.0,
      availableCount: 5,
      description: 'Classic fit denim jeans.',
      category: 'Clothing',
    },
    {
      id: 3,
      name: 'Sneakers',
      price: 95.0,
      availableCount: 8,
      description: 'Casual everyday sneakers.',
      category: 'Footwear',
    },
    {
      id: 4,
      name: 'Leather Wallet',
      price: 45.99,
      availableCount: 15,
      description: 'Genuine leather wallet with multiple compartments.',
      category: 'Accessories',
    },
    {
      id: 5,
      name: 'Running Shoes',
      price: 89.49,
      availableCount: 12,
      description: 'Lightweight and breathable running shoes.',
      category: 'Footwear',
    },
    {
      id: 6,
      name: 'Smart Watch',
      price: 149.95,
      availableCount: 7,
      description: 'Fitness tracking smartwatch with heart rate monitor.',
      category: 'Electronics',
    },
    {
      id: 7,
      name: 'Sunglasses',
      price: 59.9,
      availableCount: 20,
      description: 'Stylish UV-protected sunglasses.',
      category: 'Accessories',
    },
    {
      id: 8,
      name: 'Backpack',
      price: 68.75,
      availableCount: 9,
      description: 'Durable backpack suitable for school or travel.',
      category: 'Bags',
    },
  ];;

  getStoreItems(): Observable<{ data: Product[] }> {
    // TODO: Implement data fetching logic
    return of({ data: this.products });
  }
}