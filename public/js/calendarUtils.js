// calendarUtils.js - カレンダー操作に関する共通処理を定義するファイル
// 例：日付の整形や今日の日付を取得するなど

export function getToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }
  
  export function isPastDate(dateStr) {
    const inputDate = new Date(dateStr);
    const now = new Date();
    return inputDate < now.setHours(0, 0, 0, 0);
  }
  