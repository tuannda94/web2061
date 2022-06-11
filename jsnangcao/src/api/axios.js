// Nơi cấu hình base cho axios
import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
    baseURL: 'https://6291d18dcd0c91932b6876da.mockapi.io',
});

// 1. mockAPI không cung cấp endpoint lấy toàn bộ child
// 2. Bấm nút Data ở resource con để kiểm tra API nó gọi đến
// 2.1 endpoint: https://mockapi.io/api/mocks/6291d18dcd0c91932b6876db/resources/6291d2b59d159855f080a6b6/data
// 2.2 cần token: xác thực gửi kèm headers (Nếu lỗi thì đăng nhập lại để kiểm tra request lấy token mới)
// 3. Lỗi CORS không cho domain localhost gọi sang https://mockapi.io
// 3.1 Dùng https://cors-anywhere.herokuapp.com/ làm tiền tố của url axios
// Call API bình thường

export const privateAxios = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://mockapi.io/api/mocks/6291d18dcd0c91932b6876db/resources/6291d2b59d159855f080a6b6/data',
    headers: {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MDRlZWYyNDJhODA4ZTAwMTc3ODU0NTIiLCJpYXQiOjE2NTM3MjM0NTc3MjcsImV4cCI6MTY1NjMxNTQ1NzcyN30.iC08BNZWzvM1cMRn17PngK57VVfQvNd0GZQXwOt3ZKU'
    }
})

export default apiAxios;
