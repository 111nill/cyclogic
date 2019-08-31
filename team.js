function init() {
  const slides = document.querySelectorAll(".slide");
  const pages = document.querySelectorAll(".team");
  const backgrounds = [
    `radial-gradient(#2B3760, #0B1023)`,
    `radial-gradient(#4E3022, #161616)`,
    `radial-gradient(#2B3760, #0B1023)`,
    `radial-gradient(#4E3022, #161616)`,
    `radial-gradient(#2B3760, #0B1023)`
  ];

  let current = 0;
  let scrollSlide = 0;

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function() {
      changeDots(this);
      nextSlide(index);
      scrollSlide = index;
    });
  });

  function changeDots(dot) {
    slides.forEach(slide => {
      slide.classList.remove("active");
    });
    dot.classList.add("active");
  }

  function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    const currentPage = pages[current];
    const nextPic = nextPage.querySelector(".team__picture");
    const currentPic = currentPage.querySelector(".team__picture");
    const nextText = nextPage.querySelector(".team__name");
    const portofolio = document.querySelector(".team");

    const tl = new TimelineMax({});

    tl.fromTo(currentPic, 0.3, { y: "-10%" }, { y: "-100%" })

      .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
      .fromTo(
        currentPage,
        0.3,
        { opacity: 1, pointerEvents: "all" },
        { opacity: 0, pointerEvents: "none" }
      )
      .fromTo(
        nextPage,
        0.3,
        { opacity: 0, pointerEvents: "none" },
        { opacity: 1, pointerEvents: "all" },
        "-=0.6"
      )
      .fromTo(nextPic, 0.3, { y: "-100%" }, { y: "-10%" }, "-=0.6")

      .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 });

    current = pageNumber;
  }
}

init();
