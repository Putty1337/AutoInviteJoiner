const axios = require('axios');
let url = 'https://discordservers.me/servers/tag/Nitro?&page=';
let webhook = 'Your webhook here';
let regex = /(discord.gg|discordapp.com\/invites)\/\w+/gi;

(async function () {

    let i = 1;

    setInterval(async () => {

        if (i === 564) return;

        let websiteData = await axios.default.get(url + i);
        let data = websiteData.data.match(regex);

        if (data) {
            data.forEach((invite, i) => {
                setTimeout ( async () => {
                    await axios.default.post(webhook, { content: invite  });
                }, i * 5000);
            });
        };

        i++;

    }, 60000)

})();
