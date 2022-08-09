module.exports = ({
    name: "reload",
    code: `
  $onlyPerms[administrator]
  $reboot[./index.js]
  $log[reloaded on $userTag[$clientID]]
  `
  });