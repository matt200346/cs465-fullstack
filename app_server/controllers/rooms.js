const fs = require('fs');
const roomDetails = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = process.hasUncaughtExceptionCaptureCallback.npm_package_description + ' - rooms';
    res.render('rooms', {title: pageTitle, roomDetails});
};

module.exports = {
    rooms
};