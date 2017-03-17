module.exports = "It works from content.js.";
$("a").click(function() {
  $(".picture-section").css("display", "block");
});
window.onload = function() {
  $("<span>Hello world!</span>").insertAfter(".gallery-section");
}
fetch('images.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        $.each(data.gallerySection, function(index, item) {
          $.each($(".picture-gallery-first"), function(def, dup) {
            if (index == def) {
              $(dup).attr("srcset", item.src);
            }
          });
        });

        $.each(data.pictureSection, function(index, item) {
          $.each($(".image-bottom"), function(def, dup) {
            if (index == def) {
              $(dup).attr("srcset", item.src);
            }
          });
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
