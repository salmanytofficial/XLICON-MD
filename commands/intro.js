


/**
* Created By @SuhailTechInfo  
* https://wa.me/923184474176
* https://www.youtube.com/@suhailtechinfo
**/

const { isUrl,cmd , tlang  , Config } = require('../lib')
cmd({
        pattern: "intro",
        desc: "To check ping",
        category: "user",
        filename: __filename,
    },
    async(Void, citel) => {
var thumb = 'https://telegra.ph/file/a5b414e4f93e89d0fb25e.jpg'
let intro = `0ཻུ۪۪ꦽꦼ̷⸙━━━━━•❃°•°❀°•°❃•━━━━━᭄
│       *「 Owner 」*
│ *Name      :* ProfileCorruptedError
│ *Place       :* Bangladesh
│ *Gender   :*  ᴍᴀʟᴇ
│ *Age          :* 15_
│ *Phone     :* wa.me/8801853262586
│ *IG ID        :* instagram.com/sla.sher_
│ *Status     :* Sleeping._
╰━•❃°•°❀°•°❃•━ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`

       return await Void.sendMessage(citel.chat,{image: { url : thumb} , caption :intro });
    }
);
