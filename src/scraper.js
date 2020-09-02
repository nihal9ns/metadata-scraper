const fetch = require("node-fetch");
const cheerio = require("cheerio");

const scrapeMetaData = async (url) => {
  try {
    const req = await fetch(url, { method: "GET" });
    const res = await req.text();

    const metaData = {};
    const $ = cheerio.load(res);
    const title = $("head title").text();
    const description = $('meta[name="description"]').attr("content");
    const keywords = $('meta[name="keywords"]').attr("content");
    const ogTitle = $('meta[property="og:title"]').attr("content");
    const ogImage = $('meta[property="og:image"]').attr("content");
    const ogKeywords = $('meta[property="og:keywords"]').attr("content");
    const images = $("img");

    if (title) {
      metaData.title = title;
    }

    if (description) {
      metaData.description = description;
    }

    if (keywords) {
      metaData.keywords = keywords;
    }

    if (ogImage && ogImage.length) {
      metaData.ogImage = ogImage;
    }

    if (ogTitle && ogTitle.length) {
      metaData.ogTitle = ogTitle;
    }

    if (ogKeywords && ogKeywords.length) {
      metaData.ogKeywords = ogKeywords;
    }

    if (images && images.length) {
      metaData.images = [];

      for (let i = 0; i < images.length; i++) {
        metaData.images.push($(images[i]).attr("src"));
      }
    }

    return metaData;
  } catch (error) {
    throw new Error(
      `Failed to scrape metadata for url : ${url} -> error`,
      error
    );
  }
};

module.exports = { scrapeMetaData };
