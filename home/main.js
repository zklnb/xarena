// Khi trang được tải, kiểm tra người dùng đã đăng nhập chưa
window.addEventListener("DOMContentLoaded", () => {
  const daDangNhap = localStorage.getItem("daDangNhap");
  if (!daDangNhap) {
    // Nếu chưa đăng nhập, quay về trang đăng nhập
    window.location.href = "../index.html";
  }

  // Gán sự kiện cho nút đăng xuất
  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("daDangNhap");
    window.location.href = "../index.html";
  });
});

// Tìm kiếm video và thêm vào danh sách
function timKiemVideo() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;

  const videoList = document.getElementById("videoList");
  videoList.innerHTML = "<p>Đang tìm kiếm...</p>";

  // Tạo link nhúng YouTube đơn giản (demo)
  const videoId = "dQw4w9WgXcQ"; // thay bằng thuật toán thực tế nếu dùng API
  videoList.innerHTML = `
    <div class="video">
      <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
      <p>Kết quả cho: ${query}</p>
    </div>
  `;
}
