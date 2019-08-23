import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
    ) {}

  ngOnInit() {
    this.getCategories();
  }

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

  getCategories(): void {
    this.categoryService.getCategories()
    .subscribe(categories => this.categories = categories);
  }
}
