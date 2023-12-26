let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];

// Sử dụng đối tượng để lưu trữ số lần xuất hiện
let countMap = {};

// Duyệt qua mảng và đếm số lần xuất hiện của mỗi phần tử
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (countMap[element]) {
        countMap[element]++;
    } else {
        countMap[element] = 1;
    }
}

// Hiển thị số lần xuất hiện của mỗi phần tử
console.log("Số lần xuất hiện của mỗi phần tử:", countMap);
