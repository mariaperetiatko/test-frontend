export class Product {
  id: number;
  name: string;
  cost: number;
  caloricValue: number;
  productType: string;
  productDescription: string;

  constructor() {
    this.name = '';
    this.cost = 10;
    this.caloricValue = 100;
    this.productType = '';
    this.productDescription = '';
  }
}
