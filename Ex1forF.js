let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// cau a
// for(let i = 0; i < arr.length; i++) {
//     console.log('Phan tu thu %s la: %s', i, arr[i])
// }

// cau b (liên kết với câu d)
// let tong = 0
// for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i]
// }
// console.log('Tong cua cac phan tu la: ', tong)

// cau c
// let max = arr[0]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log('Phan tu lon nhat la: ', max)

// let min = arr[0]
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log('Phan tu nho nhat la: ', min)

// cau d
// let soPhanTuCuaMang = arr.length
// let trungBinhCong = tong / soPhanTuCuaMang
// let trungBinhCong2 = tong / 2
// for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i]
// }

// console.log('TB cong cac phan tu la: ', trungBinhCong)
// console.log('TB cong cac phan tu(LOGIC FALSE) la: ', trungBinhCong2)

// cau e (home)
// for(let i = 0; i < arr.length; i++) {
//     console.log('Phan tu thu %s la: %s', i, arr[i])
// }

// test e (cách 1)
// let newArr = [1, 2, 4, 3]
// let mangDaoNguoc = []
// for(let i = newArr.length - 1; i >= 0; i--) {
//     console.log(newArr[i])
//     let indexDaoNguoc = mangDaoNguoc.length
//     mangDaoNguoc[indexDaoNguoc] = newArr[i]
// }
// console.log(mangDaoNguoc)

//cau f

// let tanSuatXuatHien = {}

// for(let i = 0; i < arr.length; i++) {
//     let phanTuThuI = arr[i]
//     if (tanSuatXuatHien[phanTuThuI] === undefined) {
//         tanSuatXuatHien[phanTuThuI] = 1
//     }
//     else {
//         tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
//     }
// }
// console.log(tanSuatXuatHien)

//cau g
// for(let i = arr.length; i > 0; i--) {
//     arr[i] = arr[i - 1] 
// }
// arr[0] = 117
// console.log(arr)
//cach 2 (tạo mảng mới sẽ bị tốn RAM nhiều hơn)
// let mangMoi = [117]
// for(let i = 0; i < arr.length; i++) {
//     mangMoi[mangMoi.length] = arr[i]
// }

// console.log(mangMoi)

//cau f
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i + 1]) {
//         console.log('Mang khong tang dan')
//         break
//     }
// }
// console.log('Mang tang dan')

//cau i
// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; i < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             let tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }

// console.log(arr[i])