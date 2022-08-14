module.exports = ({
  name: "use-lb",
  code: `
 
$setGlobalUserVar[loot;$sum[$getGlobalUserVar[loot];$random[10000;12000]]]  

$setGlobalUserVar[lootbox;$sub[$getGlobalUserVar[lootbox;$authorID];1];$authorID]

  $description[You opened a **Loot Box** and got **⏣$getGlobalUserVar[loot]**]
  $onlyIf[$getGlobalUserVar[lootbox]>=1;:thinking:**You don't own this item?**]
  $color[RANDOM]
$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];$getGlobalUserVar[loot]]]`
 
})