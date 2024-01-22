//credits https://github.com/Sithuwa

const {
    cmd
  } = require("../lib");
  const hirunews = require("hirunews-scraper");
  cmd({
    'pattern': "hirunews",
    'category': 'News',
    'react': '📰',
    'filename': __filename
  }, async (_0x12a653, _0x4199b2, _0x8ee59b) => {
    const _0x505231 = await hirunews();
    const _0x3d7262 = "*_|:̵🤹‍♂️ʜɪʀᴜ ɴᴇᴡꜱ_* \n\n📚 ᴛɪᴛᴇʟ :  " + _0x505231.result.title + "\n\n📡 ᴅᴀᴛᴇ & ᴛɪᴍᴇ :  " + _0x505231.result.dateandtime + "\n\n🖇️ ᴜʀʟ : " + _0x505231.result.link + "\n\n📃 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : " + _0x505231.result.description + "\n\n*┗━━━━━━━━━━━━━━◆*\n\n XLICON 𝙼𝙳 ❄️\n𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 SALMAN AHMAD 😎";
    await _0x12a653.sendMessage(_0x4199b2.chat, {
      'image': {
        'url': _0x505231.result.image
      },
      'caption': _0x3d7262
    }, {
      'quoted': _0x4199b2
    });
  });
