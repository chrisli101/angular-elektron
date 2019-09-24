import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

var edge = require('electron-edge-js');
var fs = require('fs');
const CryptoJS = require('crypto-js');

var contents = fs.readFileSync('DATA', 'utf8');
// console.log(contents);



//var signAgentProvider = 'SignLib.SignService.Signatures.CertificateProviders.ATrustPKCS11Provider';
var signAgentProvider = 'SignLib.SignService.Signatures.CertificateProviders.WindowsStoreProvider';
// var clrMethod = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');

// dotNetFunction(function (error, result) { if (error) throw error; console.log(result) });
var test = 'initialize';
var clrMethod;

// var dotNetFunction = edge.func('./../DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');
// dotNetFunction('test', function(error, result) { console.log('in dotnetf ' + result)})

// this.clrMethod = edge.func({
//   assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//   typeName: 'StringUtility.StartUp',
//   methodName: 'test' // This must be Func<object,Task<object>>
// });
// this.clrMethod('test', function (error, result) {
//   // console.log(result);
//   test = result;
// }, false)

// var clrMethod2;



// this.clrMethod2 = edge.func({
//   assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//   typeName: 'StringUtility.StartUp',
//   methodName: 'test2' // This must be Func<object,Task<object>>
// });
// this.clrMethod2(test, function (error, result) {
//   // console.log(result);
//   var test2 = result;
// }, false)





// var start = edge.func({
//   assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
//   typeName: signAgentProvider,
//   methodName: 'start'
// })
// start('test', function (error, result) {
//   console.log('signlib : ' + result);
//   var test = result;
// })




// var certificates = [];
// var signaturealg = '';
// var data = new Int32Array(32);
// for (var i = 0; i < data.length; i++) {
//   data[i] = 0x10;
// }

// data = "72,0,101,0,108,0,108,0,111,0";
// var myBuffer = [];
// var str = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
// var buffer = new Buffer(str, 'utf16le');
// for (var i = 0; i < buffer.length; i++) {
//     myBuffer.push(buffer[i]);
// }



// console.log('BUFFER : XXXX ' + myBuffer);


// let hash = CryptoJS.SHA256('hello world');
// let buffer = Buffer.from(hash.toString(CryptoJS.enc.Hex), 'hex');
// let array = new Int32Array(buffer);
// // console.log('bytearray: ' + array.length);

// var getcertificate = edge.func({
//   assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
//   typeName: signAgentProvider,
//   methodName: 'getCertificates'
// })
// getcertificate('test', function (error, result) {
//   console.log('signlib getCertificates: ' + result + ', error ' + error);
//   certificates = result;

//   var getsignaturealg = edge.func({
//     assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
//     typeName: signAgentProvider,
//     methodName: 'getSignatureAlgorithm'
//   })
//   getsignaturealg('test', function (error, result) {
//     console.log('signlib getSignatureAlgorithm: ' + result + ', error ' + error);
//     signaturealg = result;
//     var sign = edge.func({
//       assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/SignLib/SignLib.dll',
//       typeName: signAgentProvider,
//       methodName: 'signData'
//     })
//     // console.log('data: ' + data + '\ncertificate: ' + certificates[0])
//     // console.log('data: ' + myBuffer + ' certificateSerial: ' + certificates[0] + 'signaturealg: ' + signaturealg + 'typeof certificate ' + typeof(certificates) + ' typeof ')
//     var payload = {
//       data: array,
//       certificateSerial: certificates[0],
//       signatureAlgorithm: signaturealg[0]//"SignatureAlgorithm" /*signaturealg[0]*/
//     }
//     sign(payload, function (error, result) {
//       console.log('signlib sign: ' + result);
//       var test = result;
//     })

//   })

// })


// var addAndMultiplyBy2 = edge.func(function () {
//   /*async (dynamic input) => {
//       var add = (Func<object, Task<object>>)input.add;
//       var twoNumbers = new { a = (int)input.a, b = (int)input.b };
//       var addResult = (int)await add(twoNumbers);
//       return addResult * 2;
//   }*/
// });

// var addAndMultiplyBy2 = edge.func({
//   assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//   typeName: 'StringUtility.StartUp',
//   methodName: 'testCallBack'
// })

// var payload = {
//   a: 2,
//   b: 3,
//   add: function (data, callback) {
//       callback(null, data.a + data.b);
//   }
// };

// addAndMultiplyBy2(payload, function (error, result) {
//   if (error) throw error;
//   console.log('callback return: ' + result);
// });

//-----

var registerCallback = edge.func({
  assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
  typeName: 'StringUtility.StartUp',
  methodName: 'registerCallback'
})


