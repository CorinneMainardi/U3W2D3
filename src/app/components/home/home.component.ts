import { Component } from '@angular/core';
import { iProduct, iResponse } from '../../interface/i-product';
import { ServiceProdService } from '../../services/service-prod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products: iProduct[] = [];
  cart: iProduct[] = [];
  constructor(private prdSvc: ServiceProdService) {}

  ngOnInit() {
    this.prdSvc.getProduct().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
    this.prdSvc.cart$.subscribe((product) => {
      this.cart.push();
    });
  }
}
