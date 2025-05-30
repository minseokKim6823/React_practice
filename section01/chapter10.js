// 1. Date
let date1 = new Date();
console.log(date1);

let date2 = new Date("1997.01.07");
console.log(date2)


// 2. 타임 스탬프
let ts1 =date1.getTime();
let date4 = new Date(ts1);

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(
//     year,
//     month,
//     date,
//     hour,
//     minute,
//     seconds
// );

date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

console.log(date1.toDateString());
console.log(date1.toLocaleString());
