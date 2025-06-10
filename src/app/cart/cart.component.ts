import { Component } from '@angular/core';
import { CarCartService } from '../car-cart.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  constructor (private cart : CarCartService){
  }

}

