// const mang = [1, 3, 7, 11, 2]

// for(let index = 0, index)
//(khởi tạo; điều kiện lặp; tăng/giảm)

// for(let index = 0; index <= 10; index = index + 1) {
//     console.log('So i =', index)
// }

// khai báo index từ 1 -> 10
// for(let i = 0; i <= 10; i = i + 1) {
//     console.log('i: ', i)
// }

//khai bao index từ 2 -> 9
// for(let i = 0; i <= 9 ; i = i + 1) {
//     console.log('Cach 1 i: ', 2 + i)
// }

// for(let i = 2; i <= 10 ; i = i + 1) {
//     console.log('Cach 2 i: ', i)
// }

// nếu bị vòng lặp vô hạn thì Ctrl + C (cancel terminal) để dừng lại

// for(let i = 0; i < mang.length; i = i + 2) {
//     console.log('Phan tu thu i: ', mang[i])
// }
//hoặc for(let i = 0; i < 5 (độ dài của mảng là 5)); i = i + 1) 

let array = [1, 2, 3, 4]

for(let i = 0; i < array.length; i++) {
    console.log('Phan tu thu %s la: %s',i ,array[i])
}

array[3] = 6

let giaTri = array[3]

console.log('Gia tri cua phan tu so 3 la:', giaTri)

newArr = []
for(let i = array.length - 1; i >= 0; i--) {
//phần tử cuối cùng luôn là array.length - 1, vì phần tử đầu tiền mình đếm là 0, 1, 2, 3 chứ KHÔNG phải 1, 2, 3
    console.log(array[i])
}
console.log(array)