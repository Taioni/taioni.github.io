document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // 現在のページURLを取得
  const currentPage = window.location.pathname.split("/").pop();

  // 初期設定：HOMEタブのアクティブ状態を設定
  if (currentPage === "index.html" || currentPage === "") {
    tabButtons[0].classList.add("active");
    if (tabContents.length > 0) {
      tabContents[0].classList.add("active");
    }
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const targetTab = button.getAttribute("data-tab");

      // HOMEタブクリック時にトップページへ遷移
      if (button.tagName === "A" && targetTab === "home") {
        // 他ページからの遷移はそのまま
        return;
      }

      // 現在のページでのHOMEクリックを無効化
      if (currentPage === "index.html" && targetTab === "home") {
        event.preventDefault(); // ページ遷移をキャンセル
      }

      // すべてのボタンのアクティブ状態を解除
      tabButtons.forEach((btn) => btn.classList.remove("active"));

      // 対象ボタンをアクティブに
      button.classList.add("active");

      // すべてのタブコンテンツを非表示
      tabContents.forEach((content) => content.classList.remove("active"));

      // 対象のタブコンテンツを表示（HOMEタブ以外の場合）
      if (targetTab && targetTab !== "home") {
        document.getElementById(targetTab).classList.add("active");
      }
    });
  });
});
