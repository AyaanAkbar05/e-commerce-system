import { fetchProducts } from "./services/apiService.js";
import { Product } from "./models/Product.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";
async function main() {
    try {
        const productsData = await fetchProducts();
        const products = productsData.map((p) => new Product(p.id, p.title, p.price, p.discountPercentage, p.category));
        for (const product of products) { // show first 5 for clarity
            product.displayDetails();
            const discountedPrice = product.getPriceWithDiscount();
            const tax = calculateTax(discountedPrice, product.category);
            console.log(`Final Price (with tax): $${(discountedPrice + tax).toFixed(2)}\n`);
        }
    }
    catch (error) {
        handleError(error);
    }
}
main();
//# sourceMappingURL=main.js.map