/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : XLICON-MD
 * @author : SalmanYtOfficial <https://github.com/salmanytofficial>
 * @description : XLICON,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const { dare, truth, random_question } = require('../lib/truth-dare.js')
const axios = require('axios')
const { cmd } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "question",
            desc: "Random Question.",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${random_question()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "truth",
            desc: "truth and dare(truth game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "dare",
            desc: "truth and dare(dare game.).",
            category: "fun",
            filename: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "fact",
        desc: "Sends fact in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return citel.reply(`*Fact:* ${data.fact}\n\n*Powered by Xlicon*`)   
    }

    
)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "quotes",
        desc: "Sends quotes in chat.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        var quoo = await axios.get(`https://favqs.com/api/qotd`)
        const replyf = `
╔════◇
║ *🎯Content:* ${quoo.data.quote.body}
║ *👤Author:* ${quoo.data.quote.author}
║
╚════════════╝ `
return citel.reply(replyf)
    }

)
    //---------------------------------------------------------------------------
    cmd({
        pattern: "define",
        desc: "urban dictionary.",
        category: "fun",
        filename: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            Word: ${text}
            Definition: ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            Example: ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)

 //---------------------------------------------------------------------------

/* cmd({
  pattern: "age",
  desc: 'Estimate the age based on a given name',
  catergory: "fun",
  fromMe: true,
},
  async (Void, citel, text) => {
    if (!text) {
      return citel.reply, 'Please provide a name for age estimation.')
    };
    try {
      const response = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
      
      const { name: agifyName, age } = response.data;
      
      if (age) {
        return citel.reply, `Based on the name "${agifyName}", the estimated age is ${age} years.`);
      } else {
        return await citel.reply, `Unable to estimate age for the name "${agifyName}".`);
      }
    } catch (error) {
      console.error(error);
      return await citel.reply, 'Error estimating age. Please try again later.');
    }
  }
);
*/

 //---------------------------------------------------------------------------
