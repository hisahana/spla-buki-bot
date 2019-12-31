const Discord = require('discord.js');
const bukiset = require('./buki.json');
require('dotenv').config();

const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.isMentioned) return;
  if (!message.mentions.users.has(client.user.id)) return;
  const content = getRealContent(message.content);
  switch (content) {
    case 'buki':
      const channel = getConnectingChannel(message.guild.channels, message.author.id);
      if (channel !== void 0) {
        let text = '';
        channel.members.forEach(member => {
          text+= getMemberName(member) + ': ' + getBuki().name + '\n';
        });
        message.channel.send(text);
      } else {
        message.channel.send('接続中のチャンネルはありません。');
      }
      break;
  }
});

getConnectingChannel = (channels, userId) => {
  return channels.filter(
    channel => channel.type === 'voice'
  ).find(
    channel => channel.members.has(userId)
  );
}

getBuki = () => {
  return bukiset[Math.floor(Math.random() * bukiset.length)]
}

getMemberName = member => {
  return member.nickname ? member.nickname : member.user.username;
}

getRealContent = content => content.match(/(?<=<*> )(.*)/g)[0];

client.login(token);