/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.7
 **/


//---------------------------------------------------------------------------
const { sck, sck1,cmd, jsonformat, botpic, TelegraPh, RandomXP, Config, tlang, warndb, sleep,getAdmin,getBuffer, prefix } = require('../lib')
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const moment = require("moment-timezone");
const Levels = require("discord-xp");
const fs = require('fs-extra')
const Jimp = require("jimp");

cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '```Ping!!!```'});
        var final = new Date().getTime();
       // await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '*Pong*\n *' + (final - inital) + ' ms* ', edit: key});
    }
);





cmd({
    pattern: "antibot",
    desc: "kick Bot Users from Group.!",
    category: "group",
    filename: __filename
},
async(Void, citel, text , { isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  const groupAdmins = await getAdmin(Void, citel)    
  const botNumber = await Void.decodeJid(Void.user.id)
  const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
  const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
  if (!isAdmins && !isCreator) return citel.reply(tlang().admin)
  let checkinfo = await sck.findOne({ id : citel.chat })  || await new sck({ id: citel.chat}).save();
  let textt = text ? text.toLowerCase().trim() : false;
  let action = textt ? textt.split(" ")[0] : false;
  
  if(!action) return await citel.reply(`*_Antibot Currently ${checkinfo.antibot==="false"?"Disabled" : 'Enabled'} in this Group!_*\n *Toggle: _${prefix}antibot on/off_*`) 
  else if (action.startsWith("off") || action.startsWith("deact") || action.startsWith("disable") ){
    if (checkinfo.antibot === 'false') return await citel.reply("*_Antibot Already Disabled in Current Chat_*") 
    await sck.updateOne({ id: citel.chat }, { antibot : 'false' });
    return await citel.reply(`*_Antibot Succesfully Disable in group!_*`)
  }else if (action.startsWith("on") || action.startsWith("act") || action.startsWith("enable") ){
    if (checkinfo.antibot === 'true') return await citel.reply("*_Antibot Already Enabled in Current Chat_*")
    if (isBotAdmins) {
      await sck.updateOne({ id: citel.chat }, { antibot : 'true' });
      return await citel.reply(`*_Antibot Succesfully set to kick Bot Users!_*`)
    }else return await citel.reply(`*_UHH Please, Provide Admin Role First_*`)
  }else return await citel.reply(`*_Uhh Dear, Please Provide Valid Instruction_*\n*Eg: _${prefix}antibot on/off_*`) 



/**
 * Thanks to @SuhailTechInfo
 * support : https://www.youtube.com/@SuhailTechInfo
 */

})












