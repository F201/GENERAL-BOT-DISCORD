module.exports = (message, msgContent) => {
  console.log(message.channel.id, message.channel.name)
  if (message.channel.name !== 'kenalan-kuy' && message.channel.name !== 'bot-testing') {
    return message.reply(`Command not available!`).then(replyMsg => {
      replyMsg.delete({timeout: 7000});
    });
  }
  const userMessage = msgContent.substring(1+'kenalankuy'.length);
  const idxConstName = userMessage.toLowerCase().indexOf('nama:');
  if (idxConstName === -1){
    message.delete({timeout: 2000});
    return message.reply(`Wrong Command, please repeat introduction!`).then(replyMsg => {
      replyMsg.delete({timeout: 5000});
    });
  }
  const nameStart = userMessage.indexOf(' ', idxConstName)+1;
  const nameEnd = userMessage.indexOf('\n', idxConstName);
  const name = userMessage.substring(nameStart, nameEnd !== -1 ? nameEnd : userMessage.length);
  console.log('TObe change to:', name,' len:', name.length, name.length > 32)
  if (!name || nameStart > nameEnd) {
    console.log('trow eerr')
    message.delete({timeout: 7000});
    return message.reply(`Wrong Command, please repeat introduction!`).then(replyMsg => {
      replyMsg.delete({timeout: 7000});
    });
  }
  if (name.length > 32) {
    console.log('trow eerr')
    message.delete({timeout: 7000});
    return message.reply(`Wrong Command, name must 32 or fewer in length`).then(replyMsg => {
      replyMsg.delete({timeout: 7000});
    });
  }
  console.log('good')
  role = message.guild.roles.cache.find(role => role.name === 'Schütze (Intern)')
  message.member.setNickname(name);
  message.member.roles.add([role]);
  let channel = message.guild.channels.cache.find(channel => channel.name === "pilih-divisi")
  return message.reply(`Salam diterima.
  Klik channel berikut ${channel}
  untuk mengakhiri registrasi rumah digital RPLGDC.`);
}