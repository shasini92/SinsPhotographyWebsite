// Animate Smooth Scroll
// jQuery event listener, we create a new variable called "images", and then use the jQuery animate to make it scroll from the top to "images"
$("#view-work").on("click", function() {
  const images = $("#images").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});
