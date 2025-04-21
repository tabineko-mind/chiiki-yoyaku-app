// adminSchedule.js - 管理画面で予約データを一覧表示するJSファイル
// sessionStorage に保存された予約をすべて取得して、画面に表示します

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("admin-reservations");
    const data = sessionStorage.getItem("reservations");
  
    if (!data) {
      container.innerHTML = "<p>予約データがありません。</p>";
      return;
    }
  
    const reservations = JSON.parse(data);
    if (reservations.length === 0) {
      container.innerHTML = "<p>まだ予約がありません。</p>";
      return;
    }
  
    const list = document.createElement("ul");
  
    reservations.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${item.name} さん - ${item.date} ${item.time}`;
      list.appendChild(li);
    });
  
    container.appendChild(list);
  });
  