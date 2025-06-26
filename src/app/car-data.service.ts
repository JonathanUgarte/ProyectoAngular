import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Car } from './car-list/Car';

const URL = 'https://685c053889952852c2dbe947.mockapi.io/api/v1/autos' 

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private http : HttpClient) {}

    public getAll(): Observable <Car[]> {

        return this.http.get<Car[]>(URL);
    }

    public deleteCar(id: number | string): Observable<Car []> {
        return this.http.delete<Car[]>(`${URL}/${id}`);
}
   
  

}
