module.exports = "It works from content.js.";
$("a").click(function() {
  $(".picture-section").css("display", "block");
});
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
        $.each(data.gallerySectionMediaone, function(index, item) {
          $.each($(".picture-gallery-second"), function(def, dup) {
            if (index == def) {
              $(dup).attr("srcset", item.src);
            }
          });
        });
        $.each(data.gallerySectionMediatwo, function(index, item) {
          $.each($(".picture-gallery-third"), function(def, dup) {
            if (index == def) {
              $(dup).attr("srcset", item.src);
            }
          });
        });

        $.each(data.pictureSection, function(index, item) {
          $.each($(".image-bottom"), function(def, dup) {
            if (index == def) {
              $(dup).attr("src", item.src);
              $(dup).attr("srcset", item.srcset1 + " " + item.dpr1 + "," + item.srcset2 + " " + item.dpr2 + "," + item.srcset3 + " " + item.dpr3);

            }
          });
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
