const elBtn = document.querySelector(".btn");

// elBtn.addEventListener("click", function(evt){
//   evt.preventDefault()

//   localStorage.removeItem("token")

//   let getToken = localStorage.getItem("token")

//   if(!getToken){
//     window.location.replace("https://m.youtube.com/channel/UCGe-f3M36apkvkkbwIYWXng")
//   }
// })

document
  .getElementById("subscribeButton")
  .addEventListener("click", function () {
    window.open(
      "https://m.youtube.com/channel/UCGe-f3M36apkvkkbwIYWXng",
      "_blank"
    );
  });

const elBtnn = document.querySelector(".btn-two");

elBtnn.addEventListener("click", function (evt) {
  evt.preventDefault();

  localStorage.removeItem("token");

  let getToken = localStorage.getItem("token");

  if (!getToken) {
    window.location.replace("login.html");
  }
});

document
  .getElementById("subscribeButtonn")
  .addEventListener("click", function () {
    window.open("https://www.instagram.com/laptopp1us_/", "_blank");
  });
document.getElementById("telegram").addEventListener("click", function () {
  window.open("https://web.telegram.org/k/#@LaptopPlusYoutube", "_blank");
});
document.getElementById("LinkedIn").addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/laptop-plus-4797332bb/", "_blank");
});
document.getElementById("Pinterest").addEventListener("click", function () {
  window.open("https://ru.pinterest.com/gulomovmashrabboy51/", "_blank");
});
document.getElementById("Tumblr").addEventListener("click", function () {
  window.open("https://www.reddit.com/user/Putrid-Car-7518/submitted/", "_blank");
});document.getElementById("Twitter").addEventListener("click", function () {
  window.open("https://twitter.com/PlusLapto97828", "_blank");
});