//  Make navbar opaque when window scrolled
// window.addEventListener("scroll", () => {
//   console.log("Scrolling...");
// });
window.onscroll = () => {
  if (window.scrollY > 200) {
    document.querySelector("nav.nav").classList.add("scrolled");
  } else {
    document.querySelector("nav.nav").classList.remove("scrolled");
  }
};

// Fetching API

const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((resultOfPromise) => resultOfPromise.json())
  .then((resultInJSON) => console.log(resultInJSON))
  .catch((error) => console.log(error));

//  Add CMS
//      -> Name
//      -> Hero (image, title, text)
//      -> Certificates <Array of (font name, title, subtitle, description)>
//      -> Services (image, list of services <Array of (font name, title, description)>)
//      -> Portfolio <Array of (image,title, description, link )>
//      -> Contact (title, subtitle, form title, form subtitle, map address, location, email, phone)
