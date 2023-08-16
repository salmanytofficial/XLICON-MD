/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : XLICON-MD
 * @author : SalmanYtOfficial <https://github.com/salmanytofficial>
 * @description : Xlicon,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            //react: "✅",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = [];
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment()).format('HH:mm:ss')
                moment.tz.setDefault('Asia/Kolkata').locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
//============================================================================================
var up_up, up_mid, up_btm, ctgry_L, ctgry_R, cmd_L, ctgry_end;
let default_menu = Math.floor(Math.random() * 2);
if (default_menu == 1) {up_up = `┏━━⟪ *${Config.botname}* ⟫━━⦿`;up_mid = `┃ 🔖`; up_btm =`┗━━━━━━━━━━━━━━━⦿`;ctgry_L  =`┌──『`;ctgry_R  =`』──❖`;cmd_L =` | `;ctgry_end =`└──────────────◉` ; }
else{up_up = `*╔╍──《  ${Config.botname}  》──╍╗*\n╏ □▰▰▰▰▰▰▰▰□`;up_mid = `╏ 🎐`; up_btm = ` ☇❰◭┉────────────┉◮❱☇\n⇐───────────────⇒`;ctgry_L =`💻───┝★`;ctgry_R =  `★┥`; cmd_L =`┊`;ctgry_end =`━━━━━━━━━━━━━━━━━━━━━━`; }              
let str = up_up+ '```'+`
${up_mid} Theme:- ${tlang().title}
${up_mid} Prefix:- [ ${prefix} ]
${up_mid} Owner:- ${Config.ownername}
${up_mid} Plugins:- ${commands.length}
${up_mid} Uptime:- ${runtime(process.uptime())}
${up_mid} Mem:- ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
${up_mid} Time:- ${time}
${up_mid} Date:- ${date}
${up_btm}`+ '```\n\n';          
            for (const category in cmds){
                  str += `${ctgry_L} *${tiny(category)}* ${ctgry_R}\n` ;
                  for (const plugins of cmds[category]){ str += `${cmd_L} ${fancytext(plugins,1)}\n` ;}
                  str += `${ctgry_end}\n`  
                }              
            str+= `*🔥Type:* _${prefix}help cmd_ name to know more about specific command.\n*Eg:* _${prefix}help attp_\n_*ᴍᴀᴅᴇ ʙʏ Tᴇᴀᴍ Xʟɪᴄᴏɴ*_🔥`
            return await Void.sendMessage(citel.chat, {image: { url: await botpic() },caption: str});
            }

         
         
     })
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "list",
            desc: "list menu",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╔╍──╠` + fancytext(Config.ownername.split(' ')[0], 58) + `╣──╍╗`
            str += `
╏  《 ▰▰▰▰▰▰▰▰▰▰▰▰ 》 
╏ 🎐 ✧ User: ${citel.pushName}
╏ 🎐 ✧ Theme: ${tlang().title}
╏ 🎐 ✧ Prefix: ${prefix}
╏ 🎐 ✧ Owner: ${Config.ownername}
╏ 🎐 ✧ Commands: ${commands.length}
╏ 🎐 ✧ Uptime: ${runtime(process.uptime())}
╏ 🎐 ✧ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
╏    《 ▰▰▰▰▰▰▰▰▰▰▰▰ 》 
╰➽───────────────❥\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       ` 🎐 ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `🎐 ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "💜",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel, });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
