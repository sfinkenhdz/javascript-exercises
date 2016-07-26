$(document).ready(function () {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $("#cheer_caller").on("submit", function (event) {
        event.preventDefault();
        var str = $(this).serialize();
        $.ajax({
          // .attr("method"),
          method: "POST",
          url: "/cheers",
          data: str
        })
        .done(function(response) {
          $("span").html(response);
          $("input[type=text]").val("");
          $("input[type=text]").focus()
        });

  });
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});


