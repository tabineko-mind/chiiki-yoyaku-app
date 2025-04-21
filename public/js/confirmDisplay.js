// confirmDisplay.js - 入力内容を確認画面に表示するスクリプト
// sessionStorage から予約情報を取得して表示する

document.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("username");
    const reserveDate = sessionStorage.getItem("reserveDate");
    const reserveTime = sessionStorage.getItem("reserveTime");
  
    // 表示用の要素を取得して、データを挿入
    document.getElementById("display-username").textContent = username || "未入力";
    document.getElementById("display-reserve-date").textContent = reserveDate || "未選択";
    document.getElementById("display-reserve-time").textContent = reserveTime || "未選択";
  });
  