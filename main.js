const express = require("express");
const path = require('path');
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001;
const app = express();
import PasteClient from "pastebin-api";

/*
  method which creates a pastebin client to access post API
*/
const postData = async (code) => {
  const client = new PasteClient("8Uh0E5urQ8q6X-NXr_lvSXnWskK1tDtX");

  const url = await client.createPaste({
    code: code,
    expireDate: "N",
    format: "javascript",
    name: "something.js",
    publicity: 0,
  });

  return url;
}

var jsonParser = bodyParser.json()

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

/*
  endpoint for posting code
*/
app.post("/send", jsonParser, async (req, res) => {
  const { code } = req.body;
  const url = await postData(code);
  res.json({ url: url });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

