const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    debugger;
    event.target.classList.add("active");
  });
});
