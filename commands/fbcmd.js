const { cmd, getBuffer} = require("../lib");
const bocil = require('@bochilteam/scraper');

cmd({pattern: "facebook",alias: ["fb"],category: "downloader", filename: __filename },async(Void, citel, text) => {
        if (!text) return citel.reply(`Please Provide a Valid Facebook Video Link`);
        
        try{ bocil.facebookdlv2(text).then(async (data) => {  return Void.sendMessage(citel.chat, { video: { url: data.result[0].url } }) }) } 
        catch (e) { return citel.reply("Error occurred while processing") }
})
