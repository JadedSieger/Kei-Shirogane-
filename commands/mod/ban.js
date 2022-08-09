module.exports = ({
    name:"ban",
    code:`
  $onlyPerms[administrator]
  $title[1; Someone got hit by the Banhammer!]
  $description[1; The Banhammer fell on $username[$mentioned]. He is now banned from the server. Imagine if he was actually a speedrunner (This would be his personal best.)]
  $image[1; $randomText[https://tenor.com/view/thor-avengers-banned-discord-ban-hammer-gif-16215287;https://tenor.com/view/ban-hammer-futurama-scruffy-gif-20750885;https://tenor.com/view/lycandough-1984-blackpilled-literally1984-kaysol-gif-25860076;https://tenor.com/view/subscribe-to-my-onlyfans-onlybans-banned-ban-gif-20504981;https://tenor.com/view/ban-hammer-cinzou-ban-banido-look-gif-17786909;https://tenor.com/view/sao-liz-lisbeth-anime-ban-gif-14368031;https://tenor.com/view/banhammer-fight-hammer-gildraen-thor-gif-25721392;https://tenor.com/view/ban-banned-administrator-admin-moderator-gif-18223846]]
  $ban[$guildID;$mentioned[1];0;$noMentionMessage]
  `
  });