/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : XLICON-MD
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/SuhailTechInfo
   * @description : XLICON-MD ,A Multi-functional whatsapp user bot.
   * @version 1.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/
 
 const {tlang, getAdmin, prefix, Config, sck,sck1, fetchJson,getBuffer, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')
 const fetch = require("node-fetch");
  //---------------------------------------------------------------------------
 cmd({
    pattern: "welcome",
    alias:["setwelcome"],
    desc: "sets welcome message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

        let grp =citel.chat;
        if (!citel.isGroup) return citel.reply(tlang().group);
        const groupAdmins = await getAdmin(Void, citel)	
        const isAdmins = groupAdmins.includes(citel.sender) 
        if (!isAdmins && !isCreator) return citel.reply(tlang().admin);
 
      let Group = await sck.findOne({ id: citel.chat });
      if (!text)  {  return await citel.reply ("*Wellcome Message :* "+Group.welcome)  }
      await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
      let metadata = await Void.groupMetadata(citel.chat);
      var ppuser;
      let num = citel.sender;
  
      var welcome_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
      try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }
      return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: welcome_messages,} )


       /*if (!Group) {
                await new sck({ id: citel.chat, welcome: text,events:'true' }).save()
                return citel.reply('Welcome added for this group.\n *Wellcome Message :* '+text )
            } else {
                await await sck.updateOne({ id: citel.chat }, { welcome:text ,events:'true'})
                return citel.reply('Welcome updated successfully.\n *New Wellcome Message Is :* '+text)
                
            }      */
  
}
)
 //---------------------------------------------------------------------------
cmd({
    pattern: "goodbye",
    alias: ["setgoodbye","setbye"],
    desc: "sets goodbye message in specific group.",
    category: "misc",
 filename: __filename
},
async(Void, citel, text,{ isCreator }) => {

    if (!citel.isGroup) return citel.reply(tlang().group);
    const groupAdmins = await getAdmin(Void, citel)	
    const isAdmins = groupAdmins.includes(citel.sender) 
    if (!isAdmins && !isCreator) return citel.reply(tlang().admin);

    let Group = await sck.findOne({ id: citel.chat })
    if (!text)  {  return await citel.reply ("*_Goodbye Message Is:_* "+Group.goodbye)  }
    await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' }) 
 
    let metadata = await Void.groupMetadata(citel.chat);
    var ppuser;
    let num = citel.sender;
    var goodbye_messages = text.replace(/@pp/g, '').replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc);
    try {  ppuser = await Void.profilePictureUrl(num, 'image') }catch { ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg' ; }

        return await Void.sendMessage(citel.chat, { image: { url: ppuser }, caption: goodbye_messages, })

         /*   if (!Group) {
                await new sck({ id: citel.chat, goodbye: text,events:'true' }).save()
                return citel.reply('Goodbye added for this group.\n *New Googbye Message Is :* '+text)
            } else {
                await await sck.updateOne({ id: citel.chat }, { goodbye:text,events:'true' })
                return citel.reply('Goodbye updated successfully.\n *New GoodBye Message Is :* '+text)    
            }      
           */
})
 //---------------------------------------------------------------------------
 //---------------------------------------------------------------------------
/* cmd({
             pattern: "vv",
             alias : ['viewonce','retrive'],
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text) => {
if(!citel.quoted) return citel.reply("```Uh Please Reply A ViewOnce Message```")
  
if(citel.quoted.mtype === "viewOnceMessage")
{
 if(citel.quoted.message.imageMessage )
{ let cap =citel.quoted.message.imageMessage.caption;
 let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage)
 Void.sendMessage(citel.chat,{image:{url : anu},caption : cap })
}
else if(citel.quoted.message.videoMessage )
{
  let cap =citel.quoted.message.videoMessage.caption;
  let anu = await Void.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage)
  Void.sendMessage(citel.chat,{video:{url : anu},caption : cap })
}
}
else return citel.reply("```This is Not A ViewOnce Message```")
 
         }
     )



     */
 //---------------------------------------------------------------------------
 cmd({
        pattern: "quoted",
        desc: "get reply Message from Replied Message",
        category: "user",
        filename: __filename
    },
    async(Void, citel, text) => {
        if(!citel.quoted) return await citel.send("*_Uhh Dear, Reply to a Message_*")
        var quote
        try {
             quote = await Void.serializeM(await citel.getQuotedObj())
        } catch (error) {return console.log("error while geting Quoted Message : " , error )}

        if (!quote.quoted) return await citel.replay('*Message you replied does not contain a reply Message*')
        else await Void.sendMessage(citel.chat, { react: { text: '✨', key: citel.key }}); 
        try {        
            let quote2 = await Void.serializeM(await quote.getQuotedObj())
            return await Void.copyNForward(citel.chat, quote2 , false ,)
        } catch (error) 
        {       
            const contextInfo = {}
            Void.forward(citel.chat ,quote.quoted, contextInfo , citel ); 
        }
        // attp | Void.sendMessage(citel.chat, { sticker: {url: `https://api.xteam.xyz/attp?file&text=${encodeURI(text)}`}}, {quoted: citel })
    })

     //---------------------------------------------------------------------------
     cmd({
        pattern: "blocklist",
        desc: "get list of all Blocked Numbers",
        category: "user",
        filename: __filename,
        use: '<text>',
    },
    async(Void, citel, text , {isCreator}) => {
        if(!isCreator) return await citel.reply(tlang().owner);
        try {
            const data = await Void.fetchBlocklist();
            if (data.length === 0) return await citel.reply(`Uhh Dear, You don't have any Blocked Numbers.`);
            let txt = `\n*≡ List*\n\n*_Total Users:* ${data.length}_\n\n┌─⊷ \t*BLOCKED USERS*\n`;
            for (let i = 0; i < data.length; i++) {      txt += `▢ ${i + 1}:- wa.me/${data[i].split("@")[0]}\n`;    }
            txt += "└───────────";
            return await Void.sendMessage(citel.chat, { text: txt });
          } catch (err) {
            console.error(err);
            return await citel.reply('*Error while getting Blocked Numbers.\nError: *' + err);
          }
    }
    )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "location",
             desc: "Adds *readmore* in given text.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {
          if (!text) return await citel.reply(`Give Coordinates To Send Location\n *Example:* ${prefix}location 24.121231,55.1121221`);
         let cord1 = parseFloat(text.split(',')[0]) || ''
         let cord2 = parseFloat(text.split(',')[1]) || ''
         if(!cord1 || isNaN(cord1) ||  !cord2 || isNaN(cord2)) return await  citel.reply("```Cordinates Not In Formate, Try Again```") 

