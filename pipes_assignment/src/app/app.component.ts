import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes_assignment';
  content:string="Pipes in Angular";
  dob:number = Date.now();
  amount:number = 12.97;
  pi: number = 3.14159265359;
  profitPer:number =  1.798;
}