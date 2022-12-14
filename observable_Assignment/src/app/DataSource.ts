import { from, Observable, of} from "rxjs";

export function getNumbersFrom() {
  let f:number[]
          const array=[1,2,3,4,5,6,7,8,9,10];
  const fromNo=from(array);
    // fromNo.subscribe(val=>val);
    // console.log(fromNo.subscribe(v=>console.log(v)))
    return fromNo;
}

export function getNumbersOf() {
  const array=[1,2,3,4,5,6,7,8,9,10];
const fromNo=of(array);
// console.log(fromNo);
// fromNo.subscribe(val=>val);
return fromNo;
}

