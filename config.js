const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "6282131973943"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '6282131973943' 
global.devs = '6282131973943';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEh1ZEl6MlpUQmxSeE1EZXhQUzU3aXk5QWMxY2xmMjBqRC9lRmZYeUFuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFk3N2dUcEIvSzAyWkIrVEtHQjlGR3BGNE4yT1Q2cWtSQzNwcnY0K1l5RT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSGVRRVMxL2NlcEl4ejJzZ0FSNW5hRWRnZWRPcHU5QlZsc0xzeThXc1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRjd4bGdMWkNaOEgyYUl6S2w5clRaUzlqbGNJcktoc3RnV0FJVDF6cTNZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOVGdmbWI2ZWNMeUFxVFQ1TktjUk9ZMVE1aGpjK1Y0eGZoREd2eFJCVWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZ2YURldXByaUYzN0NzSmxrL0JSL2Y4bU1nOUFyUFZwbXZVaGhHTWhNRDg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvdU00WWNLcHhOM0JtMjlydTRsOThiL3ozYm4vbTl4cmFUczdOY2VWcjU3Wld0bmxuNkV4QlE1Zk81Y1dzblJzN1d0NndLZU9BRTcwVnM3NUR0U1RBQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0NiwiYWR2U2VjcmV0S2V5IjoiMnlpYW1OVytybVRSVFhvMzJ0Z2NSdTdrZDEzajJoQSsra083M1B2V3Z0VT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiT09WNFdKRjdTcmlfaWZGcmY3TTc0QSIsInBob25lSWQiOiI3MzljNjNmMC02MTlhLTQzZGQtYmQ4OC1kNmNkMGIzNmYxYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFV5RVRacDlZZGRJT0UxMDExMkJFTkxoOXBBPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvUkxsK2NxL08rYjJwT3NkbDEzSUdTMGF0eXM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZXp4ZklCRUthSW5Lc0dHQUk9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjUrSlBiQnh3WDVYY29DT3dOWk5xZDZlVnJPVFF2SkJhcTFwSVpiR1dueXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InA3cjlNdWtFVVpGeThUbnFwWUlhNk9jQWk1bGRVcnZHdzBVbnpraXFCUSt1Q2tDTW9nYStnakxubXpYbjluTm1vckE1ZmlURG1xNXp0UWxtelQ0Q0FnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtcXNpaDkxUDJOK2l0Ty9nL25KZS92VHBOUkhmNmllenJlVEFST2piOFJVQnY4NGRKckt2Z3JWckpRZGRNMDM2aUkrMlE2QWVzbkhRV0JCNWdtQWdDQT09In0sIm1lIjp7ImlkIjoiNjI4MjEzMTk3Mzk0Mzo3QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYyODIxMzE5NzM5NDM6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlZmlUMndjY0YrVjNLQWpzRFdUYW5lbmxhemswTHlRV3F0YVNHV3hscDhzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMjUwMDg5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Zero-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Zero' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
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
