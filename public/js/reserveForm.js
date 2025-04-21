// このファイルは「予約入力フォームの送信処理」を行います
// 入力データを sessionStorage に保存し、confirm.html に遷移します

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reserveForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("username").value;
      const date = document.getElementById("reserveDate").value;
      const time = document.getElementById("reserveTime").value;
  
      const reservation = { name, date, time };
  
      sessionStorage.setItem("currentReservation", JSON.stringify(reservation));
      window.location.href = "/confirm.html";
    });
  });
  