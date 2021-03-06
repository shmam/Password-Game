import app from 'app';
import BrowserWindow from 'browser-window';

let mainWindow = null;


app.on('ready', () => {
  //produciton window is 600x800
  mainWindow = new BrowserWindow({width: 600, height: 800,frame: true, resizable: false, disableAutoHideCursor: true});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
