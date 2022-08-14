module.exports = ({
  name:"daily",
  aliases:["d"],
  code:`
  $setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];500]]
$setGlobalUserVar[lootbox;$sum[$getGlobalUserVar[lootbox];1]]
  $globalCooldown [1d; You can claim again in \`%time%\`]
  **Welcome to the Adventurer's Guild** 
  Thanks for checking in today! Here's your Reward: **500 coins + 1 lootbox!**
  `
})