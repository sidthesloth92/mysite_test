$(document).ready(function() {
  console.log('in hrere');
  var contact_form_elements = document.querySelectorAll('.contact_form_element');
  var current = 0;
  var contact_form_length = contact_form_elements.length;
  
  for(var i = 1; i < contact_form_elements.length; i++) {
      contact_form_elements[i].classList.add('contact_future');
  }
  
  $('#contact_backward_button').click(function() {
    if(current > 0) {
      contact_form_elements[current].classList.toggle('contact_future');
      contact_form_elements[--current].classList.toggle('contact_past');
    }
  });
  
  $('#contact_forward_button').click(function() {
    if(current < contact_form_length - 1) {
      contact_form_elements[current].classList.toggle('contact_past');
      contact_form_elements[++current].classList.toggle('contact_future'); 
    }
  });
});