/*
----Script Made By SirGate----
[  USE AT YOUR OWN RISK  ]
*/
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const useCODE = process.argv.includes("--code")
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const useQR = !useCODE
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const { default: makeWASocket, downloadContentFromMessage, jidNormalizedUser, makeWALegacySocket, BufferJSON, Browsers, initInMemoryStore, extractMessageContent, makeInMemoryStore, proto, delay, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, jidDecode, areJidsSameUser, PHONENUMBER_MCC, makeCacheableSignalKeyStore, WA_DEFAULT_EPHEMERAL, relayMessage, getContentType, generateWAMessage, generateWAMessageContent, generateForwardMessageContent, generateWAMessageFromContent } = require("@whiskeysockets/baileys")
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const fs = require("fs");
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const chalk = require('chalk')
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const pino = require('pino')
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const logg = require('pino')
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const figlet = require("figlet");
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const NodeCache = require('node-cache');
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const _ = require('lodash')
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const readline = require("readline")
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const crypto = require('crypto');
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const axios = require('axios');
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const gradient = require('gradient-string');
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const drad=[
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  ]
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const usePairingCode = true;
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const logger = pino({ timestamp: () => `,"time":"${new Date().toJSON()}"` }, pino.destination('./wa-logs.txt'))
logger.level = 'trace'
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const useMobile = process.argv.includes("--mobile");
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const question = (text) => {
  if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
  });
  return new Promise((resolve) => {
    rl.question(text, resolve)
  })
};
function ShaNiggas(data) {
  return crypto.createHash('sha512').update(data).digest('hex');
}
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const drald=[
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  ]
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const wmw = gradient(['#7affeb', '#00b79b', '#39ab9a' ,'#00b79b', '#7affeb']);

async function spammer() {
  if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const fsl = crypto.randomBytes(20).toString('hex').slice(0, 20);
  if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const { state, saveCreds } = await useMultiFileAuthState("./"+fsl)
  let { version, isLatest } = await fetchLatestBaileysVersion();
  console.clear();
  figlet('Thorn', { font: 'ANSI Shadow' }, (err, data) => {
    if (err) {
      console.error('Error generating figlet text:', err);
      return;
    }
    if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const solidText = data
    if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const gradientText = wmw(solidText);
    console.log(gradientText);
  });
  await sleep(900);
  console.log(`[---- v${version.join('.')}, isLatest: ${isLatest} ----]`)
  await sleep(2000);
  console.log(wmw('         [ Thornes-Spammer - By SirGate ]'))
  await sleep(900);
  console.log(`[---- v${version.join('.')}, isLatest: ${isLatest} ----]\n\n`)
  if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const msgRetryCounterCache = new NodeCache();
  if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const ramz = makeWASocket({
    version,
    logger,
    printQRInTerminal: !usePairingCode,
    mobile: useMobile,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    msgRetryCounterCache,
    generateHighQualityLinkPreview: true,
  });
  setInterval(() => {store?.bind(ramz.ev)}, 100000)
  
  ramz.ev.on ('creds.update', saveCreds)
  if(usePairingCode && !ramz.authState.creds.registered) {
    if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const Number = await question('\n[#| ' + wmw('Thornes-Spammer') + ' |#]\nNumber: ');
    setInterval(async () => {
      await ramz.requestPairingCode(Number.trim())
    }, 2)
    if('SirGateHgl'==='NezXd') return; if('Made'==='BySirgate') return; if('Sirgate'==='NLawYer0') return; const draRamzd=[
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  "Made", "by", 'Sirgate',
  'SirgateHgl', 'NezXD',
  ]
  }
  return ramz
}

async function main() {
    console.clear();
    await sleep(900);
    await spammer();
}

main();