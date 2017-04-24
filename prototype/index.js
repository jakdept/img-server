function close() {
  console.log("closing");
  if ($(".image-card-selected").length) {
    $("#preview-pane-container").hide(100, function () {
      $(".image-card-selected").animate({ marginBottom: "10px" }, 200);
      $(".image-card-selected").removeClass("image-card-selected");
    });
  }
}

function open(target) {
  console.log("opening")

  // add 20 px for the padding offset, remove 64 for the header row
  newTop = target.offset().top + target.height() + 20 - 64 + "px";
  $("#preview-pane-container").css({ top: newTop });
  // $(".preview-pane a img").css({src: })
  target.addClass("image-card-selected");

  target.animate({ marginBottom: "660px" }, 200);
  setTimeout(function () {
    $("#preview-pane-container").show(100);
  }, 100);
}

function imageClick(target) {
  close();
  // if you run the full close it takes 400 ms(ish)
  // first 200ms will leaaad to the thing being closed then opened
  // second 200ms will give the improper position
  setTimeout(function() {
    open(target);
  }, 400)
}

$(document).ready(function () {

  $(".preview-pane-close-button ").on("click", close);
  $(".image-card").on("click", function () {
    imageClick($(this));
  });

  $("#preview-pane-container").hide(0);

});