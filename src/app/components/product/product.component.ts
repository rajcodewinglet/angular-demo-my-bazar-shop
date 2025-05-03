import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() updateQuantity = new EventEmitter<{productId: number, change: number}>();

  addItem(): void {
    // TODO: Implement add item logic
  }

  removeItem(): void {
    // TODO: Implement remove item logic
  }

  canAdd(): boolean {
    // TODO: Implement can add logic
    return true;
  }

  canRemove(): boolean {
    // TODO: Implement can remove logic
    return true;
  }
}