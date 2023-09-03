 
 
 /**
  * Thanks to @SuhailTechInfo
  * Support https://www.youtube.com/@SuhailTechInfo
  * https://wa.me/923184474176
  * @menu 2.0
  */



 const os = require('os')
 const moment = require("moment-timezone")
 const Config = require('../config')
 let { fancytext, tlang, tiny, runtime, formatp, cmd, botpic, prefix, sck1 } = require("../lib");
 const long = String.fromCharCode(8206)
 const readmore = long.repeat(4001)
 
    //---------------------------------------------------------------------------
    cmd({pattern: "menu",desc: "MENU list",category: "general", react: "✨", },async(Void, citel) => { 
try{
    const time = moment(moment()).format('HH:mm:ss')
    moment.tz.setDefault('Asia/KOLKATA').locale('id')
    const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
let textt = `
*🦄 ᴜᴘ ᴛɪᴍᴇ :* ${runtime(process.uptime())}
*🍁 ᴛᴏᴅᴀʏ ɪs :* ${date}
*🎗 ɴᴏᴡ ᴛɪᴍᴇ :* ${time}
        
➮Fᴏᴜɴᴅᴇʀ- ProfileCorruptedError𝛁
➮Oᴡɴᴇʀ - ${Config.ownername}
➮Nᴜᴍ - ${owner}
➮Mᴇᴍᴏ - ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
    
 *🧑‍💻 :*  Xʟɪᴄᴏɴ-Mᴜʟᴛɪᴅᴇᴠɪᴄᴇ ɪꜱ ɴᴏᴡ Aᴠᴀɪʟᴀʙʟᴇ Iɴ Vᴇʀᴄᴇʟ...!! Dᴇᴘʟᴏʏ Nᴏᴡ > (Link)


╭──❰ *ALL MENU* ❱
│🏮 Lɪꜱᴛ
│🏮 Cᴀᴛᴇɢᴏʀʏ
│🏮 Hᴇʟᴘ
│🏮 Aʟɪᴠᴇ
│🏮 Uᴘᴛɪᴍᴇ
│🏮 Wᴇᴀᴛʜᴇʀ
│🏮 Lɪɴᴋ
│🏮 Cᴘᴜ
│🏮 Rᴇᴘᴏꜱɪᴛᴏʀʏ
╰─────────────⦁`.trim();
return await Void.sendMessage(citel.chat, { image: { url: await botpic() }, caption: textt } );
}catch{}
    })
     //---------------------------------------------------------------------------
 cmd({  pattern: "category", alias: ["categories" , "ctgry"],desc: "category list",category: "general",dontAddCommandList : true},async(Void, citel) => {
            try{
             const { commands } = require('../lib');
                 const cmds = {}
                 commands.map(async(command, index) => {
                     if (command.dontAddCommandList === false && command.pattern !== undefined) {
                         if (!cmds[command.category]) cmds[command.category] = []
                         cmds[command.category].push(command.pattern)
                     }
                 })
                 let str = `╭───《 *CATEGORY LIST* 》───⊷\n`
                 for (const category in cmds){ str += `│ *${tiny( `${category.toLowerCase()} menu`)} *\n` ; };
                    str += `╰━━━━━━━━━━━━━━──⊷\n\n`  ; 
                    return await Void.sendMessage(citel.chat, { image: { url: await botpic() }, caption: str } );
                }catch{}   
             
    })