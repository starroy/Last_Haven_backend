"use strict";

var dbConfig = require("../config/db.config.js");

var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
var db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tickets = require("./ticket.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.buyTickets = require("./buyTickets.model.js")(mongoose);
db.chatusers = require("./chat.user.model.js")(mongoose);
db.chats = require("./chat.model.js")(mongoose);
module.exports = db;
//# sourceMappingURL=index.dev.js.map
