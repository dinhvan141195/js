arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let tong = 0
// do {
//     console.log('Phan thu tu i: ', a[i])
//     tong = tong + a[i]
//     i = i + 1
// } while(i < a.length)

// console.log('Tong :', tong)

// let i = 0
// let max = arr[0]
// let min = arr[0]
// do {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
//     if (arr[i] < min) {
//         min = arr[i]
//     }
//     i++
// } while(i < arr.length)
// console.log('Max: ', max)
// console.log('Min: ', min)

//cau e
// let i = 0
// do {
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 -i]
//     arr[arr.length - 1 -i] = tam    
//     i++    

// } while(i < arr.length / 2)
// console.log(arr)

//cau f
// let tanSuatXuatHien = {}
// let i = 0

// do {
//     let phanTuThuI = arr[i]
//     if (tanSuatXuatHien[phanTuThuI] === undefined) {
//         tanSuatXuatHien[phanTuThuI] = 1
//     }
//     else {
//         tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
//     }
//     i++
// } while(i < arr.length)
// console.log(tanSuatXuatHien)
