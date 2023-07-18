/*Pegando o botão pra mudar o fundo */
let signup = document.getElementById('signup');

signup.addEventListener('mouseenter', function() {
  signup.style.backgroundColor = 'rgba(255,0,0,0.5)';
});

signup.addEventListener('mouseleave', function() {
  signup.style.backgroundColor = '';
});

/*Pegando o botão pra mudar o fundo */
let login = document.getElementById('login');

login.addEventListener('mouseenter', function() {
  login.style.backgroundColor = 'rgba(255,0,0,0.2)';
});

login.addEventListener('mouseleave', function() {
  login.style.backgroundColor = '';
});

/*Linkando com a pag de login */
login.addEventListener('click', function(){
  window.location.href = 'login.html'
});
