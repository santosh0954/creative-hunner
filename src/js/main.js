document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");

  toggleButtons.forEach((btn, index) => {
    const toggleMenu = document.querySelector(btn.getAttribute("data-target"));
    const contentHeight = toggleMenu.scrollHeight;
    console.log(contentHeight);
    // toggleMenu.classList.add("hidden");
    btn.addEventListener("click", function () {
      toggleMenu.classList.toggle("hidden");
      toggleMenu.classList.toggle("flex");
      toggleMenu.classList.toggle("animate-fadeDown");
      // toggleMenu.addEventListener("animationend", () => {
      //   console.log("working");
      // });
    });
  });
});
