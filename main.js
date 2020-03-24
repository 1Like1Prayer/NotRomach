const {app, BrowserWindow, ipcMain} = require('electron');
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

function openModal(pathx) {
  const {BrowserWindow} = require('electron');
  let modal = new BrowserWindow({parent: mainWindow, modal: true, show: false});
  modal.loadURL(url.format({
    pathname: path.join(__dirname, `/dist/index.html`),
    protocol: "file:",
    slashes: true,
    hash: `/${pathx}`
  }));
  modal.once('ready-to-show', () => {
    modal.show()
  });
}

/* add in component in order to open new dialog based on angular route
private ipc: IpcRenderer;
constructor(){
if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
}
  openNotificationCenter(pathx: string) {
    this.ipc.send('openModal', pathx);
  }
*/
ipcMain.on('openModal', (event, arg) => {
  openModal(arg)
});

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});
