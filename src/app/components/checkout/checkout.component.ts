import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Product } from '../../models/product.model';
import { ProductComponent } from '../product/product.component';
import { LoadingIconComponent } from '../icons/loading-icon.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ProductComponent, LoadingIconComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;
  gstAmount: number = 0;
  subtotalAmount: number = 0;
  totalAmount: number = 0;
  hasGst: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // TODO: Load products
  }

  updateQuantity(productId: number, change: number): void {
    // TODO: Implement quantity update logic
  }
}