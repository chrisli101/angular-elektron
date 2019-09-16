import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

var fs = require('fs');

var contents = fs.readFileSync('DATA', 'utf8');
console.log(contents);

var edge = require('electron-edge-js');

//var signAgentProvider = 'SignLib.SignService.Signatures.CertificateProviders.ATrustPKCS11Provider';
var signAgentProvider = 'SignLib.SignService.Signatures.CertificateProviders.WindowsStoreProvider';
// var clrMethod = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');

// dotNetFunction(function (error, result) { if (error) throw error; console.log(result) });

var clrMethod = edge.func({
    assemblyFile: './../DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
    typeName: 'StringUtility.StringLibrary',
    methodName: 'test' // This must be Func<object,Task<object>>
});


var start = edge.func({
  assemblyFile: './../DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
  typeName: signAgentProvider,
  methodName: 'start'
})
start('test', function (error, result) {
  console.log('signlib : ' + result);
  var test = result;
})




var certificates = [];
var signaturealg = '';
var data = new Int32Array(32);
for (var i = 0; i < data.length; i++) {
  data[i] = 0x00;
}

var getcertificate = edge.func({
  assemblyFile: './../DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
  typeName: signAgentProvider,
  methodName: 'getCertificates'
})
getcertificate('test', function (error, result) {
  console.log('signlib getCertificates: ' + result + ', error ' + error);
  certificates = result;

  var getsignaturealg = edge.func({
    assemblyFile: './../DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
    typeName: signAgentProvider,
    methodName: 'getSignatureAlgorithm'
  })
  getsignaturealg('test', function (error, result) {
    console.log('signlib getSignatureAlgorithm: ' + result + ', error ' + error);
    signaturealg = result;
    var sign = edge.func({
      assemblyFile: './../DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
      typeName: signAgentProvider,
      methodName: 'signData'
    })

    var payload = {
      data: data,
      certificateSerial: certificates[0],
      signatureAlgorithm: "SignatureAlgorithm" /*signaturealg[0]*/
    }
    sign(payload, function (error, result) {
      console.log('signlib sign: ' + result);
      var test = result;
    })

  })

})






clrMethod( 'test', function(error,result) {
  console.log(result);
  var test = result;
})
const { ipcMain } = require('electron');
var notifier = require('node-notifier');
//
//Other regular electron main code
//
// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
  notifier
    .notify({ title: 'Notification', message: 'initialized', icon: `${__dirname}\\assets\\image.png`, wait: true }, function (err, data) {
      console.log('error: ' + err, 'data: ' + data);
    })
});

ipcMain.on('test-action-click', (event, arg) => {
  clrMethod('test', function(error,result) {
    notifier
    .notify({title: 'Notification', message: 'CLICK: coming from c# lib: ' + result, icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
      console.log('error: ' + err, 'data: ' +  data);
    })
  })

});

ipcMain.on('test-action', (event, arg) => {
  notifier
    .notify({ title: 'Notification', message: 'flexible content from file: ' + fs.readFileSync('DATA', 'utf8'), icon: `${__dirname}\\assets\\image.png`, wait: true }, function (err, data) {
      console.log('error: ' + err, 'data: ' + data);

    })

});

// ipcMain.on('test-action', (event, arg) => {
//   notifier
//   .notify({title: 'Notification', message: 'clicked', icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
//     console.log('error: ' + err, 'data: ' +  data);
//   })
// });

ipcMain.emit('message');
//     assemblyFile: './../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'StartMethode'
// });

// halloCsharp({}, function(error,result) {
//     console.log(result)
// })



let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
      var eNotify = require('electron-notify');
      eNotify.notify({ title: 'Notification title', text: 'Some text' });
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
