import { Component, OnInit } from '@angular/core';
import {getNumbersFrom, getNumbersOf} from './DataSource';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){

  }
  allNumFrom: number[] = [];
  allNumOf: number[] = [];
  ngOnInit(): void {
    getNumbersFrom().subscribe(v=>this.allNumFrom.push(v));
   
    // console.log(typeof(this.allNumFrom));
  }
  title = 'observable_Assignment';
}
