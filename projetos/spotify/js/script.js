// esconder / mostrar navbar conforme rolagem
let lastScroll = 0;
const navbar = document.querySelector(".main-navbar");

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (!navbar) return;

  // adiciona fundo quando passa do topo
  if (current > 10) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }

 

  lastScroll = current;
});

// scroll suave para âncoras internas da mesma página
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#" || href.startsWith("http")) return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// simulações simples de formulário

// criar conta: valida se senhas combinam
const formCriar = document.getElementById("form-criar-conta");
if (formCriar) {
  formCriar.addEventListener("submit", e => {
    e.preventDefault();
    const senha = document.getElementById("senha").value;
    const senha2 = document.getElementById("senha2").value;
    const feedback = document.getElementById("criar-feedback");

    if (senha !== senha2) {
      alert("As senhas não conferem.");
      return;
    }

    if (feedback) {
      feedback.classList.remove("d-none");
    }
  });
}

// login: só mostra que foi enviado
const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    const feedback = document.getElementById("login-feedback");
    if (feedback) {
      feedback.classList.remove("d-none");
    }
  });
}
