import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Car } from '../shared/car';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  httpOptions={
    headers:new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    ),
  };

  allCars():Observable<Car>{
      return this.http.get<Car>(this.apiURL + '/cars').pipe
      (retry(1), catchError(this.handleError));
  }

  findCar(id: number):Observable<Car> {
    return this.http
    .get<Car>(this.apiURL + '/cars/' + id)
    .pipe(retry(1), catchError(this.handleError));
  } 

  findCarByBrand(brand: string):Observable<Car> {
    console.log("b");
    console.log(this.apiURL +'/cars?brand='+brand);
    return this.http

      .get<Car>(this.apiURL +'/cars?brand='+brand)

      .pipe(retry(1), catchError(this.handleError));
  }

  addCar(car: any):Observable<Car> {
    return this.http
      .post<Car>(
        this.apiURL + '/cars',
        JSON.stringify(car),
       this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
      console.log("Insert");
      console.log(car);
      console.log(JSON.stringify(car.json));
  }

  removeCar(id: number) {
    return this.http
      .delete<Car>(this.apiURL + '/cars/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  refactorCar(id: number, car: any):Observable<Car> {
    return this.http
      .put<Car>(
        this.apiURL + '/cars/' + id,
        JSON.stringify(car),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message;

    } else {

      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

    }

    window.alert(errorMessage);

    return throwError(() => {

      return errorMessage;

    });
}
}
