document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const formSummary = document.getElementById("formSummary");
    const emailError = document.getElementById("emailError");
    const contactMethodError = document.getElementById("contactMethodError");
    const termsError = document.getElementById("termsError");

    // Helper function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to handle form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Capture data from the form
        const formData = {
            name: form.name.value,
            email: form.email.value,
            contactMethod: form.querySelector('input[name="contactMethod"]:checked'),
            termsAccepted: form.terms.checked
        };

        // Validate data
        let isValid = true;

        // Email validation
        if (!validateEmail(formData.email)) {
            emailError.textContent = "Invalid email format";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Contact method validation
        if (!formData.contactMethod) {
            contactMethodError.textContent = "Please select a preferred contact method.";
            isValid = false;
        } else {
            contactMethodError.textContent = "";
        }

        // Terms and conditions validation
        if (!formData.termsAccepted) {
            termsError.textContent = "You must accept the terms and conditions.";
            isValid = false;
        } else {
            termsError.textContent = "";
        }

        // If the form is valid, display the data
        if (isValid) {
            formSummary.innerHTML = `
                <h4>Form Submitted Successfully!</h4>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Preferred Contact Method:</strong> ${formData.contactMethod.value}</p>
                <p><strong>Terms Accepted:</strong> ${formData.termsAccepted ? "Yes" : "No"}</p>
            `;
            alert("Form submitted successfully!");
        }
    });

    // Real-time email validation feedback
    form.email.addEventListener("input", function() {
        if (!validateEmail(form.email.value)) {
            emailError.textContent = "Invalid email format";
        } else {
            emailError.textContent = "";
        }
    });

});
