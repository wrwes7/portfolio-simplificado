const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();

    esconderBotão();
});

function esconderBotão() {
    botaoMostrarProjetos.classList.add('remover');
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

