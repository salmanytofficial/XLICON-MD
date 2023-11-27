const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "218914807168"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '218914807168' 
global.devs = '218926265138';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tCWmxLOG0zcGVlL3A0OHNvWGtsRUd4VnB5eTRITGh2ODJucS9vTE9VQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSkpIOVhPV2NwVEFFdGROS2FMWnRTY0VLOFc1ZDRuanRuRFN5Mkt2ZkpqVT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRFl4c3V0bm9JOFYreGE0L1BVODdtY1FiQWRQMEo0YkUvVlF2aUVySFhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoTCtHdGcvMXpvNVJwYVV6djdJSlRGUlFCbUlLQUtlUDljUjVBbi9hMmx3PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQUFlPMFFJUUptUnZMcm9vNG1EV2Q1U011N0wyUitIaFpQRFB4MERwRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdpVVFZbVNiMmtKRUZsMjhWSGw4Z2VmTWF1RFdBSm80RFd4MGVQQVlyRGc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5V2V4aHlKUWN2TGN2VVFPNjU1aUlYS3UvdTdUbU83dVYrdFcxcGpoU29qVmpDd05aTkc0WThra3A1YzhKY2wrVHJNNkVDbkdDblU4WTVTVTMvUHVndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzNywiYWR2U2VjcmV0S2V5IjoiSGF0U1NjY2pLNit4ME4vMHp4RVBYWml0MkRDaFRGNmFIUG0wYlhKL1dsbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiR3hweFdQUzJTT2VyTDJpSUZIbmZYZyIsInBob25lSWQiOiI2NjY2N2Q1Ny01MjZlLTQzMzAtYmEyNi1hYjhmYTZhZjE4MGMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkk1N0VLSCs1cC93cXV1T2k5WE5rUDBPVmtFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoUGFpVW54RDhyMStNSEY2RHdGTHh4aW9iMVE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKcmhyTmtCRUlDTGs2c0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjEvaXczZFhMNEM0LzZxTk5YZTYyc0RRR05wSVhZRmF4Tlh1NmNzSUJwWEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkQybjhIZUNRZWxGYm9Jc29oN0krcDM2MmhDMm9FK0Y0QVNhNll1d2J6UmtTOTJjWGE5NkFRMTlSNUp3VkhQWFFkaytua21iRlJtS2Q4WDEreVFBeENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrekFGR20xUGlGK0VtQ2M0c2JYNEZncjYrNTFuMExMMUZ2SDJsenBoeGRmNXorMzZhQmFyeFNoV2dIZXlzNDF4UlQySWp0eG1KTjlKZU0waWhQNXRpdz09In0sIm1lIjp7ImlkIjoiMjE4OTE0ODA3MTY4OjIwQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIxODkxNDgwNzE2ODoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZjRzTjNWeStBdVArcWpUVjN1dHJBMEJqYVNGMkJXc1RWN3VuTENBYVZ4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMTAyOTc5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'RUDY',
  packname:  process.env.PACK_NAME || 'GIN',
   
  botname:   process.env.BOT_NAME === undefined ? "rudy-chan" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'rudy' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
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
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
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
