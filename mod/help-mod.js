module.exports = ({
  name: "help-mod",
  code: `  
$addCmdReactions[✔️]
$noMentionMessage
$title[1;Hello $username! Welcome to v0.2.2 of Kei Shirogane!]
$description[1; You can use kei!, or mention the bot, or just use kei. to summon the bot

There are three command categories, you are currently accessing : >Commands/moderation

_e.g: kei!<command here>, @Kei Shirogane(Dev Test)<command here>, Kei<command here>_
]
$description[2; 
__**Here are the commands that Kei Shirogane v0.2.2 Provides**__

**announce**  __aliases: "am","imp"__
'usage: kei!announce <text>'
_Announcement Messages are sent through the bot in Embedded form._

**avatar** __aliases: "av","pfp"__
'usage: kei!avatar'
_ever wanted to see you avatar up close?_

**clear** __aliases: "cl","remove"__
'usage: kei!clear <amount>'
_I'm not a maid, but I'll do it anyways._

**slowmode** __aliases: "sm","slow"__
'usage: kei!slowmode <duration>'
_Bro, chill._

**memberinfo** __aliases: "mi","info"__
'usage: kei!memberinfo <user>'
_I'm my own FBI, thank you._

**ban** __aliases: "b"__
'usage: kei!ban <user>'
_OH NO I ACCIDENTALLY DROPPED THE BANHAMMER!!!_ ***or did I?***

**kick** __aliases: "ki","yeet"__
'usage: kei!kick <user>'
_I do this to people who look kickable. Yes I meant that physically and literally._

]
`
});