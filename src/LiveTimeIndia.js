const { cmd, botpic, Config, tlang,getBuffer, prefix } = require('../lib')
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//---------------------------------------------------------------------------
cmd({
            pattern: "time",
            desc: "Show Live Time Of India",
            category: "fun",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = '𝐺𝛩𝛩𝐷 𝛭𝛩𝑅𝛮𝛪𝛮𝐺, 𝛨𝛥𝛻𝛯 𝛥 𝑊𝛩𝛮𝐷𝛯𝑅𝐹𝑈𝐿 𝐷𝛥𝑌 ⛅'
if (hrs >= 12 && hrs <= 16) wish = '𝐿𝑈𝛮𝐶𝛨 𝑇𝛪𝛭𝛯 𝐵𝛪𝑇𝐶𝛨 🌞'
if (hrs >= 16 && hrs <= 20) wish = '𝑇𝛪𝛭𝛯 𝑇𝛩 𝑅𝛯𝐿𝛥𝛸,𝐺𝛩𝛩𝐷 𝛯𝛻𝛯𝛮𝛪𝛮𝐺 🌥'
if (hrs >= 20 && hrs <= 24) wish = '𝛪 𝛨𝛩𝛲𝛯 𝑇𝛨𝛥𝑇 𝑌𝛩𝑈 𝐹𝛥𝐿𝐿 𝛥𝑆𝐿𝛯𝛯𝛲 𝑊𝛪𝑇𝛨 𝛯𝛥𝑆𝛯 𝛥𝛮𝐷 𝛨𝛥𝛻𝛯 𝑇𝛨𝛯 𝑆𝑊𝛯𝛯𝑇𝛯𝑆𝑇 𝐷𝑅𝛯𝛥𝛭𝑆 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const vivek= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : PRABI[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❏ TroubleMaker┃ᴮᴼᵀ ➬ BY PRABIIE`,
           "orderTitle": "alive",
           "sellerJid": '917736391585@s.whatsapp.net' 
        }
      }
}

let timenow =`
╭────────────────╮
│    *${wish}* 
│     *ᴛɪᴍᴇ* ⌚ ${time} ${am_pm}
│     *Date* 🎲   ${date}
│     *Place* 🏙  *kerala*
│   ${Config.caption}
╰────────────────╯
`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})
