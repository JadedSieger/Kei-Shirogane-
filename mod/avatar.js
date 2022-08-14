module.exports = ({
    name: "avatar",
    aliases:["av","pfp"],
    code: `
        $description[1; <@$findMember[$message]>'s avatar]
        $image[1; $userAvatar[$findMember[$message]]]
        $onlyIf[$checkContains[$channelType;text;news]==true;]`
      
    });