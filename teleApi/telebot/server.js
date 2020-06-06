const TeleBot = require('telebot');
const bot = new TeleBot('1233602346:AAHtgDal0o6IlGlxz0LMdsO5dDTmNY5uil4');

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.mod('text', (data) => {
  let msg = data.message;
  msg.text = `📢 ${ msg.text }`;
  return data;
}); 

bot.on('/pic', (msg) => {
  return msg.reply.photo('http://thecatapi.com/api/images/get');
});
bot.on('sticker', (msg) => {
  return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});

bot.on(['/hellog'], (msg) => bot.sendMessage('-339277497', 'bot to group'));


bot.on(['/helloc'], (msg) => console.log(msg));


bot.start();
