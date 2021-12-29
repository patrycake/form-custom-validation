let form = document.getElementById("form")
let email = document.getElementById("email")
let country = document.getElementById("country-code")
let zipcode = document.getElementById("zipcode")
let password = document.getElementById("password")
let passwordConfirmation = document.getElementById("password-confirmation")


function formSubmit(event) {
    event.preventDefault();

    if (!email.validity.valid &&
        !country.validity.valid &&
        !zipcode.validity.valid &&
        !password.validity.valid &&
        !passwordConfirmation.validity.valid) {
        console.log("NOT VALID")
    }
}

form.addEventListener("submit", formSubmit, false)
password.addEventListener("input", function(){
    if (passwordConfirmation.value != password.value) {
        console.log(`error pass:${password.value} confir:${passwordConfirmation.value}`)
        passwordConfirmation.setCustomValidity("Passwords must match")
    }
})
passwordConfirmation.addEventListener("input", function () {
    if (passwordConfirmation.value != password.value) {
        console.log(`error pass:${password.value} confir:${passwordConfirmation.value}`)
        this.setCustomValidity("Passwords must match")
    } else if (this.validity.patternMismatch) {
        showError(this, "Password must contain things")
    } else if (this.validity.valueMissing) {
        showError(this, "Please enter a password")
    } else {
        //no error
        this.setCustomValidity("")
    }
    this.reportValidity();
})