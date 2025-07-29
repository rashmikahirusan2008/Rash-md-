const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "9AAyUSQD#lUnvcKx3XDKfJcfFQRD1DfcCcL2NUF9kDwNhh0ASJkk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/rashmikahirusan2008/Rash-md-/refs/heads/main/imajas/IMG-20250727-WA0017.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DANUWA-MD Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
