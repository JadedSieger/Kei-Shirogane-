module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check the money leaderboard",
    usage: "",
    category: "economy",
    code: `$title[Leaderboard]
    $color[RANDOM]
    $description[$globalUserLeaderboard[wallet;asc; {top} - **{username}**- ⏣{value}]]
    $cooldown[5s;A bit too fast there. Wait for **time%**!]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})