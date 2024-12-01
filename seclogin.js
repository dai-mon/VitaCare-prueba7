document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const messageBox = document.getElementById("messageBox");

    console.log(loginButton, emailInput, passwordInput, messageBox); // Verifica si los elementos se están encontrando

    if (loginButton) {
        loginButton.addEventListener("click", (e) => {
            console.log("Botón presionado");
            e.preventDefault();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // Validar que los campos no estén vacíos
            if (!email || !password) {
                showMessage("Por favor, ingresa tu correo y contraseña.");
                return;
            }

            // Simulación de inicio de sesión exitoso
            showMessage("Bienvenido a VitaCare.");
            setTimeout(() => {
                window.location.href = 'inicio.html'; // Cambia a la página deseada
            }, 2000);
        });
    }

    // Función para mostrar el mensaje en el cuadro
    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        // Ocultar mensaje automáticamente después de 3 segundos
        setTimeout(() => {
            messageBox.classList.add("hidden");
            setTimeout(() => {
                messageBox.classList.remove("visible", "hidden");
            }, 500);
        }, 3000);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const messageBox = document.getElementById("messageBox");

    // Prevent the default form submission
    registerButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!name || !email || !password || !confirmPassword) {
            showMessage("Por favor, completa todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            showMessage("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de registro exitoso
        showMessage("Registro exitoso. Bienvenido a VitaCare.");
        setTimeout(() => {
            // Simulación de redirección
            window.location.href = 'inicio.html'; // Cambia a la página deseada
        }, 2000);
    });

    // Función para mostrar el mensaje en el cuadro
    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        // Ocultar mensaje automáticamente después de 3 segundos
        setTimeout(() => {
            messageBox.classList.add("hidden");
            setTimeout(() => {
                messageBox.classList.remove("visible", "hidden");
            }, 500);
        }, 3000);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.getElementById("registerButton");
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("passwordInput");
    const confirmPasswordInput = document.getElementById("confirmPasswordInput");
    const messageBox = document.getElementById("messageBox");

    // Prevent the default form submission
    registerButton.addEventListener("click", (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Validar que los campos no estén vacíos
        if (!name || !email || !password || !confirmPassword) {
            showMessage("Por favor, completa todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            showMessage("Las contraseñas no coinciden.");
            return;
        }

        // Simulación de registro exitoso
        showMessage("Registro exitoso. Bienvenido a VitaCare.");
        setTimeout(() => {
            // Simulación de redirección
            window.location.href = 'inicio.html'; // Cambia a la página deseada
        }, 2000);
    });

    // Función para mostrar el mensaje en el cuadro
    function showMessage(text) {
        messageBox.textContent = text;
        messageBox.classList.add("visible");

        // Ocultar mensaje automáticamente después de 3 segundos
        setTimeout(() => {
            messageBox.classList.add("hidden");
            setTimeout(() => {
                messageBox.classList.remove("visible", "hidden");
            }, 500);
        }, 3000);
    }
});


