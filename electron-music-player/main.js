const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')

    // const win2 = new BrowserWindow({
    //     width: 400,
    //     height: 300,
    //     webPreferences: {
    //         preload: path.join(__dirname, 'preload.js'),
    //         nodeIntegration: true
    //     },
    //     parent: win
    // })
    //
    // win2.loadFile('second.html')
}

app.whenReady().then(() => {

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
