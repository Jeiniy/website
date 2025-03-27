// 取得「漢堡選單」按鈕
const menuToggle = document.getElementById("mobile-menu");

// 取得「選單列表」
const navList = document.querySelector(".nav-list");

// 監聽點擊事件，當使用者點擊漢堡選單時，開啟或關閉選單
menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active"); // 切換「active」類別，控制選單顯示與隱藏
});


  const districtData = {
    taipei: ["中正區", "大安區", "信義區", "士林區", "北投區"],
    taichung: ["西屯區", "北區", "南區", "東區", "太平區"]
  };

  const countySelect = document.getElementById("county");
  const districtSelect = document.getElementById("district");

  countySelect.addEventListener("change", function () {
    const selectedCounty = this.value;

    // 清空舊的區域選項
    districtSelect.innerHTML = "";

    if (selectedCounty && districtData[selectedCounty]) {
      // 加入新的選項
      districtData[selectedCounty].forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "請先選擇縣市";
      districtSelect.appendChild(option);
    }
  });

