// Hi Buddy,
// Edit Anything Here Except ones Indicated "DO NOT"...
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.caption = "*©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*"; // Input Yours custom...(Maintain font for Flow)
global.api = "https://api.giftedtech.web.id/api"; // DO NOT Change this...
global.session = "https://pairing.giftedtech.web.id"; // DO NOT Change this....
global.footer = "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢɪғᴛᴇᴅ ᴛᴇᴄʜ*"; // Input Yours custom...(Maintain font for Flow)
global.myDb = "https://giftedmd.giftedtech.web.id"; // DO NOT Change this...
global.ytdl = "https://ytdl.giftedtech.web.id"; // You Can Change this...
global.giftedCdn = "https://cdn.giftedtech.web.id";
global.giftedRepo = "https://github.com/mauricegift/gifted-md";
global.giftedApiRepo = "https://api.github.com/repos/mauricegift/gifted-md";

module.exports = {
SESSION_ID: process.env.SESSION_ID || "Gifted~d10d8273abeccdc3d97c88df599581a6:8dbdf24e3fe35c159aa25432269f4fd3e87dd3a8f7dd88cd50d5d7d5fc2c44d81d70a7b09d4ea3efc2f53fbdb1919bb3ccc476b03563ff16bd0def667ffbc55f0437ca2840cb84fb6bbcff9b2c7b2498b14a4132f9b4a610008dbf663554350ebe86c084189adc6719bd92f3d4c598cabc15b513a994480d90769edfbd15afdb276b0e065f1424609fb59ce05fba27e34171536521105f2ccd4dcb57ef54bfda22443f84273df5554a59c9028c5d9b502eb537680beb72e622d841fa26b355240126aef7f073565bbc2f536aa568d1a4e806e41f0d72d89e921ff63aa413967db3dbc3c528997eb398754623673ff2bdc02ee0f313801cb63c068e52c4bd0ffc9fde8f14222cc45b86564df42a2f9c2b21146340ca06404ad8a992215288a68c274d9f2296e630a5bb7d7a5a86f96dff8f6ce140614af57247dfff3599e1ea0f80d3f029dd86848c3e36ae3d2011f6c3a8bda8382771d488f703ce8bc24ab007594f3db0fef5f2ab3807458d41b36be7b8af7e8d0a11d8ba5f1fb0cddf149253fd390e44ff76ca87ee5fedd8954269805f8796efc18b840da8a120543ad4f79928be66c743deb11993d47dd221cca86ebfe6d8b63c1b7feff3ebda8e8458599f3919fe7a12351098c12b8ee10ce846f2ebe608706f3e81e47ef2cb72310f9b9f66068787ced0f19a76aec3ad2b4ec49166523f763a4ebb55cf37024f6fdb3534d90a6229645e114f0a1e83594a93fa85bdd75d8d7f583d257d9348388ad37c2872794af11c3147bd3f7717827ec0a303ee4d751b09bf2fb6e6c57441c644083271dc31aaa7dd3f9d3a069c745117ff7c1de8e8656ded0b1f2af81f974ca0273d98b6efb490e23c68a601a07b031759fcc3255325d043eb3d9458def5d8b49897b515772c0709ed3c04646e37d359bf9d78976adec07c18c3c8bd9624f238d8a9b5e0db3cb478e43a63ef11547665553202b454075a77e7fd6ffb28ecd03d066928213c30cdadbf5bfd572e14084012a48964c3592f25a6dd27e0b6919cbbce70d47041bffb8757d3860baa130c53f7917cc7f8d4aeff9250eeda4b49931837aa963301db47ea668eadd294494408d99eb80b36cfcad50f0d9a1da07131006b3ecbeb5cf4fd0204777542435ac1ac575226c863bad93ab5ca8eca40aafb2c20aa0e59890ff689ddf3790ae0054943bb601cd962fac2959cf8a723434a1ea5dbb3bbbf37716f4d778fec9d50fb8c31b77ba720fafa6a3cd8eabbc5080fdf8e74fcb6d153b43ab83f2cf75bf86b5f8eb7bebbd5de1e5c93a5451ca25bf6c43b211a8962c6320998f3d74ddcae615ac871434d01fa48134164c849c094f9d92da19d20b38c17b97d99128fca87e6053be420550f1d20baf446ba07aaa687ceeacd8ae612f094b5e00ac1d3157cad4bbaa9f6fcae84efa53ea7493e72f67c7d0f8753bf911976d1b7c3cb30da483af7dce8dec893746b2b7cf4625aa28ced672de53f9f96c9e2311434de1b7bd693537a4b646a4375c9e8ed1d8abd16564ea0b70b5975ab98f8a0af1f4ea725b090a29c6c48d1922273ce4f25641da10d00a444c07560b0449ca59cb2b141e6f462dfb29b3a942fdacd80ce1cd1963b9cadaff9624f9af31b20b18beefb1336dfb73e2cbda5780cedd865678df1ab255a4045952ca5439ea4b4dda45734deecef2954f6ea1c02088876b16099a69ae9aec0aa721ea6844f093e1f84ef7281cf09c00357db357def6f19204263ebece938b23e99df3113fb119c5c98d825f408ffa51e4d55544ec4543a1324d5e0676431ca962e320576cb3b875f93f3e92fe757f485430f0179d81b26cf56a16027a0e535b0b7dea63b0eee804f77dd4a85091585cedc82bf91a974ab42b1042172068b31c3c3b8b53967446c8065451f20c89bc3136d56075b57cc4dcc0391dd8071c12c0404b282f34e6821ce09df3d676ec53ee1af33c273ae3c7b66ad9a8ed7f85593c0373f80e6176aa45593835d350f529e69adbbf37d8c8d6d09917c72e38af0218343cd3fd388f497264c4e7ba9fb59ad547422312b943d011374382de265d6a37c1695f6c1876982ccd0499fd4415f61e77f4b2a8ee08d8ffbad76835e56248c562b4de1900ce083aba9a175909d94fac9160c30a88702693b31c911af6c0aa287b2564cfc35be59fa710e24689402bbc4f1122fe35d19079cd454dd8967feeacf0926b06633fe5f4d8dd4161f09de129d0b90b8cec9e860332cbd5cb9889e82b66f291ed99bc10c03e6c1285033f3d127cc5fd4864c8da504590883be6be3c962868eb74cfe0bb3109a85f16e5b8d669ed3b20c71aa10b3e55721b75b6ccaf7fc72410256e74ff0e7fc8075197f41c5d5e98430b89c35642b34b66e818e3f64d6d44924a2ef26b12ae23537c00611f3f4e00866057ba60a7f564eab384c8d7b5ac8e2ceb2442e7dce35e9d63b845a497a39403994e5dcaa88b866678a991b93a1ac06c16757364f38d40dfd199498bec7e09b8ba62d1babc32d96f312531e102f68d69266147d292ade1520f23d3f266ce157b80617975c8266710c0981fb635e70a761e3f452a3842d8cc3f9a87055e88846bec94e419a77616d31b9112a3cdf33223eaa0ffc76081784058899aa00de82e7a57fe900228e8211dd9dd868cfe08695a1a4342ebe19cc61e0b6524a22360404ccfc9db39d74311b66439f64489fd85276086e9d5e124fdd846aa4423cafd011bed148821411b751b9e312c584a1610f57", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254788409105,254718835933", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || true, // make true to use antidelete 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💜,💛,❤️,🤍,🖤,💙", //Input Yours Custom...Can be One Emoji or Multiple Emojis
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by Gifted-Md!", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254788409105", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐆𝐈𝐅𝐓𝐄𝐃 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃💜", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "#",
VERSION: process.env.VERSION || "5.0.0",
ANTILINK: process.env.ANTILINK || "warn", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "true",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃", // Input Yours custom...(Maintain font for Flow)
BOT_PIC: process.env.BOT_PIC || "https://files.giftedtech.web.id/file/gifted-md.jpg", // You can Replace with yours...
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Gifted creates things that creates other things",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "true", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "212,79", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "recording", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
