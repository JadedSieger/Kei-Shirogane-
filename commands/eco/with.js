module.exports = ({
  name: 'withdraw',
  category: "Economy",
  usage: "kei!dep <amt>",
  aliases: ["with","w"],
  code: `$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet;$authorID];$message];$authorID]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank;$authorID];$message];$authorID]
$title[Withdrew]
$thumbnail[$userAvatar[$authorID]]
$color[RANDOM]
$description[
$username, you withdrew ⏣$numberSeparator[$message] from your bank!]
$onlyIf[$isNumber[$message[1]]==true;That's not a number!]
$onlyIf[$message<=$getGlobalUserVar[bank;$authorID];You don't have a blank check you know?!]
$argsCheck[1;How much are you withdrawing?]
$onlyIf[$getGlobalUserVar[bank;$authorID]>0;You're more broke than the controls on Panzer War]`
})