module.exports = (client, msg, event) => {
  // if (msg && event) {
  //   const eventName = event.t;
  //   const guildId = event.d.guild_id;
  //   let guild = client.guilds.cache.find(guild => guild.id === guildId);
  //   let member = guild.members.cache.find(member => member.id === event.d.user_id);
  //   let role = guild.roles.cache.find(role => role.name === msg.name)
  //   if (eventName === 'MESSAGE_REACTION_ADD' && !role) {
  //     console.log('added')
  //     return member.roles.add([role])
  //   }
  //   else if (eventName === 'MESSAGE_REACTION_REMOVE' && !role){
  //     return member.roles.remove([role])
  //   }
  // }
}