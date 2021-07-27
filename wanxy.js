const Discord = require('discord.js');
const client = new Discord.Client();

// BOTUN OYNUYOR KISMI
client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setActivity(`botun oynuyor kısmı istediğiniz şeyi yazabilirsiniz`, {
      type: "STREAMING",
      url: "twitch url gireceksiniz"})
          .then(presence => console.log(`Oynuyor kısmı başaralı ile gerçekleşti ${presence.game ? presence.game.none : 'none'}`))
          .catch(console.error);
      });

// ELLEMEYİN
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// BURALARI KENDİNİZE GÖRE DOLDURUN EĞER ARTTIRMAK İSTERSENİZ;
// } İŞARETİNDEN SONRA; if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
//    msg.reply('cevap olarak yazacağı şey');
// }
// EKLEYEBİLİRSİNİZ EĞER TEK MESAJ İLE 2 CEVAP İSTERSENİZ İSE;
// msg.reply('cevap olarak yazacağın şey'); alt satırına; msg.reply('istediğiniz yazı'); YAZARAK CEVAPLARI ARTTIRABİLİRSİNİZ
// YAZILARIN BAŞ HARFLERİ HER ZAMAN KÜÇÜK OLMALIDIR
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }
  
  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }
  
  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }
  
  if (msg.content.toLowerCase() === 'buraya yazdığınız mesajı chate yazdığınız zaman alttaki cevabı verecek') {
    msg.reply('cevap olarak yazacağı şey');
  }

});

// BOTU SESE SOKMA
client.on("ready", () => {
  client.channels.cache.get('botun bağlanacağı ses kanal id').join();
  });

 // BOTUNUZUN TOKENİNİ GİRİN VE BU KISIM HER ZAMAN EN ALTTA OLSUN YOKSA BOTUNUZ ÇALIŞMAZ
client.login('botunuzun tokeni');
