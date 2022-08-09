module.exports = ({
    name: "NSFW",
      code: `
      Is the channel <#$mentionedChannels[1;yes]> NSFW?
      $channelNSFW[$mentionedChannels[1;yes]]
      `
  });