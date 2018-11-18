import Binance from 'binance-api-node';
let UserInfo = require("../config/UserInfo.js");

  const Binance2 = Binance({
    apiKey: UserInfo.UserInfo.Binance.key,
    apiSecret: UserInfo.UserInfo.Binance.secret,
  });

  const binance = require('node-binance-api')().options({
    APIKEY: UserInfo.UserInfo.Binance.key,
    APISECRET: UserInfo.UserInfo.Binance.secret,
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  });


let cxns = {binance, Binance2};

module.exports.cxns = cxns;
