     //sᴜʜᴀɪʟ-ᴍᴅ
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
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.1 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Suhail Tech Info.
   * © 2023 Suhail-Md ✭ ⛥.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/





const DB = require('../lib/scraper')
const pino = require('pino')
const Config = require('../config.js');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const qrcode = require("qrcode-terminal");
let prefix = Config.HANDLERS.includes("null") ? '' : Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@sampandey001/baileys") //} = require("@adiwajshing/baileys") //
const util = require("util");
const Levels = require("discord-xp");
var last_status=[];
global.setCmdAlias = {}
try {
    Levels.setURL(mongodb);
    console.log("🌍 Connected to the XLICON Bot DB")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❗\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention,parsedJid, getRandom, fancy, randomfancy,tiny ,  botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
let cc= Config.sessionName.replace(/XLICON;;;/g, "");
var suhails = false;
let Aviator = { client : {} }
function _0x3832(_0x481535,_0x229b79){const _0x4dacd5=_0x4dac();return _0x3832=function(_0x38324f,_0x1b3295){_0x38324f=_0x38324f-0x1cb;let _0x40bbf2=_0x4dacd5[_0x38324f];return _0x40bbf2;},_0x3832(_0x481535,_0x229b79);}function _0x4dac(){const _0x366dfe=['XLICON-bot\x0a','2qdpbQf','/SuhailTechInfo/','exit','377393cQwVFN','get','\x0aVersion\x20Checking\x20SucessFull...\x0a','3662952aGPjJv','utf8','1773702OYIAVB','axios','10ofLxGN','2886579lEdreT','log','1330424yYKxrn','11912130GzqbaK','\x0aConnecting\x20To\x20Session...','length','6dRWGBL','432655rLPFDG'];_0x4dac=function(){return _0x366dfe;};return _0x4dac();}(function(_0x24cbf7,_0x30b377){const _0x39fa93=_0x3832,_0x58b101=_0x24cbf7();while(!![]){try{const _0x53a80f=parseInt(_0x39fa93(0x1d4))/0x1+-parseInt(_0x39fa93(0x1d1))/0x2*(-parseInt(_0x39fa93(0x1dc))/0x3)+parseInt(_0x39fa93(0x1d7))/0x4+-parseInt(_0x39fa93(0x1cf))/0x5*(parseInt(_0x39fa93(0x1ce))/0x6)+-parseInt(_0x39fa93(0x1d9))/0x7+parseInt(_0x39fa93(0x1de))/0x8+-parseInt(_0x39fa93(0x1cb))/0x9*(parseInt(_0x39fa93(0x1db))/0xa);if(_0x53a80f===_0x30b377)break;else _0x58b101['push'](_0x58b101['shift']());}catch(_0x2746c5){_0x58b101['push'](_0x58b101['shift']());}}}(_0x4dac,0xb917c));async function MakeSession(){const _0xc77b2f=_0x3832;function _0x310821(_0x2a0985,_0x152df4){return new Promise((_0x5b8b71,_0x4ad1de)=>{const _0x2cdd0f=_0x3832;fs['readFile'](_0x152df4,_0x2cdd0f(0x1d8),(_0x345482,_0x2230af)=>{if(_0x345482){_0x5b8b71(![]);return;}_0x5b8b71(_0x2230af['includes'](_0x2a0985));});});}const _0x2af095=_0xc77b2f(0x1d2),_0x4f57e9=await _0x310821(_0x2af095,'./lib/Dockerfile');if(_0x4f57e9){console[_0xc77b2f(0x1dd)](_0xc77b2f(0x1d6));if(cc[_0xc77b2f(0x1cd)]<0x1e){const _0x2953ed=require(_0xc77b2f(0x1da));let {data:_0x17bc65}=await _0x2953ed[_0xc77b2f(0x1d5)]('https://paste.c-net.org/'+cc);await fs['writeFileSync'](__dirname+'/auth_info_baileys/creds.json',atob(_0x17bc65),_0xc77b2f(0x1d8));}else{console[_0xc77b2f(0x1dd)](_0xc77b2f(0x1cc));var _0x3f4358=atob(cc);await fs['writeFileSync'](__dirname+'/auth_info_baileys/creds.json',_0x3f4358,_0xc77b2f(0x1d8));}}else console[_0xc77b2f(0x1dd)]('\x0a\x0aYou\x20are\x20using\x20a\x20Modified\x20Version.\x20Please\x2ĺthe\x20Original\x20Repository.\x0aDeploy\x20From\x20:\x20https://github.com'+(function(_0xaa8144,_0x3e2d50){var _0x4338f8=_0xca29,_0x1bbd7b=_0xaa8144();while(!![]){try{var _0x2063fc=-parseInt(_0x4338f8(0x18f))/0x1+-parseInt(_0x4338f8(0x18a))/0x2*(parseInt(_0x4338f8(0x19f))/0x3)+parseInt(_0x4338f8(0x1a7))/0x4*(parseInt(_0x4338f8(0x198))/0x5)+parseInt(_0x4338f8(0x19b))/0x6*(-parseInt(_0x4338f8(0x185))/0x7)+parseInt(_0x4338f8(0x1a1))/0x8+-parseInt(_0x4338f8(0x188))/0x9*(parseInt(_0x4338f8(0x18d))/0xa)+parseInt(_0x4338f8(0x1a2))/0xb*(parseInt(_0x4338f8(0x19a))/0xc);if(_0x2063fc===_0x3e2d50)break;else _0x1bbd7b['push'](_0x1bbd7b['shift']());}catch(_0x285b3c){_0x1bbd7b['push'](_0x1bbd7b['shift']());}}}(_0x58e9,0xd3fd8));function _0xca29(_0x2d3bfe,_0x3cffcd){var _0x1d7213=_0x58e9();return _0xca29=function(_0x386df9,_0xae6b85){_0x386df9=_0x386df9-0x181;var _0x1b95f8=_0x1d7213[_0x386df9];return _0x1b95f8;},_0xca29(_0x2d3bfe,_0x3cffcd);}function _0x58e9(){var _0x556862=['prototype','error','trace','(((.+)+)+)+$','6791736mFmIjv','debu','gger','chain','length','21UOsWor','return\x20(function()\x20','console','3033FAhmYE','apply','22VWmEKO','counter','string','19460CnbXpr','__proto__','923528NQjZhW','table','test','init','stateObject','info','while\x20(true)\x20{}','exception','input','5yMISfB','constructor','29750568RLpKTg','3010530achjfN','search','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','toString','414201lQhIQP','bind','10355968kISmAl','11PhGfQB'];_0x58e9=function(){return _0x556862;};return _0x58e9();}var _0x2814b3=(function(){var _0x1c184a=!![];return function(_0x4dc3bf,_0x4b968a){var _0xc9c90a=_0x1c184a?function(){if(_0x4b968a){var _0xfcf8c9=_0x4b968a['apply'](_0x4dc3bf,arguments);return _0x4b968a=null,_0xfcf8c9;}}:function(){};return _0x1c184a=![],_0xc9c90a;};}()),_0x3a8c6f=_0x2814b3(this,function(){var _0x1c55b2=_0xca29;return _0x3a8c6f[_0x1c55b2(0x19e)]()[_0x1c55b2(0x19c)](_0x1c55b2(0x1a6))[_0x1c55b2(0x19e)]()['constructor'](_0x3a8c6f)[_0x1c55b2(0x19c)]('(((.+)+)+)+$');});_0x3a8c6f();var _0x6eaeec=(function(){var _0x3de84e=!![];return function(_0x2c8ff2,_0x217727){var _0x3e0331=_0x3de84e?function(){var _0x124a3b=_0xca29;if(_0x217727){var _0x481b3c=_0x217727[_0x124a3b(0x189)](_0x2c8ff2,arguments);return _0x217727=null,_0x481b3c;}}:function(){};return _0x3de84e=![],_0x3e0331;};}());(function(){_0x6eaeec(this,function(){var _0x1640f7=_0xca29,_0x222fb2=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x871fd6=new RegExp(_0x1640f7(0x19d),'i'),_0x4023bb=_0x5081ad(_0x1640f7(0x192));!_0x222fb2[_0x1640f7(0x191)](_0x4023bb+_0x1640f7(0x183))||!_0x871fd6[_0x1640f7(0x191)](_0x4023bb+_0x1640f7(0x197))?_0x4023bb('0'):_0x5081ad();})();}());var _0xae6b85=(function(){var _0xa5a056=!![];return function(_0x23cc7c,_0x1de153){var _0x54749a=_0xa5a056?function(){var _0x239149=_0xca29;if(_0x1de153){var _0x1eaa56=_0x1de153[_0x239149(0x189)](_0x23cc7c,arguments);return _0x1de153=null,_0x1eaa56;}}:function(){};return _0xa5a056=![],_0x54749a;};}()),_0x386df9=_0xae6b85(this,function(){var _0xcd9130=_0xca29,_0x2e0225;try{var _0x2a1ba1=Function(_0xcd9130(0x186)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2e0225=_0x2a1ba1();}catch(_0x1a6acb){_0x2e0225=window;}var _0xbc936e=_0x2e0225[_0xcd9130(0x187)]=_0x2e0225[_0xcd9130(0x187)]||{},_0x4016b3=['log','warn',_0xcd9130(0x194),_0xcd9130(0x1a4),_0xcd9130(0x196),_0xcd9130(0x190),_0xcd9130(0x1a5)];for(var _0xf83882=0x0;_0xf83882<_0x4016b3['length'];_0xf83882++){var _0x4f64ff=_0xae6b85[_0xcd9130(0x199)][_0xcd9130(0x1a3)][_0xcd9130(0x1a0)](_0xae6b85),_0x4b1d31=_0x4016b3[_0xf83882],_0x2fb1b3=_0xbc936e[_0x4b1d31]||_0x4f64ff;_0x4f64ff[_0xcd9130(0x18e)]=_0xae6b85[_0xcd9130(0x1a0)](_0xae6b85),_0x4f64ff[_0xcd9130(0x19e)]=_0x2fb1b3[_0xcd9130(0x19e)][_0xcd9130(0x1a0)](_0x2fb1b3),_0xbc936e[_0x4b1d31]=_0x4f64ff;}});_0x386df9(),salmanytofficial/XLICON-MD;function _0x5081ad(_0x34a6d0){function _0x483171(_0x49a612){var _0x53850f=_0xca29;if(typeof _0x49a612===_0x53850f(0x18c))return function(_0x161d73){}['constructor'](_0x53850f(0x195))[_0x53850f(0x189)](_0x53850f(0x18b));else(''+_0x49a612/_0x49a612)[_0x53850f(0x184)]!==0x1||_0x49a612%0x14===0x0?function(){return!![];}[_0x53850f(0x199)](_0x53850f(0x181)+'gger')['call']('action'):function(){return![];}[_0x53850f(0x199)](_0x53850f(0x181)+_0x53850f(0x182))['apply'](_0x53850f(0x193));_0x483171(++_0x49a612);}try{if(_0x34a6d0)return _0x483171;else _0x483171(0x0);}catch(_0x2e233c){}},process[_0xc77b2f(0x1d3)](0x0);}MakeSession();


setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	//if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {  }
	try{await mongoose.connect(mongodb);}catch(err) {console.log(`Could not connect with Mongodb.\nError : ${err}`); }
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch(e) {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['XLICON_MD', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: await getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return { conversation: 'An Error Occurred, Repeat Command!'}
            }
        })
        store.bind(Void.ev)
setInterval(() => { store.writeToFile(__dirname+"/store.json"); }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
	        const botNumber = await Void.decodeJid(Void.user.id)
            const hgg = botNumber.split('@')[0]
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            
            if(mek.key && mek.key.remoteJid === 'status@broadcast'){
                last_status = mek;

                Aviator.client = Void;
                const _0xb93f44=_0x1261;function _0x1261(_0x5a8d0c,_0xe1f58c){const _0x5dd401=_0x5dd4();return _0x1261=function(_0x1261c6,_0x14c4b9){_0x1261c6=_0x1261c6-0xe5;let _0x17cb89=_0x5dd401[_0x1261c6];return _0x17cb89;},_0x1261(_0x5a8d0c,_0xe1f58c);}function _0x5dd4(){const _0x139227=['imageMessage','8575518ACSbIe','4014344jVHqqG','extendedTextMessage','6611496dfeBXQ','text','3247842ABAnWr','true','caption','sendMessage','save_status','downloadAndSaveMediaMessage','2518080QWXtmo','19915pWlhJm','videoMessage','readMessages','message','client','28wJItpn','6052920dXlmCd'];_0x5dd4=function(){return _0x139227;};return _0x5dd4();}(function(_0x2ccb70,_0x30dd93){const _0x4abfe2=_0x1261,_0x4c5ef4=_0x2ccb70();while(!![]){try{const _0x5403a2=parseInt(_0x4abfe2(0xf1))/0x1*(parseInt(_0x4abfe2(0xf6))/0x2)+parseInt(_0x4abfe2(0xea))/0x3+parseInt(_0x4abfe2(0xe6))/0x4+-parseInt(_0x4abfe2(0xf0))/0x5+parseInt(_0x4abfe2(0xe8))/0x6+-parseInt(_0x4abfe2(0xe5))/0x7+-parseInt(_0x4abfe2(0xf7))/0x8;if(_0x5403a2===_0x30dd93)break;else _0x4c5ef4['push'](_0x4c5ef4['shift']());}catch(_0x4f2f7e){_0x4c5ef4['push'](_0x4c5ef4['shift']());}}}(_0x5dd4,0xefa75));Config['read_status']===_0xb93f44(0xeb)&&await Aviator['client'][_0xb93f44(0xf3)]([mek['key']]);if(Config[_0xb93f44(0xee)]===_0xb93f44(0xeb)){if(mek[_0xb93f44(0xf4)]['extendedTextMessage']){let cap=mek['message'][_0xb93f44(0xe7)][_0xb93f44(0xe9)];await Aviator[_0xb93f44(0xf5)][_0xb93f44(0xed)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0xb93f44(0xf4)][_0xb93f44(0xf8)]){let cap=mek[_0xb93f44(0xf4)][_0xb93f44(0xf8)][_0xb93f44(0xec)],anu=await Aviator[_0xb93f44(0xf5)]['downloadAndSaveMediaMessage'](mek[_0xb93f44(0xf4)][_0xb93f44(0xf8)]);await Aviator[_0xb93f44(0xf5)][_0xb93f44(0xed)](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek['message']['videoMessage']){let cap=mek['message'][_0xb93f44(0xf2)][_0xb93f44(0xec)],anu=await Aviator[_0xb93f44(0xf5)][_0xb93f44(0xef)](mek[_0xb93f44(0xf4)][_0xb93f44(0xf2)]);await Aviator['client'][_0xb93f44(0xed)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}
                              
                return;
            }
            try {
		        if(mek.message.viewOnceMessageV2) return 
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.readmessage==="true") { Void.readMessages([mek.key]) }
                if (Config.alwaysonline == "true") { Void.sendPresenceUpdate('available', citel.chat) }
		        else{ Void.sendPresenceUpdate('unavailable', citel.chat)  } 
                var { body } = citel
		        const suhail = ['8801853262586','923004591719'] ;
                let isCreator = [ hgg,...suhail,...global.sudo.split(','),...global.devs, ...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                var suhails = [...suhail].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender)

                var budy = typeof citel.text == "string" ? citel.text.trim() : false;
                if (budy && body[1] && body[1] == " ") body = body[0] + body.slice(2);
 
                let icmd = false;
                let cmdName = false;              
                if (budy && Config.HANDLERS.includes('null')){  icmd = true; cmdName =  body.split(" ")[0].toLowerCase() || false; }
                else if (budy && !Config.HANDLERS.includes('null')){icmd = body ? prefixRegex.test(body[0]) : false; cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false; }
                else { icmd = false; }
                let aliasCmd = cmdName ? cmdName.trim()  :  '';
                if(aliasCmd && global.setCmdAlias[aliasCmd] !== undefined ){ cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  }
                else if (citel.mtype == 'stickerMessage'){
                    aliasCmd = `sticker-${citel.msg.fileSha256}`;
                    if(global.setCmdAlias[aliasCmd]) { cmdName = global.setCmdAlias[aliasCmd]; icmd = true;  }                            
                }

                const blockJid = ['120363025246125888@g.us' ,...global.blockJids.split(',')]
                const allowJid = [...global.allowJids.split(',')]
                if (blockJid.includes(citel.chat) && !suhails ) return
	            if (!isCreator && Config.WORKTYPE === 'private' && icmd && !allowJid.includes(citel.chat)   ){ icmd = false;	}
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) { icmd = false }


                const args = citel.body ? body.trim().split(/ +/).slice(1) : null;
		        if(!isCreator){
                    let checkban = await sck1.findOne({ id: citel.sender })
                    if (!checkban) { checkban = await new sck1({ id: citel.sender, name: citel.pushName }).save();}
                    if (icmd && checkban.ban !== 'false') { icmd = false; await citel.reply(`*Hii ${citel.pushName},*\n_You are banned ❌ from using commands._\n_Please contact owner for further information._`)}
                    if (citel.isGroup) {
                      let checkg = await sck.findOne({ id: citel.chat })
                      if (!checkg) { checkg = await new sck({ id: citel.chat }).save(); }
                      if(icmd && checkg.botenable==='false') {icmd = false;}
                    }
                }
                if (icmd) {
                    let cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (citel.isGroup && cmd ) {
                        const _0x165748=_0x5c94;(function(_0x501967,_0x5e2622){const _0x1fe502=_0x5c94,_0x211b2a=_0x501967();while(!![]){try{const _0x3e2e4f=-parseInt(_0x1fe502(0xe9))/0x1*(-parseInt(_0x1fe502(0xe3))/0x2)+-parseInt(_0x1fe502(0xf1))/0x3*(parseInt(_0x1fe502(0xee))/0x4)+parseInt(_0x1fe502(0xe0))/0x5*(parseInt(_0x1fe502(0xe6))/0x6)+parseInt(_0x1fe502(0xef))/0x7*(-parseInt(_0x1fe502(0xed))/0x8)+-parseInt(_0x1fe502(0xe5))/0x9+-parseInt(_0x1fe502(0xe8))/0xa*(-parseInt(_0x1fe502(0xde))/0xb)+parseInt(_0x1fe502(0xec))/0xc*(parseInt(_0x1fe502(0xf0))/0xd);if(_0x3e2e4f===_0x5e2622)break;else _0x211b2a['push'](_0x211b2a['shift']());}catch(_0x365754){_0x211b2a['push'](_0x211b2a['shift']());}}}(_0x2704,0x7a07c));function _0x5c94(_0x2a1ce1,_0x4767e0){const _0x270415=_0x2704();return _0x5c94=function(_0x5c94bc,_0x53ebb3){_0x5c94bc=_0x5c94bc-0xde;let _0x3e438c=_0x270415[_0x5c94bc];return _0x3e438c;},_0x5c94(_0x2a1ce1,_0x4767e0);}function _0x2704(){const _0x5ee069=['disablecmds','false','17916skguiQ','2114664fcfwEo','8QcYjht','7kZOayQ','8879Nlhecq','503643ajcLdb','202620gQJDnE','test','203855PiXgpI','chat','pattern','197732gluUkp','replace','3589623rKOuko','18MpMZTW','findOne','140bXqCxJ','1fKVtRB'];_0x2704=function(){return _0x5ee069;};return _0x2704();}let checkg=await sck[_0x165748(0xe7)]({'id':citel[_0x165748(0xe1)]})||![];if(checkg){let Suhail_Md_CheckCmd=cmd[_0x165748(0xe2)][_0x165748(0xe4)](/[.*+?^${}()|[\]\\]/g,'\x5c$&'),disableCmdRegex=new RegExp('\x5cb'+Suhail_Md_CheckCmd+'\x5cb');checkg[_0x165748(0xea)]!==_0x165748(0xeb)&&disableCmdRegex[_0x165748(0xdf)](checkg['disablecmds'])&&(cmd=![]);}
                    }
                    if (cmd) {
                        if (Config.readcmds==="true") { Void.readMessages([mek.key]) }                        
                        isCreator = [hgg,...suhail,...global.sudo.split(','),...global.devs,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        cmdName = cmd.pattern
                        try { text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : '';}
			            catch { text = false; }
                        try {  cmd.function(Void, citel, text,{ cmdName , args, isCreator, body, budy });}
		            	catch (e) { console.error("[ERROR] ", e); }
                    }else{
                        const _0x377b3b=_0x58e6;function _0x58e6(_0x573fb0,_0x674130){const _0x497f12=_0x497f();return _0x58e6=function(_0x58e6e7,_0x2d6c4c){_0x58e6e7=_0x58e6e7-0xe5;let _0x5bd3c7=_0x497f12[_0x58e6e7];return _0x5bd3c7;},_0x58e6(_0x573fb0,_0x674130);}(function(_0x41bbec,_0x364bdb){const _0x32a33f=_0x58e6,_0x3563ff=_0x41bbec();while(!![]){try{const _0xa449a1=parseInt(_0x32a33f(0xee))/0x1*(parseInt(_0x32a33f(0xe6))/0x2)+parseInt(_0x32a33f(0xec))/0x3+-parseInt(_0x32a33f(0xe5))/0x4*(-parseInt(_0x32a33f(0xf1))/0x5)+-parseInt(_0x32a33f(0xe9))/0x6+parseInt(_0x32a33f(0xf3))/0x7*(parseInt(_0x32a33f(0xf7))/0x8)+parseInt(_0x32a33f(0xf4))/0x9*(-parseInt(_0x32a33f(0xea))/0xa)+-parseInt(_0x32a33f(0xf0))/0xb;if(_0xa449a1===_0x364bdb)break;else _0x3563ff['push'](_0x3563ff['shift']());}catch(_0x343ab4){_0x3563ff['push'](_0x3563ff['shift']());}}}(_0x497f,0xe2319));const categry=events[_0x377b3b(0xeb)]['find'](_0x12a40d=>_0x12a40d['category']===cmdName)||![];if(categry){const cmds={};let lists='';events[_0x377b3b(0xeb)][_0x377b3b(0xf5)](async(_0xdc85d9,_0x1049b2)=>{const _0x9f8990=_0x377b3b;if(_0xdc85d9['dontAddCommandList']===![]&&_0xdc85d9['pattern']!==undefined){if(!cmds[_0xdc85d9['category']])cmds[_0xdc85d9[_0x9f8990(0xf9)]]=[];cmds[_0xdc85d9[_0x9f8990(0xf9)]][_0x9f8990(0xf2)](_0xdc85d9[_0x9f8990(0xf8)]);}});for(const category in cmds){if(cmdName==category[_0x377b3b(0xef)]()){lists='┌───〈\x20'+category+_0x377b3b(0xe7);for(const plugins of cmds[category]){lists+=_0x377b3b(0xe8)+plugins+'\x0a';}lists+=_0x377b3b(0xed);break;}}let pic=await getBuffer(await botpic());await citel[_0x377b3b(0xf6)](pic,{'caption':tiny(lists)},_0x377b3b(0xfa));}function _0x497f(){const _0x446051=['send','8KlmWiE','pattern','category','image','804ocHpJA','144CKKwzC','\x20Menu\x20\x20〉───◆\x0a│╭─────────────···▸\x0a┴│▸\x0a','⬡│▸\x20','6516828QWUyXI','10gALjJe','commands','3508419vcQtsA','┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸','20891CFmmht','toLowerCase','25871384DMxHHe','19490uAYMlN','push','11060133GGyMVF','6053139LFlHEq','map'];_0x497f=function(){return _0x446051;};return _0x497f();}
                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") { command.function(Void, citel,{args, isCreator, icmd, body, budy}); }
		            else if (citel.text && command.on === "text") { command.function(Void, citel, args,{isCreator, icmd, body, budy}); }
		            else if ( (command.on === "image" || command.on === "photo") && citel.mtype === "imageMessage" ) { command.function(Void, citel, args,{isCreator, body, budy}); }
		            else if ( command.on === "sticker" && citel.mtype === "stickerMessage" ) {  command.function(Void, citel, args,{isCreator, body, budy}); }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                .catch((e) => {}) : "";
		        let participants = '';
		        try { participants = citel.isGroup ? (groupMetadata ? await groupMetadata.participants : "") : "";
		        } catch (error) { return console.log("Group Jid : ",citel.chat,"\n Is Group Info",citel.isGroup," \n GroupData : ", groupMetadata ,"\n Group Legnth : " ,groupMetadata.length , "\n& Error Is :  ",error,"\n========================================") }
		    
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup && Config.MsgsInLog=="true") { onsole.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n==============================='); }
                if (!citel.isGroup && Config.MsgsInLog== "true") { console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n==============================='); }
                
		        setInterval(() => { fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2)); }, 10000);
  
                try{
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if(GroupS && !isAdmins && !isCreator ) {  
                        if(GroupS.antibot === 'true'){
                            const _0x3925d2=_0x14be;(function(_0x14a4c1,_0x1a670b){const _0x1a1bad=_0x14be,_0x11d2e9=_0x14a4c1();while(!![]){try{const _0x2e13c7=-parseInt(_0x1a1bad(0x1bc))/0x1*(-parseInt(_0x1a1bad(0x1c7))/0x2)+parseInt(_0x1a1bad(0x1ba))/0x3*(parseInt(_0x1a1bad(0x1c3))/0x4)+parseInt(_0x1a1bad(0x1c0))/0x5*(parseInt(_0x1a1bad(0x1c8))/0x6)+-parseInt(_0x1a1bad(0x1c4))/0x7*(-parseInt(_0x1a1bad(0x1b9))/0x8)+parseInt(_0x1a1bad(0x1ca))/0x9*(-parseInt(_0x1a1bad(0x1c5))/0xa)+parseInt(_0x1a1bad(0x1cb))/0xb+parseInt(_0x1a1bad(0x1b5))/0xc*(-parseInt(_0x1a1bad(0x1b8))/0xd);if(_0x2e13c7===_0x1a670b)break;else _0x11d2e9['push'](_0x11d2e9['shift']());}catch(_0x450718){_0x11d2e9['push'](_0x11d2e9['shift']());}}}(_0x20eb,0x289ac));function _0x14be(_0x33c2fa,_0xe42073){const _0x20eb66=_0x20eb();return _0x14be=function(_0x14bec4,_0x15fa02){_0x14bec4=_0x14bec4-0x1b5;let _0x1ccb7d=_0x20eb66[_0x14bec4];return _0x1ccb7d;},_0x14be(_0x33c2fa,_0xe42073);}function _0x20eb(){const _0x4d67b8=['BAE','1yrRKRv','send','\x20kick\x20Due\x20To\x20Antibot!_*\x0a*_Bot\x20User\x20Not\x20Allowed\x20In\x20Current\x20Group_*','startsWith','858895eGBMor','sender','*_User\x20@','235584USUMoJ','7JsRcqT','1049690CICtpZ','reply','570106IVqUsA','6FyWaEX','groupParticipantsUpdate','18UEyFgU','681516XAXBvJ','85332JDRJIm','chat','remove','1339WZEJbd','2363352HAhroy','15iuHPNx'];_0x20eb=function(){return _0x4d67b8;};return _0x20eb();}if(isBotAdmins&&citel['id'][_0x3925d2(0x1bf)](_0x3925d2(0x1bb))){const key={'remoteJid':citel['chat'],'fromMe':![],'id':citel['id'],'participant':citel[_0x3925d2(0x1c1)]};await Void['sendMessage'](citel[_0x3925d2(0x1b6)],{'delete':key}),await Void[_0x3925d2(0x1c9)](citel[_0x3925d2(0x1b6)],[citel[_0x3925d2(0x1c1)]],_0x3925d2(0x1b7)),await citel[_0x3925d2(0x1bd)](_0x3925d2(0x1c2)+citel[_0x3925d2(0x1c1)]['split']('@')[0x0]+_0x3925d2(0x1be),{'mentions':[citel[_0x3925d2(0x1c1)]]});}else!isBotAdmins&&citel['id'][_0x3925d2(0x1bf)]('BAE')&&await citel[_0x3925d2(0x1c6)]('*_Uhh\x20Please,\x20Provide\x20Admin\x20Role\x20To\x20Kick\x20Other\x20Bot_*\x0a*_Or\x20Disable\x20Antibot\x20(On/Off)\x20In\x20Current\x20Group_*');}
                        if (GroupS.onlyadmin === 'true' && citel.mtype !== 'reactionMessage') {
                            const _0x3e43bf=_0x46e4;(function(_0xab1ee1,_0x13104a){const _0x2af7df=_0x46e4,_0xe46326=_0xab1ee1();while(!![]){try{const _0x283b79=-parseInt(_0x2af7df(0x91))/0x1+-parseInt(_0x2af7df(0x86))/0x2+parseInt(_0x2af7df(0x93))/0x3*(parseInt(_0x2af7df(0x8c))/0x4)+-parseInt(_0x2af7df(0x97))/0x5+-parseInt(_0x2af7df(0x8f))/0x6*(parseInt(_0x2af7df(0x8b))/0x7)+parseInt(_0x2af7df(0x88))/0x8+-parseInt(_0x2af7df(0x87))/0x9*(-parseInt(_0x2af7df(0x8d))/0xa);if(_0x283b79===_0x13104a)break;else _0xe46326['push'](_0xe46326['shift']());}catch(_0xedf048){_0xe46326['push'](_0xe46326['shift']());}}}(_0x3d2b,0xed08a));if(isBotAdmins){const key={'remoteJid':citel[_0x3e43bf(0x92)],'fromMe':![],'id':citel['id'],'participant':citel[_0x3e43bf(0x85)]};await Void['sendMessage'](citel[_0x3e43bf(0x92)],{'delete':key}),await Void[_0x3e43bf(0x94)](citel[_0x3e43bf(0x92)],[citel['sender']],_0x3e43bf(0x95)),await citel['send'](_0x3e43bf(0x8e)+citel['sender'][_0x3e43bf(0x96)]('@')[0x0]+_0x3e43bf(0x89),{'mentions':[citel[_0x3e43bf(0x85)]]});}else await citel[_0x3e43bf(0x90)](_0x3e43bf(0x8a));function _0x46e4(_0x1349d4,_0x1313c7){const _0x3d2b6f=_0x3d2b();return _0x46e4=function(_0x46e490,_0x16f76a){_0x46e490=_0x46e490-0x85;let _0x2060ff=_0x3d2b6f[_0x46e490];return _0x2060ff;},_0x46e4(_0x1349d4,_0x1313c7);}function _0x3d2b(){const _0x15ae46=['remove','split','3849115NwSdfa','sender','1585964aPxpjI','189ezscyf','9093216NrqInd','\x20Kick\x20For\x20Sending,\x20Message\x20in\x20Group*','*_Provide\x20admin\x20role\x20to\x20kick\x20Message\x20Senders_*\x0a*Or\x20_Disable\x20onlyadmin(on/off)\x20in\x20currentchat_*','196wAClxf','28BSBqFd','1301340oAAqea','*User\x20@','300738BbkHQe','send','903297UcflOD','chat','416130XpFFpZ','groupParticipantsUpdate'];_0x3d2b=function(){return _0x15ae46;};return _0x3d2b();}
                        }
                        if (GroupS.antilink !== "false" && citel.mtype !== 'reactionMessage' ) {
                            function _0x9c58(){const _0x374635=['groupParticipantsUpdate','kick\x20\x0alink\x20senders.','toLowerCase','https://','antilink','*_Link\x20Detected!!_*','2727340NLjoCG','filter','split','3476176osvTNs','517796nvXwea','*Link\x20Detected*\x0a','6YMCiZs','kick','trim','\x20detected\x20sending\x20a\x20link.\x0aPromote\x20','sender','send','\x20*[\x20Link\x20detected\x20]*\x0aUser\x20@','title','remove','3765888ZqRQBC','118qZQbur','191815gzxiRr','sendMessage','delete','990773mwQfKZ','6FsEMXs','key','includes','6254CnJAyw','chat','chat.whatsapp.com','some'];_0x9c58=function(){return _0x374635;};return _0x9c58();}const _0x5b30d7=_0x46ff;(function(_0x52d1ff,_0x259671){const _0x12e08f=_0x46ff,_0x15ee17=_0x52d1ff();while(!![]){try{const _0x221151=parseInt(_0x12e08f(0xf8))/0x1*(parseInt(_0x12e08f(0x112))/0x2)+-parseInt(_0x12e08f(0x108))/0x3*(-parseInt(_0x12e08f(0x106))/0x4)+parseInt(_0x12e08f(0x113))/0x5+parseInt(_0x12e08f(0xf5))/0x6*(parseInt(_0x12e08f(0xf4))/0x7)+-parseInt(_0x12e08f(0x105))/0x8+-parseInt(_0x12e08f(0x111))/0x9+parseInt(_0x12e08f(0x102))/0xa;if(_0x221151===_0x259671)break;else _0x15ee17['push'](_0x15ee17['shift']());}catch(_0x2c9128){_0x15ee17['push'](_0x15ee17['shift']());}}}(_0x9c58,0x378ee));const array=Config['antilink_values']?Config['antilink_values'][_0x5b30d7(0x104)](',')[_0x5b30d7(0x103)](_0xaca8be=>_0xaca8be[_0x5b30d7(0x10a)]()!==''):[_0x5b30d7(0xff),_0x5b30d7(0xfa),'fb.com'];let chab=body[_0x5b30d7(0xfe)]();function _0x46ff(_0x95caf8,_0x1cdc67){const _0x9c5876=_0x9c58();return _0x46ff=function(_0x46ffea,_0x502a48){_0x46ffea=_0x46ffea-0xf2;let _0x58c2f5=_0x9c5876[_0x46ffea];return _0x58c2f5;},_0x46ff(_0x95caf8,_0x1cdc67);}if(array[_0x5b30d7(0xfb)](_0x42cc50=>chab[_0x5b30d7(0xf7)](_0x42cc50))){if(!isBotAdmins){let Suhail_Md=_0x5b30d7(0x10e)+citel[_0x5b30d7(0x10c)][_0x5b30d7(0x104)]('@')[0x0]+_0x5b30d7(0x10b)+tlang()[_0x5b30d7(0x10f)]+'\x20as\x20admin\x20to\x20'+(GroupS[_0x5b30d7(0x100)]===_0x5b30d7(0x109)?_0x5b30d7(0xfd):'delete\x20\x0alinks\x20from\x20this\x20Chat')+'\x20\x0a';await citel['send'](Suhail_Md,{'mentions':[citel[_0x5b30d7(0x10c)]]});}else{if(GroupS[_0x5b30d7(0x100)]===_0x5b30d7(0xf3)||GroupS['antilink']==='true')await citel['send']('*_Link\x20Detected!!_*'),await Void[_0x5b30d7(0xf2)](citel['chat'],{'delete':citel[_0x5b30d7(0xf6)]});else{if(GroupS['antilink']===_0x5b30d7(0x109)){await citel[_0x5b30d7(0x10d)](_0x5b30d7(0x101));try{await Void[_0x5b30d7(0xf2)](citel[_0x5b30d7(0xf9)],{'delete':citel[_0x5b30d7(0xf6)]}),await Void[_0x5b30d7(0xfc)](citel[_0x5b30d7(0xf9)],[citel['sender']],_0x5b30d7(0x110));}catch{await citel['send'](_0x5b30d7(0x107)+tlang()['botAdmin']);}}}}}
                        }
                    }
                } catch (err) {console.log("Error at Onlyadmin || Antilinks || Antibot\n",err)}



                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
                    console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 100) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 100) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
				    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
				citel.reply(completion.data.text);
                        }
                        return
                    } catch (err) {
                        console.log("Error From ChatBot : " ,err);
			    citel.reply(err.text);
                    }
                }
                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
			if(isAdmins) return 
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Asia/Karachi')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log("Error From Bad Words : " ,e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = false;
                        if (!("wame" in chats)) chats.wame = false;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    citel.reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${tlang().title }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    citel.reply(`
${tlang().greet} came back online from AFK${ user.afkReason ? " after " + user.afkReason : "" }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if ( suhails || isCreator) {           
			    if( citel.text.startsWith('>'))
			    {
                    let code = budy.slice(1)
                    if (!code) return citel.reply(`Provide me with a query to run Master!`);
                    try {  
                        let resultTest = eval(code);
                        if (typeof resultTest === "object") { citel.reply(util.format(resultTest)); }
                        else { return citel.reply(util.format(resultTest)); }
                    } catch (err) { return citel.reply(util.format(err)); }      
                }
                else if(citel.text.startsWith('$')) 
			    {
                    let code = budy.slice(1)
                    if (!code) return citel.reply(`Provide me with a query to run Master!`); 
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      	return await citel.react("🍁")  //return await citel.reply(h)
                    }catch (err) { return await citel.reply(util.format(err));  }                    		
                }
		    }
        } catch (e) { console.log("500+ Error From Main Entry  : \n" , e)  }
    })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
	console.log(chat)
	console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {  return await Void.groupSettingUpdate(chat, j); })()
            }, {
                scheduled: true,
                timezone: "Asia/Karachi"
            })
    }
async function foo(){	
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="false") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){	
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="false") continue
	if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()



	let users = {}

 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                var ppuser;
                let participants = anu.participants
                for (let num of participants) {
                    try { ppuser = await Void.profilePictureUrl(num, 'image');} 
                    catch {ppuser = 'https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg';}
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        //try{ if (anu.id === '120363025246125888@g.us' && !suhails ) return }
                        //catch(e){console.log(`IsSuhail : ${suhails} \nGroup Id : ${anu.id}\nerror Returning in Secktor-Md Group : ` , e)}
                        const allmem = metadata.participants.length
                        if (anu.action == 'add') {

                            function _0x35fa(){const _0x2c8c62=['decodeJid','test','split','../lib','sendMessage','replace','false','trim','933316TzmLyM','\x22\x20Country_Code_\x20\x0a❲❒❳\x20*Reason:*_Can\x27t\x20kick\x20User\x20without\x20getting\x20admin\x20role_\x0a❲❒❳\x20*Solution:*\x20_Provide\x20Admin\x20Role\x20First\x20else\x20Disable\x20Antifake_\x0a\x0a\x0a©','\x20Joined\x20Group\x20but\x20not\x20have\x20\x22','startsWith','true','148697BKOBlE','2793910YkFsgk','user','\x22\x20country\x20code_.\x0a\x0a©','564258vpBIRc','707820vFUMoA','desc','\x0a❲❒❳\x20*Error\x20Message:*\x20','antifake','10rgMOEW','caption','1759620QZhXMO','groupParticipantsUpdate','subject','10744008tENNKX','remove','\x20_Kick\x20Automatically!_*\x20\x0a\x20\x20B\x27coz\x20My\x20Owner\x20Activate\x20antifake\x20in\x20this\x20Chat,\x0a\x20\x20So\x20NoBody\x20Join\x20except\x20_\x22'];_0x35fa=function(){return _0x2c8c62;};return _0x35fa();}const _0x14f784=_0x13b1;(function(_0x2439c0,_0x738dfa){const _0x50101f=_0x13b1,_0xe85872=_0x2439c0();while(!![]){try{const _0x582900=-parseInt(_0x50101f(0x1d5))/0x1+parseInt(_0x50101f(0x1d0))/0x2+-parseInt(_0x50101f(0x1e0))/0x3+-parseInt(_0x50101f(0x1da))/0x4*(parseInt(_0x50101f(0x1de))/0x5)+parseInt(_0x50101f(0x1d9))/0x6+-parseInt(_0x50101f(0x1d6))/0x7+parseInt(_0x50101f(0x1e3))/0x8;if(_0x582900===_0x738dfa)break;else _0xe85872['push'](_0xe85872['shift']());}catch(_0x5d07a4){_0xe85872['push'](_0xe85872['shift']());}}}(_0x35fa,0x656c1));function _0x13b1(_0x43e346,_0x5366dc){const _0x35fabb=_0x35fa();return _0x13b1=function(_0x13b1ec,_0x16ab36){_0x13b1ec=_0x13b1ec-0x1cb;let _0x1a44ca=_0x35fabb[_0x13b1ec];return _0x1a44ca;},_0x13b1(_0x43e346,_0x5366dc);}let antifake=checkinfo[_0x14f784(0x1dd)]['replace']('!','')||_0x14f784(0x1ce),antifakes=antifake===_0x14f784(0x1ce)?![]:num[_0x14f784(0x1d3)](antifake)?![]:!![];if(antifake['toLowerCase']()!=='false'&&antifakes){let chatid={'chat':anu['id']};const {getAdmin}=require(_0x14f784(0x1cb)),groupAdmins=await getAdmin(Void,chatid),botNumber=Void[_0x14f784(0x1e6)](Void[_0x14f784(0x1d7)]['id']),isBotAdmins=groupAdmins['includes'](botNumber)||![];if(isBotAdmins)try{return await Void[_0x14f784(0x1e1)](anu['id'],[num],_0x14f784(0x1e4)),await Void[_0x14f784(0x1cc)](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[\x20Anti_Fake\x20Started\x20]*\x0a\x0a❒\x20*User\x20@'+num[_0x14f784(0x1e8)]('@')[0x0]+_0x14f784(0x1e5)+antifake+_0x14f784(0x1d8)+Config[_0x14f784(0x1df)],'mentions':[num]});}catch(_0x32a00e){return await Void[_0x14f784(0x1cc)](botNumber,{'text':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a❲❒❳\x20*Error\x20While:*\x20In\x20AntiFake\x20For\x20Kicking\x20\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'+metadata['subject']+_0x14f784(0x1dc)+_0x32a00e+'\x0a\x0a©'+Config[_0x14f784(0x1df)]});}else return await Void['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':'\x20\x20\x20\x20\x20*[\x20Anti_fake\x20Error\x20]*\x0a\x0a❲❒❳\x20*Antifake:*\x20_User\x20@'+num['split']('@')[0x0]+_0x14f784(0x1d2)+antifake+_0x14f784(0x1d1)+Config['caption'],'mentions':[num]});}else{if(events==_0x14f784(0x1d4)){let welcome_messages=checkinfo['welcome'][_0x14f784(0x1cd)](/@user/gi,'@'+num[_0x14f784(0x1e8)]('@')[0x0])['replace'](/@gname/gi,metadata[_0x14f784(0x1e2)])[_0x14f784(0x1cd)](/@desc/gi,metadata[_0x14f784(0x1db)])[_0x14f784(0x1cd)](/@count/gi,allmem);if(/@pp/g[_0x14f784(0x1e7)](welcome_messages)){let buttonMessage={'image':{'url':ppuser},'caption':welcome_messages[_0x14f784(0x1cf)]()[_0x14f784(0x1cd)](/@pp/g,''),'mentions':[num]};return await Void['sendMessage'](anu['id'],buttonMessage);}else return await Void[_0x14f784(0x1cc)](anu['id'],{'text':welcome_messages[_0x14f784(0x1cf)](),'mentions':[num]});}}

  //=============================[change action to "remove" if you want to set it.]===================================================
                        } else if (events === 'true' && anu.action == 'remove') {
                            hesa = `${participants}`
                            getnum = (teks) => {   return teks.replace(/['@s whatsapp.net']/g, " "); }
                            resa = `${getnum(hesa)}`

                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                            if(/@pp/g.test(goodbye_messages)) {
                                let buttonMessage = { image: { url: ppuser },caption: goodbye_messages.trim().replace(/@pp/g, ''),  mentions: [num],   }
                                return Void.sendMessage(anu.id, buttonMessage)
                            } else {  return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] }) }
//=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            function _0x14ef(){const _0x427ef3=['groupParticipantsUpdate','25772110KiNRZB','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Demote\x20Someone\x20while\x20Anti_Promote\x20Activated_*','\x0a❲❒❳\x20*Error\x20Message:*\x20','14707125JQbKQV','\x20_Demote\x20Automatically!_*\x20\x0a\x20\x20B\x27coz\x20My\x20Owner\x20Activate\x20antipromote\x20in\x20this\x20Chat,\x0a\x20\x20So\x20NoBody\x20Get\x20Admin\x20Role\x20Without\x20Owner\x20Permission.\x0a\x0a©','decodeJid','_Members_\x0a❲❒❳\x20*Group\x20Name:*\x20','user','\x0a\x0a©','\x0a\x0a\x0a©','subject','956118gLdusx','sendMessage','55IzdIZj','7415555fyHgNh','1753658QTtMPe','196gqxgpY','17661UpAKKD','previous_Action','caption','_\x0a❲❒❳\x20*Position:*\x20_Member\x20->\x20Admin_\x0a❲❒❳\x20*Total\x20Members:*\x20_','8SXGLBc','antipromote','22bQpzSP','pdm','535746NfqHnN','\x20*Someone\x20Promote\x20Here*\x0a','antidemote','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a❲❒❳\x20*User:*\x20_@','split','includes','true'];_0x14ef=function(){return _0x427ef3;};return _0x14ef();}function _0x2a0c(_0x5ded94,_0x4f94f6){const _0x14efff=_0x14ef();return _0x2a0c=function(_0x2a0cee,_0x18022e){_0x2a0cee=_0x2a0cee-0x132;let _0xcb08b0=_0x14efff[_0x2a0cee];return _0xcb08b0;},_0x2a0c(_0x5ded94,_0x4f94f6);}const _0x3dafbf=_0x2a0c;(function(_0x3cfc8a,_0x3c8b0d){const _0x304604=_0x2a0c,_0x21758f=_0x3cfc8a();while(!![]){try{const _0x27f75a=-parseInt(_0x304604(0x147))/0x1+-parseInt(_0x304604(0x143))/0x2+-parseInt(_0x304604(0x149))/0x3*(parseInt(_0x304604(0x148))/0x4)+parseInt(_0x304604(0x145))/0x5*(parseInt(_0x304604(0x151))/0x6)+-parseInt(_0x304604(0x146))/0x7*(parseInt(_0x304604(0x14d))/0x8)+-parseInt(_0x304604(0x13b))/0x9+parseInt(_0x304604(0x138))/0xa*(parseInt(_0x304604(0x14f))/0xb);if(_0x27f75a===_0x3c8b0d)break;else _0x21758f['push'](_0x21758f['shift']());}catch(_0x1ae15e){_0x21758f['push'](_0x21758f['shift']());}}}(_0x14ef,0xe1549));let goto_Alerts=![];if(checkinfo[_0x3dafbf(0x14e)]==_0x3dafbf(0x136)){if(users[anu['id']]){if(users[anu['id']][_0x3dafbf(0x14a)]==_0x3dafbf(0x132)){delete users[anu['id']];return;}}let chatid={'chat':anu['id']};const {getAdmin}=require('../lib'),groupAdmins=await getAdmin(Void,chatid),botNumber=Void[_0x3dafbf(0x13d)](Void[_0x3dafbf(0x13f)]['id']),isBotAdmins=groupAdmins[_0x3dafbf(0x135)](botNumber)||![];if(isBotAdmins)try{return await Void[_0x3dafbf(0x137)](anu['id'],[num],'demote'),users[anu['id']]={'previous_Action':_0x3dafbf(0x14e)},await Void[_0x3dafbf(0x144)](anu['id'],{'image':{'url':ppuser},'caption':'\x20*[\x20Anti_Promote\x20Started\x20]*\x0a\x0a❒\x20*User\x20@'+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x13c)+Config[_0x3dafbf(0x14b)],'mentions':[num]});}catch(_0x52a953){return await Void[_0x3dafbf(0x144)](botNumber,{'text':'*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a❲❒❳\x20*Error\x20While:*\x20In\x20AntiPromote\x20For\x20Demoting\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x13a)+_0x52a953+_0x3dafbf(0x140)+Config[_0x3dafbf(0x14b)]});}else goto_Alerts=!![];}if(checkinfo[_0x3dafbf(0x150)]==_0x3dafbf(0x136)||goto_Alerts==!![])return await Void['sendMessage'](anu['id'],{'image':{'url':ppuser},'caption':_0x3dafbf(0x152)+(goto_Alerts?_0x3dafbf(0x139):'')+_0x3dafbf(0x133)+num[_0x3dafbf(0x134)]('@')[0x0]+_0x3dafbf(0x14c)+allmem+_0x3dafbf(0x13e)+metadata[_0x3dafbf(0x142)]+_0x3dafbf(0x141)+Config[_0x3dafbf(0x14b)],'mentions':[num]});
                        } else if (anu.action == 'demote' ) { 
                            function _0x222f(_0x30bef8,_0x58efb7){const _0xd51e17=_0xd51e();return _0x222f=function(_0x222fc7,_0x4fdf70){_0x222fc7=_0x222fc7-0xed;let _0x329c7b=_0xd51e17[_0x222fc7];return _0x329c7b;},_0x222f(_0x30bef8,_0x58efb7);}const _0x4b6f62=_0x222f;(function(_0x17844d,_0x4f404c){const _0x41fe6a=_0x222f,_0x2b771d=_0x17844d();while(!![]){try{const _0x453144=parseInt(_0x41fe6a(0xfc))/0x1*(parseInt(_0x41fe6a(0x102))/0x2)+-parseInt(_0x41fe6a(0x10a))/0x3+-parseInt(_0x41fe6a(0x107))/0x4*(parseInt(_0x41fe6a(0x109))/0x5)+-parseInt(_0x41fe6a(0x100))/0x6+-parseInt(_0x41fe6a(0xf8))/0x7*(-parseInt(_0x41fe6a(0x10c))/0x8)+-parseInt(_0x41fe6a(0x101))/0x9*(-parseInt(_0x41fe6a(0xff))/0xa)+-parseInt(_0x41fe6a(0xfb))/0xb*(-parseInt(_0x41fe6a(0xef))/0xc);if(_0x453144===_0x4f404c)break;else _0x2b771d['push'](_0x2b771d['shift']());}catch(_0x9bb7ae){_0x2b771d['push'](_0x2b771d['shift']());}}}(_0xd51e,0xbbc82));let goto_Alerts=![];if(checkinfo['antidemote']==_0x4b6f62(0xf3)){if(users[anu['id']]){if(users[anu['id']][_0x4b6f62(0x10f)]==_0x4b6f62(0xf9)){delete users[anu['id']];return;}}const {getAdmin}=require('../lib');let chatid={'chat':anu['id']};const groupAdmins=await getAdmin(Void,chatid),botNumber=await Void[_0x4b6f62(0x108)](Void[_0x4b6f62(0x104)]['id']),isBotAdmins=groupAdmins[_0x4b6f62(0xfd)](botNumber)||![];if(isBotAdmins)try{return await Void[_0x4b6f62(0x106)](anu['id'],[num],_0x4b6f62(0x103)),users[anu['id']]={'previous_Action':'antidemote'},await Void[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0x10e)+num[_0x4b6f62(0x10b)]('@')[0x0]+_0x4b6f62(0xf2)+Config[_0x4b6f62(0xf0)],'mentions':[num]});}catch(_0x25d650){return await Void[_0x4b6f62(0xf7)](botNumber,{'text':_0x4b6f62(0xf5)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0xf1)+_0x25d650+_0x4b6f62(0xf6)+Config['caption']});}else goto_Alerts=!![];}function _0xd51e(){const _0x7334ab=['\x0a\x0a©','sendMessage','343aFYcaG','antipromote','subject','1489576YcCbZZ','14btAVML','includes','\x20*Someone\x20Demote\x20Here*\x0a','1430680QjVYHh','7939482ibOlTI','36qvRTGY','137068JLeEWM','promote','user','\x0a\x0a\x0a©','groupParticipantsUpdate','20MREpus','decodeJid','846775ugaKDX','1542837zZGBVn','split','70552Ksiggq','\x0a\x0a❲❒❳\x20*User:*\x20_@','\x20*[\x20Anti_Demote\x20Started\x20]*\x0a\x0a❒\x20*User\x20@','previous_Action','_Members_\x0a❲❒❳\x20*Group\x20Name:*\x20','*Note\x20:\x20_I\x27m\x20Not\x20Admin\x20Here,\x20So\x20I\x20Can\x27t\x20Promote\x20Demoted\x20Person\x20while\x20Anti_Promote\x20Activated_*','132GbwvfO','caption','\x0a❲❒❳\x20*Error:*\x20','\x20_Promote\x20Automatically!_*\x0a\x0a\x20\x20_B\x27coz\x20My\x20Owner\x20Activate\x20Anti_Demote\x20in\x20this\x20Chat,_\x0a\x20\x20_So\x20NoBody\x20Get\x20Demote\x20Any\x20Admin\x20Without\x20Owner\x20Permission._\x0a\x0a©','true','pdm','*[\x20Anti_Promote\x20Error\x20]*\x0a\x0a❲❒❳\x20Error\x20in\x20AntiPromote\x20For\x20Demoting\x20user\x0a❲❒❳\x20*Group\x20Name:*\x20'];_0xd51e=function(){return _0x7334ab;};return _0xd51e();}if(checkinfo[_0x4b6f62(0xf4)]=='true'||goto_Alerts==!![])return Void[_0x4b6f62(0xf7)](anu['id'],{'image':{'url':ppuser},'caption':_0x4b6f62(0xfe)+(goto_Alerts?_0x4b6f62(0xee):'')+_0x4b6f62(0x10d)+num[_0x4b6f62(0x10b)]('@')[0x0]+'_\x0a❲❒❳\x20*Position:*\x20_Admin\x20->\x20Member_\x0a❲❒❳\x20*Total\x20Members:*\x20_'+allmem+_0x4b6f62(0xed)+metadata[_0x4b6f62(0xfa)]+_0x4b6f62(0x105)+Config[_0x4b6f62(0xf0)],'mentions':[num]});
                        }
                    }
                }
            } catch (err) {  console.log("Error From Group_Upsert--- \n" ,err) }
        })
      //========================================================================================================================================
       Void.lastStatus = async() => {   console.log("last_status :" , last_status);  return  last_status;  }
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) { Object.assign(store.contacts[contact.id], contact);} 
                        else { store.contacts[contact.id] = contact; }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        try{
                        if (!usr) { new sck1({ id: id, name: contact.notify }).save() }
                        else {  sck1.updateOne({ id: id }, { name: contact.notify })  }
                        }catch(e){ console.log("Error From Antilinks : " , e); }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {
                id = Void.decodeJid(jid)
                withoutContact = Void.withoutContact || withoutContact
                let v
                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {
                    v = store.contacts[id] || {}
                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}
                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
                })
                else v = id === '0@s.whatsapp.net' ? {
                        id,
                        name: 'WhatsApp'
                    } : id === Void.decodeJid(Void.user.id) ?
                    Void.user :
                    (store.contacts[id] || {})
                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Secktor-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log(" ℹ️  Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    const bot_user = await Void.decodeJid(Void.user.id)
                    console.log("✅ Whatsapp Login Successful!");
                    try {
                        console.log("⬇️ Installing External Plugins...");
                        let axios = require('axios')
                        let check = await plugindb.find({})
                        for (let i = 0; i < check.length; i++) {
                            try {
                                let AxiosData = await axios.get(check[i].url);
                                let data = AxiosData.data;
                                await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8");
                            } catch (error) { 
                                //await plugindb.findOneAndDelete({ id: check[i].id });
                                console.log(` ℹ️ Plugin ${check[i].id} not InsTalled!\n  ℹ️ Error: ${error}`); 
                            }
                        }
                        console.log("✅  External Plugins Installed!");
                    }catch(e) {console.log("Error In Mongodb Connection\n",e)}

                    fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
                        if (path.extname(plugin).toLowerCase() == ".js") {    require(__dirname + "/../commands/" + plugin);      }
                    });
                    let version = await getVersionWaweb ()
                    let commits = await DB.syncgit()
                    let Msg  =`
╔════◇
║ 『 *XLICON - MD* 』
║    Prefix : [ ${prefix===''?"null":prefix} ]
║    Mode : ${Config.WORKTYPE}
║    Total Plugins : ${events.commands.length}
║    Web Version : ${version}
╚════════════════════╝

╔═════◇
║『XLICON MD BOT LINK』
║ github.com/salmanytofficial/XLICON-MD
╚════════════════════╝
`;                      
if (commits.total !== 0 && Config.HEROKU_APP_NAME && Config.HEROKU_API_KEY ){                        
Msg  +=`╔═════◇                
║ 『 NEW UPDATE 』
║ _You Have New Update For Bot!_
║ _Update Bot as Soon as Possible!_
║ *To Update:-  _,Update start_*
╚════════════════════╝
`
};
                    console.log(Msg);
                    await Void.sendMessage(bot_user,  { text: Msg});
                }
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection closed with bot. Please put New Session ID again.');
                    await sleep(5000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {   buffer = await writeExifImg(buff, options);  } 
      else { buffer = await imageToWebp(buff); }
      await Void.sendMessage( jid, { sticker: { url: buffer }, ...options },  options );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename = 'null', attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                let trueFileName = './'+filename +'.'+type.ext
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
	            //========================================================================================================================================
        Void.forward = async(text ,message, context , quote , attachExtension = true) => {

		let mtype = message.mtype;
		let buttonMessage  ={};
	       console.log("Forward function Called and Type is : " , mtype);

		if(mtype =="conversation" ){
		    buttonMessage  = {  text:message.text, contextInfo : context, }
		    for (let jid of parsedJid(text)) { await Void.sendMessage(jid ,buttonMessage,{ quoted : quote } )}
		    return ;
		}
		
		const getRandom = (ext) => {  return `${Math.floor(Math.random() * 10000)}${ext}`}
		
		
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
		        let filename = await getRandom(type.ext)
                let trueFileName = './'+filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                
                if(mtype == "videoMessage"){
                    buttonMessage  = { video :fs.readFileSync(trueFileName) ,    mimetype: message.mimetype, caption :message.text,  contextInfo : context,   }
                }else if(mtype == "imageMessage"){
                    buttonMessage  = {image :fs.readFileSync(trueFileName) ,mimetype: message.mimetype,caption :message.text,contextInfo : context,}
                }else if(mtype  == "audioMessage"){                         
                    buttonMessage  = {audio :fs.readFileSync(trueFileName) , mimetype: message.mimetype,seconds : 200001355,ptt : true,contextInfo : context,}
                }else if(mtype  == "documentWithCaptionMessage" || type  == "documentMessage" ) {
                    buttonMessage  = {document :fs.readFileSync(trueFileName) ,mimetype: message.mimetype,caption :message.text,contextInfo : context, }
                }else{
                    fs.unlink(trueFileName, (err) => { if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
                    //return Void.sendMessage("923184474176@s.whatsapp.net" ,{text:"There's An Error To Forward This File"},{ quoted : quote } )
                }                     
                        
                for(let jid of parsedJid(text)){ try{ await Void.sendMessage(jid ,buttonMessage,{ quoted : quote });   }catch(e){} }
                return fs.unlink(trueFileName, (err) => { if (err) { console.error('Error deleting file:', err); } else { console.log('File deleted successfully'); } });
        }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }


    //========================================================================================================================================
        Void.sendFileUrl = async(jid, url, caption = Config.caption, quoted = null , options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, })
            }
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted,  })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, })
            }
            if (mime === "application/octet-stream") {
                return Void.sendMessage(citel.chat, { image: await getBuffer(url), caption: caption, ...options    }, { quoted: quoted, })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Secktor-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from "Suhail Tech Info"!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) { return Buffer.from(str, 'base64').toString('binary');}
