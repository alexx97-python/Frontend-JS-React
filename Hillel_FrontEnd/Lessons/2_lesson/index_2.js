/* y = 10;
do {
    y -= 1;
    console.log(`${y} in do-while`);
} while (y >= 0);

console.log(y);

x = 1;
y = 0;

for(x = 2; x < 10; x++) {
    console.log('Hey');
}

arr = [10,20,30,40];
console.log(arr.length);

for (let i =0; i < arr.length; i++) {
    console.log(arr[i]);
}
 */


arr = [10,20,30,40 -10, 200, 100];

for (i = 0, min = 0, max=0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] > arr[max]){
        max = i;
    }
    if (arr[i] < arr[min]) {
        min = i;
    }
}

console.log(`Max element: ${arr[max]}`);
console.log(`Min element: ${arr[min]}`);