import fs from 'fs'
import path from 'path'

import {parseInputString, parseThemeList} from './parser'
import {categories} from './data/categories'


const parsedString = parseInputString(categories);

// const themes:any[] = parsedString.map((ps:any) => parseTheme(ps))

const themes:any[] = parseThemeList(parsedString);


fs.writeFileSync(path.join(__dirname, '../browser/jsondata.js'), `var data=${JSON.stringify(themes, null, 2)}`)
