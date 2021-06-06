// import {dataStr} from './data/'
import {Theme} from './theme'
import _ from 'lodash'

export function parseInputString(string:string): any[] {
  // console.log(`parser string: ${string}`)
  // console.log(`parser string.trim().split('!theme').length: ${string.trim().split('!theme').length}`)
  const stringArr = string.trim().split('!theme').map((theme:string) => _.compact(theme.split(/\n/ig)));

  return stringArr
}

export function parseTheme(arr:string[]) {
  arr = _.compact(arr);
  return new Theme(_.head(arr), _.tail(arr))
}