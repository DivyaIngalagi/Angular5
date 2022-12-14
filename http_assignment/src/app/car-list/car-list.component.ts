import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsServiceService } from '../shared/cars-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  CarA: any = [];
  
  
  constructor(public restApi: CarsServiceService, public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAllCar();
  }
 
  loadAllCar() {
    return this.restApi.allCars().subscribe((data: any) => {
      this.CarA = data;
    });
  }
  
  

  deleteCar(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.removeCar(id).subscribe((data: any) => {
        this.loadAllCar();
      });
    }
  }
}
