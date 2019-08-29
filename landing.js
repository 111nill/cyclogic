const scroll = new SmoothScroll('.gnb a[href*="#"]', {
  speed: 800
});

const typeScript = () => {
  const landingText = document.getElementById("maintext");

  let typewriter = new Typewriter(landingText, {
    loop: true
  });

  typewriter
    .pauseFor(500)
    .typeString("We crave creativity")
    .pauseFor(1000)
    .deleteChars(16)
    .pauseFor(1000)
    .typeString(`are <span style="color:#aedfe6">Cyclogic</span>`)
    .pauseFor(1000)
    .start();
};

typeScript();
