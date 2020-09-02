# Web page metadata scraper using Node.js

## About

Scrape a web page by passing the url of the page in the request and extract metadata information like title, description, keywords and images.

## Steps to run on local

- Clone this repo
- Run `npm install` to install dependencies
- Run `npm start` to start the server
- Run `npm test` to execute tests

## Access the server hosted on Heroku

To test, you can also access the server which is hosted on Heroku here : https://metadata-scraper.herokuapp.com/

Make a POST request to `https://metadata-scraper.herokuapp.com/scrape` endpoint and pass the url in request body as shown below.

```json
{
  "url": "https://producthunt.com"
}
```
