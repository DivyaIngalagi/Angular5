import { Component, OnInit } from '@angular/core';
import { CarsServiceService } from '../shared/cars-service.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  CarID= [];
  CarBrand;

  constructor(public restApi: CarsServiceService) { }

  ngOnInit(): void {
  }

  getdetailsbyId(id){
    this.restApi.findCar(id).subscribe((data: {}) => {
      console.log(data);
      this.CarID.push(data);
    })
  }

  getdetailsbyBrand(brand){
    console.log(brand);
    this.restApi.findCarByBrand(brand).subscribe((data: {}) => {
      console.log(data);
      this.CarBrand=data;
    })
  }


}
