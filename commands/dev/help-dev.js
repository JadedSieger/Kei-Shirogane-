module.exports = ({
  name: "help-dev",
  code: `  
$addCmdReactions[✔️]
$noMentionMessage
$title[1;Hello $username! Welcome to v0.2.2 of Kei Shirogane!]
$description[1; You can use kei!, or mention the bot, or just use kei. to summon the bot

There are three command categories, you are currently accessing : >Commands/dev

_e.g: kei!<command here>, @Kei Shirogane(Dev Test)<command here>, Kei<command here>_
]
$description[2; 
__**Here are the commands that Kei Shirogane v0.2.2 Provides**__

**Kei Shirogane for Developers and Server Owners** __aliases: None__
'usage: kei!adminvite'
_In case you would love it when I'm present._

**Bot Avatar** __aliases: "sa","avatarset"__
'usage: kei!botAvatar <url>'
_Only SimpCast Productions can change it though._

**discord.js Eval** __aliases: "djse","js-eval"__
'usage: kei!djseval <code>'
_I'm not a maid, but I'll do it anyways._

**dm** __aliases: None__
'usage: kei!dm <user> <text>'
_Man, you gotta grow some strength._

**Eval** __aliases: None__
'usage: kei!eval <code>'
_Only I can use this hehe. - Yoshi, Head Dev._

**filesize** __aliases: "fs","size"__
'usage: kei!filesize <path and command>'
_Wow. That's large._

**reload** __aliases: "rd","reboot"__
'usage: kei!reload'
_Have you tried turning it on and off again?._

**ping** __aliases: None__
'usage: dt!ping'
_You're currently playing Ping Pong with Kei._

**Updating the Command Handler** __aliases: "cu","update"__
'usage: kei!chUpdate'
_Oh yeah I do love infinite resets._

__Note: Anything related to member counts have been removed.__
]
`
});