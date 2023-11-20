/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Lyfee 2.0
 * @author : Suhail <https://github.com/SuhailTechInfo>
 * @description : Lyfee 2.0,A Multi-functional whatsapp bot.
 * @version 1.0.0
 **/

const { cmd, botpic, Config, tlang,getBuffer, prefix } = require('../lib')
const hrs = new Date().getHours({ timeZone: 'Asia/Karachi' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//---------------------------------------------------------------------------
cmd({
            pattern: "live",
            desc: "Show Live Time Of Pakistan",
            category: "fun",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Karachi' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅'
if (hrs >= 12 && hrs <= 16) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞'
if (hrs >= 16 && hrs <= 20) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥'
if (hrs >= 20 && hrs <= 24) wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const suhail= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : suhail[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❏ ${Config.botname} ➬ Whatsapp Bot BY Suhail SER`,
           "orderTitle": "alive",
           "sellerJid": '923184474176@s.whatsapp.net' 
        }
      }
}

let timenow =`
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} ${am_pm}
│     *Date* 🎲   ${date} 
│   ${Config.caption}
╰────────────────╯
`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})
