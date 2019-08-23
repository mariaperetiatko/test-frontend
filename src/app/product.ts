import { Category } from './category';

export class Product {
  id: number;
  name: string;
  cost: number;
  caloricValue: number;
  productDescription: string;
  categoryId: number;
  category: Category;

  constructor() {
    this.name = '';
    this.cost = 10;
    this.caloricValue = 100;
    this.productDescription = '';
    this.categoryId = 1;
  }
}
