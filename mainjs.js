let about = document.getElementById("about");
let pricing = document.getElementById("pricing");
let contact = document.getElementById("contact");
let navBar = document.getElementById("navBar");

navBar.classList.add("navBarStart");
about.classList.add("aboutStart");
pricing.classList.add("pricingStart");
contact.classList.add("contactStart");

let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

addEventListener("scroll", (e) => {
  var scrollPercentage = Math.max(
    0,
    (document.documentElement.scrollTop + document.body.scrollTop - 65) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight -
        65)
  );

  var drawLength = pathLength * (scrollPercentage * 5);
  console.log(pathLength);
  console.log(scrollPercentage);

  if (window.scrollY > 0) {
    about.classList.remove("aboutEnd");
    pricing.classList.remove("pricingEnd");
    contact.classList.remove("contactEnd");
    about.classList.add("aboutStart");
    pricing.classList.add("pricingStart");
    contact.classList.add("contactStart");

    if (window.scrollY > 0) {
      navBar.classList.remove("navBarStart");
      navBar.classList.add("navBarEnd");
    }
  } else {
    about.classList.remove("aboutStart");
    pricing.classList.remove("pricingStart");
    contact.classList.remove("contactStart");
    about.classList.add("aboutEnd");
    pricing.classList.add("pricingEnd");
    contact.classList.add("contactEnd");

    navBar.classList.remove("navBarEnd");
    navBar.classList.add("navBarStart");
  }
});
