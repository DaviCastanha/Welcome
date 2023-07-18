/*Efeito de hover do botão link */
let login = window.document.getElementById('login')

login.addEventListener('mouseenter', function() {
    login.style.backgroundColor = 'rgba(50,0,0,0.2)';
    login.style.color = '#FFF'
  });

  login.addEventListener('mouseleave', function() {
    login.style.backgroundColor = '';
    login.style.color = '#FF0000'
  });

  /*Efeito de hover no botão facebook */
let FB = document.getElementById('FB');

FB.addEventListener('mouseenter', function() {
  FB.style.backgroundColor = '#0000FF';
});

FB.addEventListener('mouseleave', function() {
  FB.style.backgroundColor = '';
});


  /*Efeito de hover no botão facebook */
let GG = document.getElementById('GG');

GG.addEventListener('mouseenter', function() {
  GG.style.backgroundColor = '#0000FF';
});

GG.addEventListener('mouseleave', function() {
  GG.style.backgroundColor = '';
});