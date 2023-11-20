const { tlang,shazam,prefix,cmd } = require('../lib')
let yts = require("secktor-pack");
cmd({
        pattern: "find",
        category: "misc",
        desc: "Finds info about song"
    },
    async(Void, citel, args) => {
        let mime = citel.quoted.mtype
        if (!citel.quoted) return citel.reply(`Send/Reply Image ${prefix}shaxam`);
        if (!/audio/.test(mime)) return citel.reply(`Send/Reply audio ${prefix}shazam`);
        let buff = await citel.quoted.download();
        let data = await shazam(buff);
        if (!data.status) return citel.reply(data);
	let search = await yts(data.title);
let anu = search.videos[0];
          let h =  `*Title :* _${data.title}_           
*Artist :* _${data.artists}_            
*Album :* _${data.album}_                   
*Release :* _${data.release_date}

*To Download Song*
${prefix}ytmp3 ${anu.url}
`

let buttonMessaged = {
				image: {
                                      url: anu.thumbnail,
                                       },
				caption: h,
				footer: tlang().footer,
				headerType: 4,
				contextInfo: {
					externalAdReply: {
						title: data.artists,
						body: data.album,
						thumbnail: log0,
						mediaType: 2,
						mediaUrl: ``,
						sourceUrl: ``,
					},
				},
			};
			await Void.sendMessage(citel.chat, buttonMessaged, {
				quoted: citel,
			});
    }
 )