let txt  = "*----------LOCATION------------*"
   txt +="``` \n Sending Location Of Given Data: ";
   txt +="\n Latitude     :  "+cord1;
   txt +="\n Longitude  :  "+cord2 +"```\n"+Config.caption;

await citel.reply (txt);


      return await Void.sendMessage(citel.chat, { location: { degreesLatitude : cord1, degreesLongitude : cord2 } } ,{quoted : citel} )
 }
     )
     //---------------------------------------------------------------------------
 

/*

cmd({
             pattern: "exec",
             desc: "Evaluates quoted code with given language.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
  if (!citel.quoted) return citel.reply("*Reply to A Code Of Statements to Execute*")
             try {
                 const code = {
                     script: citel.quoted.text,
                     language: text[1],
                     versionIndex: "0",
                     stdin: text.slice(2).join(" "),
                     clientId: '694805244d4f825fc02a9d6260a54a99',
                     clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                 };
                 request({
                     url: "https://api.jdoodle.com/v1/execute",
                     method: "POST",
                     json: code
                 }, function(_error, _response, body) {  citel.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");  });
             } catch (error) {return await citel.reply("*Error In Your Code :* "+error);  }
         }
     )
     */

     //---------------------------------------------------------------------------

 cmd({
        pattern: "getpp",
        desc: "Get Profile Pic For Given User",
        category: "user",
        filename: __filename
    },
    async(Void, citel, text) => {

        if (!citel.quoted) return citel.reply (`*Please Reply To A User*`)
        let pfp;
        try  { pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
        catch (e) {  return citel.reply("```Profile Pic Not Fetched```") } 
        return await Void.sendMessage(citel.chat, {image: { url: pfp },caption: '  *---Profile Pic Is Here---*\n'+Config.caption, },{quoted:citel}); 


         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "readmore",
             alias:["rmore",'readmor'],
             desc: "Adds *readmore* in given text.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
            if(!text) {text = `*Uhh Dear, Give Text, Eg:- _.readmor text1 readmore text2_*`; }
            else { text += " " }
            text.includes("readmore")?await citel.reply(text.replace(/readmore/, (String.fromCharCode(8206)).repeat(4001))) : await citel.reply(text.replace(" ", (String.fromCharCode(8206)).repeat(4001)))
         }
     )
  //---------------------------------------------------------------------------
cmd({
            pattern: "whois",
            desc: "Get replied person info",
            category: "user",
            use: '<reply to any person>',
            filename: __filename
        },
async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`Please Reply To A Person`);
            var bio = await Void.fetchStatus(citel.quoted.sender);
            var bioo = bio.status;
            var setAt = bio.setAt.toString();
            
            var words = setAt.split(" ");
            if(words.length > 3){ setAt= words.slice(0, 5).join(' ') ; }
             
            var num = citel.quoted.sender.split('@')[0];
            let pfp;
            try  {  pfp = await Void.profilePictureUrl(citel.quoted.sender, "image"); } 
            catch (e) { pfp = await Void.profilePictureUrl(citel.sender, "image") ||  'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ; }    //|| 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg' ;  }
            
            let username = await sck1.findOne({ id: citel.quoted.sender });
            var tname = username.name;

            
         return await Void.sendMessage(citel.chat, {
                image: {   url: pfp  },
                caption: `
╔════◇
║ *『Person's  Information』*
║ 
║ *🍫Name :* ${tname}
║ *👤Num :* ${num}
║ *🎐Bio    :*  ${bioo}
║ *🌟SetAt :* ${setAt}
║    *Keep Calm Dude🥳*    ◇
╚════════════════╝
`,
            },{quoted:citel});

        }
    )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "vcard",
             desc: "Create Contact by given name.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {

if (!citel.quoted) return citel.reply (`*Please Reply to User With Name*`);
if ( !text ) return citel.reply( `Please Give Me User Name, \n *Example : ${prefix}vcard Profile Corrupted Error* `)
var words = text.split(" ");
if (words.length >3) {   text= words.slice(0, 3).join(' ')  }
// citel.reply(text);

