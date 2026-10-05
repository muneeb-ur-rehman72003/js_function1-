function submitFeedback() {
    const fieldIds = [
      'name',
      'age',
      'email',
      'job',
      'designation',
      'productType',
      'feedbackText'
    ];
  
    // Required fields aur email format check karo
    const invalidField = fieldIds
      .map(id => document.getElementById(id))
      .find(field => !field.checkValidity());
  
    if (invalidField) {
      invalidField.reportValidity();
      return;
    }
  
    document.getElementById('userName').textContent =
      document.getElementById('name').value;
  
    document.getElementById('userAge').textContent =
      document.getElementById('age').value;
  
    document.getElementById('userEmail').textContent =
      document.getElementById('email').value;
  
    document.getElementById('userJob').textContent =
      document.getElementById('job').value;
  
    document.getElementById('userDesignation').textContent =
      document.getElementById('designation').value;
  
    const productSelect = document.getElementById('productType');
  
    document.getElementById('userProductChoice').textContent =
      productSelect.options[productSelect.selectedIndex].text;
  
    document.getElementById('userFeedback').textContent =
      document.getElementById('feedbackText').value;
  
    document.getElementById('userInfo').style.display = 'block';
  
    alert('Thank you for your valuable feedback!');
  }
  
  document
    .getElementById('submitBtn')
    .addEventListener('click', submitFeedback);