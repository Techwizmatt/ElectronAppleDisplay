const {app, BrowserWindow} = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 600,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // DevTools opening
  win.webContents.openDevTools();
  win.loadFile('index.html');

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
