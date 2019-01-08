const Discord = require("discord.js")
const Client = require("./struct/client");
const config = require("./config")
const client = new Client({
    disableEveryone: true
})
client.on("ready", async()=> {
    console.log("ready! user: "+client.user.tag)
}) 
client.login("")