const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".home img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".home-txt h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".home-txt h3", {
    ...scrollRevealOption,
    delay: 1000,
  });