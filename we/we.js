// 取得「漢堡選單」按鈕
const menuToggle = document.getElementById("mobile-menu");

// 取得「選單列表」
const navList = document.querySelector(".nav-list");

// 監聽點擊事件，當使用者點擊漢堡選單時，開啟或關閉選單
menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active"); // 切換「active」類別，控制選單顯示與隱藏
});
const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    // 開啟選單
    mobileMenu.addEventListener('click', () => {
        overlay.classList.add('active');
    });

    // 點擊 overlay 關閉選單
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) { // 只點到背景才關閉
            overlay.classList.remove('active');
        }
    });