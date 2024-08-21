const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2347067161378"
global.ownername = "꧁༒☬𝓞𝔀𝓮𝓷 𝓖𝓪𝓫𝓻𝓲𝓮𝓵 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵☬༒꧂"
global.ytname = "YT: Owen Gabriel"
global.socialm = "GitHub: Owen-Gabriel"
global.location = "Nigerian"

global.ownernumber = '2347067161378'  //creator number
global.ownername = 'Owen Gabriel' //owner name
global.botname = '𝓞𝔀𝓮𝓷 𝓖𝓪𝓫𝓻𝓲𝓮𝓵 bot' //name of the bot

//sticker details
global.stickername = '꧁༒☬𝓞𝔀𝓮𝓷 𝓖𝓪𝓫𝓻𝓲𝓮𝓵☬༒꧂'
global.packname = 'Sticker By Owen Gabriel'
global.author = '꧁༒☬𝓞𝔀𝓮𝓷 𝓖𝓪𝓫𝓻𝓲𝓮𝓵 𝓞𝓯𝓯𝓲𝓬𝓲𝓪𝓵☬༒꧂'
//console view/theme
global.themeemoji = '💙'
global.wm = "Owen Gabriel"

//theme link
global.link = '' // if you want to send bot reply with group link then put your link here 🌿 
global.support = 'https://chat.whatsapp.com/DYp7FwfL9xsKURihcdT0l8'
//custom prefix
global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    pm: ' 📍*sorry darling* Bot wont work in private darling📍 \n\n https://chat.whatsapp.com/FoS7pSPtfMqBuoireK4aAJ',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
