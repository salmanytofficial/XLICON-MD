const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0MvdEZkbkVGSkhiN3dmdEN6SDFuNjI2MVJWUWtMSi9lS1FYOEhWZVBtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZS9yZTJJUWkxc01WTCthTjYxekhjVXljbDU2NVdMNjhrRFFZQlc4N1cyMD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0ZteWpySHpyV1NRb1RYVUFQek83cjZEdWlxNkd1TzArUmRxL3NPQVU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlbEl1ckNrbFN2S2VCMGdVd3d4T0hGQlNiVThVdE9JVHc1ckxEREs2N2dzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDenZWQXpZUDljcGJCazkva3BFYmRWNWN6TmprSzBNbmlLYXNoamNxVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJBYlJxeXVvYk56b3gvZXhWdFBGRU9oN0pEZStQTjhiM3RoOGlObjlJWDA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNzBpUnl0dFJUTC9OMXlObU1maXZUbWRRbEhLaFRtSXh2QmxVUkxRSkNVd3packZ3NUdBM1RqZlF1bWcxSzNVUnhhbitZZ1NKQlE2UXVwQzJLYkZCQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3MSwiYWR2U2VjcmV0S2V5IjoicDRTak44c1dhdDRkQm5YSkVXK0V2NHJIL011NmhMNTFQemRoTDJRMG5WMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX2FVU0FxMWdUVHVuWFdNYUU4RGhoZyIsInBob25lSWQiOiI2YjdiODYyMC1mOWI4LTQyODYtODZkYS1hZjQyMWIwM2ZhYmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2JucmhsYlI2YTZSY2ZIVy9Nc2pSMnhKR2dzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoM0ozNVovK2h0SDVQNURjck9ldE1JU0JaN1k9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQy82TFFDRUtPcHBha0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjR0Mm5BZlZyLzRFOUdTZWNIMWZBbmdHdzB1SmRyUi92OVkzbGNIZjRwUmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVwSjN1TGhNN29LcW5NZFlWZVNaV1hnc2xBZWlIOWduRG9ady93cEtZQUVsMmhEUFVHWEN0MkVIeGlKaWtsbmJiWXFYc2M3U05PN2xOQ3c3TFZWV0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIydStpVmZsWVBOaVBVRmRCQWJ3UTBnYnNwVVNzMDNPMC9VVmlnc25TMDE2aTNGKzEvM0tZSzliUEJNeXN3QW1jVXA1WnNMWkZKN2tkcTR0bkhwRUxEUT09In0sIm1lIjp7ImlkIjoiOTIzMDE3NjE2MTg2OjE1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuKCiuKOr+qvrcy92b7ZgNmA2ZHZks2i2LHZiNmB24zZgNmA2ZHZks2i2LPZgNiU2LHijq/qr63MvSDYudmA2Y3ZgNmY2YTbjCBcblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cbjwzIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAxNzYxNjE4NjoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTGRwd0gxYS8rQlBSa25uQjlYd0o0QnNOTGlYYTBmNy9XTjVYQjMrS1VZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk3MjA3NDYyfQ==",  //PUT Session Id Here, 
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
