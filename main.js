let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");

let stared = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!stared) {
      nums.forEach((num) => startCount(num));
    }
    stared = true;
  }
};

function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
