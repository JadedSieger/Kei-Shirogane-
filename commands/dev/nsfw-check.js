module.exports = ({
    name: "NSFW",
   aliases:["nc","nsfw?"],
      code: `
      Is the channel <#$mentionedChannels[1;yes]> NSFW?
      $channelNSFW[$mentionedChannels[1;yes]]
      `
  });