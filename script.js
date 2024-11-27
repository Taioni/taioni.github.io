// script.js
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // 初期設定：最初のタブをアクティブに
  tabButtons[0].classList.add("active");
  tabContents[0].classList.add("active");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // すべてのボタンとコンテンツを非アクティブに
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // 対象のボタンとコンテンツをアクティブに
      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
});
