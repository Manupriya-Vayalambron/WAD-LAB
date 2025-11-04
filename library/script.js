$(document).ready(function() {
  // Form validation
  $('#registrationForm').on('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    $('.error').text('');

    // First & Last Name
    if($('#firstName').val().trim() === '') {
      $('#firstName').next('.error').text('First Name is required');
      isValid = false;
    }
    if($('#lastName').val().trim() === '') {
      $('#lastName').next('.error').text('Last Name is required');
      isValid = false;
    }

    // Gender
    if(!$('input[name="gender"]:checked').val()) {
      $('input[name="gender"]').last().next('.error').text('Please select gender');
      isValid = false;
    }

    // Address
    if($('#address').val().trim() === '') {
      $('#address').next('.error').text('Address is required');
      isValid = false;
    }

    // Email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test($('#email').val())) {
      $('#email').next('.error').text('Invalid email format');
      isValid = false;
    }

    // Password validation: min 6 chars, at least one letter and one number
    const password = $('#password').val();
    const passPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(!passPattern.test(password)) {
      $('#password').next('.error').text('Password must be at least 6 characters and include letters and numbers');
      isValid = false;
    }

    // Phone
    const phonePattern = /^[0-9]{10}$/;
    if(!phonePattern.test($('#phone').val())) {
      $('#phone').next('.error').text('Enter a valid 10-digit phone number');
      isValid = false;
    }

    // Book Type
    if($('#bookType').val() === '') {
      $('#bookType').next('.error').text('Select a book type');
      isValid = false;
    }

    if(isValid) {
      alert('Registration successful!');
      $(this).trigger('reset');
      $('#cart').empty(); // optional: clear cart
    }
  });

  // Book Cart functionality
  $('.add-to-cart').click(function() {
    const bookTitle = $(this).data('title');
    $('#cart').append('<li>' + bookTitle + '</li>');
  });
});
