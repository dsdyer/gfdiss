import _ from 'lodash'
import {demos} from './demographics'
import { Participant } from './participant';
const demoArr = demos.trim().split('\n').map((p:any) => {
  const np = new Participant(p.split(';'))
  console.log(`np: ${JSON.stringify(np, null, 2)}`)
  return np

});
// console.log(`demos: ${demoArr}`)
// import { dataStr } from './data';
_.uniq(['a', 'b'])

export class Theme {
  name?: string;
  subThemes?: any[];
  constructor(name?:string, subThemes?:string[]) {

    this.name = name?.trim();
    this.subThemes = subThemes?.map((x:any) => new SubTheme(x));

    if (this.subThemes) this.subThemes = _.filter(this.subThemes, (st:any) => st.name)

    // console.log(`this.name: ${this.name}`)
    // console.log(`this.subThemes: ${JSON.stringify(this.subThemes, null, 2)}`)
  }


}

export class SubTheme {
  name: string;
  participants: any[];
  constructor(str:string) {
    str = str.trim();
    let wordsArr = _.words(str, /[^\d,]+/g)
    this.name = wordsArr[0];
    if (this.name) this.name = this.name.trim()

    this.participants = str.split(',').filter((x:any) => x.match(/\d\d\d/)).map((p:any) => p.replace(/[^\d]/g, ''));
    this.participants = this.participants.map((parID:any) => {
      // console.log(`parID: ${parID}`)
      return demoArr.find((participant:any) => {
        // console.log(`participant: ${JSON.stringify(participant, null, 2)}`)
        
        if (parID === participant.id) {
          // console.log(`participant: ${JSON.stringify(participant, null, 2)}`)
          return true;
        }

        return false;
      })
    })
    // console.log(this.participants)

  }
}


// module.exports = {Theme}