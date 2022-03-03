const $ = document;

// ! Open and close sidebar
const sidebarNav = $.getElementById("sidebarNav");
const openSidebar = $.getElementById("openSidebar");
const wrapper = $.getElementById("wrapper");

openSidebar.addEventListener("click", () => {
      sidebarNav.classList.toggle("hide");
      console.log("Sibebar Closed");
      wrapper.classList.toggle("wrapper-expand");
});
