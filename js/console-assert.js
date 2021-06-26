var $form, width, height, area;

$form = $("#calculator");
$("form input[type='text']").on("blur", function()
{
  // Only shows if user enters number less than 10
  console.assert(this.value > 10, "User entered less than 10");
});

$("#calculator").on("submit", function(e)
{
  e.preventDefault();
  console.log("You clicked submit");

  width = $("#width").val();
  height = $("#height").val();
  area = width * height;

  // Message only shows if user has not enetered a number.
  console.assert($.isNumeric(area), "User entered a non-numberic value");
  $form.append("<p>" + area + "</p>");
});
