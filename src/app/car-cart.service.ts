import { Injectable } from '@angular/core';
import { Car } from './car-list/Car';
import { BehaviorSubject } from 'rxjs';

/**Maneja la logica del carrito */

@Injectable({
  providedIn: 'root'
})
export class CarCartService {

  private _cartList: Car[] = [];

  cartList :BehaviorSubject <Car[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  
  addToCart(car: Car) {
   let item: Car | undefined = this._cartList.find((v1) => v1.name == car.name);
    if (!item) {
        this._cartList.push({ ...car });
    }
    else{
      item.quantity += car.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);

  
  }
}

