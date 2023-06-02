module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/model",
    "src/service",
    "src/controller"
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
}
