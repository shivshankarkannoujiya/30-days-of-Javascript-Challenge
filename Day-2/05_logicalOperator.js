// TODO: Logical Operator Challenge : 1 < && > 
//! User is allowed to make a purchase when he is :
// logged in 
// email verified
// cardInfo - valid
// if any One is missing stop purchase

const isLoggedIn =  true;
const isEmailVerified = true;
const cardInfo = true;

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log(`User is allowed to purachse Course`);
}else{
    console.log(`User is not allowed to purchase the course`);
}




// TODO: Logical Operator Challenge : 2
//! Allow user to access course if he is :
// logged in from email
// logged in from google 
// logged in form facebook

let email = true;
let facebook = false;
let google = false;

if (email || facebook || google) {
    console.log(`login Success`);
}


// TODO: Ternary Operator Challenge
// Show user a Signout button if he is authenticated
// Otherwise show him option to Login/SignUp


const authenticated = false;

// if (authenticated) {
//     console.log(`Show Signout button`);
// }else{
//     console.log(`Show login option`);
// }

//! Ternary Operator
authenticated ? console.log(`SignOut Button`) : console.log(`LogIn Button`);