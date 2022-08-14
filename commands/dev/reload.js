module.exports = ({
    name: "reload",
   aliases:["rd","reboot"],
    code: `
  $onlyPerms[administrator]
  $reboot[./index.js]
  $log[reloaded on $userTag[$clientID]]
  `
  });