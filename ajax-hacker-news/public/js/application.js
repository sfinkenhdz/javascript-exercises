$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $(".post-container").on("click",".vote-button", function(event) {
    event.preventDefault();
    voteUrl = $(this).attr("href");
    // regex to identify the vote ID without the server's help!
    // voteRegex = /\d+/g;
    // voteId = voteRegex.exec(voteUrl)[0];
    $.ajax({
      type : "GET",
      url : voteUrl
    })
    .done(function(response) {
      // $("#" + voteId + " .points").html(response);
      // $("#" + voteId + " .vote-button").css("color", "red");
      $("#" + response.id + " .points").html(response.points);
      $("#" + response.id + " .vote-button").css("color", "red");
    });
  });
  $(".post-container").on("click",".delete", function(event) {
    event.preventDefault();
    deleteUrl = $(this).attr("href");
    $.ajax({
      type: "DELETE",
      url: deleteUrl
    })
    .done(function(response){
      $("#" + response).remove();
    });
  });

  $("#posts").on("submit", function(event) {
    event.preventDefault();
      var title = $("#posts input[name='title']").val();
    $.ajax({
      type: "POST",
      url: "/posts",
      data: {title: title}
    })
    .done(function(response) {
      $(".post-container").append("<article id= '" + response.id + "'><a href='/posts/" + response.id + "/vote' class='fa fa-sort-desc vote-button'></a><h2><a href='/posts/"+ response.id +"'>"+response.title + "</a></h2><p><span class='points'>"+response.points+"</span><span class='username'>"+response.username+"</span><span class='timestamp'>"+response.time + "</span><span class='comment-count'>"+response.count + "</span><a class='delete' href='/posts/"+response.id+"'></a></p></article>");
    });
  });
  $("header").on("click","a[href='#posts']", function(event) {
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/sort/by_new"
    })
    .done(function(response) {
      $(".post-container").children().remove();
      var jobject = JSON.parse(response);
      $.each(jobject, function(idx, object){
        $(".post-container").append("<article id= '" + object.id + "'><a href='/posts/" + object.id + "/vote' class='fa fa-sort-desc vote-button'></a><h2><a href='/posts/"+ object.id +"'>"+object.title + "</a></h2><p><span class='points'>"+object.points+"</span><span class='username'>"+object.username+" </span><span class='timestamp'>"+object.time_since_creation + "</span><span class='comment-count'>"+object.count + "</span><a class='delete' href='/posts/"+object.id+"'></a></p></article>");
      });
    });
  });


  $("header").on("click","a[href='#comments']", function(event) {
    event.preventDefault();

    $.ajax({
      type: "GET",
      url: "/sort/by_comments"
    })
    .done(function(response) {
      $(".post-container").children().remove();
      var jobject = JSON.parse(response);
      $.each(jobject, function(idx, object){
        $(".post-container").append("<article id= '" + object.id + "'><a href='/posts/" + object.id + "/vote' class='fa fa-sort-desc vote-button'></a><h2><a href='/posts/"+ object.id +"'>"+object.title + "</a></h2><p><span class='points'>"+object.points+"</span><span class='username'>"+object.username+" </span><span class='timestamp'>"+object.time_since_creation + "</span><span class='comment-count'>"+object.comment_count + "</span><a class='delete' href='/posts/"+object.id+"'></a></p></article>");
      });
    });
  });


  $("header").on("click","a[href='#popular']", function(event) {
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/sort/by_popular"
    })
    .done(function(response) {
      $(".post-container").children().remove();
      var jobject = JSON.parse(response);
      $.each(jobject, function(idx, object){
        $(".post-container").append("<article id= '" + object.id + "'><a href='/posts/" + object.id + "/vote' class='fa fa-sort-desc vote-button'></a><h2><a href='/posts/"+ object.id +"'>"+object.title + "</a></h2><p><span class='points'>"+object.points+"</span><span class='username'>"+object.username+" </span><span class='timestamp'>"+object.time_since_creation + "</span><span class='comment-count'>"+object.comment_count + "</span><a class='delete' href='/posts/"+object.id+"'></a></p></article>");
      });
    });
  });
});

$(document).ajaxError(function(event, jqXHR) {
  console.log(jqXHR);
  if (jqXHR.status == 422) {
    // alert("You must enter a title");
    $("#posts input").attr("placeholder","You must input a valid title!!!");
  }
});
