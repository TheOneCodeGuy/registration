

function validiate() {

  var err = 0;


  var pass1 = $("#password").val();
  var pass2 = $("#cpassword").val();

  if(pass1==0 || pass2==0)
  {
    alert("Enter Password")
    $("#pg").addClass("has-error");
    $("#cpg").addClass("has-error");
    err++;
  }

  if(pass1 != pass2 )
  {
    alert("Passwords don't match")
    $("#pg").addClass("has-error");
    $("#cpg").addClass("has-error");
    err++;
  }

var date = $("#date").val();
var month = $("#month").val();
var year = $("#year").val();
var f_name = $("#first").val();
var l_name = $("#last").val();

if(/^[a-zA-Z]*$/.test(f_name) == false)
  {
    alert("Your Name Should Contain only Letters");
    $("#name").addClass("has-error");
    err++;
  }

  if(f_name=="" || l_name=="")
  {
    alert("Enter Name")
    $("#name").addClass("has-error");
    err++;
  }

  if(/^[a-zA-Z]*$/.test(l_name) == false)
    {
      alert("Your Name Should Contain only Letters");
      $("#name").addClass("has-error");
      err++;
    }

if(date == 0 || month== 0 || year==0)
  {
    alert("You can't leave date of birth empty");
    $("#dob").addClass("has-error");
    err++;
  }
if((month == 4 || month == 6 ||month == 9 ||month == 11) && date>30)
  {
    alert("Please enter valid date");
    $("#dob").addClass("has-error");
    err++;
  }

  if((month == 2) && date>29)
    {
      alert("Please enter valid date");
      $("#dob").addClass("has-error");
      err++;
    }
    if(!($("#terms").is(":checked")))
    {
      alert("Accept terms and conditions");
      $("#term").addClass("has-error");
      err++;
    }

    var progress = (7-err)/7*100;
    if(err==0)
      alert("You have successfully filled the form");
    $("#prog").attr('aria-valuenow',progress).css("width",progress + "%").val(progress + "% complete" );


};

$(document).ready( function() {
$("#submit").click( function () {
    validiate();
  });
});
