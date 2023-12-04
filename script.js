// Array para almacenar usuarios
var users = [];

// Función para agregar un nuevo usuario al array
function addUser(username, password) {
    var user = {
        username: username,
        password: password
    };
    users.push(user);
}

// Función para validar el inicio de sesión
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validar si el usuario y la contraseña coinciden con algún usuario almacenado
    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert('¡Inicio de sesión exitoso!\nUsuario: ' + username);
        window.location.href = "main_page.html";
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
}

// Función para registrar un nuevo usuario
function register() {
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Validar si el nombre de usuario ya existe
    var existingUser = users.find(function(user) {
        return user.username === newUsername;
    });

    if (existingUser) {
        alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
    } else {
        // Agregar el nuevo usuario al array
        addUser(newUsername, newPassword);
        alert('¡Registro exitoso!\nNuevo Usuario: ' + newUsername);
    }
}

// Resto del código para cambiar entre formularios
function showRegisterForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}
