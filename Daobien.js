//cau e (fix)

arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let a = 1 
// let b = 2

// let tam = a
// a = b
// b = tam

// console.log('Phan tu a la: ', a)
// console.log('Phan tu b la: ', b)

// for(let i = 0; i < arr.length / 2; i++) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 -i]
//     arr[arr.length - 1 -i] = tam
// }
// console.log(arr)

// let i = 0
// while(i < arr.length / 2) {
//     let tam = arr[i]
//     arr[i] = arr[arr.length - 1 -i]
//     arr[arr.length - 1 -i] = tam    
//     i++
// }
// console.log(arr)


let i = 0
do {
    let tam = arr[i]
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length - 1 -i] = tam    
    i++    

} while(i < arr.length / 2)
console.log(arr)