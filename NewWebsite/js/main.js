//Ready the page before firing any js

$(document).ready(function() {

//Form submission to Heroku

  $('#form').submit(function (e) {
    e.preventDefault();
    var data = {
        'first-name': $('#first-name').val(),
        'last-name': $('#last-name').val(),
        'email': $('#email').val(),
        'phone-number': $('#phone-number').val(),
        'company-url': $('#company-url').val()
    };
    console.log(data);
    $.post('http://izenda-free-trial.herokuapp.com/free-trial', data, function (data) {
        console.log(data);
    }, 'json');
  });
});
