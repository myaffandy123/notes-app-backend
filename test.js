const arr = [];

const el1 = { id: "xxx", name: "A", val: 1 };
const el2 = { id: "yyy", name: "B", val: 2 };

arr.push(el1);
arr.push(el2);

console.log(arr);

arr[1] = { ...arr[1], id: "zzz"};

console.log(arr);