import { Component } from '@angular/core';
import { CarCartService } from '../car-cart.service';
import { Car } from '../car-list/Car';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Car[]> | undefined;
  constructor (private cart : CarCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

}

