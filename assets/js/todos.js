// Check off specific todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  // Prevents bubbling up to our li todo items
  event.stopPropagation();
});

$("input[type=text").on("keypress", function(event) {
  if(event.which === 13) {
    // Unless todo item is blank
    // Appends it to the todo list and clears input
    if ($(this).val() != "") {
      $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + $(this).val() + "</li>");
      $(this).val("");
    }
  }
});

$(".fa-plus").on("click", function() {
  $("input[type=text]").fadeToggle();
});