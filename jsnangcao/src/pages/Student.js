import { getStudents, deleteStudent } from "../api/student";

const Student = {
    render: async () => { // đã đóng ngoặc nhọn phải có return ở trong
        // 1. fetch là phương thức dùng để lấy dữ liệu từ phía BE
        // 2. fetch trả về 1 Promise => sẽ có await ở trước fetch để chờ kq
        // 3.1. fetch nhận vào đường dẫn API endpoint của BE
        // const response1 = await fetch('https://6291d18dcd0c91932b6876da.mockapi.io/students');

        // 3.2 sử dụng axios đã được khởi tạo và sinh ra hàm getStudents
        const response = await getStudents();
        // const data = response.data;
        const {data} = response;

        // 4. lần đợi fetch đầu tiên sẽ trả về obj Response
        // console.log('response',response1, response2.data);
        // 5. lần đợi tiếp theo là response trả dữ liệu về dạng json
        // const students = await response.json();
        // console.log('students', students);

        return `<div>
            ${
                data.map((student) => (
                    `<div>
                        <div>ID: ${student.id}</div>
                        <div>Name: ${student.name}</div>
                        <div>MSV: ${student.msv}</div>
                        <div>
                            <a href="/students/${student.id}">
                                <button class='btn btn-info'>Chi tiet</button>
                            </a>
                            <button class='btn btn-danger'>Xoa</button>
                        </div>
                    </div>`
                )).join('')
            }
        </div>`
    },
    afterRender: () => {
        // Đây là nơi thực thi nghiệp vụ định nghĩa sự kiện xoá
    }
};




export default Student;
