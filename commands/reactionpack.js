/**
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                       
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                         █████╗ ██╗   ██╗██╗ █████╗ ████████╗ ██████╗ ██████╗     ███╗   ███╗██████╗                                 // 
//                        ██╔══██╗██║   ██║██║██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗    ████╗ ████║██╔══██╗                                //
//                        ███████║██║   ██║██║███████║   ██║   ██║   ██║██████╔╝    ██╔████╔██║██║  ██║                                //
//                        ██╔══██║╚██╗ ██╔╝██║██╔══██║   ██║   ██║   ██║██╔══██╗    ██║╚██╔╝██║██║  ██║                                //
//                        ██║  ██║ ╚████╔╝ ██║██║  ██║   ██║   ╚██████╔╝██║  ██║    ██║ ╚═╝ ██║██████╔╝                                //
//                        ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                                 //
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
//                                                                                                                                     // 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


*
   * @project_name : XLICON-MD
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : XLICON ,A Multi-functional whatsapp user bot.
   * @version 0.0.1
*
   * Licensed under the  GPL-3.0 License;
* 
   * Started on 6-aug-23.
   * © 2023 Xlicon-Md
* 
   * Introducing Xlicon-Md, It is designed to bring a whole new level of excitement to your boring WhatsApp use.
*


 amd({
        pattern: "reactionpack",
        category: "reaction",
        use: '<quote|reply|tag>',
    },
 **/

    const axios = require('axios')
    const { fetchJson,amd,sendAnimeReaction} = require('../lib')
    
    
    amd({pattern: "poke", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime poke reaction." },async(XLICON, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'poked to' , 'poked to everyone.' ) })
    //-----------------------------------------------------------------------
    amd({pattern: "hug",  category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hug reaction."  },async(XLICON, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'hug to' , 'hug with everyone.' ) })
    //-----------------------------------------------------------------------
    amd({pattern: "hold", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hand hold reaction."},async(XLICON, msg) => { await sendAnimeReaction(msg,'handhold', 'hold hand of' , 'holded hand of everyone' ) })
    //-----------------------------------------------------------------------
    amd({pattern: "hifi", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime hifi reaction."  },async(XLICON, msg) => { await sendAnimeReaction(msg,'highfive', 'highfive with' , 'highfive with everyone.' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "bite", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bite reaction."  },async(XLICON, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'bitten to' , 'bitten to everyone.' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "blush",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime blush reaction." },async(XLICON, msg ,text,  {cmdName}) => {await sendAnimeReaction(msg,cmdName, 'blushed to' , 'blushed to everyone.' )})
        //---------------------------------------------------------------------------
    amd({pattern: "punch",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime punch reaction." },async(XLICON, msg ) => {  await sendAnimeReaction(msg,'kick', 'punched to' , 'punched everyone.' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "pat",  category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime pated reaction." },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'patted with' , 'patted with everyone.' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "kiss", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime kiss reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kissed with' , 'kissed with everyone.' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "kill", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime kill reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kill ' , 'kill everyone over here' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "happy", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime happy reaction."},async(XLICON, msg) => {  await sendAnimeReaction(msg,'dance', 'feel happy with' , 'feel happy with everyone') })
        //---------------------------------------------------------------------------
    amd({pattern: "dance", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime dance reaction."},async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'dance with' , 'dance with everyone over here' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "yeet", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime yeet reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'yeeted to' , 'yeeted with everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "wink", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime wink reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'winked with' , 'winked with everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "slap", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime slap reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'slap to' , 'slap to everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "bonk", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bonk reaction."  },async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bonked to' , 'bonked to everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "bully", category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime bully reaction."},async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bullied to' , 'bullied to everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "cringe",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime cringe reaction."},async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cringed to' , 'cringed to everyone' ) })
        //---------------------------------------------------------------------------
    amd({pattern: "cuddle",category: "reaction", use: '<quote|reply|tag>', filename: __filename,  desc: "send Anime cuddle reaction."},async(XLICON, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cuddled with' , 'cuddled with everyone' ) })