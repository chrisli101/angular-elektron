
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using TestLib;

namespace stringUtility
{
    
  

    public class StartUp
    {
        public string testMe = "init";
        public Func<object, Task<object>> nodeCallback;
        public Func<object, Task<object>> theGetter = null;

        // public StartUp() {
            
        // }

        public void setValue(String input)
        {
            testMe = input;
        }

        public string getValue()
        {
            return testMe;
        }

        public async Task<object> holdState(int input)
        {
            var k = (int)input;
            var su = new stringUtility.StartUp();
            return (Func<object, Task<object>>)(async (i) =>
            {
               
                var currentValue = su.getValue(); 
                Console.WriteLine("Current value: " + currentValue);
                su.setValue(currentValue + "nochetwas");
                Console.WriteLine("Changed value: " + su.getValue());
                return ++k;
            });
        }

        public async Task<object> getter(object val) {
            Console.WriteLine("GET value: " + val);
            return testMe;
        }

        public async Task<object> setter(object val) {
            Console.WriteLine("SET value: " + val);
            testMe = (string) val;
            return val;
        }

        public async Task<object> getMehods(int input)
        {
            var k = (int)input;
            var su = new stringUtility.StartUp();
            return new {
                getValue = (Func<object, Task<object>>) su.getter, 
                setValue = (Func<object, Task<object>>) su.setter
            };
        }

        public async Task<object> registerCallback(dynamic input)
        {
            nodeCallback = (Func<object, Task<object>>)input.csCallback;
            var callbackArg = new { a = -1 };
            await nodeCallback(callbackArg);

            var t = Task.Factory.StartNew(async () =>
            {
                for (int i = 0; i < 10; i++)
                {
                    CancellationTokenSource source = new CancellationTokenSource();
                    await Task.Delay(TimeSpan.FromSeconds(1.5), source.Token);
                    await nodeCallback(new { a = i });
                }

            });

            return 4;
        }

        public async Task<object> startListener(dynamic input)
        {
            nodeCallback = (Func<object, Task<object>>)input.csCallback;
            var callbackArg = new { a = -1 };
            await nodeCallback(callbackArg);

            var t = Task.Factory.StartNew(async () =>
            {
                for (int i = 0; i < 10; i++)
                {
                    CancellationTokenSource source = new CancellationTokenSource();
                    await Task.Delay(TimeSpan.FromSeconds(1.5), source.Token);
                    await nodeCallback(new { a = i });
                }
            });

            return 5;
        }

        public async Task<object> testCallBack(dynamic input)
        {
            var add = (Func<object, Task<object>>)input.add;
            var twoNumbers = new { a = (int)input.a, b = (int)input.b };
            var addResult = (int)await add(twoNumbers);
            return addResult * 2;
        }


        public async Task<object> Invoke(String input)
        {
            Console.WriteLine("this.testMe " + this.testMe);
            this.testMe = " already called and changed";
            Console.WriteLine("this.testMe after " + this.testMe);
            string ret = "hello there out " + input;
            // Console.WriteLine("Sleep for 5 seconds.");
            // Thread.Sleep(5000);
            // Console.WriteLine("Slept.");
            var testlib = new TestLib.TestClass();

            await this.test2("test2");
            return ret + " " + testlib.Test();
        }
        public async Task<object> test(String input)
        {
            Console.WriteLine("this.testMe " + this.testMe);
            this.testMe = " already called and changed";
            Console.WriteLine("this.testMe after " + this.testMe);
            string ret = "hello there out " + input;
            // Console.WriteLine("Sleep for 5 seconds.");
            // Thread.Sleep(5000);
            // Console.WriteLine("Slept.");
            var testlib = new TestLib.TestClass();

            await this.test2("test2");
            return ret + " " + testlib.Test();
        }
        public async Task<object> test2(String input)
        {
            var testlib = new TestLib.TestClass();
            Console.WriteLine("in test2 " + this.testMe);

            return testlib.test2("test2");
        }
        // public async Task<object> StartMethode(object input)
        // {
        //     return ".NET begrüßt " + input.ToString();
        // }

        public async Task<object> StartsWithUpper(String str)
        {
            if (String.IsNullOrWhiteSpace(str))
                return false;

            Char ch = str[0];
            return Char.IsUpper(ch);
        }

        public bool IsStringPalindrome(string str)
        {
            string revs = "";
            for (int i = str.Length - 1; i >= 0; i--) //String Reverse
            {
                revs += str[i].ToString();
            }
            if (revs == str) // Checking whether string is palindrome or not
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    // public class Startup
    // {
    //     public async Task<object> Invoke(object input)
    //     {
    //         IDictionary<string, object> payload =
    //             (IDictionary<string, object>)input;
    //         int eineGanzZahl = (int)payload["eineGanzZahl"];
    //         double eineGleitkommaZahl =
    //             (double)payload["eineGleitkommaZahl"];
    //         string einText = (string)payload["einText"];
    //         bool einWahrheitWert = (bool)payload["einWahrheitWert"];
    //         byte[] einPuffer = (byte[])payload["einPuffer"];
    //         object[] eineArray = (object[])payload["einArray"];
    //         IDictionary<string, object> einObjekt =
    //             (IDictionary<string, object>)payload["einObjekt"];

    //         return 1;
    //     }
    // }
}
