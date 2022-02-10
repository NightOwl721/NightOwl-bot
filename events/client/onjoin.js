const { MessageEmbed } = require("discord.js");

module.exports = client => {
    //if someone joins the server send a message
    client.on("guildMemberAdd", async member => {
        try {
            //send a message to a welcome channel
            let channel = member.guild.channels.cache.find(ch => ch.name === "Powitania");
            if (!channel) return;
            channel.send(new MessageEmbed()
                .setColor("#00ff00")
                .setTitle("Witaj na serwerze drogi uzytkowniku")
                .setDescription(`Witaj na serwerze ${member}`)
                .setFooter("Ten serwer uzywa bota Night Owl Bot")
            );


        }



        catch (e) {
            console.log(String(e.stack).bgRed);
        }
    });
}

