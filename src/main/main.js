// Basic init
import Electron, { app, BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

// To avoid being garbage collected
let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    console.log('NODE ENV', process.env.NODE_ENV);

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, './build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    mainWindow.loadURL(startUrl);
})
