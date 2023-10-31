const { cmd } = require('../lib');
const { updateProfilePicture, forwardMessage } = require("../lib");

cmd({
    pattern: "save",
    desc: "Save WhatsApp status.",
    category: "watsusi",
    filename: __filename,
},
async (Void, citel, text) => {
    if (!citel.quoted) return await citel.reply("*Uhh Please, reply to WhatsApp status*");
    const chatOrUserId = citel.sender;
    return await forwardMessage(chatOrUserId, Void, citel, "status");
});


cmd({
  pattern: "gjid",
  fromMe: true,
  desc: "Get the JID of the current group",
  type: "watsusi",
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
  catergory: "misc",
}, async (Void, citel, text) => {
  if (!text) return await citel.reply("_Please provide a message to broadcast_");

  const groupJid = "120363193106986276@g.us"; // Replace with the JID of your group

  await Void.sendMessage(groupJid, text);

  return await citel.reply("_Broadcast sent successfully_");
});
