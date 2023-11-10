/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

 const { cmd,sck,sck1,hentai, getAdmin, tlang, prefix } = require('../lib')
 const Config = require('../config')
 cmd({
    pattern: "cosplay",
    desc: "NSFW cosplay.",
    category: "nsfw",
},
async(Void, citel) => {
    try {

        var solod = "Cosplay Porn HD PICS";
			let gis = require("async-g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
               let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Cosplay 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				Void.sendMessage(citel.chat, buttonMessage, {
					quoted: citel,
				});
         } catch (e) {
           console.log(e)
      }

}
);

    //---------------------------------------------------------------------------

    cmd({
        pattern: "ecchi",
        desc: "NSFW ecchi.",
        category: "nsfw",
    },
    async(Void, citel) => {
        var solod = "Ecchi Porn HD PICS";
        let gis = require("async-g-i-s");
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.nsfw || "false";
        if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*----「 Ecchi 」----*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `Secktor-NSFW`,
                        jpegThumbnail:log0,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                }, 
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
    }
    );
        //---------------------------------------------------------------------------

        cmd({
            pattern: "hentai",
            category: "nsfw",
        },
        async(Void, citel) => {
            var solod = "Hentai Porn HD PICS";
			let gis = require("async-g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Hentai 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				Void.sendMessage(citel.chat, buttonMessage, {
					quoted: citel,
				});
        }
        );
            //---------------------------------------------------------------------------

    cmd({
        pattern: "hentaivid",
        desc: "hentai video.",
        category: "nsfw",
    },
    async(Void, citel) => {
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.nsfw || "false";
        if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
       let h = hentai()
       Void.sendMessage(citel.chat,{video: { url: h[0].video1},caption: 'Now I can see your future.'})
    }
    );
        //---------------------------------------------------------------------------

        cmd({
            pattern: "ranal",
            category: "nsfw",
        },
        async(Void, citel) => {
            var solod = "Anal Porn HD PICS";
			let gis = require("async-g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Real Anal 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				Void.sendMessage(citel.chat, buttonMessage, {
					quoted: citel,
				});

        }
        );
            //---------------------------------------------------------------------------

    cmd({
        pattern: "rpussy",
        category: "nsfw",
    },
    async(Void, citel) => {
        var solod = "Pussy Porn HD PICS";
        let gis = require("async-g-i-s");
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.nsfw || "false";
        if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*----「 Real PUSSY 」----*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `Secktor-NSFW`,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
    }
    );
        //---------------------------------------------------------------------------

        cmd({
            pattern: "solo",
            category: "nsfw",
        },
        async(Void, citel) => {
            var solod = "Solo Porn HD PICS";
			let gis = require("async-g-i-s");
			let zerogroup = (await sck.findOne({
				id: citel.chat,
			})) || (await new sck({
					id: citel.chat,
				})
				.save());
			let mongoschemas = zerogroup.nsfw || "false";
            if (mongoschemas == "false") return citel.reply("*NSFW* is not active.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
				let buttonMessage = {
					image: {
						url: images,
					},
					caption: `*----「 Solo 」----*`,
					footer: Void.user.name,
					headerType: 4,
					contextInfo: {
						externalAdReply: {
							title: tlang().title,
							body: `Secktor-NSFW`,
							thumbnail: log0,
							mediaType: 2,
							mediaUrl: ``,
							sourceUrl: ``,
						},
					},
				};
				Void.sendMessage(citel.chat, buttonMessage, {
					quoted: citel,
				});
        }
        );
            //---------------------------------------------------------------------------

    cmd({
        pattern: "vixen",
        category: "nsfw",
    },
    async(Void, citel) => {
        var solod = "Vixen Porn HD PICS";
        let gis = require("async-g-i-s");
        let zerogroup = (await sck.findOne({
            id: citel.chat,
        })) || (await new sck({
                id: citel.chat,
            })
            .save());
        let mongoschemas = zerogroup.nsfw || "false";
        if (mongoschemas == "false") return citel.reply("*NSFW* is not active in current group.");
 let n = await gis(solod)
                images = n[Math.floor(Math.random() * n.length)].url;
            let buttonMessage = {
                image: {
                    url: images,
                },
                caption: `*----「 Vixen 」----*`,
                footer: Void.user.name,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: tlang().title,
                        body: `Secktor-NSFW`,
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },
                },
            };
            Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
    }
    );
