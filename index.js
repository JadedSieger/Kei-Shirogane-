const { LoadCommands, Bot }= require("aoi.js");
const config = require("./config.json");
const keepAlive = require("./server.js");

const bot = new Bot({
sharding: false,
token: config.token,
prefix: [config.token1, config.token2, config.token3],
intents: ["guilds", "guildMessage"]
});

const loader = new LoadCommands(bot);

//Ready Event:
bot.readyCommand({
    channel: " ",
    code:`
    _Initializing systems..._
$editIn[3s;██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 10%;███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 15%;█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 25%;████████▁▁▁▁▁▁▁▁▁▁▁▁ 40%;███████████▁▁▁▁▁▁▁▁▁ 55%;██████████████▁▁▁▁▁▁ 70%;██████████▄▁ 87%;█████████████▇ 99%;██████████ 100%;


_loaded "./Commands/dev/"_
_loaded "./Commands/fun/"_
_loaded "./Commands/moderation/"_

_checking server-side ping: $pingms_
**_Kei Shirogane v2.1.0a ready._**]
    `
});

//this is a normal bot command that does not use command handlers.
bot.command({
    name:"ping",
    code:`
    Griffin and Kryuger Database sent a response in $pingms
    `
});

//Sets status of the bot
bot.status({
    text:"Graveyard Shift- Mori Calliope ft BOOGEY VOXX",
    type:"STREAMING",
    url:"https://www.youtube.com/watch?v=TIgcVT4SfGw"
});

bot.onMessage({
    guildOnly : false
});

loader.load(bot.cmd, "./commands/dev/");
loader.load(bot.cmd, "./commands/fun/");
loader.load(bot.cmd, "./commands/mod/");

keepAlive();