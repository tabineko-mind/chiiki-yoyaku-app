// このファイルは確認画面で予約情報を表示するためのJSです

document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("confirmDisplay");
  
    const data = sessionStorage.getItem("currentReservation");
    if (!data) {
      display.innerHTML = "<p>予約情報が見つかりません。</p>";
      return;
    }
  
    const { name, date, time } = JSON.parse(data);
  
    display.innerHTML = `
      <p><strong>お名前：</strong> ${name}</p>
      <p><strong>予約日：</strong> ${date}</p>
      <p><strong>時間：</strong> ${time}</p>
    `;
  });
  