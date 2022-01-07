import { Client } from "discord.js";
require("dotenv").config()

const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if (message.content.startsWith("-")) {
        message.reply("Hullo! Some command")
    }
})

client.login(process.env.TOKEN)