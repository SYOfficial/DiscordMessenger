const Discord = require("discord.js")
const klaw = require("klaw")
const path = require("path")
class Client extends Discord.Client {
    constructor(...a) {
        super(a);
        this.commands = new Discord.Collection;
        this.acceptedFiles = [".js", ".mjs"]
        this.load()
    }
    load() {
        this.commands = new Discord.Collection;
        const filePath = path.join("./commands")

        klaw(filePath).on("data", file => {
            const f = path.parse(file.path)
            if (!this.acceptedFiles.includes(f.ext)) return;
            const command = require(`${f.dir}/${f.base}`);
            this.commands.set(command.name, command)

        })
    }
    getCommand(name) {
        return this.commands.get(name) || this.commands.find(command => command.aliases.includes(name) || command.shortcuts.includes(name)) || null;
    }
}
module.exports = Client