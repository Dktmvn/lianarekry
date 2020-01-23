function showAlert(){
  if($("#sub-alert").find("div#sub-alert2").length===0){
    $("#sub-alert").append("<div class='alert alert-success alert-dismissable' id='sub-alert2'> <button type='button' class='close' data-dismiss='alert'  aria-hidden='true'>&times;</button> <strong>Thank you for your subscription!</strong></div>");
  }
  $("#sub-alert").css("display", "");
}