const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7173391462:AAFHjNM_fpIglqtM6MnE_erCl3HvfdBHz00";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = " https://0fb7-2001-19f0-6c01-1ce7-5400-5ff-fe0d-4f0e.ngrok-free.app";
const community_link = "https://t.me/concept_developer"; 


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, Welcome to My Bot! Contact the Developer of this bot web app @concept_developer for your own projects today*
Tap on the coin and see token rise.
      
*THIS BOT Bot* is a Decentralized Exchange on the TON Blockchain. The biggest part of bot TOKEN distribution will occur among the players here.
      
Got friends, relatives, co-workers?
Bring them all into the game.
More buddies, more coins.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: urlSent } }],
              [{ text: "Join our Community", url: community_link }]
            
            ],
            in: true
        },
    });
  });
  
  
  
  bot.launch();
  
app.listen(3005, () => {
    console.log("server is me and now running")
})