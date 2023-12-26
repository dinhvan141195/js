let mang = [1, 3, 7, 11, 2]
// cách khai báo

// console.log(typeof mang)
// typeof kiểu dữ liệu của mang, kiểu dữ liệu của mảng là object 
// mỗi mảng có 1 index, địa chỉ lần lượt sẽ theo thứ tự và bắt đầu từ số 0
// địa chỉ 1 = thứ tự 0, 3 = 1, 7 = 2, 11 = 3, 2 = 4

let phanTu0 = mang[0]
let phanTu1 = mang[1]
let phanTu2 = mang[2]
// cách truy xuất giá trị của mảng theo thứ tự

console.log(mang)
console.log('Phan tu thu 0: ', phanTu0)
console.log('Phan tu thu 1: ', phanTu1)
console.log('Phan tu thu 2: ', phanTu2)
// không có các nào để cho tự khai báo hết phần tử, phải console ra từng cái thì mới có kết quả, phải dùng for

// cách thay đổi giá trị trong mảng
console.log('Mang truoc thay doi: ', mang)
mang[0] = 10
console.log('Mang sau thay doi: ', mang)

// khai báo độ dài của mảng, độ dài mảng là số lượng phần tử của mảng
let doDaiMang = mang.length
