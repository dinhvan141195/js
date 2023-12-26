// let array = [1, 2, 3, 4, 5]

// let i = 0

// while(i < array.length) {
//     console.log('Phan tu thu %s la: %s', i, array[i])
//     i = i + 1
// }

arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// let i = 0
//cau a
// while(i < arr.length) {
//     console.log('Phan tu thu %s la: %s', i, arr[i])
//     i = i + 1
// }


//cau b
// let tong = 0
// while(i < arr.length) {
//     tong = tong + arr[i]
//     i = i + 1
// }
// console.log('Tong cua cac so la: ', tong)

//cau c
// let max = arr[0]
// let min = arr[0]
// let i = 0
// while(i < arr.length) {
//     if (arr[i] > max) {
//         max = arr[i]   
//     }
//     if (arr[i] < min) {
//         min = arr[i]   
//     }
//     i++
// } 
// console.log('Max: ', max)
// console.log('Min: ', min)

//cau d
// let tong = 0
// let soPhanTuTrongMang = arr.length
// let trungBinhCong = tong / soPhanTuTrongMang
// while(i < arr.length) {
//     tong = tong + arr[i]
//     i = i + 1
// }
// console.log('Tong cua cac so la: ', tong)

//cau e
// let i = 0
// while(i < arr.length / 2) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 -i]
//     arr[arr.length - 1 -i] = tam    
//     i++
// }
// console.log(arr)


//cau f
let tanSuatXuatHien = {}
let i = 0
while(i < arr.length) {
    let phanTuThuI = arr[i]
    if (tanSuatXuatHien[phanTuThuI] === undefined) {
        tanSuatXuatHien[phanTuThuI] = 1
    }
    else {
        tanSuatXuatHien[phanTuThuI] = tanSuatXuatHien[phanTuThuI] + 1
    }
    i++
}
console.log(tanSuatXuatHien)