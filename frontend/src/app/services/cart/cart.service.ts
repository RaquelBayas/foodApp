import { Injectable } from '@angular/core';
import { Cart } from '../../models/Cart';
import { Food } from '../../models/Food';
import { CartItem } from '../../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId)
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
    this.setCartToLocalStorage();
  }

  getCart(): Cart {
    return this.cart;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPriceCart = this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem)=> prevSum + currentItem.quantity, 0)

    const jsonCartData = JSON.stringify(this.cart);
    localStorage.setItem('Cart',jsonCartData)
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
