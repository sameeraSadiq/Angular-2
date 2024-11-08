import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector: "store",
    templateUrl: "store.component.html"
})
export class StoreComponent {
    selectedCategory: string | undefined;
    // pagination
    productsPerPage = 5;
    selectedPage = 1;
    constructor(private repository: ProductRepository,
        private cart: Cart,
        private router: Router) {}
   
    get products(): Product[] {
        // pagination
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }
    
    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
    // pagination
    changePage(newPage: number) {
        this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }
    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x, i) => i + 1);
    }
    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
}