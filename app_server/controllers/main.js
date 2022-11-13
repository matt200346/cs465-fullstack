const fs = require('fs');
const indexNewsDetails = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

const index = (req, res) => {
    pageTitle = process.hasUncaughtExceptionCaptureCallback.npm_package_description + ' - Main';
    res.render('index', {title: pageTitle, indexNewsDetails});
};

module.exports = {
    index
};