const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + text + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + citel.quoted.sender.split('@')[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: text, contacts: [{ vcard }] },
            
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, { quoted: citel });
 
})
     //---------------------------------------------------------------------------


 cmd({
             pattern: "calc",
             desc: "Calculate two value.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
            
            if (!text) return await citel.reply("Please enter a mathematical operation.");
            text = text.replace(/\s+/g, '');
            if (!/^(\d+([-+%*/]\d+)+)$/.test(text)) return await  citel.reply("Please enter a valid mathematical operation.");
            const evaluate = (exp) => {  return new Function('return ' + exp)(); };
            try {
                const result = evaluate(text);
                if (text.includes('/') && text.split('/').some((num) => num === '0')) return await citel.send("*Cannot divide by zero.*");
                if (text.split(/[-+%*/]/).length <= 2) {
                    const [num1, operator, num2] = text.match(/\d+|[-+%*/]/g);
                    return citel.send(`${num1} ${operator} ${num2} = ${result}`);
                } else {  return await citel.send(`Result: ${result}`); }
            } catch (error) {  }










/*

let func  =  text.split(";")[0];
let num1  =  +text.split(";")[1];
let num2  =  +text.split(";")[2];

var c1 = num1.toString();
var c2 = num2.toString();
if(c1=="NaN" || c2 ==  "NaN") return citel.reply("*Numbers Are Not In Formate, Try Again*") 
if (!text)
{
let txt="*--------------- CALCULATOR ----------------*\n";
 txt +=" \nChoose An Operator From List  ";
 txt +="\nFor Addittion    :  add ";
 txt +="\nFor Subtraction :  sub";
 txt +="\nFor  Multiply     :  mul";
 txt +="\nFor division       :  div";
 txt += `\n\n  Likewise :  ${prefix}calc add;10;50`;   
  return citel.reply(txt)
}
else if (func == "add" )  {  let result = num1+num2;
return citel.reply (`${num1} + ${ num2}  = ${result}` );
}
else if (func == "sub" ) { let result = num1-num2;
return citel.reply (`${num1} - ${ num2}  = ${result}` );
}
else if (func == "mul" ) { let result = num1*num2;
return citel.reply (`${num1} * ${ num2}  = ${result}` );
}
else if (func == "div" ) { let result = num1/num2;
return citel.reply (`${num1} / ${ num2}  = ${result}` );
}
else
 {
return citel.reply(`Give me Query Like :  ${prefix}calc add;10;50 `);
}
 */
         }
     )


     //---------------------------------------------------------------------------
 cmd({
             pattern: "take",
             desc: "Makes sticker of replied image/video.",
             category: "sticker",
             filename: __filename
         },
         async(Void, citel, text) => {
             if (!citel.quoted) return citel.reply(`*Reply to a Sticker Sir.*`);
             let mime = citel.quoted.mtype
             if ( mime !="stickerMessage") return await citel.reply("```Uhh Please, Reply To A Sticker```") 
             var pack;
             var author;
             if (text) {
                let anu = text.split("|");
                 pack = anu[0] !== "" ? anu[0] : citel.pushName + '♥️';
                 author = anu[1] !== "" ? anu[1] : Config.packname;
             } else {
                 pack = citel.pushName;
                 author =Config.packname;
             }
                 let media = await citel.quoted.download();
                let sticker = new Sticker(media, {
                    pack: pack,
                    author: author,
                    type:  StickerTypes.FULL,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                    background: "transparent", 
                });
                const buffer = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {sticker: buffer }, {quoted: citel });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "uptime",
             alias: ["runtime"],
             desc: "Tells runtime/uptime of bot.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text) => {
             const upt = runtime(process.uptime())
             citel.reply(`*_Uptime of ${tlang().title}: ${upt}_*`)
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "wa",
             desc: "Makes wa me of quoted or mentioned user.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {
             if(!citel.quoted && !citel.mentionedJid) return await citel.reply(`*Please Reply Or Mention A User*`);
             let users = citel.mentionedJid ? citel.mentionedJid[0].split('@')[0] : citel.quoted ? citel.quoted.sender.split('@')[0] : text.replace('@')[0]
            return await  citel.reply(`https://wa.me/${users}`);
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "mee",
             desc: "Makes wa me for user.",
             category: "user",
             filename: __filename
         },
         async(Void, citel, text) => {  let user = citel.sender.split('@')[0]  ; return await citel.reply( `https://wa.me/${user}` ); })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "pick",
             desc: "Pics random user from Group",
             category: "group",
             filename: __filename
         },
         async(Void, citel, match) => {
             if (!match) return citel.reply("*Which type of User you want?*");
             const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                 .catch((e) => {}) : "";
             const participants = citel.isGroup ? await groupMetadata.participants : "";
             let member = participants.map((u) => u.id);
             let me = citel.sender;
             let pick = member[Math.floor(Math.random() * member.length)];
             Void.sendMessage(citel.chat, {
                 text: `The most ${match} around us is *@${pick.split("@")[0]}*`,
                 mentions: [pick],
             }, {
                 quoted: citel,
             });
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "nsfw",
             desc: "activates and deactivates nsfw.\nuse buttons to toggle.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text,{isCreator}) => {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             //const botNumber = await Void.decodeJid(Void.user.id)
            // const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if(isCreator){}
  else if (!isAdmins) return citel.reply(tlang().admin)
             //if (!isBotAdmins) return citel.reply(tlang().botadmin)
            
  
  
             if (checkgroup.nsfw == "true") return citel.reply(`*NSFW* is enabled in this Chat \n For deActive 18+ Commands *type ${prefix}deact nsfw*`);
             else return citel.reply(`*NSFW* is Disabled in this Chat \n For Active 18+ Commands *type ${prefix}act nsfw*`);
 }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "npm",
             desc: "download mp4 from url.",
             category: "search",
             use: '<package name>',
             filename: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('Please give me package name.📦')
             axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({ data }) => {
                 let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
                 citel.reply(txt)
             }).catch(e => console.log(e))
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "fliptext",
             desc: "Flips given text.",
             category: "misc",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`Example : ${prefix}fliptext Back in black`)
             flipe = text.split('').reverse().join('')
             citel.reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*IGiven text :*\n${text}\n*Fliped text :*\n${flipe}`)
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "downmp4",
  
             alias:['mp4down','mp4fromurl'],
             desc: "download mp4 from url.",
             category: "downloader",
             use: '<url>',
             filename: __filename
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`_give me Video Link ?_`);
             Void.sendMessage(citel.chat, {
                 video: {
                     url: text.split(" ")[0],
                 },
                 caption: "*HERE WE GO*",
                 contextInfo: {
                     externalAdReply: {
                         title: tlang().title,
                         body: `${citel.pushName}`,
                         mediaType: 2,
                         mediaUrl: ``,
                         sourceUrl: ``,
                     },
                 },
             }, {
                 quoted: citel,
             });
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "events",
             desc: "activates and deactivates events.\nuse buttons to toggle.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text,{isCreator}) => {
             let checkgroup = await sck.findOne({ id: citel.chat })
             if (!citel.isGroup) return citel.reply(tlang().group);
             const groupAdmins = await getAdmin(Void, citel)
             //const botNumber = await Void.decodeJid(Void.user.id)
             //const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             
  if(isCreator){}
  else if (!isAdmins) return citel.reply(tlang().admin)
             //if (!isBotAdmins) return citel.reply(tlang().botadmin)
  
             if (checkgroup.events == "true") return citel.reply(`*Events* is enabled in this Chat \n For deActive Welcome Msg *type ${prefix}deact events*`);
             else return citel.reply(`*Events* is Disabled in this Chat \n For Active Welcome Msg *type ${prefix}act events*`);
 
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "emix",
             desc: "Mixes two emojies.",
             category: "sticker",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!text) return citel.reply(`Example : ${prefix}emix 😅,🤔`);
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
             let emoji1 = text.split(",")[0] ;
             let emoji2 = text.split(",")[1];

  const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${emoji1}_${emoji2}`);
  const data = await response.json();
  if(data.locale=="") return citel.reply(`Can't Create Mixture, Please Try Other Emojies`)
  else {
let media =await getBuffer(data.results[0].url)

let sticker = new Sticker(media, {
                    pack: Config.packname, 
                    author: Config.author, 
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], 
                    id: "12345", 
                    quality: 100,
                });
