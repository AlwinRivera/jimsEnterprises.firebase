$(document).ready(function(){
  $("input[id=myInput]").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".modal-body .col-sm-6").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
