// Selecting elements
const form = document.querySelector("form");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("ph");
const emailInput = document.getElementById("gmail");
const passwordInput = document.getElementById("pass");
const textarea = document.getElementById("ta");

// ===== PASSWORD STRENGTH =====

const passMessage = document.createElement("small");
passwordInput.parentElement.appendChild(passMessage);

passwordInput.addEventListener("input", () => {

    const value = passwordInput.value;

    if (value.length < 8) {
        passMessage.textContent = "Weak password";
        passMessage.style.color = "red";
    }

    else if (
        value.match(/[A-Z]/) &&
        value.match(/[0-9]/) &&
        value.length >= 8
    ) {
        passMessage.textContent = "Strong password";
        passMessage.style.color = "green";
    }

    else {
        passMessage.textContent = "Medium password";
        passMessage.style.color = "orange";
    }
});


// ===== TEXTAREA CHARACTER COUNTER =====

const counter = document.createElement("small");
textarea.parentElement.appendChild(counter);

textarea.addEventListener("input", () => {
    counter.textContent =
        `${textarea.value.length} characters typed`;
});


// ===== FORM SUBMIT VALIDATION =====

form.addEventListener("submit", (e) => {

    // Prevent default temporarily
    e.preventDefault();

    // ===== PHONE VALIDATION =====

    const phone = phoneInput.value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits");
        return;
    }

    // ===== EMAIL VALIDATION =====

    if (!emailInput.value.includes("@")) {
        alert("Invalid email address");
        return;
    }

    // ===== PASSWORD VALIDATION =====

    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    // ===== VACATION SPOT VALIDATION =====

    const selectedCountry =
        document.querySelector('input[name="o1"]:checked');

    if (!selectedCountry) {
        alert("Please select a vacation spot");
        return;
    }

    // ===== TIME VALIDATION =====

    const selectedTime =
        document.querySelector('input[name="o2"]:checked');

    if (!selectedTime) {
        alert("Please select trip duration");
        return;
    }

    // ===== SUCCESS MESSAGE =====

    const countryLabel =
        document.querySelector(`label[for="${selectedCountry.id}"]`)
        .textContent;

    const timeLabel =
        document.querySelector(`label[for="${selectedTime.id}"]`)
        .textContent;

    alert(
        `Trip booked successfully!\n\n` +
        `Customer: ${nameInput.value}\n` +
        `Destination: ${countryLabel}\n` +
        `Duration: ${timeLabel}`
    );

    // Finally submit form
    form.submit();
});


// ===== LIVE GREETING =====

const greeting = document.createElement("p");

greeting.style.marginTop = "10px";
greeting.style.fontWeight = "bold";
greeting.style.color = "#003580";

nameInput.parentElement.appendChild(greeting);

nameInput.addEventListener("input", () => {

    if (nameInput.value.trim() !== "") {
        greeting.textContent =
            `Welcome, ${nameInput.value}!`;
    }

    else {
        greeting.textContent = "";
    }
});