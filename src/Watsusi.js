//FILE CREDITS GOES TO excelottah6 OWNER OF IZUKU-MD

const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");
const Config = require('../config')

global.AFK = {
	isAfk: false,
	reason: false,
	lastseen: 0,
};

function _0x3a4c(){var _0x4a6217=['jid','Error\x20forwarding\x20the\x20WhatsApp\x20status.\x20Please\x20try\x20again.','whatsapp','quoted','1247244DIixQe','100fKKABe','11zSAkdf','reply','4013130rFaaIj','1662UiiPuE','error','11pByprh','1052760FaHCsC','11214IqFscq','549FGiSlU','*Uhh\x20Please,\x20reply\x20to\x20WhatsApp\x20status*','156MeVTFc','71358RBYpcU','Save\x20WhatsApp\x20message\x20','45912MghoHZ','15340uqyUlf'];_0x3a4c=function(){return _0x4a6217;};return _0x3a4c();}function _0x5f2e(_0x5d41f7,_0x420cff){var _0x3a4ce4=_0x3a4c();return _0x5f2e=function(_0x5f2e2c,_0x1d034b){_0x5f2e2c=_0x5f2e2c-0x1b4;var _0x29c8a3=_0x3a4ce4[_0x5f2e2c];return _0x29c8a3;},_0x5f2e(_0x5d41f7,_0x420cff);}var _0x111612=_0x5f2e;(function(_0x3ad2e5,_0x34a41c){var _0x4bc94e=_0x5f2e,_0x32b1ca=_0x3ad2e5();while(!![]){try{var _0x2fe498=-parseInt(_0x4bc94e(0x1c2))/0x1*(parseInt(_0x4bc94e(0x1bb))/0x2)+-parseInt(_0x4bc94e(0x1b8))/0x3*(-parseInt(_0x4bc94e(0x1c1))/0x4)+-parseInt(_0x4bc94e(0x1c8))/0x5+-parseInt(_0x4bc94e(0x1c5))/0x6*(parseInt(_0x4bc94e(0x1b4))/0x7)+parseInt(_0x4bc94e(0x1ba))/0x8*(-parseInt(_0x4bc94e(0x1b5))/0x9)+-parseInt(_0x4bc94e(0x1c4))/0xa*(parseInt(_0x4bc94e(0x1c7))/0xb)+-parseInt(_0x4bc94e(0x1c0))/0xc*(-parseInt(_0x4bc94e(0x1b7))/0xd);if(_0x2fe498===_0x34a41c)break;else _0x32b1ca['push'](_0x32b1ca['shift']());}catch(_0x265955){_0x32b1ca['push'](_0x32b1ca['shift']());}}}(_0x3a4c,0x55e52),cmd({'pattern':'save','desc':_0x111612(0x1b9),'category':_0x111612(0x1be),'filename':__filename},async(_0x484673,_0x402f77)=>{var _0x251a75=_0x111612;if(!_0x402f77[_0x251a75(0x1bf)])return await _0x484673[_0x251a75(0x1c3)](_0x251a75(0x1b6));try{return await _0x484673['copyNForward'](_0x402f77[_0x251a75(0x1bc)],_0x402f77[_0x251a75(0x1bf)]),await _0x484673['reply']('WhatsApp\x20status\x20saved\x20to\x20this\x20chat.');}catch(_0x57001f){return console[_0x251a75(0x1c6)](_0x57001f),await _0x484673[_0x251a75(0x1c3)](_0x251a75(0x1bd));}}));

