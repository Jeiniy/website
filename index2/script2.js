// 取得「漢堡選單」按鈕
const menuToggle = document.getElementById("mobile-menu");

// 取得「選單列表」
const navList = document.querySelector(".nav-list");

// 監聽點擊事件，當使用者點擊漢堡選單時，開啟或關閉選單
menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active"); // 切換「active」類別，控制選單顯示與隱藏
});
