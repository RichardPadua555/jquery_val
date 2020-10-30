  $(document).ready(function(){
    jQuery.validator.addMethod("lettersonly",
    function(value, element) {  return this.optional(element)
    || /^[a-z]+$/i.test(value);}, "Please enter only letters"); 

  $('#form-validate').validate({
    errorClass: 'errors',
    rules:{

      first_name: {
        required: true,
        minlength: 3,
        maxlength: 20
      },

      middle_name: {
        required: true,
        minlength: 3,
        maxlength: 20
      },

      last_name: {
        required: true,
        minlength: 3,
        maxlength: 20
      },

      date_of_birth: {
        required: true
      },

      age: {
        required: true,
        digits: true
      },

      email: {
        required: true,
        email: true
      },

      mobile_number: {
        required:true,
        digits: true
      },

      address: {
        required: true
      },

      qualification: {
        required: true,
        lettersonly: true
      }
    },

    messages: {

      first_name: {
        required: 'Please enter your first name !'
      },

      middle_name: {
        required: 'Please enter your middle name !'
      },

      last_name: {
        required: 'Please enter your last name !'
      },

      date_of_birth: {
        required: 'Please enter your date of birth !'
      },

      age: {
        required: 'Please enter your age !'
      },

      email: {
        required: 'Please enter your email !'
      },

      mobile_number: {
        required:'Please enter your mobile number !'
      },

      address: {
        required: 'Please enter your address !'
      },

      qualification: {
        required: 'Please enter your qualification !'
      }
    }
  });
});


