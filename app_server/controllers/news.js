const fs = require('fs');
const newsDetails = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));
const tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));
const topNews = JSON.parse(fs.readFileSync('./data/topNews.json', 'utf8'));

const news = (req, res) => {
    pageTitle = process.hasUncaughtExceptionCaptureCallback.npm_package_description + ' - news';
    res.render('news', {title: pageTitle, newsDetails, tips, topNews});
};

module.exports = {
    news
};