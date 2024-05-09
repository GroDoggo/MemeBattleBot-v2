import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv'

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessageReactions] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// interaction pour chaque message
client.on("messageCreate", async message => {
  if (message.author.bot) {return;}
  
  /*
    si le message à des fichiers avec, on ajoute les emojis
    c'est possible de vérifier le type du fichier, mais au cas où je le fais pas
  */
  if (message.attachments.size > 0) {
      await message.react("👍")
      await message.react("👎")
      await message.react("⭐")
  }
})

client.login(process.env.DISCORD_TOKEN);