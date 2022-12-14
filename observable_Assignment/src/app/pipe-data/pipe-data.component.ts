import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {getNumbersFrom, getNumbersOf} from '../DataSource';
@Component({
  selector: 'app-pipe-data',
  templateUrl: './pipe-data.component.html',
  styleUrls: ['./pipe-data.component.css']
})
export class PipeDataComponent implements OnInit {
  allNumFrom: Observable<number>;
  allNumOf: Observable<number[]>;
  posts$;
  constructor() {  }

  ngOnInit(): void {
    
    
      this.allNumOf=getNumbersOf();
      // console.log(this.allNumOf)

      this.allNumFrom=getNumbersFrom();
      // console.log(this.allNumFrom)



      // this.allNumFrom=[1,2,3,4,5];
    //   console.log(typeof(this.allNumFrom));
    // getNumbersOf().forEach(v=>this.allNumFrom.push(v));
    // console.log(typeof(this.allNumFrom));
  }

}


