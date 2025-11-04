export class Product {
    id;
    title;
    price;
    discountPercentage;
    category;
    constructor(id, title, price, discountPercentage, category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.category = category;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Category: ${this.category}`);
        console.log(`Price: $${this.price}`);
        console.log(`Discount: ${this.discountPercentage}%`);
    }
    getPriceWithDiscount() {
        const discount = (this.price * this.discountPercentage) / 100;
        return this.price - discount;
    }
}
//# sourceMappingURL=Product.js.map