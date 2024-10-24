//獎項機率設定
// let prize = ['A獎', 'B獎', 'C獎'] //300元、200元、150元
let probability = [13.50, 25.24, 61.26] //獎項機率，假設A獎13.50%、 B獎25.24%、C獎61.26%，設定機率時要注意，可以設到小數點或是增加獎項欄位都沒關係，但所有數字加總要是100％
let num = Math.random() * 99;  // 0~99 共100個數字，取一個 0~99之間的亂數。

$("#startButton").on("click", function () {
  startButtonAn();
  // A獎13.50% 亂數落在 0 ~ 12.5 之間 (這裡13.5要減1，因為是從0開始取亂數)
  if ((0 <= num) && (num <= probability[0] - 1)) {
    // console.log(prize[0], probability[0] - 1);
    renderCanvas([2, 2, 2]);
    copyCode("fkookko", 300);

  // B獎25.24% 亂數落在 12.5 ~ 37.74 之間
  } else if ((probability[0] - 1 < num) && (num <= (probability[0] - 1 + probability[1]))) {
    // console.log(prize[1], (probability[0] - 1 + probability[1]));
    renderCanvas([0, 0, 0]);
    copyCode("fkookko_200", 200);

  // C獎61.26% 亂數落在 37.74 ~ 99 之間
  } else if (((probability[0] - 1 + probability[1]) < num) && (num <= 99)) {
    // console.log(prize[2], 99);
    renderCanvas([1, 1, 1]);
    copyCode("fkookko_150", 150);
  };
});

//複製折扣碼
let first_click = true;
function copyCode(couponcode, money) {
  navigator.clipboard.writeText(couponcode);
  // 判斷是否第一次按抽獎按鈕，第一次要等拉霸轉完再跳出提醒視窗，約1秒，抽過之後再按把手就直接跳出提醒視窗。
  if (first_click) {
    setTimeout(() => {
      confirm(`恭喜您獲得$${money}折扣!\n您已成功複製折扣碼：${couponcode}\n結帳時請於購物車輸入，\n即享活動優惠折扣＋整單再折TWD$${money}`);
      first_click = false;
    }, 1000)
  } else {
    confirm(`恭喜您獲得$${money}折扣!\n您已成功複製折扣碼：${couponcode}\n結帳時請於購物車輸入，\n即享活動優惠折扣＋整單再折TWD$${money}`);
  }
}

//玟瑀coding部分//
//canvas繪製參數
let canvas = document.querySelector("#slotMachine");
let ctx = canvas.getContext('2d');
//繪製的行數
let rows = 1;
//繪製的列數
let cols = 3;
//每個方塊的寬度
let rectWidth = 100;
//每個方塊的高度
let rectHeight = 100;
//方塊之間的間隔
let spacing = 0;

//避免不同螢幕導致的圖片模糊
const ratio = window.devicePixelRatio || 1;
//繪製整個canvas背景尺寸
canvas.width = cols * (rectWidth + spacing) * ratio;
canvas.height = rows * (rectHeight + spacing) * ratio;
canvas.style.width = `100%`;
canvas.style.height = `100%`;

//canvas需匯入的圖片(本機測試使用)
let imagePaths = [
  './img/slotMachine/SLOTBG-7-02.svg',
  './img/slotMachine/SLOTBG-7-03.svg',
  './img/slotMachine/SLOTBG-7-04.svg',
  './img/slotMachine/SLOTBG-7-05.svg',
  './img/slotMachine/SLOTBG-7-06.svg',
  './img/slotMachine/SLOTBG-7-07.svg',
];

//canvas初始圖片位置
let startColumnImageIndices = [0, 1, 2];
//canvas旋轉計算時所儲存的陣列
let currentImage = [0, 0, 0];

//計算圖片是否完全載入
let imagesLoaded = 0;
//使用map抓取imagePaths陣列之中的值
let images = imagePaths.map((path, index) => {
  //創建一個圖片物件
  let img = new Image();
  //進行圖片載入
  img.onload = () => {
    //每載入一張圖計數器增加1
    imagesLoaded++;
    //當圖片載入的數量與imagePaths陣列相等時進行內部邏輯運行
    if (imagesLoaded === imagePaths.length) {
      //判斷按鈕是否被點選過,若被點選過顯示最後結果,若不是則顯示初始值
      if (first_click == false) {
        console.log(typeof (Array(award)))
        awardArr = Array(award.split(','))[0]
        renderCanvas(awardArr);
      } else {
        renderCanvas(startColumnImageIndices);
        // console.log(456)
      }
    }
  };
  //設置圖像路徑並開始加載
  img.src = path;
  //傳回已建立的影像對象，並儲存在 images 數組中。
  return img;
});


//點擊手把動畫
function startButtonAn() {
  let startButton = document.getElementById('startButton');
  let startButtonAnimation = document.createElement('style');
  //canvas需匯入的圖片(線上正式使用)url(../lurptest/img/slotMachine/SLOTBG-手把1.svg);
  //canvas需匯入的圖片(本機測試使用)
  startButtonAnimation.innerHTML = `
  @keyframes startButton {
    0% {
      background-image: url(./img/slotMachine/SLOTBG-手把1.svg);
    }
    20% {
      background-image: url(./img/slotMachine/SLOTBG-手把2.svg);
    }
    40% {
      background-image: url(./img/slotMachine/SLOTBG-手把3.svg);
    }
    60% {
      background-image: url(./img/slotMachine/SLOTBG-手把4.svg);
    }
    80% {
      background-image: url(./img/slotMachine/SLOTBG-手把5.svg);
    }
    100% {
      background-image: url(./img/slotMachine/SLOTBG-手把1.svg);
    }
  `;
  startButton.classList.add('startButtonAnimation');
  document.head.appendChild(startButtonAnimation);
}

//canvas計算結果顯示與起始值顯示
function renderCanvas(startColumnImageIndices) {
  //依序使用canvas繪至圖片
  for (let j = 0; j < cols; j++) {
    let i = 0;
    while (i < currentImage.length) {
      let x = j * (rectWidth + spacing) * ratio;
      let y = i * (rectHeight + spacing) * ratio;
      ctx.clearRect(x, y, rectWidth * ratio, rectHeight * ratio);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(x, y, rectWidth * ratio, rectHeight * ratio);

      currentImage[i] = startColumnImageIndices[j];
      ctx.drawImage(images[currentImage[i]], x, y, rectWidth * ratio, rectHeight * ratio);
      i++;
    }
  }
}
