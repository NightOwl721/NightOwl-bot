const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "info",
    category: "Information",
    aliases: ["i"],
    cooldown: 2,
    usage: "info",
    description: "Wyswietla informacje o tobie",
    run: async (client, message, args, user, text, prefix) => {

        try {
            //create embed with info about user
            let embed = new MessageEmbed()
                .setColor(ee.color)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`Informacje o użytkowniku ${message.author.tag}`)
                .setThumbnail("https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".png")
                .addField("ID", user.id, true)
                .addField("Nick", message.author.tag, true)
                .addField("Data utworzenia konta", user.joinedAt, true)
                .addField("Data ostatniego wejścia", message.member.joinedAt, true)
                .addField("Data ostatniego wysłania wiadomości", message.createdAt, true)
            if (message.member.roles.cache.size > 0) {
                let roles = message.member.roles.cache.map(r => r.name).join(", ");
                embed.addField("Role", roles, true);
            } else {
                embed.addField("Role", "Brak", true);
            }

            message.channel.send(embed)
        } catch (e) {
            console.log(String(e.stack).bgRed)
            message.channel.send(new MessageEmbed()
                .setColor(ee.wrongcolor)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`❌ ERROR | Coś poszło nie tak`)
                .setDescription(`\`\`\`${e.stack}\`\`\``)
            );


        }


    }
}
