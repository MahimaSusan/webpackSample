module.exports = "It works from content.js.";
$("a").click(function() {
  $(".picture-section").css("display", "block");
});
window.onload = function() {
          	 $("<span>Hello world!</span>").insertAfter(".gallery-section");
          }

// var myImage = document.querySelector('img');

// fetch('./images/gallery-img-1.jpg')
// .then(function(response) {
//   return response.blob();
// })
// .then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//     console.log("frjr");
//   myImage.src = objectURL;
// });
fetch('images.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response  
      response.json().then(function(data) {
        console.log(data);
        data.images.forEach(function(obj) {
          var img = new Image();
          img.src = obj.bannerImg1;
          img.setAttribute("class", "banner-img");
          img.setAttribute("alt", "effy");
          document.getElementById("img-container").appendChild(img);
          $("#img-container").append("<div></div>")

        });

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
//   data.images.forEach( function(obj) {
//   var img = new Image();
//   img.src = obj.bannerImg1;
//   img.setAttribute("class", "banner-img");
//   img.setAttribute("alt", "effy");
//   document.getElementById("img-container").appendChild(img);
// });
