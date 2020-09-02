const { scrapeMetaData } = require("../scraper");

describe("TEST SCRAPER", () => {
  it("Should return scraped meta data", async () => {
    const url = "https://producthunt.com";

    const result = await scrapeMetaData(url);

    expect(result).toMatchSnapshot();
  });
});
