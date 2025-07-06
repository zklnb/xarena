// login-script.js - Xử lý đăng nhập

// Hàm xử lý khi người dùng ấn nút "Đăng nhập"
function login() {
  const u = document.getElementById('username').value; // Lấy tên đăng nhập
  const p = document.getElementById('password').value; // Lấy mật khẩu

  // Kiểm tra tài khoản và mật khẩu có đúng không
  if (u === "zklnb" && p === "1234") {
    // Nếu đúng: đánh dấu là đã đăng nhập
    localStorage.setItem("daDangNhap", true);
    // Chuyển đến trang chính YouTube Clone
    window.location.href = "https://xtoparena.github.io";
  } else {
    // Nếu sai: báo lỗi
    alert("Sai tài khoản hoặc mật khẩu!");
  }

  return false; // Ngăn chặn form gửi thật
}
