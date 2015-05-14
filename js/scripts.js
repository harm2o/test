// `a` is a sparse array
var key;
var busy;
var a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (key in a) {
    if (a.hasOwnProperty(key)  &&        // These are explained
        /^0$|^[1-9]\d*$/.test(key) &&    // and then hidden
        key <= 4294967294                // away below
        ) {
        console.log(a[key]);
    }
}