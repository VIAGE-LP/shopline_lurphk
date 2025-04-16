// 獲取當前年份與月份
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 補零處理
const discountCode = `HB${year}${month}D`;

// 插入到 HTML
document.getElementById("currentMonth").textContent = month;
document.getElementById("discountCode").textContent = discountCode;

// 複製折扣碼
function hbdcopyCode() {
  const code = document.getElementById("discountCode").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("折扣碼已複製！");
    document.getElementById("birthdayModal").style.display = "none";
  });
}

// 關閉彈窗
function closeModal() {
  document.getElementById("birthdayModal").style.display = "none";
}

// 獲取網址參數
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// 取得 utm_campaign 參數值
const utmCampaign = getQueryParam("utm_campaign");

// 檢查是否包含 "hbd"（不區分大小寫）
if (utmCampaign && utmCampaign.toLowerCase().includes("hbd")) {
  document.getElementById("birthdayModal").style.display = "flex";
}