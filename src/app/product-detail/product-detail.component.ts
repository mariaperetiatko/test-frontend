import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  categories: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.isValidProduct()) {
      alert('Invalid data!');
    } else {
    this.productService.updateProduct(this.product)
      .subscribe(() => this.goBack());
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
