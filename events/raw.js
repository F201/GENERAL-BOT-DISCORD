module.exports = (client, event) => {
  // console.log(client.channels);
  const eventName = event.t;
  const channelId = event.d.channel_id;
  const messageId = event.d.message_id;
  const guildId = event.d.guild_id;
  if (channelId === '684506407831207988') {
    // console.log(event)
    let reactionChannel = client.channels.cache.find(channel => channel.id === channelId)
    reactionChannel.messages.fetch(messageId)
      .then(msg => {
        try {
          let reaction = msg.reactions.cache.find(react => react.name = event.d.emoji.name);
          // console.log(reaction)
          let guild = client.guilds.cache.find(guild => guild.id === guildId);
          let member = guild.members.cache.find(member => member.id === event.d.user_id);
          let role = guild.roles.cache.find(role => role.name === reaction.name)
          if (eventName === 'MESSAGE_REACTION_ADD' && role) {
            member.roles.add([role])
            let channel = member.createDM()
            channel.then(chan=> chan.send(`**${guild}**, Gave you the role!`))
          }
          else if (eventName === 'MESSAGE_REACTION_REMOVE' && role){
            member.roles.remove([role])
            let channel = member.createDM()
            channel.then(chan=> chan.send(`**${guild}**, Took away the role!`))
            // member.createDM.then(channel => channel.send(`${guild}, Took away the role!`))
          }
        } catch(err) {
          console.log(err)
        }
        // client.emit('messageReactionAdd', client, reaction, user);
      })
      .catch(err => {
        console.log(err);
      })
  }
}