var edge = require('edge-js');

// var clrMethod = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');

// dotNetFunction(function (error, result) { if (error) throw error; console.log(result) });
// const notifier = require('node-notifier');
// notifier.notify('Message');
// var clrMethod = edge.func({
//     assemblyFile: './../DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'test' // This must be Func<object,Task<object>>
// });
// var halloCsharp = edge.func({
//     assemblyFile: './../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'StartMethode'
// });

// halloCsharp({}, function(error,result) {
//     console.log(result)
// })

// clrMethod( 'test', function(error,result) {
//     console.log(result)
// })

const {ipcMain} = require('electron');
var notifier = require('node-notifier');
//
//Other regular electron main code
//
// Attach listener in the main process with the given ID
// ipcMain.on('request-mainprocess-action', (event, arg) => {
//     notifier
//     .notify({title: 'Notification', message: 'new message', icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
//       console.log('error: ' + err, 'data: ' +  data);
//     })
// });

// ipcMain.on('test-action2', (event, arg) => {
//   clrMethod('test', function(error,result) {
//     notifier
//     .notify({title: 'Notification', message: result, icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
//       console.log('error: ' + err, 'data: ' +  data);
//     })
//   })
 
// });
// var charpFunktion = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');

// var payload = {
//     eineGanzZahl: 1,
//     eineGleitkommaZahl: 3.1415,
//     einText: 'foo',
//     einWahrheitsWert: true,
//     einPuffer: new Buffer.alloc(10),
//     einArray: [ 1, 'foo' ],
//     einObjekt: { a: 'foo', b: 12 }
// };

// charpFunktion(payload, function (error, result) { console.log(result)});

// clrMethod('', function(error,result) { console.log(result)})
// console.log(clrMethod2 = edge.func({
//     assemblyFile: './../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'StartsWithUpper' // This must be Func<object,Task<object>>
// }));

// console.log(clrMethod.call())

// clrMethod((error, result) => { 
//     if (error) throw error;
//     console.log(result);
// })

// clrMethod.call;
// clrMethod()

// clrMethod(function(error,result) {
//         if (error) throw error;
//         console.log(result);})
// clrMethod(function(error,result) {
//     if (error) throw error;
//     console.log(result);
// });

// var clrMethod = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');
// clrMethod();

// var helloWorld = edge.func(function () {/*
//     async (input) => { 
//         return ".NET Welcomes hello from " + input.ToString(); 
//     }
// */});

// var executeSSIS = edge.func(function() {/*
//     async (input) => {
//           return "hello from c#";
//         }
//       */});

// helloWorld('JavaScript', function (error, result) {
//     if (error) throw error;
//     console.log(result);
// });




// executeSSIS('hello', function(error, result) {
//     if (error) throw error;
//     console.log(result);
// });


// var HID = require("node-hid");
// const EventEmitter = require('events');

// class USBProvider extends EventEmitter {

//     constructor() {
//         super();
//         var self = this;
//         this.onerror = function(e) {
//             console.log('error: ' + e);
//         };
//         this.getDeviceHandle = function() {
//             return deviceHandle;
//         }

//         var SCAN_INTERVAL = 2000; // scan every 2 secs
//         var VENDOR_ID = 0xACD; // default ID TECH vid
//         var deviceHandle = null; // stores our handle
//         var deviceRecord = null; // stores device record
//         var stopKey = null; // to stop polling (if needed)

//         // This will be called repeatedly by poll(), below
//         function cycle() {

//             var deviceFound = false;
//             HID.devices().forEach(function(device, index, records) {

//                 deviceFound = (device.vendorId == VENDOR_ID);

//                 if (device.vendorId == VENDOR_ID && deviceRecord == null) {
//                     deviceRecord = device;
//                     try {
//                         // Try to connect.
//                         deviceHandle =
//                             new HID.HID(device.vendorId, device.productId);

//                         deviceHandle.on('error', self.onerror);

//                         self.emit('usbconnect', deviceHandle);

//                         console.log("usbprovider: connect");
//                     } catch (e) {
//                         self.onerror("Exception caught:\n" + e);
//                         self.emit('usbexception', device);
//                     }
//                 } // if

//                 if (index == records.length - 1 && !deviceFound) {

//                     // HANDLE DISCONNECT EVENT
//                     if (deviceRecord != null) {
//                         deviceRecord = deviceHandle = null; // nullify record	
//                         // self.ondisconnect();
//                         self.emit('usbdisconnect');

//                         console.log("usbprovider: disconnect");
//                     } // if 

//                 } // if 
//             }); // forEach
//         } // cycle

//         this.poll = function() {
//             this.stopKey = setInterval(cycle, SCAN_INTERVAL);
//         }
//     }
// }
// // Allow other modules to use this one:
// module.exports = USBProvider;

// // First, instantiate the provider
// var usb = new USBProvider();

// var deviceHandle = null; // We will store the device handle here

// // Set up a connection handler. Inside it, set the data handler.
// usb.on('usbconnect', function(h) {

//     deviceHandle = h; // cache the handle

//     // set up a data handler (for reading data)
//     deviceHandle.on('data', (data) => {

//         var hex = data.toString('hex');
//         // do something with data...
//     });

// });

// usb.poll(); 

var HID = require('node-hid');
var devices = HID.devices();

console.log(devices)