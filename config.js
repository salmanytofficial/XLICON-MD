const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "918281126958"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '918281126958' 
global.devs = '918281126958';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZFN2tKc1RjRHY5eFVWS3Bzb1JtdU52bnpsQjZrUHIyWC9SVFlONzZFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWZkb0FOUDM0ZmlKV1dieEo4U1l6UUlEMGZRZ0dhbUE1clllekh6WUdoMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQXJQK2k2elc1cy9UK203YitGRjFaak04SHNoWHp0MkxndWlJKy93ajBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJab3h1VVhMLzQrOHQ2MDM4MWpManQ5bFJXS1VEdVd5ZFovR3VIc3VkQW1FPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MbS84M0k4ZW42R1FDNW94TTdSYUdFeUhUZkl6Wks5NkdoTXVCcnI3MEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNVQnBEdzllNW9VZS9RQnZqRUoyQnh4NTFSaUpiWndxQ29oZnp2NDB5bG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dTV0lyRm5lZk9HNWJsV1Q0eS9qSW9BTHkycUJGck5NT0NFcDBEc3ZYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXVIdGwxdmRIWXFYTGIzT1d1eUZzUlczbzlNaWdWZXd4VlNVRU94eTdDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhJVXJXMzRmdXl5V2JaMHVhb2VpYWVNMXE2cFg4TkZjWmZKdnpiVWtqZ1dEdnFWSCtVV1RneG9YTTdQdUVobEIvVm9mRExvS0FwaEFidERqT0FaYkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA5LCJhZHZTZWNyZXRLZXkiOiI1UFVPQkhuVjJvK2RWT1ZnNlpjMm5JNkg0ZzFwTS9HQi9zZk5CS1E5UHUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMcEZ6Y0ZlX1NlR3JTck5zTDlpbHJRIiwicGhvbmVJZCI6IjZhNzNlN2ExLTI1ZWUtNDgzMy1hMmI4LTMzMDAzNjA2Yjc4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0L1RBRVhjaTFXUmV2dTNrdEtwU0dQSWl5Sms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicGhORzJsY1dxZ3dvTmVWSGhXR2ZqSCtTTVFjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdaOEtaMlg2IiwibWUiOnsiaWQiOiI5MTgyODExMjY5NTg6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiwqDCoMKgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMmMvY1lHRU9hNmhxOEdHQlVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJGUFpyaFRVbDF3NlREN1E0UVVkR3BML1BMQngwVm54MlRFbkNCYmYxUmhBPSIsImFjY291bnRTaWduYXR1cmUiOiJ6aW1uNk1BNFM2Z2Q2R0IxVGJwbFpsVnVxbE4rdGVZTTM4SUVRMVllSERrMHVudTJSQlZuRWYzSXowaXJoV0pzdjdybzZWKzVCcDdXM2YvSDdmMlNBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN0IvRDhLSW85NHJBL2hPeFY0MERteXM4eFA1RUFLL0RUa0F4WWlHUDRnV2pqRDJRVzRnMHlYbWtBZWxITmxkWDRDV0lIQittMFlLcnRJU2VTc241QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTgyODExMjY5NTg6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlQyYTRVMUpkY09rdyswT0VGSFJxUy96eXdjZEZaOGRreEp3Z1czOVVZUSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwOTI4NDcxM30= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'pirate',
  packname:  process.env.PACK_NAME || 'ABHINAV ',
   
  botname:   process.env.BOT_NAME === undefined ? "PIRATE-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'pirate' : process.env.OWNER_NAME,  
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
