// Mobile Sidebar Functionality
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const sidebarMenu = document.getElementById("sidebar-menu");
const closeBtn = document.getElementById("close-btn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav");

// Open Sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  setTimeout(() => {
    sidebarMenu.classList.remove("-translate-x-full");
  }, 10);
});

// Close Sidebar function
function closeSidebar() {
  sidebarMenu.classList.add("-translate-x-full");
  setTimeout(() => {
    sidebar.classList.add("hidden");
  }, 300);
}

// Close Sidebar on clicking close button or outside the menu
closeBtn.addEventListener("click", closeSidebar);
sidebar.addEventListener("click", (e) => {
  if (e.target === sidebar) closeSidebar();
});
mobileNavLinks.forEach(link => {
  link.addEventListener("click", closeSidebar);
});