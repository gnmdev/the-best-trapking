const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json"); //loads up config.json into variable config.
//const fs = require("fs")



client.on("ready", () => {
  console.log("I am ready!");
});





client.on("message", (message) => {
  //Exit and stop if prefix not there or if user is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

/*  if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;

    //Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  } */

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else

  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(config.token);
