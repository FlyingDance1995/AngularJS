# LẬP TRÌNH  FRONT-END

# AngularJS

### I. NỘI DUNG TÌM HIỂU

##### 1. ES6 là gì?

###### - ES6 là chữ viết tắt của ECMAScript 6, là phiên bản mới nhất của chuẩn ECMAScript. ECMAScript do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn của ngôn ngữ Javascript. Bạn cứ nghĩ xem hiện nay có khá nhiều trình duyệt Browser ra đời và nếu mỗi Browser lại có cách chạy Javascript khác nhau thì các trang web không thể hoạt động trên tất cả các trình duyệt đó được, vì vậy cần có một chuẩn chung để bắt buộc các browser phải phát triển dựa theo chuẩn đó.
######  ES6 ra đời vào năm 2015 nên cái tên ES2015 được lấy làm tên chính thức với nhiều tính năng mới học hỏi các ngôn ngữ cấp cao khác.

###### -Biến *(const)* trong ES6: dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.
######  - *(let)* tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với *(let) (var)* - tạo ra một biến có phạm vi truy cập xuyên suốt *function* chứa nó.

######  Sử dụng *var*:

```javascript
function foo() {
   var x = 10;
   if (true) {
      var x = 20; // x ở đây cũng là x ở trên
      console.log(x); // in ra 20
   }
   console.log(x); // vẫn là 20
}
```
######  Sử dụng *let*:

```javascript
function foo() {
   let x = 10;
   if (true) {
      let x = 20; // x này là x khác rồi đấy
      console.log(x); // in ra 20
   }
   console.log(x); // in ra 10
}
```

##### - Arrow function là gì?
###### Arrow function - còn được gọi là "fat arrow", là cú pháp được mượn từ *CoffeeScript* (một ngôn ngữ chuyển tiếp), cú pháp này là cách ngắn gọn hơn dùng để viết function. Ở đây sử dụng kí tự => Arrow function là một hàm vô danh và nó thay đổi cách this bind đến function. Arrow function làm code của ta trông ngắn gọn hơn, giúp đơn giản hóa function scoping cũng như từ khóa this. Arrow function hoạt động tương tự như Lambdas trong các ngôn ngữ khác như C # hay Python. Bằng cách sử dụng arrow function, chúng ta tránh được việc phải gõ từ khoá function, return và dấu ngoặc nhọn.

##### -	Ví dụ:

```javascript
// ES5 
var multiply = function(x, y) {
    return x * y;
}; 
 
// ES6 
var multiply = (x, y) => { return x * y };
```

###### Trong trường hợp chỉ có một biểu thức thì không cần tới dấu ngoặc nhọn: Ví dụ trên có thể viết lại như sau:
```javascript
var multiply = (x, y) => x * y ;
```

### II.	YÊU CẦU
###### Tự tìm hiểu về ES6 và viết báo cáo những nội dung có liên quan

### III.	NỘP BÀI

###### -	Hạn nộp:  1 ngày.
###### -	Bài nộp được chia thành 03 folder bên trong: 
###### o	exe: …..
###### o	src: Chứa mã nguồn. 
###### o	doc: Báo Cáo (step5.doc).
###### -	Tạo Project trên Github và gửi link cho người hướng dẫn:
