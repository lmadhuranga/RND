const TeleBot = require('telebot');
const bot = new TeleBot('1233602346:AAHtgDal0o6IlGlxz0LMdsO5dDTmNY5uil4');

// bot.sendMessage('-339277497', 'Server Connected !')

// bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

// bot.on('/pic', (msg) => {
//   return msg.reply.photo('http://thecatapi.com/api/images/get');
// });
// bot.on('sticker', (msg) => {
//   return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
// });

// bot.on(['/hellog'], (msg) => bot.sendMessage('-339277497', 'bot to group'));


// bot.on(['/helloc'], (msg) => console.log(msg));

allMsg = { 
  '/en_help':`Welcome to help desk how can i hlep you ? \n 
          /en_it - It issue computer 🖥️ issue \n 
          /en_call_fail - 📞 Phones not working \n
          /en_wifi_fail -  Not working internet\n 
          /en_lan_fail -  Not working internet\n `,
  '/en_call_fail':`Call 📞 not working \n 
          Check lights \n 
          Check wire with wall\n 
          Check wire with recier\n `,
  '/en_wifi_fail':`Wifi ⚡ \n 
          Check wifi router lights\n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n 
          Check wire with wifi\n `,
  '/en_lan_fail':`Lan faile \n 
          Check wifi router lights\n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n 
          Check wire with wifi\n `,
  '/en_it':`It Issue \n 
        /en_pc_fail - Isuue with PC 🖥️ \n
        /en_power_failure  Issue with power ⚡\n  
        /en_printer_failure  Issue with printer 🖨️ \n `, 
  '/en_pc_fail':`Lan faile \n 
          Computer not working \n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n`,
  '/en_power_failure':`Power fail \n 
      Restart the computer
      Check power cable ⚡ \n`,
  '/en_printer_failure':`Power fail ⚡ \n 
      1 Restart printer 🖨️
      2 Check power cable  ⚡\n`, 

  '/si_help':`Welcome to help desk කෙසේද සහය වෙන්නේ ඔබට ? \n 
          /si_it - It computer 🖥️ ප්‍රශ්නයක්ද ?  \n 
          /si_call_fail - Phones ☎️  ප්‍රශ්නයක්ද? \n
          /si_wifi_fail -  Wif 🖥️ ප්‍රශ්නයක්ද?\n 
          /si_lan_fail -  Interent ⚡ cable ප්‍රශ්නයක්ද?\n `,
  '/si_call_fail':`Call ප්‍රශ්නයක්ද? \n 
          Check lights\n 
          වයර් පරික්ශා කරන්න wall ⚡\n 
          වයර් පරික්ශා කරන්න recier ⚡\n `,
  '/si_wifi_fail':`Wifi \n 
          wifi එකේ  🔴 රතු හෝ 🟢 කොල එලි වැඩද බලන්න \n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n  `,
  '/si_lan_fail':`Lan faile \n 
          wifi එකේ 🔴 රතු හෝ 🟢  එලි වැඩද බලන්න\n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n `,
  '/si_it':`It Issue \n 
        /si_pc_fail - computer  🖥️ ප්‍රශ්නයක්ද \n
        /si_power_fail - ⚡ Current ප්‍රශ්නයක්ද  \n  
        /si_printer_fail - 🖨️ printer ප්‍රශ්නයක්ද  \n `, 
  '/si_pc_fail':`Lan faile \n 
          🖥️ Computer not working \n 
          more https://www.youtube.com/watch?v=WXbidC6q5-Y \n`,
  '/si_power_fail':`⚡ විදුලිය ප්‍රශ්නයක්ද ? \n 
      Restart 🖥️ computer
      සම්බන්දවී ඇති වයර් පරික්ශා කරන්න \n`,
  '/si_printer_fail':`Power fail  \n 
      1 Restart printer 🖨️
      2 සම්බන්දවී ඇති වයර් පරික්ශා කරන්න \n`, 
}


bot.on(/^\/\w+/, (msg, props) => {
  console.log('msg',msg);
  console.log('props',props);
  const selectedWord = props.match[0];
  return bot.sendMessage(msg.from.id, allMsg[selectedWord], { replyToMessage: msg.message_id });
});

bot.on(['/help'], (msg) => { 
  msg.reply.text(`
  Welcome to help desk how can i hlep you ? \n 
  /si_help - සින්හල  \n 
  /si_help - English  \n 
  `);
});



bot.start();