var _0x378902=_0x287a;(function(_0x4680ec,_0x4d5d0a){var _0x246608=_0x287a,_0x5649b9=_0x4680ec();while(!![]){try{var _0x518f28=-parseInt(_0x246608(0x184))/0x1*(parseInt(_0x246608(0x178))/0x2)+-parseInt(_0x246608(0x175))/0x3*(parseInt(_0x246608(0x18f))/0x4)+parseInt(_0x246608(0x17b))/0x5*(-parseInt(_0x246608(0x183))/0x6)+parseInt(_0x246608(0x182))/0x7*(-parseInt(_0x246608(0x181))/0x8)+-parseInt(_0x246608(0x179))/0x9*(-parseInt(_0x246608(0x170))/0xa)+-parseInt(_0x246608(0x172))/0xb+parseInt(_0x246608(0x187))/0xc*(parseInt(_0x246608(0x17a))/0xd);if(_0x518f28===_0x4d5d0a)break;else _0x5649b9['push'](_0x5649b9['shift']());}catch(_0x54172c){_0x5649b9['push'](_0x5649b9['shift']());}}}(_0x82f6,0x95d36),cmd({'pattern':_0x378902(0x176),'fromMe':!![],'desc':_0x378902(0x186),'category':_0x378902(0x173)},async(_0x55d0ce,_0x288e9e,_0x39c6d0)=>{var _0x3b30d6=_0x378902;if(!global['AFK'])global[_0x3b30d6(0x188)]={};if(!global[_0x3b30d6(0x188)]['isAfk']&&!_0x39c6d0)return await _0x288e9e[_0x3b30d6(0x177)](_0x3b30d6(0x16f));if(!global[_0x3b30d6(0x188)]['isAfk']){if(_0x39c6d0)global['AFK'][_0x3b30d6(0x18c)]=_0x39c6d0;return global[_0x3b30d6(0x188)][_0x3b30d6(0x17e)]=!![],global[_0x3b30d6(0x188)][_0x3b30d6(0x18e)]=Math[_0x3b30d6(0x16d)](new Date()[_0x3b30d6(0x18a)]()/0x3e8),await _0x288e9e[_0x3b30d6(0x177)](_0x39c6d0['replace'](_0x3b30d6(0x180),Math[_0x3b30d6(0x16d)](new Date()['getTime']()/0x3e8)-global[_0x3b30d6(0x188)]['lastseen']));}}),cmd({'pattern':_0x378902(0x17f),'fromMe':!![],'desc':_0x378902(0x185),'category':_0x378902(0x173)},async(_0x155ecc,_0x4fce3e)=>{var _0x286c6e=_0x378902;if(!global[_0x286c6e(0x188)]||!global[_0x286c6e(0x188)][_0x286c6e(0x17e)])return await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x17c));return global[_0x286c6e(0x188)][_0x286c6e(0x17e)]=![],global['AFK'][_0x286c6e(0x18c)]=![],global[_0x286c6e(0x188)][_0x286c6e(0x18e)]=0x0,await _0x4fce3e[_0x286c6e(0x177)](_0x286c6e(0x189));}),cmd({'on':_0x378902(0x16e),'fromMe':![]},async(_0x23f24e,_0x481618,_0x47b467)=>{var _0x34f4c4=_0x378902;if(global[_0x34f4c4(0x188)]&&global['AFK'][_0x34f4c4(0x17e)]){if(_0x481618[_0x34f4c4(0x18d)]&&_0x47b467[_0x34f4c4(0x17d)]('@'+_0x481618[_0x34f4c4(0x171)]()[_0x34f4c4(0x174)]))await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);else!_0x481618['isGroup']&&await _0x481618[_0x34f4c4(0x177)](_0x34f4c4(0x18b)+global[_0x34f4c4(0x188)][_0x34f4c4(0x18c)]);}}));function _0x287a(_0x449d12,_0x3f07fd){var _0x82f6d2=_0x82f6();return _0x287a=function(_0x287aef,_0x4e8f46){_0x287aef=_0x287aef-0x16d;var _0x3a43d3=_0x82f6d2[_0x287aef];return _0x3a43d3;},_0x287a(_0x449d12,_0x3f07fd);}function _0x82f6(){var _0xce0be2=['Example:\x20My\x20owner\x20is\x20AFK\x0aLast\x20seen\x20before\x20#lastseen\x0aTo\x20turn\x20off\x20AFK,\x20send\x20a\x20message\x20again.','10UBuREx','getBotInfo','10505341himWUw','watsusi','username','3PIyfun','afk','reply','10964fmvqbW','547389hncKQD','111189zxeKIm','2544935cPaKrC','I\x20am\x20not\x20AFK.','includes','isAfk','delafk','#lastseen','2920552PkKwdt','21wEgrja','6yraRtH','127aQUhkr','turn\x20off\x20away\x20from\x20keyboard','away\x20from\x20keyboard','6156rauQkk','AFK','I\x20am\x20back!','getTime','I\x27m\x20currently\x20AFK.\x20Reason:\x20','reason','isGroup','lastseen','2317540Hrxsnf','round','text'];_0x82f6=function(){return _0xce0be2;};return _0x82f6();}
let antideleteOwners = new Set();

cmd({
    pattern: 'antidelete',
    fromMe: true,
    desc: 'Configure Anti-Delete preferences',
    category: 'admin',
}, async (Void, citel, text) => {
    const args = text.split(' | ');

    if (args.length === 1 && args[0].toLowerCase() === 'off') {
        antideleteOwners.delete(citel.sender.jid);
        return await citel.reply('Anti-Delete turned off.');
    }

    if (args.length === 1 && args[0].toLowerCase() === 'on') {
        antideleteOwners.add(citel.sender.jid);
        return await citel.reply('Anti-Delete turned on. Deleted messages will be sent to you.');
    } else {
        return await citel.reply('Invalid format. Example: antidelete on');
    }
});

cmd({
    on: 'text',
    fromMe: false,
}, async (Void, citel, text) => {
    if (antideleteOwners.size > 0 && citel.key.fromMe === false) {
        antideleteOwners.forEach(async ownerJID => {
            const deletedBy = citel.key.fromMe ? 'you' : citel.key.participant;
            const sentBy = citel.key.fromMe ? 'you' : citel.key.remoteJid;
            const messageText = text || 'N/A';

            const report = `🚫 *Someone delete a message!!*\n\n  *🚮 deleted by:* _${deletedBy}_\n  *✉️ Sent by:* _${sentBy}_\n  📩 *Message text:* \`\`\`${messageText}\`\`\``;

            await Void.sendMessage(ownerJID, report, citel.message);
        });
    }
});


cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  category : "watsusi",
}, async (Void, citel) => {
  if (!citel.isGroup) {
    await citel.reply("This command can only be used in a group.");
    return;
  }

  const groupJID = citel.chat;
  await citel.reply(`The JID of this group is: ${groupJID}`);
});



cmd({
  pattern: "groupbroad",
  fromMe: true,
  desc: "Send a broadcast message to the group",
  catergory: "owner",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; 

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});
