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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94719123076";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_04_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQsXG4gICAgICAgIDg1LFxuICAgICAgICAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtU3VqOTZVWWFrU1BBRkdyQ0VSYk9abnNWVjNyWnlFT0dkOVRYTXV1SzcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJTmlraWtXY1R0cVFQSjVzaHQ5d2t3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM4NWUwOTU3LWMzYmEtNGUxOC1iYzM1LWQ1OGE3NTcyYjVmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTYsXG4gICAgICAzMCxcbiAgICAgIDIwLFxuICAgICAgMTMxLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgMjU1LFxuICAgICAgNzcsXG4gICAgICAxMjYsXG4gICAgICA5MyxcbiAgICAgIDcyLFxuICAgICAgMTEwLFxuICAgICAgMTMwLFxuICAgICAgMTY4LFxuICAgICAgMTA3LFxuICAgICAgMjUsXG4gICAgICAxLFxuICAgICAgMjA2LFxuICAgICAgMzcsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxOSxcbiAgICAgIDYyLFxuICAgICAgOTIsXG4gICAgICA1MCxcbiAgICAgIDE5NixcbiAgICAgIDIyOCxcbiAgICAgIDE4LFxuICAgICAgNjYsXG4gICAgICAxOTQsXG4gICAgICAwLFxuICAgICAgMTE3LFxuICAgICAgNCxcbiAgICAgIDE2NyxcbiAgICAgIDExNCxcbiAgICAgIDIyOSxcbiAgICAgIDcyLFxuICAgICAgMTY4LFxuICAgICAgMTQxLFxuICAgICAgMTE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk4zUFdYVlpFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxOTEyMzA3Njo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkluZGl3XCIsXG4gICAgXCJsaWRcIjogXCI2MDI1NDUxNTY4MzM1Mjo4M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMeS83N01FRU1PMnU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhtQXB0ekNYSExJMGthVDhja2lueGM2QUhnY3dKTmRXR3NMQWNmVnlIRk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZEtKR0xvb0hRVGJsWWEvUVBTVGkxNkxRMWNzaHpvVVV1QWNwQk5BTmRHbHJrUTJWdVZjZ1YrVGFXejB0Ukk1K0x6ejJZVmw5eHp1RVVCTk5keXhLQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaUs2MGtwR1cwTWdwaEJDTGhBS0g2S0xhdzU2bGVzVEV4Mi9PNkhpVUs5aUI1NjRjQkVBWWh3M09NUVFzdlFrdjN1TWgxb2wzcFZ6Y0JuZFZ0cFdIanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTkxMjMwNzY6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDYzODI3OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUd0bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR3RsLmpzb24iOiAie1wia2V5RGF0YVwiOlwieEEwM1FXbk5vQ09XL0l3ZEtpSUVEOE8zNnBOZVdYZEpGSTYxUW1YYjNNST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTgyNTIzMzE2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
