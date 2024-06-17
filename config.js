import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.owner = [
  ['56951888881', 'Capi', true],
  ['5492616532494]',
  ['51910108980'],
  ['5218139760662'],
  ['5218132588591'],
  ['5218261275256'],
  ['5218261009198'],
  ['50662333781'],
  ['5218261000681']

]

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.mods = []
global.prems = []
   
//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.packname = `Capi - Bot`
global.author = 'Capi'
global.botname = 'Capi - Bot'
global.textbot = `© 2024 Multigames Team | All rights reserved`

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.group = 'https://chat.whatsapp.com/GjjeWjksdVLDLEKcBki0Qh'
global.NSFW = 'https://chat.whatsapp.com/KtW0fVDXJH380mgWMr69cX'
global.Support = 'https://chat.whatsapp.com/KBRlXAHGfsf9bIAB1D9ZI6'
global.canal = 'https://whatsapp.com/channel/0029VacCfbg5a246txTQYW2U'

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

//*꒷꒦꒷꒷꒦꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒷꒦꒷꒷꒦꒷꒷꒦꒷꒦꒷꒦꒷꒦꒷*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Se actualizo 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
