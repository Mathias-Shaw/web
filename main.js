
var $registrationForm = $('#registration');
if($registrationForm.length){

  $registrationForm.validate({
      rules:{
          username: {
              required: true,
          },
          password: {
              required: true
          },
          confirm: {
              required: true,
              equalTo: '#password'
          }
      },
      messages:{
          username: {
              required: 'Please enter username!'
          },
          password: {
              required: 'Please enter password!'
          },
          confirm: {
              required: 'Please enter confirm password!',
              equalTo: 'Please enter same password!'
          },

      },
      errorPlacement: function(error, element)
      {
        {
            error.insertAfter( element );
        }
       }

  });


}
