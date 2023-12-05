// Função para cadastrar usuário
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Novo usuário cadastrado com sucesso
            console.log('Novo usuário cadastrado:', userCredential.user.email);
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Função para mostrar o formulário de login
function showLogin() {
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
}

// Função para ocultar o formulário de login e mostrar o formulário de cadastro
function showSignup() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
}

// Função para efetuar o login
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Usuário autenticado com sucesso
            console.log('Usuário autenticado:', userCredential.user.email);
            // Redirecionar para a página home.html
            window.location.href = 'home.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

