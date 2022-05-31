// Nơi cấu hình base cho axios
import axios from 'axios';

// Khởi tạo cấu hình axios cho toàn bộ project
const apiAxios = axios.create({
    baseURL: 'https://6291d18dcd0c91932b6876da.mockapi.io'
});

export default apiAxios;
