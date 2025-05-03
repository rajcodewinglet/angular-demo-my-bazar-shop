import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CheckoutComponent],
  template: `
    <div>
      <app-checkout></app-checkout>
    </div>
  `,
})
export class AppComponent {
  title = 'Bajar Shop';
}