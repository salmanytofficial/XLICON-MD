const { cmd, getBuffer} = require("../lib");
const Maher_Zubair = require('@bochilteam/scraper');

cmd({pattern: "facebook",alias: ["fb"],category: "downloader", filename: __filename },async(Void, citel, text) => {
        if (!text) return citel.reply(`Please Provide a Valid Facebook Video Link`);
        
        try{ Maher_Zubair.facebookdlv2(text).then(async (data) => {  return Void.sendMessage(citel.chat, { video: { url: data.result[0].url } }) }) } 
        catch (e) { return citel.reply("Error occurred while processing") }
})
