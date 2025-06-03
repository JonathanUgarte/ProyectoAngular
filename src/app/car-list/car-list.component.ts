import { Component } from '@angular/core';
import {Car} from './Car'

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
    image: 'assets/img/alamos.jpg',
    clearance: false,
    quantity: 0,
    },
  {
    name: "Citroen Berlingo",
    model: 2011,
    price: 12000000,
    stock: 10,
    image: 'assets/img/cordero-con-piel-de-lobo.jpg',
    clearance: true,
    quantity: 0,
  },
  {
    name: "Clio Mio",
    model: 2006,
    price: 6000000,
    stock: 5,
    image: 'assets/img/san-felipe.jpg',
    clearance: false,
    quantity: 0,

  },
   {
    name: "Ford Focus",
    model: 2020,
    price: 25000000,
    stock: 0,
    image: 'assets/img/rutini.jpg',
    clearance: false,
    quantity: 0,
  },
  {
    name: "Fiat Toro",
    model: 2025,
    price: 45000000,
    stock: 2,
    image: 'assets/img/alamos.jpg',
    clearance: true,
    quantity: 0,
    },
    {
    name: "Renault Parnet",
    model: 2013,
    price: 13000000,
    stock: 8,
    image: 'assets/img/alamos.jpg',
    clearance: true,
    quantity: 0,
    },
    {
    name: "Chevrolet Corsa",
    model: 2008,
    price: 5000000,
    stock: 0,
    image: 'assets/img/alamos.jpg',
    clearance: false,
    quantity: 0,
    },
  ];

  maxReached(m:string){
    alert(m);
  }

}

