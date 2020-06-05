const TeleBot = require('telebot');
const bot = new TeleBot('1233602346:AAHtgDal0o6IlGlxz0LMdsO5dDTmNY5uil4');
bot.on('text', (msg) => {
  console.log('msg',msg);
  msg.reply.text(msg.text)
});

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));
// chat_id: number | string,
//         text: string,
//         opt?: {
//             parseMode?: string;
//             replyToMessage?: number;
//             replyMarkup?: any;
//             notification?: boolean;
//             webPreview?: boolean;
//         }
// bot.sendMessage(<chat_id>, <text>, {parseMode, replyToMessage, replyMarkup, notification, webPreview})
bot.on(/(show\s)?kitty*/, (msg) => {
  return msg.reply.photo('http://thecatapi.com/api/images/get');
});
bot.on('/pic', (msg) => {
  return msg.reply.photo('http://thecatapi.com/api/images/get');
});
bot.start();
