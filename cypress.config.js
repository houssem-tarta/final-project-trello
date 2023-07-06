const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: "1zqd4y",
  env: {
    MAILSLURP_API_KEY:
      "01d00688cad64bee02e8182242ce8ec2022341a36b2fc5199fde8d7b42145fb2",
  },
  e2e: {
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
});
