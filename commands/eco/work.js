module.exports = ({
  name:"work",
  aliases:["wr"],
  code:`
$setGlobalUserVar[salary;$sum[$getGlobalUserVar[salary;$random[100;10000]]]]
$color[1;RANDOM]
$description[1; You became a $randomText[developer;thief;green groccer;doctor;security;walmart employee;keyboard warrior] and managed to get a salary of **$getGlobalUserVar[salary]**]
$setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];$random[500;20000]]]
  $globalCooldown[5m; You can work again in **%time%**]
  $onlyIf[$checkContains[$channelType;text;;news]==true;]
  `
})