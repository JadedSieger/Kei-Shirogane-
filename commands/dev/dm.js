module.exports = ({
    name: "dm",
    code: `
  $onlyPerms[administrator]
  $dm[$mentioned[1]] $message
  `
  });