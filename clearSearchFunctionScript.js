$(document).ready(function(){
    $('#myModal, #myModal1, #myModal2, #myModal3, #myModal4, #myModal5, #myModal6, #myModal7, #myModal8, #myModal9, #myModal10, #myModal11, #myModal12, #myModal13, #myModal13, #myModal14, #myModal15, #myModal16, #myModal17').on('click', function(){
        $("input[id=myInput]").val('');
         var value = $(this).val().toLowerCase();
    $(".modal-body .col-sm-6").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    });
     $('#myModal, #myModal1, #myModal2, #myModal3, #myModal4, #myModal5, #myModal6, #myModal7, #myModal8, #myModal9, #myModal10, #myModal11, #myModal12, #myModal13, #myModal13, #myModal14, #myModal15, #myModal16, #myModal17').on("hidden.bs.modal", function() {
    var value = $(this).val().toLowerCase();
    $(".modal-body .col-sm-6").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
     $('#myModal, #myModal1, #myModal2, #myModal3, #myModal4, #myModal5, #myModal6, #myModal7, #myModal8, #myModal9, #myModal10, #myModal11, #myModal12, #myModal13, #myModal13, #myModal14, #myModal15, #myModal16, #myModal17').on("show.bs.modal", function() {
    var value = $(this).val().toLowerCase();
    $(".modal-body .col-sm-6").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
