import Binance from 'binance-api-node';
let UserInfo = require("../config/UserInfo.js");
  const client = Binance();
  // Authenticated client, can make signed calls
  const client2 = Binance({
    apiKey: UserInfo.UserInfo.Binance.key,
    apiSecret: UserInfo.UserInfo.Binance.secret,
  });
let cxns = {client2};
module.exports.cxns = cxns;
