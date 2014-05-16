var sum =0;
var arr = new Array(1000000);

for (var i = arr.length - 1; i >= 0; i--) {
    arr[i] = Math.random();
}

console.time('for-loop-1');

for (var i in arr) {
    sum += arr[i];
}

console.timeEnd('for-loop-1');


console.time('for-loop-2');
for (var i = arr.length - 1; i >= 0; i--) {
    sum += arr[i];
}
console.timeEnd('for-loop-2');