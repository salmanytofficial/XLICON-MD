const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "917600630543"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://jarvis:op@cluster0.7tisvwv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'test.my.mail.ndev@gmail.com'
global.github = 'https://github.com/Nonamendev/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/nonameprodev/' // add your username
global.sudo = process.env.SUDO || '917600630543' 
global.devs = '917600630543';
global.website = 'wa.me/927600630543' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/ZGApnEl.jpeg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1vUnBPOXJMbGIvK0NIbmZNV21vUHJqdFQ4UCt6QTZZSEl5d2V1bm9IYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSi9kY2tFSVd3dndjYnQzcU1vckxWd1kvVU1Gd2NIQkJldEtrOXcrNmdoST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQWhTNWtQTm95NUJnYk5WK0ZFN1lPbjc0aXZUZGlaQ0M2TGNHN2xOMzNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuQkhsc0NnWkhVd1J4bmNZKzZzSUhHMmxaR1hidUdnZm9jUm1RbktZZkhFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVML2U4NkpOQ3pWRFUwRWJlSm43ak5EMDkra2tiVG5GSHJkUlBWOEZJMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldTRmNJZFZwN1EwSXN5blp2OThaQzRPSXNlVjA4Rm8vbWJjbW14MkhpaFk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRzBtTkE5cVVqMnh2a3R0OEIwajFJRG4xNG9oZjBTeW9qWmNMNDY1SlY1RG54cVhOdmhhTm52K0t4bUxJYWdYdkY2aXREL0pRWW5XWTZEZ1hkL2pqUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExNSwiYWR2U2VjcmV0S2V5IjoiWkZGMGxhbnZNTlB2RUVvcGNtQkd1MmowMC92UlRlamJ5YWRBbzArN0drcz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTlBmU1gtRVhSY2kwQWRMZDRqNUYwZyIsInBob25lSWQiOiIyNDY1OGVkMC0yY2FkLTQzMDctYmU1YS03NDNmMzA2NDA5YzMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmp0RWpvUVdwNHZINHlwNFRxdXBFUGVvZFpvPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtb3hVZENBVW1OQUpkNzRqVndmeEgwc0RaVGs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLL3hvNlVGRU9mZjk2Y0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik02YndZOEhKUmw1eWd6MDVNWERnaU1HMi9LcnpFSGZsYmZyUlh5V2YzSEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlNvRStwQXhtUDdPa1VGWlYxNnB0cXkrWnlHQVhGVkJEK29lak9FQjkzK2dHaEJXUUtoK2lMUmNxUkNNWTJLaER0NzI0c2paOW9PTktNMkl4QU9XZkNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvbHk5S1JKR0wrMTVTRnBvQitqei9vdzhhd3ZNblo1YnZCb1pvSy8vUkVnRFpWZktqTm14a2k0aE1ZeU9FWmVoTlYyM21WOS9iL0N6Q0pqbkJFVWxqQT09In0sIm1lIjp7ImlkIjoiNDg0NTkwNzU5NjY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJOT05BTUUtQlQgQk9UIFRFU1QifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDg0NTkwNzU5NjY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUT204R1BCeVVaZWNvTTlPVEZ3NElqQnR2eXE4eEIzNVczNjBWOGxuOXh3In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk0MzYzNjI2fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'NONAMEBT',
  packname:  process.env.PACK_NAME || 'MADE BY NONAMEPRODEVS,
   
  botname:   process.env.BOT_NAME === undefined ? "NoNameBT" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'NoNameProDev' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
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
