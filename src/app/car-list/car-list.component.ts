import { Component } from '@angular/core';
import {Car} from './Car'
import { CarCartService } from '../car-cart.service';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-car-list',
  standalone: false,
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {

  cars : Car[]= [];


  constructor (private cart : CarCartService,
               private carsDataService : CarDataService){
  }

  ngOnInit (): void {
    this.carsDataService.getAll()
      .subscribe(cars=>this.cars = cars);
       this.loadCars();
  }

  addToCart(car: Car):void {
    this.cart.addToCart(car);
    car.stock -= car.quantity;
    car.quantity =0;
  }
 

  maxReached(m:string){
    alert(m);
  }
  loadCars(): void {
    this.carsDataService.getAll().subscribe(cars => this.cars = cars);
}
  deleteCar(id: number | string): void {
       this.carsDataService.deleteCar(id).subscribe(() => {
        this.loadCars();
  });
}

}

