document.addEventListener("DOMContentLoaded", function () {
    // Initialize LoginRadius SDK
    LoginRadiusSDK.init({
        apiKey: "d838793a-e6c7-436b-aa95-b94255c8222d", // Replace with your LoginRadius API key
        appName: "test-app11", // Replace with your LoginRadius app/site name
        hashTemplate: true,
        container: "auth-container",
        callback: function () {
            console.log("LoginRadius SDK Initialized");
        },
    });

    // Event listener for login
    document.getElementById("login-button").addEventListener("click", function () {
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        LoginRadiusSDK.auth.login({
            email: email,
            password: password,
            options: { isConsentGiven: true },
        }, function (response) {
            console.log("Login Success:", response);
            alert("Login successful!");
        }, function (error) {
            console.error("Login Error:", error);
            alert("Login failed. Please try again.");
        });
    });

    // Event listener for registration
    document.getElementById("register-button").addEventListener("click", function () {
        const email = document.getElementById("register-email").value;
        const password = document.getElementById("register-password").value;
        const consent = document.getElementById("consent-checkbox").checked;

        if (!consent) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        LoginRadiusSDK.auth.register({
            email: email,
            password: password,
            options: { isConsentGiven: true },
        }, function (response) {
            console.log("Registration Success:", response);
            alert("Registration successful!");
        }, function (error) {
            console.error("Registration Error:", error);
            alert("Registration failed. Please try again.");
        });
    });
});
