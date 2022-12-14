import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsServiceService } from '../shared/cars-service.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id']
  carDetails: any = {};
  constructor(
    public restApi: CarsServiceService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    
  }
  
  updateCar() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.refactorCar(this.id, this.carDetails).subscribe(data => {
        this.router.navigate(['/cars-list'])
      })
    }
  }
}

