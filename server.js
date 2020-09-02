const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { scrapeMetaData } = require("./src/scraper");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send(
    `Server is running! Make a POST request to "/scrape" route with the url in the request body as mentioned in the README!`
  );
});

app.post("/scrape", async (req, res) => {
  try {
    if (!req.body.url) {
      return res.send("Url is required").status(400);
    }

    const metaData = await scrapeMetaData(req.body.url);
    return res.json(metaData);
  } catch (error) {
    return res.send(error).status(400);
  }
});

app.listen(PORT, () => {
  console.info(`Server is now running on port ${PORT}!!!`);
});
