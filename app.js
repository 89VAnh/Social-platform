const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Profile menu tabs
setTimeout(function () {
  const tabs = $$(".profile-menu-items");
  const line = $(".line-tab");
  const tabActive = $(".profile-menu-items.active");

  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
  tabs.forEach((tab) => {
    tab.onclick = function clickMenuProfile(e) {
      $(".profile-menu-items.active").classList.remove("active");

      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      e.target.classList.add("active");
    };
  });
}, 3000);

// Status tabs in main
statusTabs = $$(".status-items");
statusTabs.forEach((statusTab) => {
  statusTab.onclick = function () {
    $(".status-items.active").classList.remove("active");

    this.classList.add("active");
  };
});

//like post action
function likePost(postId) {
  const heartFill = $$(".heart-fill")[postId];

  const classArray = [...heartFill.classList];
  if (classArray.some((className) => className == "hidden")) {
    heartFill.classList.remove("hidden");
  } else {
    heartFill.classList.add("hidden");
  }
}
