import { Injectable } from '@angular/core';
import { Car } from './car-list/Car';

/**Maneja la logica del carrito */

@Injectable({
  providedIn: 'root'
})
export class CarCartService {

  cartList : Car [] = [];
  constructor() { }
  
  addToCart(car: Car) {
   let item: Car | undefined = this.cartList.find((v1) => v1.name == car.name);
  if (!item) {
    this.cartList.push({ ...car });
    }
  else{
    item.quantity += car.quantity;
  }
    console.log(this.cartList);

  
  }
}