const buffer = await sticker.toBuffer();
 return Void.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
}
   
  
         }
     )
     //---------------------------------------------------------------------------

 

 cmd({
             pattern: "Xlicon",
             alias : ["chatbot"],
             desc: "activates and deactivates chatbot.\nuse buttons to toggle.",
             category: "misc",
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             if (!isCreator) return citel.reply(tlang().owner)
             const { chatbot } = require('../lib/');
             let chatbott= await chatbot.findOne({ id: 'chatbot' }) ||  await new chatbot({ id: 'chatbot', worktype: "true" }).save()
             switch (text.split(" ")[0])
             {
                 case "on":
                     {
                         if (chatbott.worktype == "true") return citel.reply("*Xlicon was already enabled.*")
                         await chatbot.updateOne({ id: 'chatbot' }, { worktype: "true" })
                         return await citel.reply('*Xlicon Activated successfully.*')   
                     }
                     break
                 case "off":
                     {
                                if (chatbott.worktype == "false") return citel.reply("*Xlicon was already disabled.*")
                                await chatbot.updateOne({ id: 'chatbot' }, { worktype: "false" })
                                return await citel.reply('*Xlicon deactivated successfully.*')
                     }
                     break
                 default:
                     {
                        if (chatbott.worktype == "false") return await citel.reply(`*Xlicon Chatbot Status : False* \n*Xlicon Chatbot Disabled Yet, _To Enable Type : .Xlicon on_*`)
                        else return await citel.reply("*Xlicon Chatbot Status : True* \n*Xlicon Chatbot Enabled Yet, _To Disable Type : .Xlicon off_*")
                        /*
                            let buttons = [{  buttonId: `${prefix}chatbot on`,   buttonText: {   displayText: "Turn On" },  type: 1, },
                                          {   buttonId: `${prefix}chatbot off`,  buttonText: { displayText: "Turn Off" },   type: 1, }];
                                           
                            await Void.sendButtonText(citel.chat, buttons, `Xlicon Status: ${chatbott.worktype} `, Config.botname, citel);
                        */
                     }
             }
 
 
      })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "ebinary",
             desc: "encode binary",
             category: "misc",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`Send text to be encoded.`);
 
                 let textt = text || citel.quoted.text
                 let eb = await eBinary(textt);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "dbinary",
             desc: "decode binary",
             category: "misc",
             use: '<query>',
             filename: __filename
         },
         async(Void, citel, text,{ isCreator }) => {
             try {
                 if (!text) return citel.reply(`Send text to be decoded.`);
                 let eb = await dBinary(text);
                 citel.reply(eb);
             } catch (e) {
                 console.log(e)
             }
         }
     )

//-----------------------------------------------------------------------------------

