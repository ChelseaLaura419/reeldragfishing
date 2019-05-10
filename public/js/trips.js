$(".deltrip").on("click", function(event) {
  // Get the ID from the button.
  // This is shorthand for $(this).attr("data-tripid")
  var id = $(this).data("tripid");

  // Send the DELETE request.
  $.ajax("/trip/" + id, {
    type: "DELETE"
  }).then(
    function() {
      console.log("deleted id ", id);
      // Reload the page to get the updated list
      location.reload();
    }
  );
});