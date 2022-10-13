let greetings = function () {

    // Type "HTMLInputElement" was used for html elements.
    const loginForm = document.querySelector('#login-form');
    const loginInput = document.querySelector('#login-form input');
    const greeting = document.querySelector('#greeting');

    const HIDDEN_CLASSNAME = 'hidden';
    const USERNAME_KEY = 'username';

    let paintGreetings = function (name) {
        greeting.innerText = `Hello, ${name}.`;
    }

    let onLoginsubmit = function (info) {

        // Prevent the reload action when submitting the form.
        info.preventDefault();

        // Hide the input form.
        loginForm?.classList.add(HIDDEN_CLASSNAME);

        const usernameInput = loginInput?.value;

        localStorage.setItem(USERNAME_KEY, usernameInput);

        greeting.innerText = `Hello, ${usernameInput}.`;

        greeting?.classList.remove(HIDDEN_CLASSNAME);

        //* Put the data into the local storage.
        paintGreetings(usernameInput);
    }

    // Get the saved username from the local storage.
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    // * If there is no data in the local storage.
    if (savedUsername === null) {
        loginForm?.classList.remove(HIDDEN_CLASSNAME);
        loginForm?.addEventListener('submit', onLoginsubmit);
    }
    // * When successfully getting the data.
    else {
        greeting?.classList.remove(HIDDEN_CLASSNAME);

        paintGreetings(savedUsername);
    }
}

greetings();