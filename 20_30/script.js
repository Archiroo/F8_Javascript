// Bài 20: Chuỗi
// var name = 'Archiiro';
// var fullName = 'Archiiro \'vjp pro\''
// var kiTu = 'Day la dau \\'
// var firstName = 'Nguyen'
// var lastName = 'Duc'

// console.log("Toi la " + firstName +" "+ lastName) C1
// console.log(`Toi la: ${firstName} ${lastName}`)



// Bài 21: Làm việc với chuỗi
// 1. length(): return độ dài chuỗi
// 2. indexOf: return vị trí kí tự trong chuỗi
// 3. slice(x, y): Cut String từ x tới y
// 4. replace(/x/g , y): Tìm all x và thay thế thành y
// 5. toUpperCase(): chữ hoa
// 6. toLowerCase(): chữ thường
// 7. trim(): Xóa bỏ khoảng trắng 2 đầu
// 8. split(): Cắt chuối theo điểm chung



// Bài 22: Làm việc với số
// isNaN(result): Kiểm tra số không hợp lệ
// toFixed(a): Làm tròn tới a số sau dấu ,



// Bài 23: Làm việc với mảng
// var languages = ['Java', 'PHP', 'JS'];
// console.log(Array.isArray(languages)) // Check Array vs Object
// console.log(languages[2]) // Lấy theo vị trí trong mảng



//Bài 24: Làm việc với mảng
// 1. toString(): Chuyển mảng về String 
// 2. join('a'): Phân cách chuỗi bằng a
// 3. pop: Xóa phần tử cuối mảng và return phần tử đã xóa (Xóa hết thành undefine)
// 4. push: Thêm phần tử cuối mảng và return size của mảng sau khi thêm
// 5. shift: Xóa phần tử đầu mảng và return phần tử đã xóa (Xóa hết thành undefine)
// 6. unshift: Thêm một or nhiều phần tử đầu mảng và return độ dài của mảng
// 7. splice(a, b, c ): Đặt con trỏ vào vị trí a, xóa b phần tử, chèn c phần tử sau a
// 8. concat: Nối array
// 9. slice(x, y): Cut array từ x tới y

// var languages = ['Java', 'PHP', 'JS'];
// console.log(languages);



//Bài 25, 26, 27, 28, 29: Function
// function showDialog(message1, mesage2){
//     if(message1){
//         console.log(message1);
//     }
//     if(mesage2){
//         console.log(mesage2);
//     }
// }
// //Argument
// function writeLog(){
//     var myString = '';
//     for (var param of arguments){
//         myString += `${param} - `
//     }
//     console.log(myString);
// // }
// writeLog("Log 1", "Log 2")
// function tong(a, b){
//     return a+b;
// }
// console.log(tong(2,4));
// 2 Function trùng tên Function sau sẽ ghi đè Function trước

// Declaration Function: 
function showMessage() {

}
//Express Function
var showMessage2 = function() {

}
setTimeout(function() {

})
var myObject = {
    myFuntion(){

    }
}

// Bài 30: Polyfill