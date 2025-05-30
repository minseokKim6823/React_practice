let arr1 =[
    {name : "이정환", hobby: "테니스"},
    {name : "김효빈", hobby: "테니스"},
    {name : "홍길동", hobby: "독서"}
];

const tennisPeople = arr1.filter(
    (item) => item.hobby === "테니스"
);


// 2. map
let arr2 = [1, 2, 3]
const mapResult1 = arr2.map((item, idx, arr)=>{
    console.log(idx, item);
    return item * 2;
});

// console.log (mapResult1)

let names = arr1.map((item) => item.name)
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드 숫자X
let arr3 =[10,3,5]
arr3.sort((a,b)=>{
    if(a > b){
        return -1;
    }else if (a<b){
        return 1;
    }else{
        return 0;
    }
});

// console.log(arr3);
// 4. toSorted
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
let arr6 =["hi", "im", "winterlood"]
const joined = arr6.join();
console.log(joined);