import { AppError } from "../utils/errorHandler.js";

const API_URL = "https://dummyjson.com/products";

export async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new AppError("Failed to fetch products", response.status);
    const data = await response.json();
    return data.products;
  } catch (error) {
    throw new AppError("Network or API error occurred");
  }
}
