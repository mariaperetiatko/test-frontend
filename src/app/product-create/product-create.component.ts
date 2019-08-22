import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService, private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }

  createProduct(): void {
    if (!this.isValidProduct()) {
      alert('Invalid data!');
    } else {
      this.productService
        .createProduct(this.product)
        .subscribe(() => (this.product = new Product()));
    }
  }

  isValidProduct(): boolean {
    const isValid = this.product.name !== '' && this.product.cost >= 0.1
      && this.product.caloricValue >= 0.1;
    return isValid;
  }
}
