const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "23273381413"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0FDRUNneG5ZVnN1S2R5N0Q5MkI0bFR6OEJZQkJqM0ZBRWNTNHgzVVlFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEhIWnZ2bW9oa2o1VEF3VzhVeHBOQWcyZFl4Sm0vSXA0UXpHMDJSYTlFND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TEtseU0wV2xxYlBxVHU2cXVNWlNYUVJWMDRVSlAzZnRHTmJ5bkdwcUVnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVVFRCK0NBaUxCWjlJVXRHQWF2dHRjRVhCRURaWUZpSktaQnp5Z0JhbGpFPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBYjVKZWdWMTY0cnFWekUzNlVQUHhtdlptYitkR1QyUlh0MmE0RE9nRWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRsVDNKWWpQR25nMlhrOVJTNjFiTFdCcUZrZ1ZxRVZPZ3d1Z0FsZlcvRlk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZXVvQ2w2d0Y1STArZjF4UjRKb1JjeU5lQ3R0c1ZlQlZFTjNuU3J0cU14STZBb1Znck1ucTF4bGIwejZHZ1VoSFpCK25lQmNRanJiMlNTVW1panFEdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4OSwiYWR2U2VjcmV0S2V5IjoieG1xWTdaZmVRd0tvSWdRR2NKV0dMZTFkRVliLysvRFZGbG9NV0RwMkxibz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieFFISWF6VEhTQnU2VjVmRDV6cmdYQSIsInBob25lSWQiOiJjYmQyOTBjZC0yNjdhLTQ4MmYtOTE2Yi02YTA3ZjkyNmJjZmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUNqdlROL3NaZnl5RHZ2YUYvQnE5a0dZZnprPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSUJXZEFqRVVNOW11Qm9UNUZGQVloS1ZJems9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLLzQ3UDRGRVAvYWlxb0dHQVk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImpiQzduT1Z1RGpud3VwOUN2Nk1UQksyWnBOUGlheHE1VkI0Q0sxRzdnVE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdhWW80NjRNNFZRUG5qcERpWnRza2tvdWVsUjZvRU5rdVpOT3VsSXVLUHNmMU5uVWZjN0ZrQS9hSmpMaXg3Uk1EQXBUaEdXSEl2NEFkbFlPR0hhb0J3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzMEcyVndOQTFod2dKYnlBSTlURFo2UWVkbzJrWm5SNFFxN2ZwSnd0REM3VlFzNkZXLys2eXByc0J5NGVmNDB6a09DbGVpZTV4S0FGZ1BjbXpXdEJBZz09In0sIm1lIjp7ImlkIjoiMjMyNzMzODE0MTM6N0BzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3MzM4MTQxMzo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlkyd3U1emxiZzQ1OExxZlFyK2pFd1N0bWFUVDRtc2F1VlFlQWl0UnU0RXoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTg4Njg2MTB9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
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
