const $ = document;

const openAndCloseSidebar = $.getElementById("openAndCloseSidebar");
const navbar = $.getElementById("navbar");
const sidebar = $.getElementById("sidebar");
const container = $.getElementById("container");
let pageWidth;

console.log("sidebar is Open");

//disable All the A links in page
if (window) {
      document.addEventListener("click", (e) => {
            e.preventDefault();
      });
}

// Close and open sidebar when icon(header) clicked
(function () {
      openAndCloseSidebar.addEventListener("click", () => {
            sidebar.classList.toggle("hideAndShowSidebar");
            openAndCloseSidebar.classList.toggle("fa-times");
            openAndCloseSidebar.classList.toggle("fa-grip-vertical");
            // Icons => fa-grip-horizontal / fa-grip-vertical
            container.classList.toggle("container-expand");
            navbar.classList.toggle("marginRight");
      });
})();

// Get Client Width size for closing Sidebar when clicked on container
function getBrowserWidthSize() {
      pageWidth = $.body.clientWidth;
      console.log("Client page size: " + pageWidth);
      closeSidebarOnMobile();
}
window.onload = getBrowserWidthSize;
window.onresize = getBrowserWidthSize;

function closeSidebarOnMobile() {
      if (pageWidth < 768) {
            container.addEventListener("click", () => {
                  if (sidebar.classList.contains("hideAndShowSidebar") === false) {
                        sidebar.classList.add("hideAndShowSidebar");
                        openAndCloseSidebar.classList.toggle("fa-grip-vertical");
                        // fa-grip-horizontal / fa-grip-vertical
                        openAndCloseSidebar.classList.toggle("fa-times");
                        container.classList.add("container-expand");
                        navbar.classList.add("marginRight");
                        console.log("sidebar is Closed");
                  }
            });
      }
}

// Add active class bye clicking on A links in sidebar
const sidebarALinks = $.querySelectorAll(".sidebar .nav-link");
function switchActiveClass() {
      sidebarALinks.forEach((element) => {
            element.classList.remove("active");
            this.classList.add("active");
      });
}
sidebarALinks.forEach((element) => {
      element.addEventListener("click", switchActiveClass);
});
