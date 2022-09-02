// // 二、資料處理-字串
// let str = '人易科技:上 機 測 試 - 演算法';
// console.log(str.replace(':','：'));
// console.log(str.replaceAll(' ','').replace('-',' - '));
// console.log(str.slice(5,12));

// var $ = [0,1,2,3,4,5,6,7,8,9];
// var j = 0;
// for (let i = 0; i < $.length; i++) {
//     if ($[i] % 2 == 0) {
//         j-=$[i];
//     }else{
//         j+=$[i];
//     }
// }
// console.log(j);


// // 三、資料處理-陣列
// let $$ = [0,1,2,3,4,5,6,7,8,9];
// let odd = [];
// let even = [];
// for (let i = 0; i < $$.length; i++) {
//     if ($$[i] % 2 == 0) {
//         odd.push($$[i]);
//     }else{
//         even.push($$[i]);
//     }
// }
// console.log(odd,even);


// 四、資料處理-正序
// let q = [77,5,5,22,13,55,97,4,796,1,0,9];
// for (let i = 0; i < q.length-1; i++) {
//     for (let j = 0; j < q.length-1; j++) {
//        if (q[j] > q[j+1]) {
//         let w = q[j];
//         q[j] = q[j+1];
//         q[j+1] = w ;
//        }
//     }
// }
// console.log(q);



// 五、邏輯處理-交集、差集、聯集
var a = [77,5,5,22,13,55,97,4,796,1,0,9];
var b = [0,1,2,3,4,5,6,7,8,9];
var c = [];
var d = [];
var e = [];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] == b[j]) {
//             c.push(a[i])
//         }
//     }
// }
// for (let i = 0; i < c.length-1; i++) {
//     for (let j = 0; j < c.length-1; j++) {
//        if (c[j] > c[j+1]) {
//         let w = c[j];
//         c[j] = c[j+1];
//         c[j+1] = w ;
//        }
//     }
// }
// for (let i = 0; i < c.length-1; i++) {
//     for (let j = 0; j < c.length-1; j++) {
//        if (c[j] == c[j+1]) {
//         c.splice(j,1)
//        }
//     }
// }
// console.log(c);


// e = a.concat(b);
// for (let i = 0; i < e.length-1; i++) {
//     for (let j = 0; j < e.length-1; j++) {
//        if (e[j] > e[j+1]) {
//         let w = e[j];
//         e[j] = e[j+1];
//         e[j+1] = w ;
//        }
//     }
// }
// for (let i = 0; i < e.length-1; i++) {
//     for (let j = 0; j < e.length-1; j++) {
//        if (e[j] == e[j+1]) {
//         e.splice(j,1)
//        }
//     }
// }
// console.log(e);







for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] !== b[j]) {
            c.splice(i,1)
            continue 
        }
    }
}
for (let i = 0; i < c.length-1; i++) {
    for (let j = 0; j < c.length-1; j++) {
       if (c[j] > c[j+1]) {
        let w = c[j];
        c[j] = c[j+1];
        c[j+1] = w ;
       }
    }
}
for (let i = 0; i < c.length-1; i++) {
    for (let j = 0; j < c.length-1; j++) {
       if (c[j] == c[j+1]) {
        c.splice(j,1)
       }
    }
}
console.log(c);