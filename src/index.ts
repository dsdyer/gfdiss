import fs from 'fs'
import path from 'path'

// from './theme'

// import {Theme} from './theme'

import {parseInputString, parseTheme} from './parser'
import {dataStr} from './data'


const parsedString = parseInputString(dataStr)
// new Theme('a', ['ab'])


// console.log(`parseTheme(parsedString[0]): ${JSON.stringify(parseTheme(parsedString[0]), null, 2)}`)

const themes:any[] = parsedString.map((ps:any) => parseTheme(ps))


fs.writeFileSync(path.join(__dirname, '../browser/jsondata.js'), `var data=${JSON.stringify(themes, null, 2)}`)