const { ipcMain } = require('electron');
var notifier = require('node-notifier');
console.log("Now registering for gui-started notification");
ipcMain.on('gui-started', (event, arg) => {
  
  registerCallback(
    {
      csCallback: function (data, callback) {
        console.log('CSharp callback called back');
        event.reply('nodeJsNotification','JUHUUUUUUU ' + data.a);
        callback(null, data.a);
      }
    },  
    function (error, result) {
      if (error) throw error;
      event.reply('nodeJsNotification','HALLOOOOOOO' + result);
      // console.log('callback return: ' + result);
    });
  
});


var createListener = edge.func({
  assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
  typeName: 'StringUtility.StartUp',
  methodName: 'holdState'
})

var createCounter = edge.func(function () {
  /*async (input) =>
  {
      var k = (int)input; 
      return (Func<object,Task<object>>)(async (i) => { return ++k; });}*/
});

var counter = createCounter(12, true); // create counter with 12 as initial state
// console.log(' XXXXXXXXXXXXXXXXXXXX' + counter(null, true)); // prints 13
// console.log(counter(null, true)); // prints 14

var listener = createListener(1, true);
console.log(' Listener ' + listener(null, true)); 
console.log(' Listener ' + listener(null, true)); 
// console.log(listener(null, true)); // prints 14

console.log('creating getMehods ');
var getMehods = edge.func({
  assemblyFile: './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
  typeName: 'StringUtility.StartUp',
  methodName: 'getMehods'
})

var methods = getMehods(1, true);
console.log('created getMehods ');
console.log('full ' + methods.full);
if (!!methods.full) {
  console.log(Object.keys(methods.full));
  Object.keys(methods.full).forEach(function (item) {
    console.log(item); // key
    console.log(methods.full[item]); // value
  });
  
}
console.log('getValue ' + methods.getValue);
console.log('setValue ' + methods.setValue);

console.log(' getMehods ' + methods.getValue("get1", true)); 
console.log(' getMehods ' + methods.setValue("set1", true)); 
console.log(' getMehods ' + methods.getValue("get2", true)); 
console.log(' getMehods ' + methods.setValue("set2", true)); 
console.log(' getMehods ' + methods.getValue("get3", true));


var getTest = edge.func(
  // {
  //   source: 
    function () {
    /*#r "./../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll"
      #r "System.Data.dll"
      
        // using "./../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll";
  
                using System.Data;
        //  using System;
        //  using System.Net;
         
        //  using System.Collections.Generic;
        //  using System.Threading;
        using System.Threading.Tasks;
        
        using stringUtility;
        public class Startup
        {
            public async Task<object> Invoke(object input)
            {
              var su = stringUtility();
                // var su = new StartUp();
                return new {
                  getValue = "a",
                  setValue = "b"
                    // getValue = (Func<object, Task<object>>) su.getter, 
                    // setValue = (Func<object, Task<object>>) su.setter
                };
            }
    
      }*/
    }
    // ,
    // references: [ './../../WebProjects/test/DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll' ]
  // }
  );

  console.log("Testing c# ind nodeJS");
  var testMethods = getTest(12, true);
  console.log(Object.keys(testMethods));
  Object.keys(testMethods).forEach(function (item) {
    console.log(item); // key
    console.log(testMethods[item]); // value
  });
//Other regular electron main code
//
// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
  notifier
    .notify({ title: 'Notification', message: 'initialized', icon: `${__dirname}\\assets\\image.png`, wait: true }, function (err, data) {
      // console.log('error: ' + err, 'data: ' + data);
    })
});

ipcMain.on('test-action-click', (event, arg) => {
  this.clrMethod('test', function (error, result) {
    notifier
      .notify({ title: 'Notification', message: 'CLICK: coming from c# lib: ' + result, wait: true }, function (err, data) {
        // console.log('error: ' + err, 'data: ' + data);
      })
  })

});

ipcMain.on('test-action', (event, arg) => {
  notifier
    .notify({ title: 'Notification', message: 'flexible content from file: ' + fs.readFileSync('DATA', 'utf8'), wait: true }, function (err, data) {
      // console.log('error: ' + err, 'data: ' + data);

    })

});

// ipcMain.on('test-action', (event, arg) => {
//   notifier
//   .notify({title: 'Notification', message: 'clicked',   wait: true }, function(err, data) {
//     console.log('error: ' + err, 'data: ' +  data);
//   })
// });

// ipcMain.emit('message');
//     assemblyFile: './../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'StartMethode'
// });

ipcMain.on('message2', function (args, event) {
  // console.log('message2 XXXXXXXXXXXXXXXXXX' + args, event)
  args.returnValue = 'hey from electron'
});

ipcMain.on('message', function (event, arg) {
  // console.log(arg);  // prints "ping"

  // console.log(event);
  event.returnValue = 'from electron';

});
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

  const { dialog } = require('electron')
  // console.log('YYYYYYYYYYYYYYY ' + dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }))

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
