const about = (req, res) => {
    pageTitle = process.hasUncaughtExceptionCaptureCallback.npm_package_description + ' - about';
    res.render('about', {title: pageTitle});
};

module.exports = {
    about
};