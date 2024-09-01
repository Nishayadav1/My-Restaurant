    //   // Function to show the corresponding form based on the button clicked
    //   function showForm(formType) {
    //     const signupForm = document.getElementById('signup-form');
    //     const signinForm = document.getElementById('signin-form');

    //     if (formType === 'signup') {
    //         signupForm.classList.add('active');
    //         signinForm.classList.remove('active');
    //     } else if (formType === 'signin') {
    //         signinForm.classList.add('active');
    //         signupForm.classList.remove('active');
    //     }
    // }

    // // Attach event listeners to the buttons
    // document.getElementById('signup-button').addEventListener('click', function() {
    //     showForm('signup');
    // });

    // document.getElementById('signin-button').addEventListener('click', function() {
    //     showForm('signin');
    // });

    // // Function to validate password and confirm password
    // function validatePassword(event) {
    //     const password = document.getElementById('password').value;
    //     const confirmPassword = document.getElementById('confirm-password').value;

    //     if (password !== confirmPassword) {
    //         event.preventDefault(); // Prevent form submission
    //         alert('Passwords do not match.');
    //     }
    // }

    // // Attach event listener to the sign-up form submit button
    // document.getElementById('signup').addEventListener('submit', validatePassword);

    // // Default form to display on page load
    // showForm('signup');





    // // ------------------------------------------------------------------
    // document.addEventListener('DOMContentLoaded', () => {
    //     const form = document.getElementById('signup-form');
    
    //     form.addEventListener('submit', function (event) {
    //         event.preventDefault(); // Prevent form from submitting the default way
    
    //         // Get values from form fields
    //         const createPassword = document.getElementById('create-password').value;
    //         const confirmPassword = document.getElementById('confirm-password').value;
    
    //         // Simple validation
    //         if (createPassword !== confirmPassword) {
    //             alert('Passwords do not match!');
    //             return;
    //         }
    
    //         // Redirect to the home page if passwords match
    //         window.location.href = 'home.html';
    //     });
    // });
    

//     // Function to show the corresponding form based on the button clicked
// function showForm(formType) {
//     const signupForm = document.getElementById('signup-form');
//     const signinForm = document.getElementById('signin-form');

//     if (formType === 'signup') {
//         signupForm.classList.add('active');
//         signinForm.classList.remove('active');
//     } else if (formType === 'signin') {
//         signinForm.classList.add('active');
//         signupForm.classList.remove('active');
//     }
// }

// // Attach event listeners to the buttons
// document.getElementById('signup-button').addEventListener('click', function() {
//     showForm('signup');
// });

// document.getElementById('signin-button').addEventListener('click', function() {
//     showForm('signin');
// });

// // Function to validate password and confirm password
// function validatePassword(event) {
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm-password').value;

//     if (password !== confirmPassword) {
//         event.preventDefault(); // Prevent form submission
//         alert('Passwords do not match.');
//         return;
//     }

//     // Redirect to the home page if passwords match
//     window.location.href = 'home.html';
// }

// // Attach event listener to the sign-up form submit button
// document.getElementById('signup').addEventListener('submit', validatePassword);

// // Default form to display on page load
// showForm('signup');

// // Ensure the DOM is fully loaded before attaching event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.getElementById('signup-form');

//     signupForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent form from submitting the default way

//         // Get values from form fields
//         const createPassword = document.getElementById('password').value;
//         const confirmPassword = document.getElementById('confirm-password').value;

//         // Simple validation
//         if (createPassword !== confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }

//         // Redirect to the home page if passwords match
//         window.location.href = 'home.html';
//     });
// });

//---------------------------------------------------------
// Function to show the corresponding form based on the button clicked
function showForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    if (formType === 'signup') {
        signupForm.classList.add('active');
        signinForm.classList.remove('active');
    } else if (formType === 'signin') {
        signinForm.classList.add('active');
        signupForm.classList.remove('active');
    }
}

// Attach event listeners to the buttons
document.getElementById('signup-button').addEventListener('click', function() {
    showForm('signup');
});

document.getElementById('signin-button').addEventListener('click', function() {
    showForm('signin');
});

// Function to validate password and confirm password on Sign Up form
function validateSignup(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        alert('Passwords do not match.');
    }
}

// Function to handle Sign In form submission
function handleSignin(event) {
    event.preventDefault(); // Prevent default form submission
    // Redirect to the home page
    window.location.href = 'home.html';
}

// Function to handle Sign Up form submission
function handleSignup(event) {
    // Perform password validation
    validateSignup(event);

    // If validation passes, redirect to the home page
    if (!event.defaultPrevented) {
        window.location.href = 'home.html';
    }
}

// Attach event listener to the sign-up form submit button
document.getElementById('signup').addEventListener('submit', handleSignup);

// Attach event listener to the sign-in form submit button
document.getElementById('signin').addEventListener('submit', handleSignin);

// Default form to display on page load
showForm('signup');
