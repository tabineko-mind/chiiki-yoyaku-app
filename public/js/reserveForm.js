// reserveForm.js - 予約データをフォームから取得し、GASに送信する処理
// .env の GAS_URL を使ってデータを送信します
// 送信成功後は thanks.html に遷移します

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const reserveDate = document.getElementById("reserve-date").value;
      const reserveTime = document.getElementById("reserve-time").value;
  
      const data = {
        username,
        reserveDate,
        reserveTime,
      };
  
      try {
        alert("GAS送信中...");
  
        const response = await fetch("https://script.google.com/macros/s/AKfycbwOCI4XsqbxAPIJdxUVy_Sh1-Ii4_fI9Fj125y0ukA/exec", {

          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        // 成功したらサンクスページへ遷移
        window.location.href = "/thanks.html";
      } catch (error) {
        console.error("GAS送信失敗:", error);
        alert("予約送信に失敗しました。もう一度お試しください。");
      }
    });
  });
  