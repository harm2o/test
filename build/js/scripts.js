var key,busy,a=[];a[0]="a",a[10]="b",a[1e4]="c";for(key in a)a.hasOwnProperty(key)&&/^0$|^[1-9]\d*$/.test(key)&&4294967294>=key&&console.log(a[key]);