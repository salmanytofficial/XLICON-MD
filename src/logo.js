const { tlang,cmd } = require('../lib')
 const Config = require('../config')
 const prefix = Config.prefix
 const maker = require('mumaker')
 
     //---------------------------------------------------------------------------
cmd({ pattern: "shiny", category: "textpro", desc: "Generates a shiny black 3D text effect logo with custom text.", usage: "shinytext [text]" }, async (message, match) => {
    let text = match[1];
    let url = `https://textpro.me/shiny-black-3d-text-effect-generator-1143.html?text=${encodeURIComponent(text)}`;
    message.sendMessage({ url: url });
});
//------------------------------------------------------------------------------------------
