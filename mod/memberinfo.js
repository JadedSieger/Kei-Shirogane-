module.exports = ({
  name:"memberinfo",
   aliases:["mi","info"],
  code:`
$onlyPerms[administrator]
Your username and Server Nickname: $username , $nickname[$authorID]
Your ID: $authorID
Your discrim: $discriminator
Your Banner: $authorBanner
`
});