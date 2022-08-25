const app = require("./index");

const connect = require("./configs/db.js");

app.listen(5050, async function () {
  try {
    await connect();
    console.log("listening on port 5050");
  } catch (err) {
    console.error(err.message);
  }
});
