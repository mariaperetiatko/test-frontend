import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}
