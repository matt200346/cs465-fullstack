const fs = require('fs');
const mealDetails = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = process.hasUncaughtExceptionCaptureCallback.npm_package_description + ' - Meals';
    res.render('meals', {title: pageTitle, mealDetails});
};

module.exports = {
    meals
};