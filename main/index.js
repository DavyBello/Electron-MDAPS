// Native
const { format } = require('url')

// Packages
const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

// const db = require('../data/db');
const bootstrapDB = require('../renderer/data/bootstrapDB');

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await bootstrapDB();
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    autoHideMenuBar: true
  })
  mainWindow.maximize();

  const devPath = 'http://localhost:8000/start'

  const prodPath = format({
    pathname: resolve('renderer/out/start/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)
})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
