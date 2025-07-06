// Hàm xử lý khi bấm nút "Đăng nhập"
function dangNhap() {
  // Lấy giá trị từ ô nhập
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value.trim();

  // Kiểm tra tài khoản + mật khẩu
  if (u === 'zklnb' && p === '1234') {
    // ✅ Ghi trạng thái đã đăng nhập vào localStorage
    localStorage.setItem('daDangNhap', 'true');

    // 👉 Chuyển sang trang web chính
    window.location.href = 'https://xtoparena.github.io/';
  } else {
    // ❌ Sai tài khoản/mật khẩu
    alert('❌ Sai tài khoản hoặc mật khẩu!');
  }
}
