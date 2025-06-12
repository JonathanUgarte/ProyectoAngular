import { Component } from '@angular/core';
import {Car} from './Car'
import { CarCartService } from '../car-cart.service';

@Component({
  selector: 'app-car-list',
  standalone: false,
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {

  cars : Car[]= [
   {
    name: "Fiesta Kinetic",
    model: 2015,
    price: 15000000,
    stock: 5,
    image: 'assets/fiesta-kinetic',
    clearance: false,
    quantity: 0,
    },
  {
    name: "Citroen Berlingo",
    model: 2011,
    price: 12000000,
    stock: 10,
    image: 'assets/img/citroen',
    clearance: true,
    quantity: 0,
  },
  {
    name: "Clio Mio",
    model: 2006,
    price: 6000000,
    stock: 5,
    image: 'assets/img/clio',
    clearance: false,
    quantity: 0,

  },
   {
    name: "Ford Focus",
    model: 2020,
    price: 25000000,
    stock: 0,
    image: 'assets/img/focus',
    clearance: false,
    quantity: 0,
  },
  {
    name: "Fiat Toro",
    model: 2025,
    price: 45000000,
    stock: 2,
    image: 'assets/img/toro',
    clearance: true,
    quantity: 0,
    },
    {
    name: "Renault Parnet",
    model: 2013,
    price: 13000000,
    stock: 8,
    image: 'assets/img/parnet',
    clearance: true,
    quantity: 0,
    },
    {
    name: "Chevrolet Corsa",
    model: 2008,
    price: 5000000,
    stock: 0,
    image: 'assets/img/corsa',
    clearance: false,
    quantity: 0,
    },
  ];


  constructor (private cart : CarCartService){
  }

  addToCart(car: Car):void {
    this.cart.addToCart(car);
    car.stock -= car.quantity;
    car.quantity =0;
  }
 

  maxReached(m:string){
    alert(m);
  }

}

