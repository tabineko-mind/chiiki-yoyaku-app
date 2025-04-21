// utils.js - 共通で使うユーティリティ関数を定義するファイル
// 日付や時刻のフォーマット整形など、汎用的な処理をまとめる

export function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  }
  
  export function formatTime(timeStr) {
    const [hour, minute] = timeStr.split(":");
    return `${hour}時${minute}分`;
  }
  