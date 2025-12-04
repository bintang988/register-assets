document.addEventListener("DOMContentLoaded", function () {
    var box = document.createElement("div");
    box.className = "registration-box";
    box.innerHTML = `
        <h2>&#9989; Registrasi Berhasil!</h2>
        <p>Selamat datang di <strong>[Nama Aplikasi/Platform]</strong>!</p>
        <p>Silakan masuk untuk mulai menggunakan semua fitur kami.</p>
        <a href="/login">Lanjutkan ke Halaman Masuk</a>
    `;
    document.body.appendChild(box);
});
