// Bài 31: Object
// var myKey = 'email';
// var myInfo = {
//     name: "Đức",
//     age: 18,
//     address: "Hà Nội",
//     [myKey]: "nmduc",
//     getName: function(){
//         return this.name;
//     }
// };
// delete myInfo.address
// console.log(myInfo.getName())



// Bài 33: Object contructor, Object prototype
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// User.prototype.claas = "F8"; // Object porototype (Thêm vào contructor)
// User.prototype.getClassName = function() {
//     return this.claas;
// }
// var author = new User("Nguyễn", "Đức", "Anh");
// var student = new User("Ar", "Chiiro", "Anh");
// author.title = "F8"
// student.commet = "Javascript"
// console.log(author);
// console.log(student.getClassName());



//Bài 34: Date
// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(`${day}/${month}/${year}`);


// Bài 35: If Else
// var date = 2;
// if(date === 2){
//     console.log("Hôm nay là thứ 2");
// }
// else if(date === 3){
//     console.log("Hôm nay là thứ 3");
// }
// else if(date === 4){
//     console.log("Hôm nay là thứ 4");
// }
// else{
//     console.log("Chịu");
// }



//Bài 36: Switch
// var date = 0;
// switch(date){
//     case 2:
//         console.log("Hôm nay là thứ 2");
//         break; // lọt đây thì cứ tìm tiếp trừ khi gặp break thì dừng
//     case 3:
//         console.log("Hôm nay là thứ 3");
//         break;
//     case 4:
//         console.log("Hôm nay là thứ 4");
//         break;
//     default:
//         console.log("Không biết");

// }



//Bài 37: Toán tử 3 ngôi
// var course = {
//     name: "Javascript",
//     coin: 250
// }
// // if(course.coin > 0){
// //     console.log(`${course.coin} Coins`);
// // }
// // else{
// //     console.log("Free");
// // }
// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free';
// console.log(result);


// Bài 38: Vòng lặp
// 1. For: Lặp với điều kiện đúng
// 2. For/in: Lặp qua key của Object
// 3. For/of: Lặp qua values của Object
// 4. While: Lặp với điều kiện đúng
// 5. Do while: Lặp 1 lần, sau đó lặp vs điều kiện đúng


//For
// var myArray = [
//     'Javascript',
//     'PHP',
//     'Java'
// ]
// var arrLength = myArray.length
// for(var i=0; i< arrLength; i++){
//     console.log(myArray[i])
// }
// // for(var i = 1; i<= 1000; i++){
// //     console.log("Lặp lần thứ: " + (i+1) )
// // }



//For in: Lặp qua key của Object
// var myInfo = {
//     name: "Archiiro",
//     age: 21,
//     address: "Hoàng Mai"
// }
// for(var key in myInfo){
//     console.log(myInfo[key]);
// }

// var languages = [
//     'Java',
//     'Javascript'
// ]
// for(var key in languages){
//     console.log(languages[key])
// }



//For of
// var myInfo = {
//     name: "Duc",
//     age: 18
// }

// for(var value of Object.values(myInfo)) {
//     console.log(value);
// }



//While
// var i = 0;
// while(i<10){
//     i++;
//     console.log(i);
// }


//Do while: Điều kiện sai vẫn chạy 1 lần
// var i=0;
// do{
//     i++;
//     console.log(i);
// }   
// while(i < 10);


//Break: Thoát khỏi vòng lặp
// for(var i=0; i<10; i++){
//     if(i%2 != 0){
//         continue;
//     }
//     console.log(i);
// }


//
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// for(var i=0; i<myArray.length; i++){ // Duyệt số phần tử của myArray: 3
//     for(j=0; j<myArray[i].length; j++){ // Duyệt số phần tử mảng con của Array: 2 ([1,2], [3,4], [5,6])
//         console.log(myArray[i][j]);
//     }
// }



// Array Method
    // 1. forEach()
    // 2. every()
    // 3. some()
    // 4. find()
    // 5. filter()
    // 6. map()
    // 7. reduce()

var courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 250
    },
    {
        id: 2,
        name: "HTML, CSS",
        coin: 0
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0
    },
    {
        id: 4,
        name: "PHP",
        coin: 400
    },
    {
        id: 5,
        name: "React JS",
        coin: 900
    },
    {
        id: 6,
        name: "Java",
        coin: 0
    }
];
// forEach()
// courses.forEach(function(course, index){
//     console.log(index, course);
// });

// every: Tất cả phần tử mảng phải thỏa mãn điểu kiện thì return về true
// var isFree = courses.every(function(course, index){
//     return course.coin === 0;
// });
// console.log(isFree);

// some:  Tất cả phần tử mảng chỉ cần 1 điều kiện thỏa mãn return true
// var isFree = courses.some(function(course, index){
//     return course.coin === 250;
// });
// console.log(isFree);

// find:  Tìm thấy return luôn
// var course = courses.find(function(course, index){
//     return course.name === 'Ruby';
// });
// console.log(course);

// filter: return tất cả thỏa mãn
// var course = courses.filter(function(course, index){
//     return course.name === 'Ruby';
// });
// console.log(course);


// map
// var newCourse = courses.map(function(course) {
//     return {
//         id: course.id,
//         name: `Khóa học: ${course.name} `,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     };
// });

// console.log(newCourse);