if(Config.WORKTYPE != 'private')
{
 
cmd({
  pattern: "bot",
  desc: "activates and deactivates bot.\nuse buttons to toggle.",
  category: "misc",
  filename: __filename
},
async(Void, citel, text,{isCreator}) => {
  if (!citel.isGroup) return citel.reply(tlang().group);
  if(!isCreator) return citel.reply(tlang().owner)
  switch (text.split(" ")[0]) {
            case 'on':{
                    let checkgroup = await sck.findOne({ id: citel.chat })
                    if (!checkgroup) {
                        await new sck({ id: citel.chat, botenable: "true" }).save()
                        return citel.reply(`Successfully Enabled *${tlang().title}*`)
                    } else {
                        if (checkgroup.botenable == "true") return citel.reply("*Bot* was already enabled")
                        await sck.updateOne({ id: citel.chat }, { botenable: "true" })
                        return citel.reply(`Successfully Enabled *${tlang().title}*`)
                    }
                }

            break
           case 'off':{
                       {
                        let checkgroup = await sck.findOne({ id: citel.chat })
                        if (!checkgroup) {
                            await new sck({ id: citel.chat, botenable: "false" })
                                .save()
                            return citel.reply(`Successfully disabled *${tlang().title}*`)
                        } else {
                            if (checkgroup.botenable == "false") return citel.reply("*Bot* was already disabled")
                            await sck.updateOne({ id: citel.chat }, { botenable: "false" })
                            return citel.reply(`Successfully disabled *${tlang().title}*`)
                        }
                    }
           }
           break
           default:
           {
                   let checkgroup = await sck.findOne({ id: citel.chat })
                   let buttons = [{
                             buttonId: `${prefix}bot on`,
                             buttonText: {
                                 displayText: "Turn On",
                             },
                             type: 1,
                         },
                         {
                             buttonId: `${prefix}bot off`,
                             buttonText: {
                                 displayText: "Turn Off",
                             },
                             type: 1,
                         },
                     ];
                     await Void.sendButtonText(citel.chat, buttons, `Bot Status in Group: ${checkgroup.botenable}`, Void.user.name, citel);
           }
       }
})   
} // if Statements
     //---------------------------------------------------------------------------
 /*
 cmd({
             pattern: "antispam",
             desc: "Kick Spamers From Group.\nuse buttons to toggle.",
             category: "group",
             filename: __filename
         },
         async(Void, citel, text , {isCreator}) => {
             if (!citel.isGroup) return citel.reply(tlang().group);
           let check = text ? text : '';
             let checkgroup = await sck.findOne({ id: citel.chat }) || await new sck({id : citel.chat , antispam : 'true'  }) .save();
             const groupAdmins = await getAdmin(Void, citel)
             const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
             if (!isAdmins && !isCreator) return citel.reply(tlang().admin)     
             if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
             { 
                 try 
                 {
                  await sck.updateOne({ id: citel.chat }, { antispam: "true" })
                   return await citel.reply("*_Antispam Enabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
             }
             else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
             {
                 try 
                 {
                    await sck.updateOne({ id: citel.chat }, { antispam: "false" })
                    return await citel.reply("*_Antispam Disabled Successfuly in Group_*")
                 } catch (error) {   return await citel.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
             }      
if (checkgroup.antispam == "true") return citel.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
else return citel.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
         
 })
 */
     //---------------------------------------------------------------------------
     cmd({
        pattern: "antilink",
        desc: "activates and deactivates antilink.\nuse buttons to toggle.",
        category: "group",
        filename: __filename
    },
    async(Void, citel, text , {isCreator}) => {
        function _0x1dd1(_0x190e77,_0x3842b6){const _0x3a2918=_0x3a29();return _0x1dd1=function(_0x1dd110,_0xc0890d){_0x1dd110=_0x1dd110-0x12f;let _0x2f3ec3=_0x3a2918[_0x1dd110];return _0x2f3ec3;},_0x1dd1(_0x190e77,_0x3842b6);}const _0x537363=_0x1dd1;(function(_0x2a498c,_0xe9d7f2){const _0x20fff1=_0x1dd1,_0x275af4=_0x2a498c();while(!![]){try{const _0x1bf60a=-parseInt(_0x20fff1(0x135))/0x1+-parseInt(_0x20fff1(0x14a))/0x2*(-parseInt(_0x20fff1(0x14b))/0x3)+parseInt(_0x20fff1(0x12f))/0x4*(parseInt(_0x20fff1(0x14e))/0x5)+-parseInt(_0x20fff1(0x139))/0x6+parseInt(_0x20fff1(0x13b))/0x7+-parseInt(_0x20fff1(0x136))/0x8+-parseInt(_0x20fff1(0x13c))/0x9*(parseInt(_0x20fff1(0x148))/0xa);if(_0x1bf60a===_0xe9d7f2)break;else _0x275af4['push'](_0x275af4['shift']());}catch(_0x96c32a){_0x275af4['push'](_0x275af4['shift']());}}}(_0x3a29,0xebdc8));if(!citel['isGroup'])return citel['reply'](tlang()[_0x537363(0x141)]);const groupAdmins=await getAdmin(Void,citel),isAdmins=citel[_0x537363(0x130)]?groupAdmins[_0x537363(0x143)](citel[_0x537363(0x131)]):![];if(!isAdmins&&!isCreator)return citel[_0x537363(0x149)](tlang()[_0x537363(0x137)]);let checkinfo=await sck['findOne']({'id':citel[_0x537363(0x142)]})||await new sck({'id':citel[_0x537363(0x142)]})[_0x537363(0x13f)](),textt=text?text[_0x537363(0x151)]()['trim']():![],action=textt?textt[_0x537363(0x13e)]('\x20')[0x0]:![];function _0x3a29(){const _0x5d7267=['3041848KwfWrd','admin','delete','3314166wTfUba','antilink\x20kick/delete/off_*','3559514diYetN','9CvvJaC','*_Antilink\x20','split','save','updateOne','group','chat','includes','send','deact','off','*_Uhh\x20Dear,\x20Please\x20Provide\x20Valid\x20Instruction_*\x0a*Eg:\x20_','1361390agAqTj','reply','26518zyirsz','237MuHrUF','\x0a\x0a*Antilink\x20Modes:*\x0a\x20\x20.antilink\x20kick\x20(Delete\x20Links\x20&\x20Kick\x20Senders)\x0a\x20\x20.antilink\x20delete\x20(Delete\x20Links\x20Only)\x0a\x20\x20.antilink\x20off\x20(Disable\x20Antilink\x20in\x20chat)\x0a\x0a\x0a','disable','126675qiyDRV','*_Anti_Link\x20Succesfully\x20set\x20to\x20kick\x20link\x20senders!_*','kick','toLowerCase','caption','Disabled','startsWith','antilink','196ZzhnRb','isGroup','sender','false','*_Anti_Link\x20Disabled\x20Succesfully!_*','*Current\x20Mode:*\x20_','762559wgiCsM'];_0x3a29=function(){return _0x5d7267;};return _0x3a29();}if(!action)return await citel[_0x537363(0x144)](_0x537363(0x13d)+(checkinfo[_0x537363(0x155)]===_0x537363(0x132)?_0x537363(0x153):'Enabled')+'\x20in\x20this\x20Group!_*\x20\x0a\x20'+(checkinfo[_0x537363(0x155)]==='false'?'':_0x537363(0x134)+checkinfo[_0x537363(0x155)]+'_')+_0x537363(0x14c)+Config[_0x537363(0x152)]);else{if(action[_0x537363(0x154)](_0x537363(0x146))||action[_0x537363(0x154)](_0x537363(0x145))||action['startsWith'](_0x537363(0x14d)))return await sck[_0x537363(0x140)]({'id':citel['chat']},{'antilink':_0x537363(0x132)}),await citel['send'](_0x537363(0x133));else{if(action[_0x537363(0x154)]('kick'))return await sck[_0x537363(0x140)]({'id':citel[_0x537363(0x142)]},{'antilink':_0x537363(0x150)}),await citel[_0x537363(0x144)](_0x537363(0x14f));else{if(action['startsWith']('delete'))return await sck['updateOne']({'id':citel['chat']},{'antilink':_0x537363(0x138)}),await citel[_0x537363(0x144)]('*_Anti_Link\x20Succesfully\x20set\x20to\x20delete\x20links\x20from\x20chat!_*');else return await citel[_0x537363(0x144)](_0x537363(0x147)+prefix+_0x537363(0x13a));}}}
      
})
     //---------------------------------------------------------------------------
 cmd({ on: "body" }, async(Void, citel) => {
   if (!Config.autoreaction) return 
   else if (Config.autoreaction === 'true' && citel.text.startsWith(prefix)) {
         const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
         const emokis = emojis[Math.floor(Math.random() * (emojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: emokis,
                 key: citel.key
             }
         })
     }
  
  else if (Config.autoreaction === 'all') {
         const mojis = ['💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','❤️‍','🔥','❤️‍','🩹','💯','♨️','💢','💬','👁️‍🗨️','🗨️','🗯️','💭','💤','🌐','♠️','♥️','♦️','♣️','🃏','🀄️','🎴','🎭️','🔇','🔈️','🔉','🔊','🔔','🔕','🎼','🎵','🎶','💹','🏧','🚮','🚰','♿️','🚹️','🚺️','🚻','🚼️','🚾','🛂','🛃','🛄','🛅','⚠️','🚸','⛔️','🚫','🚳','🚭️','🚯','🚱','🚷','📵','🔞','☢️','☣️','⬆️','↗️','➡️','↘️','⬇️','↙️','⬅️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔃','🔄','🔙','🔚','🔛','🔜','🔝','🛐','⚛️','🕉️','✡️','☸️','☯️','✝️','☦️','☪️','☮️','🕎','🔯','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️','⛎','🔀','🔁','🔂','▶️','⏩️','⏭️','⏯️','◀️','⏪️','⏮️','🔼','⏫','🔽','⏬','⏸️','⏹️','⏺️','⏏️','🎦','🔅','🔆','📶','📳','📴','♀️','♂️','⚧','✖️','➕','➖','➗','♾️','‼️','⁉️','❓️','❔','❕','❗️','〰️','💱','💲','⚕️','♻️','⚜️','🔱','📛','🔰','⭕️','✅','☑️','✔️','❌','❎','➰','➿','〽️','✳️','✴️','❇️','©️','®️','™️','#️⃣','*️⃣','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔠','🔡','🔢','🔣','🔤','🅰️','🆎','🅱️','🆑','🆒','🆓','ℹ️','🆔','Ⓜ️','🆕','🆖','🅾️','🆗','🅿️','🆘','🆙','🆚','🈁','🈂️','🈷️','🈶','🈯️','🉐','🈹','🈚️','🈲','🉑','🈸','🈴','🈳','㊗️','㊙️','🈺','🈵','🔴','🟠','🟡','🟢','🔵','🟣','🟤','⚫️','⚪️','🟥','🟧','🟨','🟩','🟦','🟪','🟫','⬛️','⬜️','◼️','◻️','◾️','◽️','▪️','▫️','🔶','🔷','🔸','🔹','🔺','🔻','💠','🔘','🔳','🔲','🕛️','🕧️','🕐️','🕜️','🕑️','🕝️','🕒️','🕞️','🕓️','🕟️','🕔️','🕠️','🕕️','🕡️','🕖️','🕢️','🕗️','🕣️','🕘️','🕤️','🕙️','🕥️','🕚️','🕦️','*️','#️','0️','1️','2️','3️','4️','5️','6️','7️','8️','9️','🛎️','🧳','⌛️','⏳️','⌚️','⏰','⏱️','⏲️','🕰️','🌡️','🗺️','🧭','🎃','🎄','🧨','🎈','🎉','🎊','🎎','🎏','🎐','🎀','🎁','🎗️','🎟️','🎫','🔮','🧿','🎮️','🕹️','🎰','🎲','♟️','🧩','🧸','🖼️','🎨','🧵','🧶','👓️','🕶️','🥽','🥼','🦺','👔','👕','👖','🧣','🧤','🧥','🧦','👗','👘','🥻','🩱','🩲','🩳','👙','👚','👛','👜','👝','🛍️','🎒','👞','👟','🥾','🥿','👠','👡','🩰','👢','👑','👒','🎩','🎓️','🧢','⛑️','📿','💄','💍','💎','📢','📣','📯','🎙️','🎚️','🎛️','🎤','🎧️','📻️','🎷','🎸','🎹','🎺','🎻','🪕','🥁','📱','📲','☎️','📞','📟️','📠','🔋','🔌','💻️','🖥️','🖨️','⌨️','🖱️','🖲️','💽','💾','💿️','📀','🧮','🎥','🎞️','📽️','🎬️','📺️','📷️','📸','📹️','📼','🔍️','🔎','🕯️','💡','🔦','🏮','🪔','📔','📕','📖','📗','📘','📙','📚️','📓','📒','📃','📜','📄','📰','🗞️','📑','🔖','🏷️','💰️','💴','💵','💶','💷','💸','💳️','🧾','✉️','💌','📧','🧧','📨','📩','📤️','📥️','📦️','📫️','📪️','📬️','📭️','📮','🗳️','✏️','✒️','🖋️','🖊️','🖌️','🖍️','📝','💼','📁','📂','🗂️','📅','📆','🗒️','🗓️','📇','📈','📉','📊','📋️','📌','📍','📎','🖇️','📏','📐','✂️','🗃️','🗄️','🗑️','🔒️','🔓️','🔏','🔐','🔑','🗝️','🔨','🪓','⛏️','⚒️','🛠️','🗡️','⚔️','💣️','🏹','🛡️','🔧','🔩','⚙️','🗜️','⚖️','🦯','🔗','⛓️','🧰','🧲','⚗️','🧪','🧫','🧬','🔬','🔭','📡','💉','🩸','💊','🩹','🩺','🚪','🛏️','🛋️','🪑','🚽','🚿','🛁','🪒','🧴','🧷','🧹','🧺','🧻','🧼','🧽','🧯','🛒','🚬','⚰️','⚱️','🏺','🕳️','🏔️','⛰️','🌋','🗻','🏕️','🏖️','🏜️','🏝️','🏟️','🏛️','🏗️','🧱','🏘️','🏚️','🏠️','🏡','🏢','🏣','🏤','🏥','🏦','🏨','🏩','🏪','🏫','🏬','🏭️','🏯','🏰','💒','🗼','🗽','⛪️','🕌','🛕','🕍','⛩️','🕋','⛲️','⛺️','🌁','🌃','🏙️','🌄','🌅','🌆','🌇','🌉','🗾','🏞️','🎠','🎡','🎢','💈','🎪','🚂','🚃','🚄','🚅','🚆','🚇️','🚈','🚉','🚊','🚝','🚞','🚋','🚌','🚍️','🚎','🚐','🚑️','🚒','🚓','🚔️','🚕','🚖','🚗','🚘️','🚙','🚚','🚛','🚜','🏎️','🏍️','🛵','🦽','🦼','🛺','🚲️','🛴','🛹','🚏','🛣️','🛤️','🛢️','⛽️','🚨','🚥','🚦','🛑','🚧','⚓️','⛵️','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🎆','🎇','🎑','🗿','⚽️','⚾️','🥎','🏀','🏐','🏈','🏉','🎾','🥏','🎳','🏏','🏑','🏒','🥍','🏓','🏸','🥊','🥋','🥅','⛳️','⛸️','🎣','🤿','🎽','🎿','🛷','🥌','🎯','🪀','🪁','🎱','🎖️','🏆️','🏅','🥇','🥈','🥉','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🥝','🍅','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🌰','🍞','🥐','🥖','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🥙','🧆','🥚','🍳','🥘','🍲','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕️','🍵','🍶','🍾','🍷','🍸️','🍹','🍺','🍻','🥂','🥃','🥤','🧃','🧉','🧊','🥢','🍽️','🍴','🥄','🔪','🐵','🐒','🦍','🦧','🐶','🐕️','🦮','🐕‍','🦺','🐩','🐺','🦊','🦝','🐱','🐈️','🐈‍','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇','🐿️','🦔','🦇','🐻','🐻‍','❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦️','🐧','🕊️','🦅','🦆','🦢','🦉','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🐟️','🐠','🐡','🦈','🐙','🦑','🦀','🦞','🦐','🦪','🐚','🐌','🦋','🐛','🐜','🐝','🐞','🦗','🕷️','🕸️','🦂','🦟','🦠','💐','🌸','💮','🏵️','🌹','🥀','🌺','🌻','🌼','🌷','🌱','🌲','🌳','🌴','🌵','🎋','🎍','🌾','🌿','☘️','🍀','🍁','🍂','🍃','🌍️','🌎️','🌏️','🌑','🌒','🌓','🌔','🌕️','🌖','🌗','🌘','🌙','🌚','🌛','🌜️','☀️','🌝','🌞','🪐','💫','⭐️','🌟','✨','🌠','🌌','☁️','⛅️','⛈️','🌤️','🌥️','🌦️','🌧️','🌨️','🌩️','🌪️','🌫️','🌬️','🌀','🌈','🌂','☂️','☔️','⛱️','⚡️','❄️','☃️','⛄️','☄️','🔥','💧','🌊','💥','💦','💨','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋','👶','🧒','👦','👧','🧑','👨','👩','🧔','🧔‍♀️','🧔‍♂️','🧑','👨‍','🦰','👩‍','🦰','🧑','👨‍','🦱','👩‍','🦱','🧑','👨‍','🦳','👩‍','🦳','🧑','👨‍','🦲','👩‍','🦲','👱','👱‍♂️','👱‍♀️','🧓','👴','👵','🙍','🙍‍♂️','🙍‍♀️','🙎','🙎‍♂️','🙎‍♀️','🙅','🙅‍♂️','🙅‍♀️','🙆','🙆‍♂️','🙆‍♀️','💁','💁‍♂️','💁‍♀️','🙋','🙋‍♂️','🙋‍♀️','🧏','🧏‍♂️','🧏‍♀️','🙇','🙇‍♂️','🙇‍♀️','🤦','🤦‍♂️','🤦‍♀️','🤷','🤷‍♂️','🤷‍♀️','🧑‍⚕️','👨‍⚕️','👩‍⚕️','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🏫','👨‍🏫','👩‍🏫','🧑‍⚖️','👨‍⚖️','👩‍⚖️','🧑‍🌾','👨‍🌾','👩‍🌾','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🔧','👨‍🔧','👩‍🔧','🧑‍🏭','👨‍🏭','👩‍🏭','🧑‍💼','👨‍💼','👩‍💼','🧑‍🔬','👨‍🔬','👩‍🔬','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎤','👨‍🎤','👩‍🎤','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍✈️','👨‍✈️','👩‍✈️','🧑‍🚀','👨‍🚀','👩‍🚀','🧑‍🚒','👨‍🚒','👩‍🚒','👮','👮‍♂️','👮‍♀️','🕵️','🕵️‍♂️','🕵️‍♀️','💂','💂‍♂️','💂‍♀️','👷','👷‍♂️','👷‍♀️','🤴','👸','👳','👳‍♂️','👳‍♀️','👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰','👰‍♂️','👰‍♀️','🤰','🤱','👩‍','🍼','👨‍','🍼','🧑‍','🍼','👼','🎅','🤶','🧑‍','🎄','🦸','🦸‍♂️','🦸‍♀️','🦹','🦹‍♂️','🦹‍♀️','🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️','🧛‍♀️','🧜','🧜‍♂️','🧜‍♀️','🧝','🧝‍♂️','🧝‍♀️','🧞','??‍♂️','🧞‍♀️','🧟','🧟‍♂️','🧟‍♀️','💆','💆‍♂️','💆‍♀️','💇','💇‍♂️','💇‍♀️','🚶','🚶‍♂️','🚶‍♀️','🧍','🧍‍♂️','🧍‍♀️','🧎','🧎‍♂️','🧎‍♀️','🧑‍','🦯','👨‍','🦯','👩‍','🦯','🧑‍','🦼','👨‍','🦼','👩‍','🦼','🧑‍','🦽','👨‍','🦽','👩‍','🦽','🏃','🏃‍♂️','🏃‍♀️','💃','🕺','🕴️','👯','👯‍♂️','👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗','🧗‍♂️','🧗‍♀️','🤺','🏇','⛷️','🏂️','🏌️','🏌️‍♂️','🏌️‍♀️','🏄️','🏄‍♂️','🏄‍♀️','🚣','🚣‍♂️','🚣‍♀️','🏊️','🏊‍♂️','🏊‍♀️','⛹️','⛹️‍♂️','⛹️‍♀️','🏋️','🏋️‍♂️','🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵','🚵‍♂️','🚵‍♀️','🤸','🤸‍♂️','🤸‍♀️','🤼','🤼‍♂️','🤼‍♀️','🤽','🤽‍♂️','🤽‍♀️','🤾','🤾‍♂️','🤾‍♀️','🤹','🤹‍♂️','🤹‍♀️','🧘','🧘‍♂️','🧘‍♀️','🛀','🛌','🧑‍','🤝‍','🧑','👭','👫','👬','💏','👩‍❤️‍💋‍👨','👨‍❤️‍💋‍👨','👩‍❤️‍💋‍👩','💑','👩‍❤️‍👨','👨‍❤️‍👨','👩‍❤️‍👩','👪️','👨‍👩‍👦','👨‍👩‍👧','👨‍👩‍👧‍👦','👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦','👨‍👨‍👧','👨‍👨‍👧‍👦','👨‍👨‍👦‍👦','👨‍👨‍👧‍👧','👩‍👩‍👦','👩‍👩‍👧','👩‍👩‍👧‍👦','👩‍👩‍👦‍👦','👩‍👩‍👧‍👧','👨‍👦','👨‍👦‍👦','👨‍👧','👨‍👧‍👦','👨‍👧‍👧','👩‍👦','👩‍👦‍👦','👩‍👧','👩‍👧‍👦','👩‍👧‍👧','🗣️','👤','👥','👣']
         const mokis = mojis[Math.floor(Math.random() * (mojis.length))]
         Void.sendMessage(citel.chat, {
             react: {
                 text: mokis,
                 key: citel.key
             }
         })
     }
 
 })
