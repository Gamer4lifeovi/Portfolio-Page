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

const spaceId = "ixmj5tih9i68";
const environmentId = "master";
const accessToken = "ld6gA8ixY2_y3-5_Yp4RNztAGHOjwBzp0-LZ2eLoFzA";

const heroEntryId = "6goistgm1ct39QiiMvVzpV";

const getSingleEntry = (id) => {
  return fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${id}?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .then((entry) => entry.fields);
};

//2h9lrOTpXXylJWeESQoXD3

const getSingleAsset = (id) => {
  return fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/assets/${id}?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .then((entry) => entry.fields);
};

window.onload = () => {
  getSingleEntry(heroEntryId).then((fields) => {
    const title = fields.title;
    const paragraph = fields.paragraph;

    document.getElementById("hero-title").textContent = title;
    document.getElementById("hero-paragraph").textContent = paragraph;

    getSingleAsset(fields.image.sys.id).then((fields) => {
      const bgImg = fields.file.url;

      document.getElementById("hero").style.backgroundImage = `url("https:${bgImg}")`;
    });
  });

  getSingleEntry()
};
