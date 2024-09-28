const {
  command,
  getUrl,
  isIgUrl,
  isPrivate,
  getJson,
} = require("../../lib");
command(
  {
    pattern: "insta",
    fromMe: isPrivate,
    desc: "To download instagram media",
    type: "user",
  },
  async (message, match, m) => {
    match = match || message.reply_message.text;
    if (!match) return await message.sendMessage(message.jid, "Give me a link");
    const url = getUrl(match.trim())[0];
    if (!url) return await message.sendMessage(message.jid, "Invalid link");
    if (!isIgUrl(url))
      return await message.sendMessage(message.jid, "Invalid Instagram link");
    if (!isIgUrl(match.trim()))
      return await message.sendMessage(message.jid, "Invalid Instagram link");
    try {
      const respn = await getJson(
        `https://viper.xasena.me/api/insta?url=${url}`
      );

      if (respn.data?.length == 0)
        return await message.sendMessage(
          message.jid,
          "No media found on the link"
        );
        for (let i of respn.data) {
          await message.sendMessage(message.jid, i.url, {
            quoted: m
          }, i.type)
        }
    } catch (e) {
      await message.sendMessage(message.jid, "Error: " + e);
    }
  }
);

command(
  {
    pattern: "terabox",
    fromMe: isPrivate,
    desc: "To download terabox media",
    type: "user",
  },
  async (message, match, m) => {
    match = match || message.reply_message.text;
    if (!match) return await message.sendMessage(message.jid, "Give me a link");
    const url = getUrl(match.trim())[0];
    if (!url) return await message.sendMessage(message.jid, "Invalid link");

    try {
      const respn = await getJson(
        `http://viper.xasena.me/api/terabox?url=${url}`
      );

     
        return await message.sendMessage(
          message.jid,
          "No media found on the link"
        );
        for (let i of respn.data) {
          await message.sendMessage(message.jid, i.url, {
            quoted: m
          }, i.type)
        }
    } catch (e) {
      await message.sendMessage(message.jid, "Error: " + e);
    }
  }
);

