function validateForm(event) {
    event.preventDefault();
  
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirmpassword");
    var birthdateInput = document.getElementById("birthdate");
    var genderInputs = document.querySelectorAll('input[name="gender"]');
    var agreeInput = document.getElementById("agree");
  
    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();
    var confirmPassword = confirmPasswordInput.value.trim();
    var birthdate = birthdateInput.value.trim();
    var genderSelected = false;
  
    if (username.length < 5) {
      alert("Username must be at least 5 characters long!");
      return;
    }
  
    if (!AlphaNumeric(password)) {
      alert("Password must be alphanumeric!");
      return;
    }
  
    if (password != confirmPassword) {
      alert("Confirm password must match the password!");
      return;
    }
  
    if (!birthdate) {
      alert("Please select a birthdate!");
      return;
    }
  
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].checked) {
        genderSelected = true;
        break;
      }
    }
  
    if (!genderSelected) {
      alert("Please select a gender!");
      return;
    }
  
    if (!agreeInput.checked) {
      alert("Please agree to the Terms & Conditions!");
      return;
    }
    
    window.location.href = "Movies.html";
    alert("Your account has been registered! You will be directed to Movies Page.");
  }

  function AlphaNumeric(str) {
    for (var i = 0; i < str.length; i++) {
      if (isNumeric(str[i])) {
        return true;
      }
    }
    return false;
  }
  
  function isNumeric(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
  }
  