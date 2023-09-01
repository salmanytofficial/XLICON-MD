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
   * @version 1.0.5
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

 **/

const { tlang, ffmpeg,smd } = require('../lib')
const fs = require('fs')
const { exec } = require('child_process')
//---------------------------------------------------------------------------
smd({
        pattern: "bass",
        desc: "adds bass in given sound",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Suhail, msg) => {
        let mime = msg.quoted.mtype
        let set = "-af equalizer=f=54:width_type=o:width=2:g=20";
        if (/audio/.test(mime)) {
            msg.send(tlang().wait);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.error(err);
                let buff = fs.readFileSync(ran);
                Suhail.bot.sendMessage(
                    msg.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: msg,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            msg.send(
                `Reply to the audio you want to change with*`
            );
    }
)
//---------------------------------------------------------------------------
smd({
        pattern: "blown",
        desc: "adds blown in given audio",
        category: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Suhail, msg) => {
        let mime = msg.quoted.mtype
        let set = "-af acrusher=.1:1:64:0:log";
        if (/audio/.test(mime)) {
            msg.send(tlang().wait);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.error(err);
                let buff = fs.readFileSync(ran);
                Suhail.bot.sendMessage(
                    msg.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: msg,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            msg.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
smd({
        pattern: "deep",
        desc: "adds deep effect in given audio",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Suhail, msg) => {
        let mime = msg.quoted.mtype
        let set = "-af atempo=4/4,asetrate=44500*2/3";
        if (/audio/.test(mime)) {
            msg.send(tlang().wait);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.error(err);
                let buff = fs.readFileSync(ran);
                Suhail.bot.sendMessage(
                    msg.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: msg,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            msg.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
smd({
        pattern: "fast",
        desc: "Adds fast(equilizer) in quoted audio.",
        category: "audio",
        use: '<reply to any audio>',
       // react:"✅",
    },
    async(Suhail, msg) => {
        let mime = msg.quoted.mtype
        let set = '-filter:a "atempo=1.63,asetrate=44100"';
        if (/audio/.test(mime)) {
            msg.send(tlang().wait);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.error(err);
                let buff = fs.readFileSync(ran);
                Suhail.bot.sendMessage(
                    msg.chat, {
                        audio: buff,
                        mimetype: "audio/mpeg",
                    }, {
                        quoted: msg,
                    }
                );
                fs.unlinkSync(ran);
            });
        } else
            msg.send(
                `Reply to the audio you want to change with.*`
            );
    }
)
//---------------------------------------------------------------------------
smd({
        pattern: "reverse",
        desc: "Adds reverse(equilizer) in quoted audio.",
        category: "audio",
        use: '<reply to any audio>',
      //  react:"✅",
    },
    async(Suhail, msg) => {
        let mime = msg.quoted.mtype
        let set = '-filter_complex "areverse"';
        if (/audio/.test(mime)) {
            msg.send(tlang().wait);
            let media = await Suhail.bot.downloadAndSaveMediaMessage(msg.quoted);
            let ran = msg.sender.slice(6) + (".mp3");
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media);
                if (err) return msg.error(err);
                let buff = fs.readFileSync(ran);
                Suhail.bot.sendMessage( msg.chat, {  audio: buff, mimetype: "audio/mpeg",}, { quoted: msg, });
                fs.unlinkSync(ran);
            });
        } else  msg.send(`Reply to the audio you want to change with.*`);
    }
)