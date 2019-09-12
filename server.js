var edge = require('edge-js');

// var clrMethod = edge.func('./../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll');

// dotNetFunction(function (error, result) { if (error) throw error; console.log(result) });
// const notifier = require('node-notifier');
// notifier.notify('Message');
var clrMethod = edge.func({
    assemblyFile: './../DotNetCoreExample-ClassLibrary/stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
    typeName: 'StringUtility.StringLibrary',
    methodName: 'test' // This must be Func<object,Task<object>>
});
// var halloCsharp = edge.func({
//     assemblyFile: './../stringUtility/bin/Debug/netstandard2.0/stringUtility.dll',
//     typeName: 'StringUtility.StringLibrary',
//     methodName: 'StartMethode'
// });

// halloCsharp({}, function(error,result) {
//     console.log(result)
// })

clrMethod( 'test', function(error,result) {
    console.log(result)
})

const {ipcMain} = require('electron');
var notifier = require('node-notifier');
//
//Other regular electron main code
//
// Attach listener in the main process with the given ID
ipcMain.on('request-mainprocess-action', (event, arg) => {
    notifier
    .notify({title: 'Notification', message: 'new message', icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
      console.log('error: ' + err, 'data: ' +  data);
    })
});

ipcMain.on('test-action2', (event, arg) => {
  clrMethod('test', function(error,result) {
    notifier
    .notify({title: 'Notification', message: result, icon:`${__dirname}\\assets\\image.png`,  wait: true }, function(err, data) {
      console.log('error: ' + err, 'data: ' +  data);
    })
  })
 
});
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