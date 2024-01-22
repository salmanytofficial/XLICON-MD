//credits https://github.com/Sithuwa

var api = new Esana();
cmd({
  'pattern': "esana",
  'alias': ["esananews", "news"],
  'desc': "whatsapp beta infomation.",
  'category': "News",
  'react': "🗞️",
  'use': "<wbi>"
}, async (_0x4ac6b9, _0x6fd753, _0x71cdd9) => {
  try {
    const _0x2a6972 = await api.latest_id();
    const _0x4a8a33 = _0x2a6972.results.news_id;
    let _0x526d83 = _0x71cdd9 || _0x4a8a33;
    const _0x20a9a9 = await api.news(_0x526d83);
    const _0x25c740 = _0x20a9a9.results;
    const _0xc84f30 = await _0x4ac6b9.sendMessage(_0x6fd753.chat, {
      'image': {
        'url': _0x25c740.COVER
      },
      'caption': "\n*_|:̵🤹‍♂️ᴇꜱᴀɴᴀ ɴᴇᴡꜱ_* \n\n📚 ᴛɪᴛᴇʟ :  " + _0x25c740.TITLE + "\n\n📡 ᴅᴀᴛᴇ & ᴛɪᴍᴇ :  " + _0x25c740.PUBLISHED + "\n\n🖇️ ᴜʀʟ : " + _0x25c740.URL + "\n\n📃 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ : " + _0x25c740.DESCRIPTION + "\n\n*┗━━━━━━━━━━━━━━◆*\n\n ❄️ *_XLICON-MD_* ❄️\n👨‍🔧 _*CREATED BY SALMAN AHMAD*_ 👨‍🔧"
    }, {
      'quoted': _0x6fd753
    });
    await _0x4ac6b9.sendMessage(_0x6fd753.chat, {
      'react': {
        'text': '📃',
        'key': _0xc84f30.key
      }
    });
  } catch (_0x33fd38) {
    console.log(_0x33fd38);
    _0x6fd753.reply("❗ *" + _0x33fd38 + '*');
  }
});
