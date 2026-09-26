// NEXUS O2 LOGIN SYSTEM

const users = {

    "ADVIK92": {
        password: "Cucumber",
        name: "Advik"
    },

    "MAANAS-TERRA": {
        password: "TERRA",
        name: "Maanas"
    },

    "HOTLANDS-Atharv": {
        password: "HOTLANDS",
        name: "Atharv"
    }

};


const loginPage =
    document.getElementById("loginPage");

const dashboardPage =
    document.getElementById("dashboardPage");

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const loginButton =
    document.getElementById("loginButton");

const logoutButton =
    document.getElementById("logoutButton");

const errorMessage =
    document.getElementById("errorMessage");

const welcomeText =
    document.getElementById("welcomeText");


function login() {

    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value;

    if (
        users[username] &&
        users[username].password === password
    ) {

        loginPage.classList.add("hidden");

        dashboardPage.classList.remove("hidden");

        welcomeText.textContent =
            "Welcome, " +
            users[username].name +
            ". Your NEXUS O2 workspace is ready.";

        errorMessage.textContent = "";

    } else {

        errorMessage.textContent =
            "Invalid username or password.";

        passwordInput.value = "";

    }

}


function logout() {

    dashboardPage.classList.add("hidden");

    loginPage.classList.remove("hidden");

    usernameInput.value = "";

    passwordInput.value = "";

    errorMessage.textContent = "";

}


loginButton.addEventListener("click", login);

logoutButton.addEventListener("click", logout);


passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        login();
    }

});


usernameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        login();
    }

});
