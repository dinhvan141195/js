//cau a
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0; i < arr.length; i++) {
//     console.log('Phan tu thu %s la: ', i, arr[i])
// }

//cau b
// let tong = 0
// for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i]
// }
// console.log('Tong cua cac phan tu la: ', tong)

//cau c
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

//cau d

// let tong = 0
// let soPhanTuCuaMang = arr.length

// for(let i = 0; i < arr.length; i++) {
//     tong = tong + arr[i]
// }

// let trungBinhCong = tong / soPhanTuCuaMang
// console.log('Trung binh cong cac phan tu la: ', trungBinhCong)

//cau e
// let mangDaoNguoc = []
// for(let i = arr.length - 1; i >= 0; i--) {
//     console.log('Phan tu thu %s la: ',i, arr[i])
//     let iDaoNguoc = mangDaoNguoc.length
//     mangDaoNguoc[iDaoNguoc] = arr[i]
// }
// console.log(mangDaoNguoc)

//cau f

// let soLan = {}
// for(let i = 0; i < arr.length; i++) {
//     let giaTri = arr[i]
//     if (arr[i] == giaTri) {
//         soLan = soLan + 1
//         console.log('So lan xuat hien cua %s la: ', giaTri, soLan)
//     }
//     else {
//         soLan = 1
//         console.log('So lan xuat hien cua %s la: ', giaTri, soLan)
//     }
// }

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

//cau h (Fix)

// let daySoTangDan = true

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         daySoTangDan = false
//         break
//     }
// }

// if (daySoTangDan) {
//     console.log('Mang la day so tang dan')
// } else {
//     console.log('Mang la day so khong tang dan')
// }


//cau i
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let newArr = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = newArr
        }
    }
}

console.log(arr)


//cau j
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let newArr = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = newArr
//         }
//     }
// }

// console.log(arr)

//cau k
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

//cau l
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i])
//     }
// }