// EJ LOGGERS
const log4js = require("log4js");

log4js.configure({
  appenders: {
    consola: { type: "console" },
    warn: { type: "file", filename: "warn.log" },
    trace: { type: "file", filename: "traces.log" },
  },
  onlyWarn: { type: "logLevelFilter", appenders: "warn",  },
  onlyTrace: { type: "logLevelFilter", appenders: "trace", level: "trace" },

  categories: {
    default: { appenders: ["consola", "trace", "warn"], level: "trace" },
  },
});

const logger = log4js.getLogger("default");

module.exports = logger;
