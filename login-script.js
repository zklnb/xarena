function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  if (!u || !p) {
    alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
    return false;
  }

  if (u.toLowerCase() === "zklnb" && p === "1234") {
    localStorage.setItem("daDangNhap", true);
    window.location.href = "home/index.html";
  } else {
    alert("❌ Sai tài khoản hoặc mật khẩu!\nVui lòng thử lại.");
  }

  return false;
}
