const { Telegraf } = require('telegraf');
const fs = require('fs');
const path = require('path');

const bot = new Telegraf('6268184736:AAGbM06N6jQcZfAqbYRWM0frdoJ3RJmkRF8');

bot.start((ctx) => {
    const userId = ctx.from.id;
    const userName = ctx.from.first_name; // اسم المستخدم
  
    // رسالة الترحيب مع اسم المستخدم
    const welcomeMessage = `مرحباً ${userName} في مكتبة البرمجيات ، اختار نوع المادة التي تريد ملفاتها . `;
  
    ctx.reply(welcomeMessage, {
    reply_markup: {
      keyboard: [
        ['logic 1', 'logic 2'],
        ['Math 1', 'Math 2'],
        ['c++ 1', 'c++ 2'],
        ['computer applications', 'assembly'],
        ['discontinuous structures', 'democracy'],
        ['Statistics', 'Human rights'],
        ['Computational theory'],
        ['هل تود تزويدنا بالملفات ؟'],
        ['شكوى ، رأي ، ابلاغ ؟']
        
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

bot.hears('logic 1', (ctx) => {

  const directoryPath = path.join(__dirname, 'logic');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('logic 2', (ctx) => {
  const directoryPath = path.join(__dirname, 'logic2');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('Math 1', (ctx) => {
  const directoryPath = path.join(__dirname, 'math');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('Math 2', (ctx) => {
  const directoryPath = path.join(__dirname, 'math2');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('c++ 1', (ctx) => {
  const directoryPath = path.join(__dirname, 'c++');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('c++ 2', (ctx) => {
  const directoryPath = path.join(__dirname, 'c++2');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('computer applications', (ctx) => {
  const directoryPath = path.join(__dirname, 'computer applications');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('assembly', (ctx) => {
  const directoryPath = path.join(__dirname, 'assembly');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });

});

bot.hears('discontinuous structures', (ctx) => {
  const directoryPath = path.join(__dirname, 'discontinuous structures');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('democracy', (ctx) => {
  const directoryPath = path.join(__dirname, 'democracy');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('Statistics', (ctx) => {
  const directoryPath = path.join(__dirname, 'Statistics');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});

bot.hears('Human rights', (ctx) => {
  const directoryPath = path.join(__dirname, 'Human rights');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});
bot.hears('Computational theory', (ctx) => {
  const directoryPath = path.join(__dirname, 'Computational theory');
  const files = fs.readdirSync(directoryPath);
  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    ctx.telegram.sendDocument(ctx.chat.id, { source: filePath });
  });
});
bot.hears('هل تود تزويدنا بالملفات ؟', (ctx) => {
  ctx.reply(`إذا كنت ترغب في تزويدنا بالملفات، يرجى التواصل مع المطور ( @r1_7t ). 
  شكراً لمساعدتك 💙`);
});

bot.hears('شكوى ، رأي ، ابلاغ ؟', (ctx) => {
    ctx.reply(`اذا كان لديك اي شكوى او ابلاغ او رأي تود مشاركته تواصل مع المطور @r1_7t`);
  });

bot.launch();
