module.exports = {
    name: "sendall",
    category: "Owner",
    aliases: ["sendall", "sendallembed"],
    cooldown: 2,
    usage: "sendall <treść>",
    description: "Wysyła wiadomośc do wszystkich serwerów na których jest bot",
    run: async (client, message, args, user, text, prefix) => {
        //get the arg from user
        let arg = args.join(" ");
        //check if the arg is empty
        if (!arg) return message.channel.send(`${message.author}, podaj treść wiadomości!`);
        //send the message to all servers
        client.guilds.cache.forEach(guild => {
            guild.channels.cache.forEach(channel => {
                if (channel.type === "text") {
                    channel.send(arg);
                }
            });
        });
    }
}