import Binance from 'binance-api-node';
let UserInfo = require("../config/UserInfo.js");
  const Binance1 = Binance();
  // Authenticated client, can make signed calls
  const Binance2 = Binance({
    apiKey: UserInfo.UserInfo.Binance.key,
    apiSecret: UserInfo.UserInfo.Binance.secret,
  });
let cxns = {Binance1, Binance2};
module.exports.cxns = cxns;
