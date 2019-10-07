document.addEventListener("DOMContentLoaded", function(event) {
  const navbarLinks = document.querySelectorAll(".menu>li");
  let sections = document.querySelectorAll(".main-content>section");

  // media query event handler
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 1200px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    navbarLinks.forEach(link => {
      let sectionId = link.querySelector("a").getAttribute("href");
      if (mq.matches) {
        // window width is at least 1200px
        // attach the event to each link
        link.addEventListener("click", function() {
          showSection(sectionId);
        });
      } else {
        // window width is less than 1200px
        // dettach the event from each link
        link.removeEventListener("click", function() {
          showSection(sectionId);
        });
      }
    });
  }

  function showSection(sectionId) {
    sectionId = sectionId.substring(1, sectionId.length);
    let activeSection = document.getElementById(sectionId).parentElement;
    sections.forEach(section => {
      if (section==activeSection) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
    console.log(sectionId + " link pressed");
  }
});
