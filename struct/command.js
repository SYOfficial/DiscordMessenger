class Command {
    constructor(name) {
        if (name) this.name = name;
        else this.name = "";
        this.description = ""
        this.aliases = [];
        this.function = new Function(message, args, client)
        this.syntax = []
        this.shortcuts = []
    }
    setName(name) {
        this.name = name
    }
    setDescription(desc) {
        this.description = desc
    }
    setAliases(...aliases) {
        this.aliases = aliases
    }
    setFunction(func) {
        this.function = func
    }
    setShortcuts(...s) {
        this.shortcuts = s
    }
    addSyntax(syntaxName="argument", syntaxType="any", required=false) {
        this.syntax.push({name: syntaxName, type: syntaxType, required})
    }
    
}
module.exports = Command