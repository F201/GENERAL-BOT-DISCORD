module.exports = (client, msg) => {
  const { content } =msg
  const message = content
  const kenalanKuy = require('../commands/kenalanKuy');
  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (message.substring(0, 1) == '!') {
      let closestTag = message.indexOf(' ') < message.indexOf('\n') ? ' ' : '\n'
      var args = message.substring(1).split(closestTag);
      console.log(args)
      var cmd = args[0];
      args = args.splice(1);
      switch(cmd) {
          // !ping
          case 'ping':
            msg.reply('Pong!');
            break;
          case 'kenalankuy':
            kenalanKuy(msg, message);
            break;
          // Just add any case commands if you want to..
        }
    }
}