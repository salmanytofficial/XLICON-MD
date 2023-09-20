const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "254716637803"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
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
  sessionName:  process.env.SESSION_ID ||  " XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9IajZocHFndnpYVjZlTnlXMUFjNGwzOTc3OW5ZdHRDamZnd04vN2xXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUy9ub25lMWRxdERJaTIreDdGV1RtNGx4aHRkTEd3Y0xxNlV4cnY0MEx3az0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT24vVG52UkZ5SjNBVm01T0Rhc2NFZngrRmE5YUdCMU5Gd3M5bXpHY0hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhZzVhcmhUdWl2U0NaTWkxNGU2bTEzWncxZG9tbUdjbExLL0lkd2tVYUN3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFcTNUbUcrZWFZVnVPbG1CcmJNSEZ1aWgydmxsQnAzTWRmWStaRnVsRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA5RE1xQnFGckN3Wnl4cU1rUWVLcTJFWERsSWJNZFJzOVpWYWVEL3E3anM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4U2J2bStRNTZMMVJOOWJYZU9zZVFTZyt0UXRJQXh0eW0wSXowSHdiTW1JbWNTbERlTERWdDUvVGUvRnRJQWMvQ2k2enRQamtMaTZ3TEMwZ21OK2RBdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4OSwiYWR2U2VjcmV0S2V5IjoiMXJHQlRodnBCY2tDdWw1N0pGU2xWZUFINm1SK0MxMUZaRXRDcWRTdW1nRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieE9FU3ZER19SM1N3R094ZnVPM1k4dyIsInBob25lSWQiOiJiYzcxZDcwMC1mYWMzLTRkYmQtYjVhZS00ZWYzZjRhM2VkYzIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFltRlVVOVJuS3NRUlBGVzNjbVV0anFmRzI0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRldPVTlLZ3NrQUxlSUFOTFpOUWdvZU5mSlk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLdWdzZEVFRU5tL3FxZ0dHQXM9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdVQ2RRT2N2MGZVQTlzZEE5VFhybUs1Z0JCU2lQYUdKN2ZHaVhlSGt3Z3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdVUTJZMzh5THlwTEt2QTFiVElFTFJCSWIreWVuOUM3SDh4b1VQbjRVaEx3Z3pOak5vTSszWlVJdmQyK2FhODg0ZlZOM1paZkM0Q3JPL3VYWVpvcURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOVFFmSHBvcVVlZ0llMkV0a3JRTmlJb3lBU3BqdTFMSjQ0Um5odUtFZU9JWENGME9MT1hRdjdPbmx2ZU9lYlJSS1AvNGFOSHpuL0hFZHNBTG0vc0NDZz09In0sIm1lIjp7ImlkIjoiMjU0NzE2NjM3ODAzOjQyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxNjYzNzgwMzo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSbEFuVURuTDlIMUFQYkhRUFUxNjVpdVlBUVVvajJoaWUzeG9sM2g1TUlNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk1MTk1MTAxfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'XLICON BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SALMAN AHMAD',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME, ali
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||true,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
