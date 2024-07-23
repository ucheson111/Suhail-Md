const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349138916225";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137817261";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA4LFxuICAgICAgICA5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUGJwTTQwejBJUUVUeEI4ZDNlNGIrTVdMZzhlRFVKNjZ1NENnMGtQTFl3ND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODE3MjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMUIzRDRGRDU2RDc4QzVFMTg0NzA4ODYxQjFGNDNCRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODQwNjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODE3MjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMEUyNEM0RjQ4NjUxQ0U1REIzRjY5MEJCRUY5QzUxOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODQwNjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODE3MjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODQzNDIxRkIyRDE5MDVDRENDOTAwNjc5QjgzMDYyQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODQwNzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM3ODE3MjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QjU2ODNDRTE1REUyNzZEMkFEOTcwRTFFNTNBNTNBN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1ODQwNzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWHFsUzZiRUxSRlNkRl9Va1Fsc19QQVwiLFxuICBcInBob25lSWRcIjogXCI0YzdlOWNmYy1iMjQwLTQ2NGYtYjA2ZC1jNDlkZjk3MTI4Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI5LFxuICAgICAgMTM3LFxuICAgICAgMTkxLFxuICAgICAgOTYsXG4gICAgICAxMTUsXG4gICAgICAzNyxcbiAgICAgIDE4NSxcbiAgICAgIDE5NCxcbiAgICAgIDEwMCxcbiAgICAgIDU3LFxuICAgICAgMjEsXG4gICAgICAyMDksXG4gICAgICAxNjcsXG4gICAgICA0MCxcbiAgICAgIDE5NixcbiAgICAgIDE0MSxcbiAgICAgIDM3LFxuICAgICAgNjUsXG4gICAgICAxMTcsXG4gICAgICAxNjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICAxNTAsXG4gICAgICAyMjcsXG4gICAgICAxMTUsXG4gICAgICAyMzAsXG4gICAgICAzOSxcbiAgICAgIDExOCxcbiAgICAgIDIzMCxcbiAgICAgIDI0MCxcbiAgICAgIDY5LFxuICAgICAgODEsXG4gICAgICA2MyxcbiAgICAgIDY3LFxuICAgICAgMTQ1LFxuICAgICAgMTQzLFxuICAgICAgMTY3LFxuICAgICAgMTIxLFxuICAgICAgNjIsXG4gICAgICAyMjgsXG4gICAgICAxNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlQxRkJDN0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzc4MTcyNjE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1NTg0MzM1MjAwNDc1OjcxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1yIENoaXNvbSDwn6W3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXlBaXNJQ0VMdVQ5YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0dTJKaDNVUW9pZmNGU1orakdXMndkWWxoOVhndGQ1UTAyeVdEMnNlLzNnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkE0Y29QZWNPZGFtUG5NcVVpR0Z2UFh6amp6NE9ncmJGUytGVnlhbnFtTEswUVlnN2FxK2Fjc2FqSU9JMUVLT3ZUbTdxaXdFTHJyb2RMUWNQSE1HckRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkt0aDlIWWFCTEhXV0hRbDJMajJlK204L1dlU3U4NjVtLzYra0Qva3B6dEtFczJrQUZoakxVSEpKTmJNZ1hzNmtFN1JYVWhGTldtZy9EeEdZenQ5RUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc4MTcyNjE6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNTg0MDYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVRmXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNVGYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYbHJoVzlBMVBVeGZiRlkwRlZ3OTVHdGpyVy9hWjRQb2x5Nmc2Qkw1OUpFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3NTQ0Njg2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNTg0MDY0NDQ1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Smile",
  packname: process.env.PACK_NAME || "😎",
  botname : process.env.BOT_NAME  || "SMILE-MD",
  ownername:process.env.OWNER_NAME|| "Mr Chisom🧞‍♂️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
