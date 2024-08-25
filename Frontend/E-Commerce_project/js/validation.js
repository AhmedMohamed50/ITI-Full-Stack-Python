const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const phone_input = document.getElementById('phone-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
  e.preventDefault(); // login not redirect to home page
  let errors = []

  if(firstname_input){
    // If we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, phone_input.value, email_input.value, password_input.value, repeat_password_input.value)

    if(errors.length === 0){
      const signupData = {
        firstname: firstname_input.value,
        email: email_input.value,
        password: password_input.value,
        phone: phone_input.value
      }
      localStorage.setItem('signupData', JSON.stringify(signupData))
      alert('Signup data stored successfully')
    }
  } else {
    // If we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value)

    if(errors.length === 0){
      const storedSignupData = JSON.parse(localStorage.getItem('signupData'));

      // Check if email and password match the stored signup data
      if(storedSignupData && storedSignupData.email === email_input.value && storedSignupData.password === password_input.value){
        alert('Login successful')
        
        // Store login status or relevant data in localStorage
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('userFirstname', storedSignupData.firstname)

        // Redirect to the home page
        alert("before")
        window.location.href = 'index.html';
        alert("after")
      } else {
        errors.push('Invalid email or password')
        email_input.parentElement.classList.add('incorrect')
        password_input.parentElement.classList.add('incorrect')
      }
    }
  }

  if(errors.length > 0){
    e.preventDefault()
    error_message.innerText = errors.join(". ")
  }
})


function getSignupFormErrors(firstname, phone, email, password, repeatPassword){
  let errors = []

  if(firstname === '' || firstname == null){
    errors.push('Firstname is required')
    firstname_input.parentElement.classList.add('incorrect')
  }
  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  } else if (!email.endsWith('@iti.com')) { 
    errors.push('Email must be in the format *@iti.com')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password.length < 8){
    errors.push('Password must have at least 8 characters')
    password_input.parentElement.classList.add('incorrect')
  }
  if(password !== repeatPassword){
    errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
  }
  // Phone number validation using a regular expression for a basic 10-digit format
  // const phoneRegex = /^[0-9]{10}$/;
    // Phone number validation using a regular expression for a 11-digit format
  const phoneRegex = /^01[0-2,5]\d{8}$/;
  
  if (phone === '' || phone == null) {
    errors.push('Phone number is required')
    phone_input.parentElement.classList.add('incorrect')
  } else if (!phoneRegex.test(phone)) {
    errors.push('Phone number must be a valid 11-digit number')
    phone_input.parentElement.classList.add('incorrect')
  }


  return errors;
}

function getLoginFormErrors(email, password){
  let errors = []

  if(email === '' || email == null){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
  }
  if(password === '' || password == null){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
  }

  return errors;
}

// Clear error messages when user types again
const allInputs = [firstname_input, email_input, password_input, repeat_password_input, phone_input].filter(input => input != null)

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect')
      error_message.innerText = ''
    }
  })
})