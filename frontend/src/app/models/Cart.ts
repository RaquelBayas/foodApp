import { CartItem } from "./CartItem";

export class Cart {
    items: CartItem[] = [];
    totalPriceCart: number = 0;
    totalCount: number = 0;

    get totalPrice(): number {
        
        this.items.forEach(item => {this.totalPriceCart += item.price})
        return this.totalPriceCart;
    }
}