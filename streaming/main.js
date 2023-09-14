// Este é um exemplo simples de JavaScript para adicionar interatividade
const filmes = document.querySelectorAll('.filme');

filmes.forEach(filme => {
    filme.addEventListener('click', () => {
        alert(`Você clicou em ${filme.querySelector('h2').textContent}`);
    });
});
