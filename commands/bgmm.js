const {TelegraPh , bgms  } = require('../lib/')


const ffmpeg = require('fluent-ffmpeg');
const axios = require('axios')
const { getBuffer, cmd , Config} = require('../lib/')
const fs = require('fs-extra');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
 
// -------------------------------------------------------------------


async function convertAudioToBlackScreenVideo(audioPath, outputPath) {
  try 
  {
    try{ fs.unlinkSync(outputPath);}catch (e) {}
    const getDurationCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 ${audioPath}`;
    const { stdout: durationOutput } = await exec(getDurationCmd);
    const duration = parseFloat(durationOutput);
    try{fs.unlinkSync('./blackScreen.mp4');}catch (e) {}
    const generateVideoCmd = `ffmpeg -f lavfi -i color=c=black:s=1280x720:d=${duration} -vf "format=yuv420p" ./blackScreen.mp4`;
    await exec(generateVideoCmd);
    const mergeCmd = `ffmpeg -i ./blackScreen.mp4 -i ${audioPath} -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 ${outputPath}`;
    await exec(mergeCmd);
    console.log('Audio converted to black screen video successfully!');
    return {result : true}
  } catch (error) {  console.error('An error occurred:', error); return {result : false }}
}
//------------------------------------------------------------------
cmd({
        pattern: "delbgm",
        desc: "create paste of text.",
        category: "general",
        filename: __filename,
    },
async(Void,citel,text)=>{
if(!text) return await citel.reply("*Give Me Song Name to Delete From BGM*")
 let bgmm= await bgms.findOne({ id:"3" }) || await new bgms({ id:"3"}).save();
//text = text.split(' ')[0];
if (bgmm.bgmArray.has(text)) {
  bgmm.bgmArray.delete(text);
  await bgmm.save();
  return await citel.reply('*Song _'+ text +'_ removed from BGM.*');
} else { return await citel.reply(`Name _'${text}'_ does not exist in BGM.`);}

  //await citel.reply("bgm Data  : " + bgmm)



})
///============================================================================
cmd({
        pattern: "allbgm",
        desc: "create paste of text.",
        category: "general",
        filename: __filename,
    },
async(Void,citel,text)=>{
 text = ' *BGM SONG INFORMATION*\n'
const {TelegraPh , bgm } = require('../lib/')
  let bgmm= await bgms.findOne({ id:"3" }) || await new bgms({ id:"3"}).save();
    for (const [name, url] of bgmm.bgmArray) 
    {
     text+=`*${name} :* _${url}_ \n`
    }
return await citel.reply(text);
  //await citel.reply("bgm Data  : " + bgmm)
})
///============================================================================
cmd({
        pattern: "addbgm",
        desc: "create paste of text.",
        category: "general",
        filename: __filename,
    },

async(Void,citel,text)=>
{
if(!citel.quoted) return await citel.reply("Uhh Please, Reply to Audio/Video To Add In Bgm")
  if(!text) return await citel.reply ("Uhh Please give Bgm Song NAme")
  
let isVideo = false ;
let path ='' ; 
if (citel.quoted.mtype == 'videoMessage') 
{
path = await Void.downloadAndSaveMediaMessage(citel.quoted)
 isVideo = true ;
}
else if (citel.quoted.mtype == 'audioMessage') 
{
 isVideo = false ;
let audioPath = await Void.downloadAndSaveMediaMessage(citel.quoted,'audio');
let res = await convertAudioToBlackScreenVideo(audioPath, './convertedVideo.mp4');
if(res.result) {path = "./convertedVideo.mp4"}
}
 else return await citel.reply("Uhh Please, Reply to Audio/Video To Add In Bgm")
if (!path) return await citel.reply("There's an Error While Adding Bgm Song")
 let url = await TelegraPh(path)
  let bgmm= await bgms.findOne({ id:"3" }) || await new bgms({ id:"3"}).save();
 try {
   //text = text.split(' ')[0];
    bgmm.bgmArray.set(text, url);
    await bgmm.save();
    return await citel.reply(`*New Song Added in BGM with Name : ${text}*`);
 } catch (error) { return await citel.reply('Error updating BGM:'+ error); }
//await citel.reply("bgmm data  :" + bgmm)


})




cmd({ on: "text" }, async (Void,citel,text)=> {
  if(Config.botbgm === 'true' &&  citel.text.length > 1)
  {
    let citelText = ` ${citel.text} ` ; 
     let bgmm= await bgms.findOne({ id:"3" }) || await new bgms({ id:"3"}).save();
    for (const [name, url] of bgmm.bgmArray) 
    {
      let newName = `${name} `; 
      if (citelText.toLowerCase().includes(newName)) {  return await Void.sendMessage(citel.chat,{audio: { url : url },mimetype: 'audio/mpeg',ptt: true,waveform: [99,75,25,00,00,00,00,00,00,00,00,00,05,25,50,75,99,75,50,25,00]})     }
    }
  }
})

