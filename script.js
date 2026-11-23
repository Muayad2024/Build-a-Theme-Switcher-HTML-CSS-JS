const themes = [
    {
        name: "light",
        message: "The Theme now is light"
    },
    {
        name: "dark",
        message: "The Theme now is dark"
    },
    {
        name: "ocean",
        message: "The theme now is ocean"
    },
    {
        name: "nord",
        message: "The theme now is nord"
    }
];

const themeSwitcherButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");




themeSwitcherButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hasAttribute("hidden");
  if (isHidden) {
    themeDropdown.removeAttribute("hidden");       // show
    themeSwitcherButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");      // hide
    themeSwitcherButton.setAttribute("aria-expanded", "false");
  }
});

// The themes that we will change the color on it
const themeLight = document.getElementById("theme-light");
const themeDark = document.getElementById("theme-dark");
const themeOcean = document.getElementById("theme-ocean");
const themeNord = document.getElementById("theme-nord");


themeLight.addEventListener("click", () => {
    document.body.classList.add("theme-light")
    document.body.classList.remove("theme-dark", "theme-ocean", "theme-nord")
    document.querySelector('[aria-live="polite"]').textContent = themes[0].message;
});

themeDark.addEventListener("click", () => {
    document.body.classList.add("theme-dark")  
    document.body.classList.remove("theme-light", "theme-ocean", "theme-nord")
    document.querySelector('[aria-live="polite"]').textContent = themes[1].message;
});

themeOcean.addEventListener("click", () => {
    document.body.classList.add("theme-ocean") 
    document.body.classList.remove("theme-light", "theme-dark", "theme-nord")
    document.querySelector('[aria-live="polite"]').textContent = themes[2].message;
});

themeNord.addEventListener("click", () => {
    document.body.classList.add("theme-nord")
    document.body.classList.remove("theme-light", "theme-ocean", "theme-dark")
    document.querySelector('[aria-live="polite"]').textContent = themes[3].message;
});