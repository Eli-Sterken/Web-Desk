const {BrowserWindow, app} = require('electron');
module.exports = (url) => {
    app.whenReady().then(() => {
        const window = new BrowserWindow({
            width: 500,
            height: 500
        });
        window.loadURL(url);
    });
};