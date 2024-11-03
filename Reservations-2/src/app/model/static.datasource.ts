import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Potato", "Vegetable", "Potato (Vegetable)", 6.99),
new Product(2, "Tometo", "Vegetable", "Tometo (Vegetable)", 10.59),
new Product(3, "Hotpepear", "Vegetable", "Hotpeper (Vegetable)", 4),
new Product(4, "Greenpepear", "Vegetable", "Greenpeper (Vegetable)", 4),
new Product(5, "Lemon", "Vegetable", "Lemon (Vegetable)", 3.99),
new Product(6, "Rice", "Food", "Rice (Food)", 65),
new Product(7, "Kidney bean", "Food", "Kidney bean (Food)", 20),
new Product(8, "Soya bean", "Food", "Soya bean (Food)", 30),
new Product(9, "Flour", "Food", "Flour (Food)", 40),
new Product(10, "Green beans", "Food", "Green beans (Food)", 40),
new Product(11, "Strawberry", "fruit", "Strawberry (fruit)", 100),
new Product(12, "Bluberry", "fruit", "Bluberry (fruit)", 100),
new Product(13, "Rasberry", "fruit", "Rasberry (fruit)", 60),
new Product(14, "Cramberry", "fruit", "Cramberry (fruit)", 100),
new Product(15, "Blackberry", "fruit", "Blackerry (fruit)", 100),
new Product(16, "Milk", "Dairy", "Milk (Dairy)", 70),
new Product(17, "Yogurt", "Dairy", "Yogurt (Dairy)", 45),
new Product(18, "Cheese", "Dairy", "Cheese (Dairy)", 100),
new Product(19, "Feta", "Dairy", "Feta (Dairy)", 10),
new Product(20, "Camembert", "Dairy", "Camembert (Dairy)", 100),



];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}