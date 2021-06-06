// import {dataStr} from './data/'
// import {Theme} from './theme'
import _ from 'lodash'

export class Participant {
  [x: string]: string;
  constructor(arr:any[]) {
    // console.log(`arr: ${arr}`)
    this.id = arr[0].trim();
    this.race =  arr[1].trim();
    this.sexual =  arr[2].trim();
    this.gender =  arr[3].trim();
    this.childAges =  arr[4].trim();
    this.childRelate =  arr[5].trim();
    this.relationshipConfig =  arr[6].trim();


  }
}