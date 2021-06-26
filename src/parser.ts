
import { Theme } from './classes/Theme'
import _ from 'lodash'

export function parseInputString(string:string): any[] {
  const stringArr = string.trim().split('!theme').map((theme:string) => _.compact(theme.split(/\n/ig)));

  return stringArr
}

export function parseTheme(arr:string[]) {
  arr = _.compact(arr);
  console.log(`parseTheme arr[0]: ${arr[0]}`)
  return new Theme(_.head(arr), _.tail(arr))
}


export function parseThemeList(themes:string[][]) {
  return themes.map(t=>parseTheme(t));
}