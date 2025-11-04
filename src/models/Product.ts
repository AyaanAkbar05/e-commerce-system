export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public discountPercentage: number,
    public category: string
  ) {}

  displayDetails(): void {
    console.log(`Product: ${this.title}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
  }

  getPriceWithDiscount(): number {
    const discount = (this.price * this.discountPercentage) / 100;
    return this.price - discount;
  }
}
