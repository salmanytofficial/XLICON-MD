const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "254716637803"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salman:s4salmanyt@cluster0.vjr9j7i.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '254716637803' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkp5UWJraXFWMXZXenR2U2JuNDNHcDkzK0tDWlJPZkc3M2x1YllTMXlYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnFNYW94Q2ZvSkgwcHV5blovY3N0N0ozbnhJM09Pall6TFBCdjI4dlowTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRDhGL3Zmc1FwTEN1UERmbGxIUHUyOXZMcUIvQ3pYVmh3WndSSHRZZjBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTGNqcHdyWnZHZWZ1ZXBSNFpnOC9nZHNSQmhGbFhEakpYK242eExQK0hrPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFIbnNja2gvanZyZmt5RVFubERZTnJaV2poYkVseWw0cmlmMmRGTGVmbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNellNOGZncWNGUklVaU1GY0E5WDZSNXl6REFickl0UW16aWxvZnFla0E9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFL3o4b0ZWUGFFaktNVHZ6RHMrekJhWUY5ell0Nys1cXhCT2tsY2VGMXZvZVVINnZjY3drRnlXZm52YTNUbXE3bDAzREhzazRpZG9mL1g2cjUvS2pCZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ1LCJhZHZTZWNyZXRLZXkiOiJHSXdvbWtJNkQvRllxYnA0ZjFGeWZDSWhaQ0pZNlFHb3ROek9OeVVoaytvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGeldhRzlsbVJIeTZBcmFJcFhKR2t3IiwicGhvbmVJZCI6ImI2ZDQyNWIxLWUyZDItNGYxZC04N2NmLTY2MTg4YmFlOWFiMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrc3RXaXkrWi9mZ0pkUC94SXZsWE5nVDBMcmM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJFdjQ2ZWtoaDBpODRjYjFlL21mZkdIeVlsUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t5Z3NkRUVFSVN1dmFnR0dCdz0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR1VDZFFPY3YwZlVBOXNkQTlUWHJtSzVnQkJTaVBhR0o3ZkdpWGVIa3dndz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTTJIQnhGNm50ZDlueXNZNWpZUll1OWYwUEJuS1IwZEJPemZxbTRRbVV1ZVAxdnlZUUJTV01YYXl3SWVkdW5aaDBDZzNETDF0aE1HbHNLNGp2Z2pQQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IlV6V29mcEUvZGJXMkRIK01hOFdMSDJkRHVSa0Z6cStVVUxYRzJjWFpIZy9JSDVnRzJXTzZHakc5T0Rmd09GcElMLytCb1hiR0REZjhnRWdwL25oSkRnPT0ifSwibWUiOnsiaWQiOiIyNTQ3MTY2Mzc4MDM6NzBAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE2NjM3ODAzOjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJsQW5VRG5MOUgxQVBiSFFQVTE2NWl1WUFRVW9qMmhpZTN4b2wzaDVNSU0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTU1MDQxMzV9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY Salman ali',
   
  botname:   process.env.BOT_NAME === undefined ? "player2" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ali' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '20' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === haiya naona umejaribu ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'delete' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'hi im glad you reached out...please go on🥺' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
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
