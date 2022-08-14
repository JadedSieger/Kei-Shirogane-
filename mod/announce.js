module.exports = ({
    name: "announce",
   aliases:["am","imp"],
    code: `
  $color[1;$randomText[#f000;#FF0000]]
  $footer[1; Author:$username]
  $description[1;$message]
  `
  });