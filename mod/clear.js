module.exports = ({
  name:"clear",
   aliases:["cl","remove"],
  code: `  
$onlyPerms[administrator]
$title[1; Messages cleared.]
$description[1; Nothing to see here lads.]
$image[1; https://tenor.com/view/fizzer1k-5597-3689-move-along-nothing-to-seehere-gif-12353147]
$clear[$message]
`
});