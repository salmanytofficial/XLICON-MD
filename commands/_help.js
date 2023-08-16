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

 ⛥
  //┌┤\n`
 **/

  const os = require('os')
  let menus = false
  const moment = require("moment-timezone")
  const fs = require("fs")
  const Config = require('../config')
  let { fancytext, tlang, tiny, runtime, formatp, botpic, getBuffer ,prefix, sck1 } = require("../lib");
  const long = String.fromCharCode(8206)
  const readmore = long.repeat(4001)
  const sᴜʜᴀɪʟ_ᴍᴅ = require('../lib/commands')
  
  
      //---------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
          pattern: "setcmd",
          desc: "To check ping",
          category: "general",
          filename: __filename,
      },
      async(Void, citel,text, { isCreator } ) => {
  const _0x259a3b=_0x3d7a;(function(_0x22b503,_0x545323){const _0xa308d6=_0x3d7a,_0x4eba37=_0x22b503();while(!![]){try{const _0x236fe0=-parseInt(_0xa308d6(0x14f))/0x1+parseInt(_0xa308d6(0x138))/0x2+parseInt(_0xa308d6(0x136))/0x3*(-parseInt(_0xa308d6(0x142))/0x4)+parseInt(_0xa308d6(0x153))/0x5+parseInt(_0xa308d6(0x135))/0x6*(parseInt(_0xa308d6(0x134))/0x7)+-parseInt(_0xa308d6(0x144))/0x8*(parseInt(_0xa308d6(0x14c))/0x9)+-parseInt(_0xa308d6(0x13d))/0xa*(-parseInt(_0xa308d6(0x13e))/0xb);if(_0x236fe0===_0x545323)break;else _0x4eba37['push'](_0x4eba37['shift']());}catch(_0x3d175f){_0x4eba37['push'](_0x4eba37['shift']());}}}(_0x3f0c,0xa1e0b));if(!isCreator)return await citel['reply'](tlang()['owner']);if(!text)return await citel[_0x259a3b(0x150)](_0x259a3b(0x139));function _0x3d7a(_0xc5c3c1,_0x33e9ed){const _0x3f0c35=_0x3f0c();return _0x3d7a=function(_0x3d7aa7,_0x4c920a){_0x3d7aa7=_0x3d7aa7-0x134;let _0x5a1313=_0x3f0c35[_0x3d7aa7];return _0x5a1313;},_0x3d7a(_0xc5c3c1,_0x33e9ed);}let a=text['split'](',');var cmdName,newAlias;let isSticker=![];if(citel['quoted']){let mime=citel[_0x259a3b(0x14e)]['mtype'];mime==_0x259a3b(0x149)&&text&&(isSticker=!![],cmdName=text[_0x259a3b(0x152)]('\x20')[0x0],newAlias=_0x259a3b(0x13f)+citel[_0x259a3b(0x14e)][_0x259a3b(0x14a)]);}if(!isSticker&&a['length']>0x1)newAlias=a[0x0][_0x259a3b(0x13c)]()[_0x259a3b(0x13a)](),cmdName=a[0x1]['trim']()['toLowerCase']();else{if(!isSticker)return await citel[_0x259a3b(0x150)](_0x259a3b(0x155));}if(newAlias[_0x259a3b(0x140)]<0x1)return await citel[_0x259a3b(0x154)]('*_Uhh\x20Please,\x20Provide\x20New_Cmd\x20Name\x20First_*');if(global[_0x259a3b(0x137)][newAlias])return await citel[_0x259a3b(0x150)](_0x259a3b(0x148)+(isSticker?_0x259a3b(0x157):newAlias)+'\x22\x20Already\x20set\x20for\x20\x22'+global[_0x259a3b(0x137)][newAlias]+_0x259a3b(0x151)+(isSticker?'Sticker':_0x259a3b(0x143))+'_*');const cmd=sᴜʜᴀɪʟ_ᴍᴅ[_0x259a3b(0x146)][_0x259a3b(0x158)](_0x258c2d=>_0x258c2d[_0x259a3b(0x156)]===cmdName)||sᴜʜᴀɪʟ_ᴍᴅ[_0x259a3b(0x146)][_0x259a3b(0x158)](_0x23f1c1=>_0x23f1c1[_0x259a3b(0x13b)]&&_0x23f1c1[_0x259a3b(0x13b)][_0x259a3b(0x141)](cmdName));function _0x3f0c(){const _0x104f22=['*_Provided\x20Cmd(\x20','commands','*_Cmd\x20\x22','*_\x22','stickerMessage','fileSha256','\x22._*\x0a*_These\x20all\x20names\x20are\x20reset,\x20If\x20bot\x20restart_*','253980JzTuSs','\x22\x20Succesfully\x20set\x20to\x20\x22','quoted','877840yamrtX','send','\x22\x20Cmd,\x20Please\x20try\x20another\x20','split','3664530RpkdoT','reply','*_Uhh\x20Dear,\x20Give\x20Cmd\x20With\x20New\x20Name_*\x0a*Eg:\x20_.setcmd\x20New_Name,\x20Cmd_Name_*','pattern','Given\x20Sticker','find','495166mDpoZk','6xINmdC','13086BNCzbK','setCmdAlias','1679692iymroq','*_Please\x20provide\x20cmd\x20name\x20by\x20replying\x20a\x20Sticker_*','toLowerCase','alias','trim','10UxudvF','3556091FxLLuc','sticker-','length','includes','80YpCJNl','Name','96KXYmOk'];_0x3f0c=function(){return _0x104f22;};return _0x3f0c();}if(cmd)return global[_0x259a3b(0x137)][newAlias]=cmd[_0x259a3b(0x156)],await citel['send'](_0x259a3b(0x147)+global[_0x259a3b(0x137)][newAlias]+_0x259a3b(0x14d)+(isSticker?'Sticker':newAlias)+_0x259a3b(0x14b));else return await citel['send'](_0x259a3b(0x145)+cmdName+')\x20not\x20found\x20in\x20bot\x20cmds.\x20Please\x20Provide\x20Valid\x20cmd\x20Name_*');
  
        
  });
      //---------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
          pattern: "delcmd",
          desc: "To check ping",
          category: "general",
          filename: __filename,
      },
      async(Void, citel,text, { isCreator } ) => {
  const _0x524184=_0x10c3;function _0x10c3(_0x2e452d,_0x1ac35c){const _0x2610be=_0x2610();return _0x10c3=function(_0x10c395,_0x26abe2){_0x10c395=_0x10c395-0x172;let _0x2e5fb6=_0x2610be[_0x10c395];return _0x2e5fb6;},_0x10c3(_0x2e452d,_0x1ac35c);}(function(_0x16557,_0xbe3210){const _0xff9a45=_0x10c3,_0x5a11e6=_0x16557();while(!![]){try{const _0x26db40=-parseInt(_0xff9a45(0x185))/0x1+-parseInt(_0xff9a45(0x180))/0x2*(parseInt(_0xff9a45(0x186))/0x3)+parseInt(_0xff9a45(0x18b))/0x4*(parseInt(_0xff9a45(0x187))/0x5)+-parseInt(_0xff9a45(0x17f))/0x6+parseInt(_0xff9a45(0x183))/0x7*(parseInt(_0xff9a45(0x17e))/0x8)+parseInt(_0xff9a45(0x177))/0x9*(parseInt(_0xff9a45(0x189))/0xa)+-parseInt(_0xff9a45(0x18a))/0xb;if(_0x26db40===_0xbe3210)break;else _0x5a11e6['push'](_0x5a11e6['shift']());}catch(_0xf860bb){_0x5a11e6['push'](_0x5a11e6['shift']());}}}(_0x2610,0xe5013));function _0x2610(){const _0x59822a=['fileSha256','975933DOBIjx','\x22\x20deleted\x20Succesfully\x20at\x20\x22','257257ZLxGlJ','3581997Dkkdue','74850wtfIad','*_Please\x20reply\x20to\x20a\x20Sticker\x20that\x20set\x20for\x20a\x20Cmd_*','10rkZoVX','4773263OSdVAJ','476iQrYKP','stickerMessage','Sticker','*_\x22','sticker-','trim','8969733iJoDlG','quoted','setCmdAlias','Given\x20Sticker','mtype','\x22\x20cmd_*','cmd\x20Name','80DUaXQq','8094390uxZxYG','2hUflnY','send'];_0x2610=function(){return _0x59822a;};return _0x2610();}if(!isCreator)return await citel['reply'](tlang()['owner']);let Alias=text?text['split']('\x20')[_0x524184(0x176)]()['toLowerCase']():'',isSticker=![];if(citel[_0x524184(0x178)]){if(citel[_0x524184(0x178)][_0x524184(0x17b)]==_0x524184(0x172))isSticker=!![],Alias=_0x524184(0x175)+citel[_0x524184(0x178)][_0x524184(0x182)];else{if(!text)return await citel['send'](_0x524184(0x188));}}else{if(!text)return await citel[_0x524184(0x181)]('*_Uhh\x20Dear,\x20provide\x20Name\x20that\x20set\x20to\x20a\x20cmd_*\x0a*Eg:\x20_.delcmd\x20Cmd_Name_*');}if(global[_0x524184(0x179)][Alias]){await citel[_0x524184(0x181)](_0x524184(0x174)+(isSticker?_0x524184(0x17a):Alias)+_0x524184(0x184)+global[_0x524184(0x179)][Alias]+_0x524184(0x17c)),delete global[_0x524184(0x179)][Alias];return;}else return await citel['send'](_0x524184(0x174)+(isSticker?_0x524184(0x17a):Alias)+'\x22\x20not\x20Set\x20for\x20any\x20cmd._*\x0a\x20*_Please\x20Provide\x20Valid\x20'+(isSticker?_0x524184(0x173):_0x524184(0x17d))+'\x20to\x20delete_*');
      
    })
  
  //------------------------------------------------------------------------------------
  
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
          pattern: "ping",
          desc: "To check ping",
          category: "general",
          filename: __filename,
      },
      async(Void, citel) => {
          var inital = new Date().getTime();
          await citel.reply('*Testing Ping!!!*');
          var final = new Date().getTime();
          return await citel.reply('*Pong*\n *' + (final - inital) + ' ms* ');
      });
  
  
  //------------------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
              pattern: "help",
              alias: ["menu"],
              desc: "Help list",
              category: "general",
             // react: "👀",
              filename: __filename
          },
          async(Void, citel, text) => {
  const _0x3fc31d=_0x40b1;(function(_0x3800cd,_0x3de357){const _0x42bc7c=_0x40b1,_0x480304=_0x3800cd();while(!![]){try{const _0x2c9083=-parseInt(_0x42bc7c(0x1f5))/0x1+parseInt(_0x42bc7c(0x1f1))/0x2*(-parseInt(_0x42bc7c(0x1d9))/0x3)+-parseInt(_0x42bc7c(0x1e6))/0x4+parseInt(_0x42bc7c(0x1e4))/0x5*(parseInt(_0x42bc7c(0x1df))/0x6)+-parseInt(_0x42bc7c(0x1cf))/0x7*(-parseInt(_0x42bc7c(0x1e3))/0x8)+-parseInt(_0x42bc7c(0x1b9))/0x9+parseInt(_0x42bc7c(0x1d2))/0xa;if(_0x2c9083===_0x3de357)break;else _0x480304['push'](_0x480304['shift']());}catch(_0x1c7ec3){_0x480304['push'](_0x480304['shift']());}}}(_0x2d15,0x8ed11));const {commands}=require(_0x3fc31d(0x1db));function _0x2d15(){const _0x3dcbed=['\x20Uptime:-\x20','\x20Theme:-\x20','3IYCGJf','length','../lib','desc','╰━━━━━━━━━━━━━━──⊷','category','6ywGack','asia/karachi','*〽️Usage:*\x0a\x20```','Asia/karachi','8zshHwK','655285XBvYXA','*🍁Command:*\x20','2913192pJJFBk','』──❖\x0a','DD/MM/YYYY','\x0a└──────────────◉','freemem','toLowerCase','caption','\x20\x20》────⊷\x0a│\x20╭──────✧❁✧──────◆','```','map','*🧩Category:*\x20','461954NCDnWn','┌──『','pattern','\x20Date:-\x20','505551HaJHvT','random','push','join','use','totalmem','\x20Owner:-\x20','6840378BqAqwV','locale','menu','split','a17','format','╭────《\x20\x20','HH:mm:ss','alias','sendMessage','botname','*\x20]═──▸\x0a│╭────────────···▸\x0a┴│▸','┬│▸\x0a│╰─────────────···▸\x0a└───────────────···▸','*🧩Description:*\x20','\x20Mem:-\x20','chat','trim','〉───◆\x0a│╭─────────────···▸\x0a┴│▸','ownername','includes','\x20|\x20','aztec','42399CIXGKp','\x20Time:-\x20','setDefault','26727310gDeEPD','title','┌───═[\x20*','│\x20╰──────✧❁✧──────◆\x0a╰══════════════════⊷','*🧩Alias:*\x20'];_0x2d15=function(){return _0x3dcbed;};return _0x2d15();}if(text['split']('\x20')[0x0]){let arr=[];const cmd=commands['find'](_0x522249=>_0x522249[_0x3fc31d(0x1f3)]===text[_0x3fc31d(0x1bc)]('\x20')[0x0][_0x3fc31d(0x1eb)]());if(cmd){arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1e5)+cmd[_0x3fc31d(0x1f3)]);if(cmd['category'])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1f0)+cmd[_0x3fc31d(0x1de)]);if(cmd[_0x3fc31d(0x1c1)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1d6)+cmd[_0x3fc31d(0x1c1)]);if(cmd[_0x3fc31d(0x1dc)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1c6)+cmd[_0x3fc31d(0x1dc)]);if(cmd[_0x3fc31d(0x1b6)])arr[_0x3fc31d(0x1f7)](_0x3fc31d(0x1e1)+prefix+cmd[_0x3fc31d(0x1f3)]+'\x20'+cmd[_0x3fc31d(0x1b6)]+_0x3fc31d(0x1ee));return await citel['reply'](arr[_0x3fc31d(0x1f8)]('\x0a'));}}var up_up,up_mid,up_btm,ctgry_L,ctgry_R,cmd_L,ctgry_end;let default_menu=0x0;Config[_0x3fc31d(0x1bb)]===''&&(default_menu=Math['floor'](Math[_0x3fc31d(0x1f6)]()*0x3)+0x1);if(default_menu==0x1||Config['menu'][_0x3fc31d(0x1c9)]()['startsWith']('1')||Config[_0x3fc31d(0x1bb)]['toLowerCase']()[_0x3fc31d(0x1cc)](_0x3fc31d(0x1ce)))up_up='┏━━⟪\x20*'+Config[_0x3fc31d(0x1c3)]+'*\x20⟫━━⦿',up_mid='┃\x20✗',up_btm='┗━━━━━━━━━━━━━━━⦿',ctgry_L=_0x3fc31d(0x1f2),ctgry_R=_0x3fc31d(0x1e7),cmd_L=_0x3fc31d(0x1cd),ctgry_end=_0x3fc31d(0x1e9);else default_menu==0x2||Config[_0x3fc31d(0x1bb)][_0x3fc31d(0x1c9)]()['startsWith']('2')||Config[_0x3fc31d(0x1bb)][_0x3fc31d(0x1eb)]()[_0x3fc31d(0x1cc)](_0x3fc31d(0x1bd))?(up_up=_0x3fc31d(0x1d4)+Config[_0x3fc31d(0x1c3)]+_0x3fc31d(0x1c4),up_mid='⬡│▸',up_btm=_0x3fc31d(0x1c5),ctgry_L='┌───〈',ctgry_R=_0x3fc31d(0x1ca),cmd_L='⬡│▸\x20',ctgry_end='┬│▸\x0a│╰────────────···▸▸\x0a└───────────────···▸'):(up_up=_0x3fc31d(0x1bf)+Config[_0x3fc31d(0x1c3)]+_0x3fc31d(0x1ed),up_mid='│\x20│',up_btm=_0x3fc31d(0x1d5),ctgry_L='╭────❏',ctgry_R='❏',cmd_L='│',ctgry_end=_0x3fc31d(0x1dd));const cmds={};function _0x40b1(_0x599b07,_0x844e95){const _0x2d155e=_0x2d15();return _0x40b1=function(_0x40b135,_0x30f28c){_0x40b135=_0x40b135-0x1b6;let _0x909518=_0x2d155e[_0x40b135];return _0x909518;},_0x40b1(_0x599b07,_0x844e95);}commands[_0x3fc31d(0x1ef)](async(_0x423f50,_0xb3d1e7)=>{const _0x4cc0fe=_0x3fc31d;if(_0x423f50['dontAddCommandList']===![]&&_0x423f50[_0x4cc0fe(0x1f3)]!==undefined){if(!cmds[_0x423f50[_0x4cc0fe(0x1de)]])cmds[_0x423f50[_0x4cc0fe(0x1de)]]=[];cmds[_0x423f50[_0x4cc0fe(0x1de)]][_0x4cc0fe(0x1f7)](_0x423f50[_0x4cc0fe(0x1f3)]);}});const time=moment(moment())[_0x3fc31d(0x1be)](_0x3fc31d(0x1c0));moment['tz'][_0x3fc31d(0x1d1)](_0x3fc31d(0x1e2))[_0x3fc31d(0x1ba)]('id');const date=moment['tz'](_0x3fc31d(0x1e0))[_0x3fc31d(0x1be)](_0x3fc31d(0x1e8));let total=await sck1['countDocuments'](),str=up_up+'\x0a'+up_mid+_0x3fc31d(0x1d8)+tlang()[_0x3fc31d(0x1d3)]+'\x0a'+up_mid+_0x3fc31d(0x1b8)+Config[_0x3fc31d(0x1cb)]+'\x0a'+up_mid+'\x20Plugins:-\x20'+commands[_0x3fc31d(0x1da)]+'\x0a'+up_mid+_0x3fc31d(0x1d7)+runtime(process['uptime']())+'\x0a'+up_mid+_0x3fc31d(0x1c7)+formatp(os['totalmem']()-os[_0x3fc31d(0x1ea)]())+'/'+formatp(os[_0x3fc31d(0x1b7)]())+'\x0a'+up_mid+_0x3fc31d(0x1d0)+time+'\x0a'+up_mid+_0x3fc31d(0x1f4)+date+'\x0a'+up_btm+'\x0a\x0a';for(const category in cmds){str+=ctgry_L+'\x20*'+tiny(category)+'*\x20'+ctgry_R+'\x0a';if(text[_0x3fc31d(0x1eb)]()==category[_0x3fc31d(0x1eb)]()){str=ctgry_L+'\x20*'+tiny(category)+'*\x20'+ctgry_R+'\x0a';for(const plugins of cmds[category]){str+=cmd_L+'\x20'+fancytext(plugins,0x1)+'\x0a';}str+=ctgry_end+'\x0a';break;}else{for(const plugins of cmds[category]){str+=cmd_L+'\x20'+fancytext(plugins,0x1)+'\x0a';}str+=ctgry_end+'\x0a';}}str+=Config[_0x3fc31d(0x1ec)];let buttonMessaged={'image':{'url':await botpic()},'caption':str,'footer':tlang()['footer'],'headerType':0x4};return await Void[_0x3fc31d(0x1c2)](citel[_0x3fc31d(0x1c8)],buttonMessaged,{'quoted':citel});
  })
      //---------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
              pattern: "list",
              desc: "list menu",
              category: "general",
              react: "🥀"
           },
          async(Void, citel) => {
              const { commands } = require('../lib');
              let str = `
  ╭━━〘 *${Config.botname}* 〙────⊷     
  ┃ ✭ Theme: ${tlang().title}
  ┃ ✭ Prefix: ${prefix}
  ┃ ✭ Owner: ${Config.ownername}
  ┃ ✭ Commands: ${commands.length}
  ┃ ✭ Uptime: ${runtime(process.uptime())}
  ┃ ✭ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
  ╰━━━━━━━━━━━━━━⊷\n`
  
              for (let i = 0; i < commands.length; i++) 
              {
                   if(commands[i].pattern==undefined) continue
                   str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n`                // ${i+1} 
                   str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
              }
  
              
   
   //str += `╰━━━━━━━━━━━───⊷\nsᴜʜᴀɪʟ ᴛᴇᴄʜ ɪɴғᴏ \n www.youtube.com/c/SuhailTechInfo`
              return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str + Config.caption ,footer: tlang().footer, headerType: 4 })
          }
      )
      //---------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
          pattern: "owner",
          desc: "To check ping",
          category: "general",
          react: "💜",
          filename: __filename
      },
      async(Void, citel) => {
          const Config = require('../config')
          const thmb = await getBuffer(global.THUMB_IMAGE)
          const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
              'FN:' + Config.ownername + '\n' +
              'ORG:;\n' +
              'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
              'END:VCARD'
          let buttonMessaged = {
              contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
              contextInfo: {
                  externalAdReply: {
                      title: Config.ownername,
                      body: 'Touch here.',
                      renderLargerThumbnail: true,
                      thumbnailUrl: ``,
                      thumbnail: thmb,
                      mediaType: 1,
                      mediaUrl: '',
                      sourceUrl: `https://wa.me/+` + owner + '?text=Hii+bro,I+am+' + citel.pushName,
                  },
              },
          };
          return await Void.sendMessage(citel.chat, buttonMessaged, {   quoted: citel, });
  
      }
  )
  //------------------------------------------------------------------------------------
  const readDirectory = (text) => {
    return new Promise((resolve, reject) => {
      fs.readdir(text, (err, files) => {
        if (err) {reject('Error reading directory'); }
        else {
          //citel.reply("Files Here \n "+files.toString())
          resolve(files);
        }
      });
    });
  };
  //------------------------------------------------------------------------------------
  sᴜʜᴀɪʟ_ᴍᴅ.cmd({
      pattern: "file",
      desc: "to get extact name where that command is in repo.\nSo user can edit that.",
      category: "general",
      //react: "✨",
      filename: __filename
  },
  async(Void, citel, text ,{isCreator }) => {
   if(!isCreator) return citel.reply("*Ahh Sorry, Only Owner Can Use This Cmd*")
   if(!text) return citel.reply("*Uhh PLease, Provide A Command/Directory*")
   if(text.startsWith("."))
   {
      let res="*------------- FILE MANAGER -------------*\n"
      try {
            const files = await readDirectory(text);
            files.forEach(file => { res += file + '\n'; });
            await citel.reply(res.toString());
      } catch (error) {  citel.reply(error); }
        return;
   }
   
   
   const { commands } = require('../lib');
   
   let arr = [];
          const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
          if (!cmd) return await citel.reply("*❌No Such commands.*");
          else arr.push(`*🍁Command:* ${cmd.pattern}`);
          if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
          if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
          return await citel.reply(arr.join('\n'));
  
  
  })
  