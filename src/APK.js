credits https://github.com/Sithuwa


cmd({
    'pattern': "downapk",
    'alias': ['ps', "apk", 'playstore'],
    'desc': "download playstore app",
    'react': '💣',
    'category': "downloader",
    'filename': __filename
  }, async (_0x508ab6, _0x1db957, _0x45843a) => {
    if (!_0x45843a) {
      return;
    }
    try {
      let _0x23665d = await download(_0x45843a);
      const _0x14e1f3 = _0x23665d.dllink;
      const _0x203b11 = _0x23665d.name;
      const _0x49a431 = _0x23665d.icon;
      const _0x313d10 = _0x23665d.lastup;
      const _0x398a0a = _0x23665d["package"];
      const _0x3c7ff1 = _0x23665d.size;
      await _0x508ab6.sendMessage(_0x1db957.chat, {
        'image': {
          'url': _0x49a431
        },
        'caption': "      \n \n━━━━━━━━━━━━━━━\n  XLICON-MD APK DOWNLOADER\n━━━━━━━━━━━━━━━┓       \n\n|:̵🧙🏼‍♂️ ᴘʟᴀʏ ꜱᴛᴏʀᴇ ᴅᴏᴡɴʟᴏᴀᴅ           \n\n|:̵🧙🏼‍♂️ ᴀᴘᴘ ɴᴀᴍᴇ: " + _0x203b11 + "           \n\n|:̵🤴‍♂️ ʟᴀꜱᴛ ᴜᴘᴅᴀᴛᴇ: " + _0x313d10 + "          \n\n|:̵👼🏼‍♂️ ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ: " + _0x398a0a + "             \n\n|:̵🧙🏼‍♂️ ꜰɪʟᴇ ꜱɪᴢᴇ: " + _0x3c7ff1 + " \n\n━━━━━━━━━━━━━━━┛\n     👨‍🔧 _*ᴄʀᴇᴀᴛᴇᴅ ʙʏ SALMAN AHMAD*_ 👨‍🔧"
      });
      return _0x508ab6.sendMessage(_0x1db957.chat, {
        'document': {
          'url': _0x14e1f3
        },
        'mimetype': "application/vnd.android.package-archive",
        'fileName': _0x203b11
      }, {
        'quoted': _0x1db957
      });
    } catch (_0x1de39c) {
      console.error(_0x1de39c);
      _0x1db957.reply("*🥷⃟❎ An error occurred while processing your request. Please try again later." + _0x1de39c + '*');
    }
  });
