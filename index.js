//Bot files
const { LoadCommands, Bot } = require("aoi.js");
const config = require('./config.json');
const keepAlive = require("./server.js");


const bot = new Bot({
  token: config.token,
  prefix: [config.prefix_1,config.prefix_2,config.prefix_3],
  intents: ["guilds", "guildMessages", "guildVoiceStates"],
});

const loader = new LoadCommands(bot);

//Ready Event
bot.readyCommand({
  channel: "989758108568023072",
  code: `
_Initializing systems..._
$editIn[3s;██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 10%;███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 15%;█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 25%;████████▁▁▁▁▁▁▁▁▁▁▁▁ 40%;███████████▁▁▁▁▁▁▁▁▁ 55%;██████████████▁▁▁▁▁▁ 70%;██████████▄▁ 87%;█████████████▇ 99%;██████████ 100%;


_loaded "./Commands/dev/"_
_loaded "./Commands/fun/"_
_loaded "./Commands/moderation/"_

_checking server-side ping: $pingms_
**_Kei Shirogane v2.1.0a ready._**]`
})

//testing commands
bot.command({
  name: "ping",
  code: `ponging at $pingms`
})
bot.command({
name: "slashcreate",
code: `
$createApplicationCommand[$guildID;test;a cool slash command for aoijs;true;slash;{
               "name" : "test",
               "description" : "sends a message",
               "type" : 3,
               "required" : true
      }]`
//This will make our slash command
})

bot.command({
name: "slash-say",
code: `
$createApplicationCommand[$guildID;say;a cool slash command for aoijs;true;slash;{
               "name" : "message",
               "description" : "sends a message",
               "type" : 3,
               "required" : true
      }]`
//This will make our slash command
})


bot.interactionCommand({
name: "test", //name of the slash command
prototype : 'slash',
code: `$interactionReply[Beta Feature Testing Successful!]` // code that will be executed if slash command triggered
})
bot.onInteractionCreate()

bot.interactionCommand({ //command
name: "say", //name of the slash command
prototype : 'slash',
code: `$interactionReply[
$slashOption[message]
]` // code that will be executed if slash command triggered
})
bot.onInteractionCreate() 

//For Bot utilities
bot.status({
  text: "end of a life- Mori Calliope",
  type:"STREAMING",
  url: "https://www.youtube.com/watch?v=BXB26PzV31k"
});

bot.onMessage({
  guildOnly : false
});

//voice.onTrackStart();

bot.variables({
  wallet: "0",
  bank: "0",
  money: "0",
  salary:"0",
  lootbox:"0",
  gold:"0",
  loot:"0",
});

loader.load(bot.cmd, "./commands/dev/");
loader.load(bot.cmd, "./commands/fun/");
loader.load(bot.cmd, "./commands/mod");
loader.load(bot.cmd, "./commands/misc");
loader.load(bot.cmd, "./commands/eco");
//bot cmds
//loader.load(voice.cmd, "./commands/voice/"); //voice cmds

keepAlive();
