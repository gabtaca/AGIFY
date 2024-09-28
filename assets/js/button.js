import "./fetch.js";

// Reset button
document.addEventListener("DOMContentLoaded", function () {
  const btn_reset = document.getElementById("btn_reset");
  const showHistoryBtn = document.querySelector(".show_history");
  const hideHistoryBtn = document.querySelector(".hide_history");
  const listHistory = document.querySelector(".list_history");

  if (btn_reset) {
    btn_reset.addEventListener("click", clearLocalStorage);
  } else {
    console.error("Reset button not found!");
  }
  if (showHistoryBtn) {
    showHistoryBtn.addEventListener("click", toggleHistory);
  } else {
    console.error("Show history button not found!");
  }
  if (hideHistoryBtn) {
    hideHistoryBtn.addEventListener("click", toggleHistory);
  } else {
    console.error("Hide history button not found!");
  }

  function clearLocalStorage() {
    localStorage.clear();
    if (listHistory) {
      listHistory.innerHTML = "";
    } else {
      console.error("Element with class 'list_history' not found!");
    }
    location.reload();
  }

//Toggle button 
  function toggleHistory() {
    if (listHistory.classList.contains("list_history-hidden")) {
      listHistory.classList.remove("list_history-hidden");
      showHistoryBtn.style.display = "none";
      hideHistoryBtn.style.display = "flex";
    } else {
      listHistory.classList.add("list_history-hidden");
      showHistoryBtn.style.display = "flex";
      hideHistoryBtn.style.display = "none";
    }
  }
});
