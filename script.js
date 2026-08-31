// 왼쪽 상단 탭 메뉴 (드로어) 열고 닫기
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

function openDrawer() {
  drawer.classList.add("open");
  overlay.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  drawer.classList.remove("open");
  overlay.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", openDrawer);
closeBtn.addEventListener("click", closeDrawer);
overlay.addEventListener("click", closeDrawer);

document.querySelectorAll(".drawer-link").forEach((link) => {
  link.addEventListener("click", closeDrawer);
});

// 스크롤하면 사진/텍스트가 순서대로 나타나는 효과
const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealItems.forEach((item) => observer.observe(item));
