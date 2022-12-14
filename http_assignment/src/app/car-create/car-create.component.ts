import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsServiceService } from '../shared/cars-service.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  carDetails = { brand: '', model: '', year: 0,type:'' };
  constructor(public restApi: CarsServiceService, public router: Router) {}
  ngOnInit() {}
  addCars  () {
    this.restApi.addCar(this.carDetails).subscribe((data: {}) => {
      console.log(this.carDetails);
      this.router.navigate(['/cars-list']);
    });
  }

}

