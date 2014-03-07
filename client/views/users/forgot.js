Template.forgot.events = {
  'click input[type=submit]': function(e){
    e.preventDefault();

    var options = {
      email: $('#email').val()
    };

    if ( options.email == "" || options.email == null || typeof options.email === "undefined" ) {
      flash("Please enter your email address.");
      $("#email").focus()
    }
    else {
      Accounts.forgotPassword(options, function(error){
        if(error){
          flash(error.reason, "error");
        }else{
          Router.go('/signin');
          flash("Password reset link sent!");
        }
      });
    }

  }
};