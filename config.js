const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915" // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  sessionName:  process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09HZ2N3WFM0UTh6bmV1TTVKRnVXNVV5cjh6cGZ3NE1wT1FPYVV4VkZuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2VBU2dKbUZocXRUTTdVWTRnOGwyTXRjWEcyUVZQTVhlc29kZHVML3ZERT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSEpUREt5S1lDNFZsZUdPYmJBa05xSUs1bSt4NE0rYWE2bkZQL3N4NDFFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZVFF3RVd6MGlHbERQUkFoR2pyOTd2WjYwS0ptSHdicVBTcXZ6NUV0WENzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNMSnFnS0xRVG56cXcwbnp0WGdadDdBSjhEWGl6TlNlVkpxNElvT2Z2Vms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZ4bjJFemY4aDN1MUE3VDFaR3liWExqUGZET2lTTC9ub0pvNVN3QjI4UkU9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SkU1VnRVOG41VHRvZmlDdjlhUUdrYzY0ZUlQYlE1U2dxdkNaUDZ5MGk5ZHRyUkswZjRENVk2SXNTL09hSmRuTXFzZ1REa2NtWUhBemh1dTJEamhDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjU2LCJhZHZTZWNyZXRLZXkiOiJEQTlreGwxbTU4cUpXTkxXNkFkMTZvbGF4UC9JL0RsQ2JEeWREalJBaXhnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwZHNnR1paU1NxQ2xRS3B2VXdMdlFnIiwicGhvbmVJZCI6ImYyNDY1ZDFjLThhYTktNDQxNC05ZDU3LTkyZmEzNzgwZGE3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUnZzNnlCRzJXWlNya3FNQVhrOTgxZ3JaUTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImphYmRGVXNyc3gxUUtVU0RqV0pDU011ZDA3Yz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlRzlKRUZFTStQMnFZR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTkFRNEVCZi9KWmRWUDdCTjVzM1FxVjdDV3RJQ2VJWkRJYkxFYVpSOXJETT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV2VZYW1kc3ZrbXgycXhpODBWR2lNQ3NFeWxWQy8rc1I3bFMvTGkvc2U5MmlXdFpuL0pEWjlGODFBMFAyOVdVSEp5dm9pZFhhR0ZveVJzZVZqQkdnQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InkrdC9lQWdwY29uVjBuVlNOckFHRFA1S3NFb1JWV2g4VTZBTHVwQXNNNlFicTBaakRxczRqM2YwbXBtOW55VHk3Y1VibGNaTFpvOXZrNzBuOWtvb0F3PT0ifSwibWUiOnsiaWQiOiIxOTI5NDUxMjI2MDozQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE5Mjk0NTEyMjYwOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFFFT0JBWC95V1hWVCt3VGViTjBLbGV3bHJTQW5pR1F5R3l4R21VZmF3eiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5MTc4MTA3M30=',  //PUT Session Id Here   , For Developers >>>>> Set By Deafualt it to Empty, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SALMAN AHMAD',
  
  botname:   process.env.BOT_NAME === undefined ? false : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
